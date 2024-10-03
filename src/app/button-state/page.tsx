import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex w-full items-center justify-center bg-white">
        <div className="flex h-[600px] w-full max-w-[600px] items-center justify-center rounded-md border border-stone-300 bg-stone-50 p-2">
          <div className="flex flex-col gap-6">
            <Button size="lg">Submit</Button>

            <Button size="lg" isLoading={true}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
