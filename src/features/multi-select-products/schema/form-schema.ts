import { z } from "zod";

// Define the schema for the collection form
export const collectionFormSchema = z.object({
  // Name field: must be a non-empty string
  name: z.string().min(1, "Name is required"),
  
  // Products field: must be an array of product objects with at least one product
  products: z
    .array(
      z.object({
        id: z.string(), // Product ID: must be a string
        name: z.string(), // Product name: must be a string
        mainImage: z.string(), // Main image URL: must be a string
      }),
    )
    .min(1, "At least one product is required"),
});

// Type inference for the collection form schema
export type CollectionFormType = z.infer<typeof collectionFormSchema>;