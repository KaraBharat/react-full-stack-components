// External dependencies
import { type FC } from "react";
import { type Metadata } from "next";

// Internal imports
import MultiSelectComboBoxContainer from "@/features/multi-select-combobox";
import { MULTI_SELECT_COMBOBOX } from "@/constants/common";

/**
 * Metadata configuration for the Multi-select Combobox page
 * Provides SEO-friendly title and description
 */
export const metadata: Metadata = {
  title: MULTI_SELECT_COMBOBOX.title,
  description: MULTI_SELECT_COMBOBOX.description,
};

/**
 * Multi-select Combobox Demo Page
 * 
 * Renders a demonstration of the multi-select combobox component
 * in a centered, responsive layout with proper accessibility attributes
 * 
 * @returns {JSX.Element} The page component
 */
const Page: FC = () => {
  return (
    <main 
      className="flex w-full items-center justify-center p-4 md:p-12"
      aria-labelledby="page-title"
    >
      {/* Hidden title for accessibility */}
      <h1 id="page-title" className="sr-only">
        Multi-select Combobox Demo Page
      </h1>

      {/* Container wrapper */}
      <div 
        className="flex w-full items-center justify-center bg-white"
        role="presentation"
      >
        {/* Demo section */}
        <section
          className="flex w-full max-w-[600px] items-center justify-center rounded-md border border-stone-300 bg-stone-50 p-2"
          aria-label="Multi Select Combobox Demo"
        >
          <MultiSelectComboBoxContainer />
        </section>
      </div>
    </main>
  );
};

export default Page;