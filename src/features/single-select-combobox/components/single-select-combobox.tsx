"use client";

// External dependencies
import { type FC, useState } from "react";
import { ChevronsUpDown, Loader2 } from "lucide-react";

// UI Components
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

/**
 * Props interface for the ComboBox component
 * @interface ComboBoxProps
 * @property {React.ReactNode} children - Content to be rendered in the dropdown list
 * @property {React.ReactNode} selectedItem - Currently selected item to display
 * @property {string} [placeholder] - Optional placeholder text for search input
 * @property {boolean} [isLoading] - Optional loading state indicator
 */
interface ComboBoxProps {
  children: React.ReactNode;
  selectedItem: React.ReactNode;
  placeholder?: string;
  isLoading?: boolean;
}

/**
 * ComboBox Component
 *
 * A customizable single-select combobox with search functionality.
 * Features:
 * - Search filtering
 * - Loading state
 * - Accessible keyboard navigation
 * - Custom trigger display
 *
 * @param {ComboBoxProps} props - Component props
 * @returns {JSX.Element} The ComboBox component
 */
export const ComboBox: FC<ComboBoxProps> = ({
  children,
  selectedItem,
  placeholder = "Search...",
  isLoading = false,
}) => {
  // State for controlling popover
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls="combo-box-content"
          className="flex w-full items-center justify-between gap-2"
        >
          {/* Selected Item Display */}
          <span className="truncate" aria-label={`Selected: ${selectedItem}`}>
            {selectedItem}
          </span>

          {/* Status Indicators */}
          <div
            className="flex items-center justify-between gap-2"
            aria-hidden="true"
          >
            {/* Loading Indicator */}
            {isLoading && (
              <Loader2
                className="size-4 animate-spin opacity-50"
                aria-hidden="true"
              />
            )}
            {/* Dropdown Indicator */}
            <ChevronsUpDown
              className="size-4 shrink-0 opacity-50"
              aria-hidden="true"
            />
          </div>
        </Button>
      </PopoverTrigger>

      {/* Dropdown Content */}
      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        id="combo-box-content"
      >
        <Command className="w-full" aria-label="Search and select options">
          {/* Search Input */}
          <CommandInput placeholder={placeholder} aria-label={placeholder} />

          {/* Options List */}
          <CommandList aria-label="Available options">
            {/* Empty State */}
            <CommandEmpty role="status" aria-live="polite">
              No items found.
            </CommandEmpty>

            {/* Options Group */}
            <CommandGroup role="listbox" aria-label="Options">
              {children}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
