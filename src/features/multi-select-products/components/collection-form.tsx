"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  collectionFormSchema,
  CollectionFormType,
} from "../schema/form-schema";
import ProductCombobox from "./product-combo-box";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Product } from "@/types/product";

const CollectionForm = () => {
  const [submittedData, setSubmittedData] = useState<CollectionFormType | null>(
    null,
  );

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
    setSubmittedData(data);
  };

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-4 overflow-y-auto p-2">
          <div className="space-y-2">
            <Label htmlFor="name">Collection Name *</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col items-start justify-between gap-4">
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

      {submittedData && (
        <div className="mt-4 flex flex-col">
          <Separator className="mb-4"></Separator>
          <div className="flex flex-col p-4">
            <h3 className="mb-4 text-xl font-semibold">Submitted Data</h3>
            <div className="mb-4 flex items-center gap-2">
              <Label className="font-bold">Collection Name:</Label>
              <Label className="font-medium">{submittedData.name}</Label>
            </div>
            <div>
              <Label className="font-bold">Selected Products:</Label>
              <div className="mt-2 max-h-[300px] overflow-y-auto">
                {submittedData.products.map((product: Product) => (
                  <div
                    key={product.id}
                    className="mb-2 flex items-center gap-3 rounded bg-white p-2 shadow-sm"
                  >
                    <div className="relative size-12">
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        fill
                        className="size-12 rounded-md object-cover"
                      />
                    </div>
                    <span>{product.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionForm;
