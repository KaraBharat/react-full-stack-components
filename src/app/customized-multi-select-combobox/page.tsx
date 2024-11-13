// External dependencies
import { type FC } from "react";
import { type Metadata } from "next";

// Internal imports
import { CUSTOMIZED_MULTI_SELECT_COMBOBOX } from "@/constants/common";
import MultiSelectComboboxContainer from "@/features/customized-multi-select-combobox";

/**
 * Metadata configuration for the Multi-select Combobox page
 * Provides SEO-friendly title and description
 */
export const metadata: Metadata = {
  title: CUSTOMIZED_MULTI_SELECT_COMBOBOX.title,
  description: CUSTOMIZED_MULTI_SELECT_COMBOBOX.description,
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
      className="flex w-full items-center justify-center px-2 py-16 md:p-20"
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
          className="flex w-full max-w-[900px] items-center justify-center p-2"
          aria-label="Multi Select Combobox Demo"
        >
          <MultiSelectComboboxContainer />
        </section>
      </div>
    </main>
  );
};

export default Page;
