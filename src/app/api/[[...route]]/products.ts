import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { Product } from "@/types/product";
import { FetchProductsResponse } from "@/types/product-response";
import { sampleProductData } from "../data/product-list";

// Initialize the Hono app and define the /search route
const app = new Hono().get(
  "/search",
  zValidator(
    "query",
    z.object({
      cursor: z.string().optional(),
      limit: z.coerce.number().positive().default(10),
      searchTerm: z.string().optional(),
    }),
  ),
  async (c) => {
    try {
      // Extract query parameters
      const { cursor, limit, searchTerm } = c.req.valid("query");

      // Simulate data fetching with a delay
      await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay

      // Filter products based on the search term
      let filteredProducts = sampleProductData.filter((product: Product) =>
        searchTerm
          ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.productCode
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())
          : true,
      );

      // Sort products by name and id
      filteredProducts.sort((a, b) => {
        if (a.name === b.name) {
          return a.id.localeCompare(b.id);
        }
        return a.name.localeCompare(b.name);
      });

      // Handle pagination using cursor
      if (cursor) {
        const { lastName, lastId } = JSON.parse(
          Buffer.from(cursor, "base64").toString("utf-8"),
        );
        filteredProducts = filteredProducts.filter(
          (product: Product) =>
            product.name > lastName ||
            (product.name === lastName && product.id > lastId),
        );
      }

      // Get the paginated items
      const paginatedItems = filteredProducts.slice(0, limit + 1);
      const hasNextPage = paginatedItems.length > limit;

      // Transform the results to match the expected format
      const transformedItems: Product[] = paginatedItems
        .slice(0, limit)
        .map((item: Product) => ({
          id: item.id,
          name: item.name,
          mainImage: item.mainImage,
          productCode: item.productCode,
        }));

      // Generate the next cursor if there is a next page
      const nextCursor = hasNextPage
        ? Buffer.from(
            JSON.stringify({
              lastName: paginatedItems[limit - 1].name,
              lastId: paginatedItems[limit - 1].id,
            }),
          ).toString("base64")
        : null;

      // Return the response with products and next cursor
      return c.json<FetchProductsResponse>({
        products: transformedItems,
        nextCursor,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return c.json({ error: "Internal server error" }, 500);
    }
  },
);

export default app;
