"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useDebounce } from "@uidotdev/usehooks";
import { Check, ChevronsUpDown, Loader2, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useProducts } from "../hooks/use-products";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";

interface ProductComboboxProps {
  value: Product[];
  onChange: (value: Product[]) => void;
}

/**
 * ProductCombobox Component
 *
 * This component renders a combobox for selecting multiple products.
 * It includes search functionality and infinite scrolling for product loading.
 */
const ProductCombobox: React.FC<ProductComboboxProps> = ({
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearch] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  // Fetch products using the custom hook
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useProducts(debouncedSearch);

  const productsToShow = data?.pages?.flatMap((page) => page.products) ?? [];

  const containerRef = useRef<HTMLDivElement>(null);

  // Handle product selection
  const handleSelect = (product: Product) => {
    const newValue = value.some((v) => v.id === product.id)
      ? value.filter((v) => v.id !== product.id)
      : [...value, product];
    onChange(newValue);
  };

  // Handle search input change
  const handleSearch = (value: string) => {
    setSearch(value);
  };

  // Handle scroll for infinite loading
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Add and remove scroll event listener
  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          className="w-full justify-between"
        >
          {value.length > 0 ? `${value.length} selected` : "Select products..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <div className="flex w-full flex-col">
          {/* Search input */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-full w-4 -translate-y-1/2 opacity-50" />
            <Input
              placeholder="Search products..."
              className="w-full border-none pl-10 outline-none ring-offset-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 active:outline-none"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              aria-label="Search products"
            />
          </div>
          <Separator />
          {/* Product list */}
          <div
            ref={containerRef}
            className="flex max-h-[300px] w-full flex-col overflow-y-auto"
            onScroll={handleScroll}
            role="listbox"
            aria-label="Product list"
          >
            {productsToShow.length > 0 &&
              productsToShow.map((product) => (
                <div
                  key={product.id}
                  className="flex w-full cursor-pointer items-center px-2 py-2 hover:bg-gray-100"
                  onClick={() => handleSelect(product)}
                  role="option"
                  aria-selected={value.some((v) => v.id === product.id)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.some((v) => v.id === product.id)
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  <div className="flex items-center gap-2">
                    <div className="relative size-6">
                      <Image
                        src={product.mainImage}
                        alt={`${product.name} thumbnail`}
                        fill
                        className="size-6 rounded-full object-cover"
                      />
                    </div>
                    <span>{product.name}</span>
                  </div>
                </div>
              ))}
            {/* Loading indicator */}
            {(isFetchingNextPage || isLoading || isFetching) && (
              <div
                className="flex w-full justify-center p-2"
                aria-live="polite"
              >
                <Loader2 className="size-4 animate-spin" />
              </div>
            )}
            {/* No more products message */}
            {!hasNextPage && !isLoading && productsToShow.length > 0 && (
              <div
                className="w-full p-2 text-center text-sm text-gray-500"
                aria-live="polite"
              >
                No more products to load.
              </div>
            )}
            {/* No products found message */}
            {!isLoading && productsToShow.length === 0 && (
              <div
                className="w-full p-2 text-center text-sm text-gray-500"
                aria-live="polite"
              >
                No products found.
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProductCombobox;
