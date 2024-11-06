"use client";

// External dependencies
import { type FC } from "react";

// Internal imports
import MultiSelectComboBoxForm from "./usage/demo-form";
import { MULTI_SELECT_COMBOBOX } from "@/constants/common";

/**
 * MultiSelectComboBoxContainer Component
 *
 * A container component that demonstrates the CollectionForm with a multi-select combo box.
 * Provides a header section with title and description, followed by the form component.
 *
 * @returns {JSX.Element} The container component with header and form
 */
const MultiSelectComboBoxContainer: FC = () => {
  return (
    <div
      className="flex w-full flex-col justify-center"
      role="region"
      aria-labelledby="combo-box-title"
    >
      {/* Header Section */}
      <header className="flex flex-col p-4" role="banner">
        <h2 className="text-2xl font-semibold" id="combo-box-title">
          {MULTI_SELECT_COMBOBOX.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600" id="combo-box-description">
          {MULTI_SELECT_COMBOBOX.formDescription}
        </p>
      </header>

      {/* Form Section */}
      <div className="w-full" role="main">
        <MultiSelectComboBoxForm
          aria-labelledby="combo-box-title"
          aria-describedby="combo-box-description"
        />
      </div>
    </div>
  );
};

export default MultiSelectComboBoxContainer;
