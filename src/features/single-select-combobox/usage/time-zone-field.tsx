"use client";

// External dependencies
import { type FC, useState } from "react";
import { Check } from "lucide-react";

// UI Components
import { CommandItem } from "@/components/ui/command";
import { ComboBox } from "../components/single-select-combobox";

// Types and utilities
import { type TimeZone } from "../types";
import { timeZones } from "../data";
import { cn } from "@/lib/utils";

/**
 * Formats a timezone offset into a standardized string
 * @param {number} offset - The timezone offset in hours
 * @returns {string} Formatted offset string (e.g., "UTC+01:00")
 */
const formatOffset = (offset: number): string => {
  const sign = offset >= 0 ? "+" : "-";
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset);
  const minutes = (absOffset % 1) * 60;

  return `(UTC${sign}${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")})`;
};

/**
 * TimeZoneItem Component Props
 */
interface TimeZoneItemProps {
  timeZone: TimeZone;
  isSelected?: boolean;
}

/**
 * TimeZoneItem Component
 * Renders a timezone option with formatted offset and name
 */
const TimeZoneItem: FC<TimeZoneItemProps> = ({ timeZone, isSelected }) => {
  return (
    <div
      className="flex items-center gap-2"
      role="option"
      aria-selected={isSelected}
      aria-label={`${formatOffset(timeZone.offset)} ${timeZone.name}`}
    >
      <span className="truncate">
        {formatOffset(timeZone.offset)} {timeZone.name}
      </span>
    </div>
  );
};

/**
 * TimeZoneField Component
 * A form field component for selecting time zones with search and autocomplete
 */
const TimeZoneField: FC = () => {
  const [selectedTimeZoneId, setSelectedTimeZoneId] = useState<string | null>(
    null,
  );

  // Find the currently selected timezone
  const selectedTimeZone = timeZones.find(
    (timeZone) => timeZone.id === selectedTimeZoneId,
  );

  return (
    <div
      className="flex flex-col gap-2"
      role="region"
      aria-labelledby="timezone-field-label"
    >
      {/* Field Label */}
      <label
        id="timezone-field-label"
        className="text-sm font-medium"
        htmlFor="timezone-select"
      >
        Time zone
      </label>

      {/* Combobox Component */}
      <ComboBox
        placeholder="Select time zone..."
        selectedItem={
          selectedTimeZone ? (
            <TimeZoneItem timeZone={selectedTimeZone} isSelected={true} />
          ) : (
            "Select time zone..."
          )
        }
        aria-labelledby="timezone-field-label"
      >
        {/* Timezone Options */}
        {timeZones.map((timeZone) => (
          <CommandItem
            key={timeZone.id}
            value={timeZone.name}
            onSelect={() => setSelectedTimeZoneId(timeZone.id)}
            className="cursor-pointer"
            role="option"
            aria-selected={selectedTimeZoneId === timeZone.id}
          >
            {/* Selection Indicator */}
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                selectedTimeZoneId === timeZone.id
                  ? "opacity-100"
                  : "opacity-0",
              )}
              aria-hidden="true"
            />

            {/* Timezone Display */}
            <TimeZoneItem
              timeZone={timeZone}
              isSelected={selectedTimeZoneId === timeZone.id}
            />
          </CommandItem>
        ))}
      </ComboBox>
    </div>
  );
};

export default TimeZoneField;
