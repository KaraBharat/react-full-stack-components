"use client";

// External dependencies
import React, { useState } from "react";
import { Check } from "lucide-react";

// Internal UI components

import { CommandItem } from "@/components/ui/command";

// Utilities and types
import { cn } from "@/lib/utils";
import { ComboBox } from "../components/single-select-combobox";
import { Language } from "../types";
import { languages } from "../data";

/**
 * LanguageItem Component
 * Renders a language with flag and name in a consistent format
 *
 * @component
 * @param {Object} props - Component props
 * @param {Language} props.language - Language data
 */
const LanguageItem: React.FC<{ language: Language }> = ({ language }) => (
  <div
    className="flex items-center gap-2"
    role="option"
    aria-label={`${language.name}`}
  >
    <img
      className="size-6 object-cover"
      src={language.flagUrl}
      alt={`${language.name}'s flag`}
      loading="lazy"
    />
    <span className="truncate">
      {`${language.name} ${
        language.displayName ? `(${language.displayName})` : ""
      }`}
    </span>
  </div>
);

/**
 * LanguageField Component
 * A form field component for selecting languages with autocomplete functionality
 *
 * @component
 */
export const LanguageField: React.FC = () => {
  const [selectedLanguageId, setSelectedLanguageId] = useState<string | null>(
    null,
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Language</label>
      <ComboBox
        placeholder="Select language..."
        selectedItem={(() => {
          const language = languages.find(
            (language) => language.id === selectedLanguageId,
          );
          return language ? (
            <LanguageItem language={language} />
          ) : (
            "Select language..."
          );
        })()}
      >
        {languages.map((language) => (
          <CommandItem
            key={language.id}
            value={`${language.name} (${language.displayName})`}
            onSelect={() => setSelectedLanguageId(language.id)}
            role="option"
            aria-selected={selectedLanguageId === language.id}
            className="cursor-pointer"
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                selectedLanguageId === language.id
                  ? "opacity-100"
                  : "opacity-0",
              )}
              aria-hidden="true"
            />
            <LanguageItem language={language} />
          </CommandItem>
        ))}
      </ComboBox>
    </div>
  );
};

// Default export for cleaner imports
export default LanguageField;
