import { z } from "zod";

export const collectionFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  products: z.array(z.string()).min(1, "At least one product is required"),
});

export type CollectionFormType = z.infer<typeof collectionFormSchema>;
