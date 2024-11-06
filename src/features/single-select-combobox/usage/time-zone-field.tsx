"use client";

// External dependencies
import React, { useState } from "react";
import { Check } from "lucide-react";

// Internal UI components

import { CommandItem } from "@/components/ui/command";

// Utilities and types
import { cn } from "@/lib/utils";
import { ComboBox } from "../components/single-select-combobox";
import { TimeZone } from "../types";
import { timeZones } from "../data";

/**
 * TimeZoneItem Component
 * Renders a time zone with name in a consistent format
 *
 * @component
 * @param {Object} props - Component props
 * @param {TimeZone} props.timeZone - Time zone data
 */
const TimeZoneItem: React.FC<{ timeZone: TimeZone }> = ({ timeZone }) => {
  const formatOffset = (offset: number): string => {
    const sign = offset >= 0 ? "+" : "-";
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset);
    const minutes = (absOffset % 1) * 60;

    return `(UTC${sign}${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")})`;
  };

  return (
    <div
      className="flex items-center gap-2"
      role="option"
      aria-label={`${timeZone.name}`}
    >
      <span className="truncate">
        {formatOffset(timeZone.offset)} {timeZone.name}
      </span>
    </div>
  );
};

/**
 * TimeZoneField Component
 * A form field component for selecting time zones with autocomplete functionality
 *
 * @component
 */
export const TimeZoneField: React.FC = () => {
  const [selectedTimeZoneId, setSelectedTimeZoneId] = useState<string | null>(
    null,
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Time zone</label>
      <ComboBox
        placeholder="Select time zone..."
        selectedItem={(() => {
          const timeZone = timeZones.find(
            (timeZone) => timeZone.id === selectedTimeZoneId,
          );
          return timeZone ? (
            <TimeZoneItem timeZone={timeZone} />
          ) : (
            "Select time zone..."
          );
        })()}
      >
        {timeZones.map((timeZone) => (
          <CommandItem
            key={timeZone.id}
            value={timeZone.name}
            onSelect={() => setSelectedTimeZoneId(timeZone.id)}
            role="option"
            aria-selected={selectedTimeZoneId === timeZone.id}
            className="cursor-pointer"
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                selectedTimeZoneId === timeZone.id
                  ? "opacity-100"
                  : "opacity-0",
              )}
              aria-hidden="true"
            />
            <TimeZoneItem timeZone={timeZone} />
          </CommandItem>
        ))}
      </ComboBox>
    </div>
  );
};

// Default export for cleaner imports
export default TimeZoneField;
