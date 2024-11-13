"use client";

// External dependencies
import { type FC, useState } from "react";

// UI Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Internal dependencies
import {
  BaseOption,
  MultiSelectCombobox,
} from "../components/multi-select-combobox";
import { vegetables } from "../data";
import { createInitials } from "@/lib/utils";

/**
 * Extended option type for vegetable data
 * @interface VegetableOption
 * @extends BaseOption
 */
interface VegetableOption extends BaseOption {
  icon: string;
  calories: number;
}

/**
 * Props interface for VegetableField
 * @interface VegetableFieldProps
 */
interface VegetableFieldProps {
  className?: string;
}

/**
 * VegetableField Component
 *
 * A form field component that implements a multi-select combobox for vegetables.
 * Features avatar display, tooltips, and a visual indicator for multiple selections.
 *
 * Features:
 * - Avatar display for each vegetable
 * - Tooltips showing full names
 * - Shows up to 5 avatars with overflow indicator
 *
 * @component
 */
const VegetableField: FC<VegetableFieldProps> = ({ className }) => {
  // State to track selected vegetables
  const [selectedVegetables, setSelectedVegetables] = useState<string[]>([]);

  /**
   * Renders an individual vegetable option with icon
   * @param {VegetableOption} option - The vegetable option to render
   */
  const renderVegetableOption = (option: VegetableOption) => (
    <div
      className="flex items-center gap-2"
      role="option"
      aria-selected={selectedVegetables.includes(option.value)}
    >
      <span className="text-xl">{option.icon}</span>
      <span>
        {option.label} ({option.calories} calories)
      </span>
    </div>
  );

  /**
   * Renders the selected vegetables display
   * @param {string[]} value - Array of selected vegetable IDs
   */
  const renderSelectedVegetables = (value: string[]) => {
    if (value.length === 0) return "";

    return (
      <div
        className="flex items-center gap-0"
        role="list"
        aria-label={`${value.length} vegetables selected`}
      >
        {/* Display up to 5 avatars */}
        {value.slice(0, 5).map((vegetableId) => {
          const vegetable = vegetables.find((v) => v.value === vegetableId)!;
          return (
            <Tooltip key={vegetable.value}>
              <TooltipTrigger asChild>
                <div role="listitem">
                  <span className="text-xl">{vegetable.icon}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>{vegetable.label}</TooltipContent>
            </Tooltip>
          );
        })}

        {/* Overflow indicator */}
        {value.length > 5 && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="flex size-6 items-center justify-center rounded-full bg-stone-100 text-[10px] text-stone-500 ring-2 ring-stone-300"
                role="listitem"
                aria-label={`Plus ${value.length - 5} more vegetables`}
              >
                +{value.length - 5}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {value.slice(5).map((vegetableId) => {
                const vegetable = vegetables.find(
                  (v) => v.value === vegetableId,
                )!;
                return (
                  <div
                    key={vegetable.value}
                    className="flex items-center gap-2"
                  >
                    <span className="text-xl">{vegetable.icon}</span>
                    <span>{vegetable.label}</span>
                  </div>
                );
              })}
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    );
  };

  return (
    <div className={className}>
      <MultiSelectCombobox<VegetableOption>
        label="Vegetable"
        options={vegetables.map((vegetable) => ({
          label: vegetable.label,
          value: vegetable.value,
          icon: vegetable.icon,
          calories: vegetable.calories,
        }))}
        value={selectedVegetables}
        onChange={setSelectedVegetables}
        renderItem={renderVegetableOption}
        renderSelectedItem={renderSelectedVegetables}
        aria-label="Filter by vegetable"
        aria-required="false"
        aria-multiselectable="true"
        aria-describedby="vegetable-field-description"
      />
      <span id="vegetable-field-description" className="sr-only">
        Select one or more vegetables. Shows up to 5 vegetable icons with a
        count for additional selections.
      </span>
    </div>
  );
};

export default VegetableField;
