"use client";

// External dependencies
import { type FC } from "react";

// Internal components
import SingleSelectComboBoxForm from "./usage/usecases-demo";

// Constants
import { SINGLE_SELECT_COMBOBOX } from "@/constants/common";

/**
 * Props interface for SingleSelectComboBoxContainer
 * Currently empty but maintained for future extensibility
 */
interface ContainerProps {}

/**
 * SingleSelectComboBoxContainer Component
 *
 * A container component that wraps the single select combobox demo.
 * Provides a header with title and description, and renders the demo form.
 *
 * @returns {JSX.Element} The container component
 */
const SingleSelectComboBoxContainer: FC<ContainerProps> = () => {
  return (
    <div
      className="flex w-full flex-col justify-center"
      role="region"
      aria-labelledby="combo-box-title"
    >
      {/* Header Section */}
      <header className="flex flex-col p-4" role="banner">
        <h2 id="combo-box-title" className="text-2xl font-semibold">
          {SINGLE_SELECT_COMBOBOX.title}
        </h2>
        <p id="combo-box-description" className="mt-2 text-sm text-gray-600">
          {SINGLE_SELECT_COMBOBOX.formDescription}
        </p>
      </header>

      {/* Demo Form Section */}
      <main role="main">
        <SingleSelectComboBoxForm
          aria-labelledby="combo-box-title"
          aria-describedby="combo-box-description"
        />
      </main>
    </div>
  );
};

export default SingleSelectComboBoxContainer;
