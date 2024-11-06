"use client";

// External dependencies
import { type FC, useState } from "react";
import { Check } from "lucide-react";

// UI Components
import { CommandItem } from "@/components/ui/command";
import { ComboBox } from "../components/single-select-combobox";

// Data and utilities
import { shippingMethods } from "../data";
import { cn } from "@/lib/utils";

/**
 * ShippingMethodField Component
 *
 * A form field component for selecting shipping methods with search and autocomplete.
 *
 * @returns {JSX.Element} Shipping method selection field
 */
const ShippingMethodField: FC = () => {
  // State for tracking selected shipping method
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<
    string | null
  >(null);

  // Find currently selected shipping method
  const currentShippingMethod = shippingMethods.find(
    (method) => method.value === selectedShippingMethod,
  );

  return (
    <div
      className="flex flex-col gap-2"
      role="region"
      aria-labelledby="shipping-method-label"
    >
      {/* Field Label */}
      <label
        id="shipping-method-label"
        htmlFor="shipping-method-select"
        className="text-sm font-medium"
      >
        Shipping method
      </label>

      {/* Shipping Method Combobox */}
      <ComboBox
        placeholder="Select shipping method..."
        selectedItem={
          currentShippingMethod?.label ?? "Select shipping method..."
        }
        aria-labelledby="shipping-method-label"
        aria-required="true"
      >
        {/* Shipping Method Options */}
        {shippingMethods.map((method) => {
          const isSelected = selectedShippingMethod === method.value;

          return (
            <CommandItem
              key={method.value}
              value={method.label}
              onSelect={() => setSelectedShippingMethod(method.value)}
              role="option"
              aria-selected={isSelected}
              className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50"
            >
              {/* Selection Indicator */}
              <Check
                className={cn(
                  "mr-2 h-4 w-4 transition-opacity",
                  isSelected ? "opacity-100" : "opacity-0",
                )}
                aria-hidden="true"
              />

              {/* Method Label */}
              <span className="flex-1">{method.label}</span>

              {/* Screen Reader Only Description */}
              <span className="sr-only">
                {isSelected ? "Selected shipping method: " : ""}
                {method.label}
              </span>
            </CommandItem>
          );
        })}
      </ComboBox>
    </div>
  );
};

export default ShippingMethodField;
