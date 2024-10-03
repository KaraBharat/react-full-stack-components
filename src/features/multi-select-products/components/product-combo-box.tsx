"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useProducts } from "../hooks/use-products";
import { useDebounce } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

interface ProductCombobox {
  value: string[];
  onChange: (value: string[]) => void;
}

const ProductCombobox = ({ value, onChange }: ProductCombobox) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearch] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

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

  const handleSelect = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

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
          className="w-full justify-between"
        >
          {value.length > 0 ? `${value.length} selected` : "Select products..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <div className="w-full flex flex-col">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-full w-4 opacity-50" />
            <Input
              placeholder="Search products..."
              className="w-full border-none pl-10 focus:outline-none outline-none active:outline-none focus:ring-offset-0 ring-offset-0 focus-visible:ring-offset-0 focus-visible:ring-0"
              value={searchTerm}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </div>
          <Separator />
          <div
            ref={containerRef}
            className="w-full flex flex-col max-h-[300px] overflow-y-auto"
            onScroll={handleScroll}
          >
            {productsToShow.length > 0 &&
              productsToShow.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100 w-full"
                  onClick={() => handleSelect(product.id)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.includes(product.id) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex items-center gap-2">
                    <div className="size-6 relative">
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        fill
                        className="rounded-full object-cover size-6"
                      />
                    </div>
                    <span>{product.name}</span>
                  </div>
                </div>
              ))}
            {(isFetchingNextPage || isLoading || isFetching) && (
              <div className="flex justify-center p-2 w-full">
                <Loader2 className="size-4 animate-spin" />
              </div>
            )}
            {!hasNextPage && !isLoading && productsToShow.length > 0 && (
              <div className="text-center p-2 text-sm text-gray-500 w-full">
                No more products to load.
              </div>
            )}
            {!isLoading && productsToShow.length === 0 && (
              <div className="text-center p-2 text-sm text-gray-500 w-full">
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
