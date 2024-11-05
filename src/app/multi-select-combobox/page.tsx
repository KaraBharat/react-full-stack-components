import React from "react";
import MultiSelectComboBoxContainer from "@/features/multi-select-products";

/**
 * Page Component
 *
 * This component renders the main page for the multi-select combobox demo.
 * It provides a centered layout for the CollectionFormDemo component.
 */
const Page: React.FC = () => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      role="main"
      aria-label="Multi-select Combobox Demo Page"
    >
      <div className="flex w-full items-center justify-center bg-white">
        <section
          className="flex w-full max-w-[600px] items-center justify-center rounded-md border border-stone-300 bg-stone-50 p-2"
          role="region"
          aria-label="Collection Form Section"
        >
          <MultiSelectComboBoxContainer />
        </section>
      </div>
    </div>
  );
};

export default Page;
