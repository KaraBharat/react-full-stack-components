"use client";

// External dependencies
import React, { useState } from "react";
import { Check } from "lucide-react";

// Internal UI components

import { CommandItem } from "@/components/ui/command";

// Utilities and types
import { cn } from "@/lib/utils";
import { ComboBox } from "../components/single-select-combobox";
import { shippingMethods } from "../data";

/**
 * ShippingMethodField Component
 * A form field component for selecting shipping methods with autocomplete functionality
 *
 * @component
 */
export const ShippingMethodField: React.FC = () => {
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<
    string | null
  >(null);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Shipping method</label>
      <ComboBox
        placeholder="Select shipping method..."
        selectedItem={(() => {
          const shippingMethod = shippingMethods.find(
            (shippingMethod) => shippingMethod.value === selectedShippingMethod,
          );
          return shippingMethod
            ? shippingMethod.label
            : "Select shipping method...";
        })()}
      >
        {shippingMethods.map((shippingMethod) => (
          <CommandItem
            key={shippingMethod.value}
            value={shippingMethod.label}
            onSelect={() => setSelectedShippingMethod(shippingMethod.value)}
            role="option"
            aria-selected={selectedShippingMethod === shippingMethod.value}
            className="cursor-pointer"
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                selectedShippingMethod === shippingMethod.value
                  ? "opacity-100"
                  : "opacity-0",
              )}
              aria-hidden="true"
            />
            {shippingMethod.label}
          </CommandItem>
        ))}
      </ComboBox>
    </div>
  );
};

// Default export for cleaner imports
export default ShippingMethodField;
