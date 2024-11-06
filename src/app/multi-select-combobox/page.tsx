import React from "react";
import MultiSelectComboBoxContainer from "@/features/multi-select-combobox";
import { Metadata } from "next";
import { MULTI_SELECT_COMBOBOX } from "@/constants/common";

/**
 * Page Component
 *
 * This component renders the main page for the multi-select combobox demo.
 * It provides a centered layout for the CollectionFormDemo component.
 */

export const metadata: Metadata = {
  title: MULTI_SELECT_COMBOBOX.title,
  description: MULTI_SELECT_COMBOBOX.description,
};

const Page: React.FC = () => {
  return (
    <div
      className="flex w-full items-center justify-center p-4 md:p-12"
      role="main"
      aria-label="Multi-select Combobox Demo Page"
    >
      <div className="flex w-full items-center justify-center bg-white">
        <section
          className="flex w-full max-w-[600px] items-center justify-center rounded-md border border-stone-300 bg-stone-50 p-2"
          role="region"
          aria-label="Multi Select Combobox Section"
        >
          <MultiSelectComboBoxContainer />
        </section>
      </div>
    </div>
  );
};

export default Page;
