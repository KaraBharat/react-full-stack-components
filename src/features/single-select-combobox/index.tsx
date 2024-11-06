"use client";

import React from "react";
import SingleSelectComboBoxForm from "./usage/usecases-demo";
import { SINGLE_SELECT_COMBOBOX } from "@/constants/common";

type Props = {};

function SingleSelectComboBoxContainer({}: Props) {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col p-4">
        <h2 className="text-2xl font-semibold" id="combo-box-title">
          {SINGLE_SELECT_COMBOBOX.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600" id="combo-box-description">
          {SINGLE_SELECT_COMBOBOX.formDescription}
        </p>
      </div>
      {/* SingleSelectComboBoxForm component to handle product selection */}
      <SingleSelectComboBoxForm
        aria-labelledby="combo-box-title"
        aria-describedby="combo-box-description"
      />
    </div>
  );
}

export default SingleSelectComboBoxContainer;
