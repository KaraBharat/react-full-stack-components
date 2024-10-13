/**
 * Represents a product in the system.
 */
export type Product = {
  /** Unique identifier for the product */
  id: string;

  /** Name of the product */
  name: string;

  /**
   * Optional product code.
   * This may be used for inventory or SKU purposes.
   */
  productCode?: string;

  /** URL or path to the main image of the product */
  mainImage: string;
};
