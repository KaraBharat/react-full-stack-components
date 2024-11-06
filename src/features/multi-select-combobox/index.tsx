"use client";

import React from "react";
import MultiSelectComboBoxForm from "./usage/demo-form";
import { MULTI_SELECT_COMBOBOX } from "@/constants/common";

// Component to demonstrate the CollectionForm with a multi-select combo box
const MultiSelectComboBoxContainer = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col p-4">
        <h2 className="text-2xl font-semibold" id="combo-box-title">
          {MULTI_SELECT_COMBOBOX.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600" id="combo-box-description">
          {MULTI_SELECT_COMBOBOX.formDescription}
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
