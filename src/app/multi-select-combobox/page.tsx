import React from "react";
import CollectionFormDemo from "@/features/multi-select-products";

const Page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex w-full items-center justify-center bg-white">
        <div className="flex w-full max-w-[600px] items-center justify-center rounded-md border border-stone-300 bg-stone-50 p-2">
          <CollectionFormDemo />
        </div>
      </div>
    </div>
  );
};

export default Page;
