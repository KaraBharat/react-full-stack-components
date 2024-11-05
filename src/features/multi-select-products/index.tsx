"use client";

import React from "react";
import MultiSelectComboBoxForm from "./components/demo-form";

// Component to demonstrate the CollectionForm with a multi-select combo box
const MultiSelectComboBoxContainer = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col p-4">
        <h2 className="text-2xl font-semibold" id="combo-box-title">
          Multi Select Combo Box
        </h2>
        <p className="mt-2 text-sm text-gray-600" id="combo-box-description">
          This combo box allows you to select multiple products from a list.
          Start typing to search and make your selections.
        </p>
      </div>
      {/* MultiSelectComboBoxForm component to handle product selection */}
      <MultiSelectComboBoxForm
        aria-labelledby="combo-box-title"
        aria-describedby="combo-box-description"
      />
    </div>
  );
};

export default MultiSelectComboBoxContainer;
