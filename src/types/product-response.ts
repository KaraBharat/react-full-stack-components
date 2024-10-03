import { Product } from "./product";

export type FetchProductsResponse = {
  products: Product[];
  nextCursor: string | null;
};
