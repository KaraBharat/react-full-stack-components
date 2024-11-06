import React from "react";
import MultiSelectComboboxPreview from "@/features/multi-select-combobox/preview";
import SingleSelectComboboxPreview from "@/features/single-select-combobox/preview";

// Home component definition
export default function Home() {
  return (
    <main className="flex w-full items-center justify-center p-12">
      <div className="flex flex-wrap items-center gap-8">
        <MultiSelectComboboxPreview />
        <SingleSelectComboboxPreview />
      </div>
    </main>
  );
}
