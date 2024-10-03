import { PAGE_SIZE } from "@/constants/common";
import { client } from "@/lib/hono";
import { FetchProductsResponse } from "@/types/product-response";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchProducts = async (
  cursor: string | null,
  searchTerm: string
): Promise<FetchProductsResponse> => {
  const response = await client.api.products.search.$get({
    query: {
      cursor: cursor || undefined,
      limit: PAGE_SIZE.toString(),
      searchTerm,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return {
    products: data.products,
    nextCursor: data.nextCursor,
  };
};

export const useProducts = (searchTerm: string) => {
  return useInfiniteQuery<FetchProductsResponse>({
    queryKey: ["infinite-product-list", searchTerm],
    queryFn: ({ pageParam }) =>
      fetchProducts(pageParam as string | null, searchTerm),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
