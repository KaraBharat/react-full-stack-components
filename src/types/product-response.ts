import { Product } from "./product";

/**
 * Represents the response structure for fetching products.
 * This type is typically used for paginated product requests.
 */
export type FetchProductsResponse = {
  /** An array of Product objects returned in the response */
  products: Product[];

  /**
   * A cursor for the next page of results.
   * If null, it indicates that there are no more pages to fetch.
   */
  nextCursor: string | null;
};
