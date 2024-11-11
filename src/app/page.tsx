// External dependencies
import { type FC } from "react";

// Feature components
import MultiSelectComboboxPreview from "@/features/multi-select-combobox/preview";
import SingleSelectComboboxPreview from "@/features/single-select-combobox/preview";
import MultiSelectCombobox2Preview from "@/features/customized-multi-select-combobox/preview";

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
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
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

        {/* Multi-select combobox demonstration */}
        <section aria-label="Multi-select combobox example">
          <MultiSelectCombobox2Preview />
        </section>
      </div>
    </main>
  );
};

export default Home;
