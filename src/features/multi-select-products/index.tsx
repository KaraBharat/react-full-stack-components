"use client";

import React from "react";
import CollectionForm from "./components/collection-form";

const CollectionFormDemo = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col p-4">
        <h2 className="text-2xl font-semibold">Multi Select Combo Box</h2>
        <p className="mt-2 text-sm text-gray-600">
          This combo box allows you to select multiple products from a list.
          Start typing to search and make your selections.
        </p>
      </div>
      <CollectionForm></CollectionForm>
    </div>
  );
};

export default CollectionFormDemo;
