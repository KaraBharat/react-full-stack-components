"use client";

// External dependencies
import { type FC } from "react";

// Field Components
import AssigneeField from "./assignee-field";
import LanguageField from "./language-field";
import ShippingMethodField from "./shipping-method-field";
import TimeZoneField from "./time-zone-field";

/**
 * SingleSelectComboBoxUseCases Component
 *
 * Demonstrates various use cases for the single-select combobox component.
 * Includes examples for:
 * - User assignment
 * - Language selection
 * - Shipping method selection
 * - Timezone selection
 *
 * Each field is independently managed and demonstrates different aspects
 * of the combobox functionality.
 *
 * @returns {JSX.Element} The demo component with multiple field examples
 */
const SingleSelectComboBoxUseCases: FC = () => {
  return (
    <div
      className="flex w-full flex-col gap-10 p-4"
      role="region"
      aria-label="Single-select combobox examples"
    >
      {/* Assignee Selection Example */}
      <section className="p-2">
        <AssigneeField />
      </section>

      {/* Language Selection Example */}
      <section className="p-2">
        <LanguageField />
      </section>

      {/* Shipping Method Selection Example */}
      <section className="p-2">
        <ShippingMethodField />
      </section>

      {/* Time Zone Selection Example */}
      <section className="p-2">
        <TimeZoneField />
      </section>
    </div>
  );
};

export default SingleSelectComboBoxUseCases;
