"use client";

import React from "react";

import AssigneeField from "./assignee-field";
import LanguageField from "./language-field";
import ShippingMethodField from "./shipping-method-field";
import TimeZoneField from "./time-zone-field";

/**
 * SingleSelectComboBoxUseCases Component
 *
 * This component renders a form for creating a collection with a name and selected products.
 * It also displays submitted data after form submission.
 */
const SingleSelectComboBoxUseCases: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-10 p-4">
      <div className="p-2">
        <AssigneeField />
      </div>
      <div className="p-2">
        <LanguageField />
      </div>
      <div className="p-2">
        <ShippingMethodField />
      </div>
      <div className="p-2">
        <TimeZoneField />
      </div>
    </div>
  );
};

export default SingleSelectComboBoxUseCases;
