"use client";

// External dependencies
import { type FC, useState } from "react";
import { Check } from "lucide-react";

// UI Components
import { CommandItem } from "@/components/ui/command";
import { ComboBox } from "../components/single-select-combobox";

// Types and Data
import { type Language } from "../types";
import { languages } from "../data";
import { cn } from "@/lib/utils";

/**
 * Props interface for LanguageItem component
 */
interface LanguageItemProps {
  language: Language;
  isSelected?: boolean;
}

/**
 * LanguageItem Component
 * Renders a language option with flag and formatted name
 *
 * @param {LanguageItemProps} props - Component props
 * @returns {JSX.Element} Language item with flag and name
 */
const LanguageItem: FC<LanguageItemProps> = ({ language, isSelected }) => {
  const displayName = language.displayName
    ? `${language.name} (${language.displayName})`
    : language.name;

  return (
    <div
      className="flex items-center gap-2"
      role="option"
      aria-selected={isSelected}
      aria-label={displayName}
    >
      {/* Language Flag */}
      <img
        className="size-6 rounded-sm object-cover"
        src={language.flagUrl}
        alt={`${language.name} flag`}
        loading="lazy"
        width={24}
        height={24}
      />

      {/* Language Name */}
      <span className="truncate">{displayName}</span>
    </div>
  );
};

/**
 * LanguageField Component
 *
 * A form field component for selecting languages with search and autocomplete.
 *
 * @returns {JSX.Element} Language selection field
 */
const LanguageField: FC = () => {
  const [selectedLanguageId, setSelectedLanguageId] = useState<string | null>(
    null,
  );

  // Find currently selected language
  const selectedLanguage = languages.find(
    (language) => language.id === selectedLanguageId,
  );

  return (
    <div
      className="flex flex-col gap-2"
      role="region"
      aria-labelledby="language-field-label"
    >
      {/* Field Label */}
      <label
        id="language-field-label"
        htmlFor="language-select"
        className="text-sm font-medium"
      >
        Language
      </label>

      {/* Language Combobox */}
      <ComboBox
        placeholder="Select language..."
        selectedItem={
          selectedLanguage ? (
            <LanguageItem language={selectedLanguage} isSelected={true} />
          ) : (
            "Select language..."
          )
        }
        aria-labelledby="language-field-label"
        aria-required="true"
      >
        {/* Language Options */}
        {languages.map((language) => {
          const isSelected = selectedLanguageId === language.id;

          return (
            <CommandItem
              key={language.id}
              value={`${language.name} ${language.displayName || ""}`}
              onSelect={() => setSelectedLanguageId(language.id)}
              className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50"
              role="option"
              aria-selected={isSelected}
            >
              {/* Selection Indicator */}
              <Check
                className={cn(
                  "mr-2 h-4 w-4 transition-opacity",
                  isSelected ? "opacity-100" : "opacity-0",
                )}
                aria-hidden="true"
              />

              {/* Language Display */}
              <LanguageItem language={language} isSelected={isSelected} />

              {/* Screen Reader Description */}
              <span className="sr-only">
                {isSelected ? "Selected language: " : ""}
                {language.name}
              </span>
            </CommandItem>
          );
        })}
      </ComboBox>
    </div>
  );
};

export default LanguageField;
