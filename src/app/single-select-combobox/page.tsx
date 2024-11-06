import React from "react";
import SingleSelectComboBoxContainer from "@/features/single-select-combobox";
import { Metadata } from "next";
import { SINGLE_SELECT_COMBOBOX } from "@/constants/common";

/**
 * Page Component
 *
 * This component renders the main page for the multi-select combobox demo.
 * It provides a centered layout for the SingleSelectComboBoxContainer component.
 */

export const metadata: Metadata = {
  title: SINGLE_SELECT_COMBOBOX.title,
  description: SINGLE_SELECT_COMBOBOX.description,
};

const Page: React.FC = () => {
  return (
    <div
      className="flex w-full items-center justify-center p-4 md:p-12"
      role="main"
      aria-label="Single-select Combobox Demo Page"
    >
      <div className="flex w-full items-center justify-center bg-white">
        <section
          className="flex w-full max-w-[600px] items-center justify-center p-2"
          role="region"
          aria-label="Single Select Combobox Section"
        >
          <SingleSelectComboBoxContainer />
        </section>
      </div>
    </div>
  );
};

export default Page;
