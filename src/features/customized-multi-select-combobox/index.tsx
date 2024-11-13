"use client";

// External dependencies (third-party packages)
import { type FC } from "react";

// Internal dependencies (project-specific imports)
import { CUSTOMIZED_MULTI_SELECT_COMBOBOX } from "@/constants/common";
import MultiSelectComboboxUseCases from "./usage/usecases-demo";

/**
 * Props interface for MultiSelectComboboxContainer
 * @interface ContainerProps
 */
interface ContainerProps {
  className?: string; // Added for future styling flexibility
}

/**
 * MultiSelectComboboxContainer Component
 *
 * A container component that provides a structured layout for the multi-select combobox demo.
 * Features a header section with title and description, followed by the main demo area.
 *
 *
 * @component
 * @example
 * ```tsx
 * <MultiSelectComboboxContainer />
 * ```
 */
const MultiSelectComboboxContainer: FC<ContainerProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex w-full flex-col justify-center ${className}`.trim()}
      role="region"
      aria-labelledby="combo-box-title"
      aria-describedby="combo-box-description"
    >
      {/* Header Section: Contains title and descriptive text */}
      <header className="flex flex-col p-4" role="banner">
        <h2 id="combo-box-title" className="text-2xl font-semibold">
          {CUSTOMIZED_MULTI_SELECT_COMBOBOX.title}
        </h2>
        <p id="combo-box-description" className="mt-2 text-sm text-gray-600">
          {CUSTOMIZED_MULTI_SELECT_COMBOBOX.formDescription}
        </p>
      </header>

      {/* Main Content Section: Contains the demo implementation */}
      <main role="main" className="w-full">
        <MultiSelectComboboxUseCases
          aria-labelledby="combo-box-title"
          aria-describedby="combo-box-description"
        />
      </main>
    </div>
  );
};

export default MultiSelectComboboxContainer;
