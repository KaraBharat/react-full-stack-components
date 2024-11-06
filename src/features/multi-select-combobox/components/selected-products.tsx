import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Product } from "@/types/product";

interface SelectedProductsProps {
  products: Product[];
  onRemove: (productId: string) => void;
}

/**
 * SelectedProducts Component
 *
 * This component displays a list of selected products with the ability to remove them.
 * Each product is shown as an image with a tooltip and a remove button.
 */
const SelectedProducts: React.FC<SelectedProductsProps> = ({
  products,
  onRemove,
}) => {
  // If no products are selected, don't render anything
  if (products.length === 0) return null;

  return (
    <div
      className="flex flex-wrap gap-2 py-2"
      role="list"
      aria-label="Selected products"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="relative size-10 rounded-md border border-stone-300"
          role="listitem"
        >
          {/* Product image with tooltip */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="rounded-md object-cover"
              />
            </TooltipTrigger>
            <TooltipContent>{product.name}</TooltipContent>
          </Tooltip>

          {/* Remove button */}
          <button
            onClick={() => onRemove(product.id)}
            className="absolute -right-2 -top-2 cursor-pointer rounded-full border border-stone-300 bg-white p-0.5"
            aria-label={`Remove ${product.name}`}
          >
            <X className="size-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedProducts;
