"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown, Loader2 } from "lucide-react";

/**
 * Props for the ComboBox component
 * @typedef {Object} ComboBoxProps
 * @property {React.ReactNode} children - The content to be rendered inside the ComboBox
 * @property {React.ReactNode} selectedItem - The currently selected item to display
 * @property {string} [placeholder] - Optional placeholder text for the search input
 * @property {boolean} [isLoading] - Optional flag to indicate if the ComboBox is in a loading state
 */
type ComboBoxProps = {
  children: React.ReactNode;
  selectedItem: React.ReactNode;
  placeholder?: string;
  isLoading?: boolean;
};

/**
 * ComboBox component that combines a button trigger and a popover with search functionality
 * @param {ComboBoxProps} props - The props for the ComboBox component
 * @returns {JSX.Element} The rendered ComboBox component
 */
export const ComboBox: React.FC<ComboBoxProps> = ({
  children,
  selectedItem,
  placeholder = "Search...",
  isLoading = false,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Trigger button */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          className="flex w-full items-center justify-between gap-2"
        >
          <span className="truncate">{selectedItem}</span>
          <div className="flex items-center justify-between gap-2">
            {isLoading && (
              <Loader2
                className="size-4 animate-spin opacity-50"
                aria-hidden="true"
              />
            )}
            <ChevronsUpDown
              className="size-4 shrink-0 opacity-50"
              aria-hidden="true"
            />
          </div>
        </Button>
      </PopoverTrigger>

      {/* Popover content */}
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>No items found.</CommandEmpty>
            <CommandGroup>{children}</CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
