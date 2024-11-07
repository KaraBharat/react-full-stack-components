// External dependencies
import { type FC } from "react";
import { type Metadata } from "next";

// Internal imports
import SingleSelectComboBoxContainer from "@/features/single-select-combobox";
import { SINGLE_SELECT_COMBOBOX } from "@/constants/common";

/**
 * Metadata configuration for the Single-select Combobox page
 * Provides SEO-friendly title and description
 */
export const metadata: Metadata = {
  title: SINGLE_SELECT_COMBOBOX.title,
  description: SINGLE_SELECT_COMBOBOX.description,
};

/**
 * Single-select Combobox Demo Page
 *
 * Renders a demonstration of the single-select combobox component
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
        Single-select Combobox Demo Page
      </h1>

      {/* Container wrapper */}
      <div
        className="flex w-full items-center justify-center bg-white"
        role="presentation"
      >
        {/* Demo section */}
        <section
          className="flex w-full max-w-[600px] items-center justify-center p-2"
          aria-label="Single Select Combobox Demo"
        >
          <SingleSelectComboBoxContainer />
        </section>
      </div>
    </main>
  );
};

export default Page;
