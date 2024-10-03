"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { collectionFormSchema, CollectionFormType } from "./schema/form-schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProductCombobox from "./components/product-combo-box";
import { Button } from "@/components/ui/button";

const ProductSelectionForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CollectionFormType>({
    resolver: zodResolver(collectionFormSchema),
    defaultValues: {
      name: "",
      products: [],
    },
  });

  const onSubmit = async (data: CollectionFormType) => {
    console.log("submitted data", data);
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-4 overflow-y-auto p-2">
          <div className="space-y-2">
            <Label htmlFor="name">Collection Name *</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex items-start flex-col justify-between gap-4">
            <Label htmlFor="products">Products *</Label>
            <Controller
              name="products"
              control={control}
              render={({ field }) => (
                <ProductCombobox
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.products && (
              <p className="text-sm text-red-500">{errors.products.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end space-x-2 p-2">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" className="flex items-center gap-2">
            Save Collection
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductSelectionForm;
