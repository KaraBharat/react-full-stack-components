// External dependencies
import { type FC } from "react";
import Image from "next/image";

// UI Components
import { Card } from "@/components/ui/card";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { PreviewLink } from "@/components/preview-link";

// Constants
import { MULTI_SELECT_COMBOBOX } from "@/constants/common";

/**
 * MultiSelectComboboxPreview Component
 *
 * Displays a preview card for the multi-select combobox component
 * including a title, description, preview image, and a link to the full demo
 *
 * @returns {JSX.Element} Preview card component
 */
const MultiSelectComboboxPreview: FC = () => {
  return (
    <Card
      className="w-full max-w-[400px]"
      role="article"
      aria-labelledby="multi-select-title"
    >
      {/* Card Header Section */}
      <CardHeader>
        <CardTitle
          id="multi-select-title"
          className="text-center text-xl font-semibold"
        >
          {MULTI_SELECT_COMBOBOX.title}
        </CardTitle>
        <CardDescription
          className="text-center text-sm text-muted-foreground"
          aria-describedby="multi-select-title"
        >
          {MULTI_SELECT_COMBOBOX.description}
        </CardDescription>
      </CardHeader>

      {/* Card Content Section */}
      <CardContent>
        <div
          className="flex flex-col items-center justify-center gap-6"
          role="presentation"
        >
          {/* Preview Image Container */}
          <div
            className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-md"
            role="img"
            aria-label="Multi-select combobox preview image"
          >
            <Image
              src="/images/preview/multi-select-combobox.png"
              alt="Multi select dropdown interface demonstration"
              fill
              className="rounded-md object-contain"
              priority
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>

          {/* Preview Link Container */}
          <div className="flex w-full justify-center" role="navigation">
            <PreviewLink href="/multi-select-combobox" title="Preview" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiSelectComboboxPreview;
