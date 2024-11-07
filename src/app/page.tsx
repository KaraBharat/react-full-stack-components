// External dependencies
import { type FC } from "react";

// Feature components
import MultiSelectComboboxPreview from "@/features/multi-select-combobox/preview";
import SingleSelectComboboxPreview from "@/features/single-select-combobox/preview";

/**
 * Home Page Component
 * Displays a showcase of combobox components including both
 * single and multi-select variations
 *
 * @returns {JSX.Element} The home page component
 */
const Home: FC = () => {
  return (
    <main
      className="flex w-full items-center justify-center px-2 py-16 md:p-20"
      role="main"
      aria-label="Component showcase"
    >
      <div
        className="flex w-full flex-wrap items-center justify-center gap-8"
        role="region"
        aria-label="Preview components"
      >
        {/* Multi-select combobox demonstration */}
        <section aria-label="Multi-select combobox example">
          <MultiSelectComboboxPreview />
        </section>

        {/* Single-select combobox demonstration */}
        <section aria-label="Single-select combobox example">
          <SingleSelectComboboxPreview />
        </section>
      </div>
    </main>
  );
};

export default Home;
