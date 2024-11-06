"use client";

// External dependencies
import { type FC, useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Internal Components
import ProductCombobox from "../components/product-combo-box";
import SelectedProducts from "../components/selected-products";

// Types and Schema
import {
  multiSelectComboBoxFormSchema,
  type MultiSelectComboBoxFormType,
} from "../schema/form-schema";
import { type Product } from "@/types/product";

/**
 * MultiSelectComboBoxForm Component
 *
 * A form component for creating collections with a name and multiple product selections.
 * @returns {JSX.Element} The form component
 */
const MultiSelectComboBoxForm: FC = () => {
  // State for tracking submitted data
  const [submittedData, setSubmittedData] =
    useState<MultiSelectComboBoxFormType | null>(null);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<MultiSelectComboBoxFormType>({
    resolver: zodResolver(multiSelectComboBoxFormSchema),
    defaultValues: {
      name: "",
      products: [],
    },
  });

  // Form submission handler
  const onSubmit = async (data: MultiSelectComboBoxFormType) => {
    console.log("submitted data", data);
    setSubmittedData(data);
  };

  const handleRemoveProduct = (productId: string) => {
    setValue(
      "products",
      getValues("products").filter((p: Product) => p.id !== productId),
    );
  };

  const handleCancel = () => {
    reset();
    setSubmittedData(null);
  };

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      {/* Collection Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-4 overflow-y-auto p-2">
          {/* Collection Name Input */}
          <div className="space-y-2">
            <Label htmlFor="name">Collection Name *</Label>
            <Input
              id="name"
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-500" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Product Selection */}
          <div className="space-y-2">
            <Label htmlFor="products">Products *</Label>
            <Controller
              name="products"
              control={control}
              render={({ field }) => (
                <ProductCombobox
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={errors.products ? "true" : "false"}
                  aria-describedby="products-error"
                />
              )}
            />
            {errors.products && (
              <p
                id="products-error"
                className="text-sm text-red-500"
                role="alert"
              >
                {errors.products.message}
              </p>
            )}
            {/* Selected products */}
            <div className="flex w-full items-center gap-2">
              <SelectedProducts
                products={watch("products")}
                onRemove={handleRemoveProduct}
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-2 p-2">
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" className="flex items-center gap-2">
            Save Collection
          </Button>
        </div>
      </form>

      {/* Submitted Data Display */}
      {submittedData && (
        <div className="mt-4 flex flex-col">
          <Separator className="mb-4" />
          <div className="flex flex-col p-4">
            <h3 className="mb-4 text-xl font-semibold">Submitted Data</h3>
            <div className="mb-4 flex items-center gap-2">
              <span className="font-bold">Collection Name:</span>
              <span className="font-medium">{submittedData.name}</span>
            </div>
            <div>
              <span className="font-bold">Selected Products:</span>
              <ul
                className="mt-2 max-h-[300px] overflow-y-auto"
                aria-label="Selected products list"
              >
                {submittedData.products.map((product: Product) => (
                  <li
                    key={product.id}
                    className="mb-2 flex items-center gap-3 rounded bg-white p-2 shadow-sm"
                  >
                    <div className="relative size-12">
                      <Image
                        src={product.mainImage}
                        alt={`${product.name} thumbnail`}
                        fill
                        className="size-12 rounded-md object-cover"
                      />
                    </div>
                    <span>{product.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectComboBoxForm;
