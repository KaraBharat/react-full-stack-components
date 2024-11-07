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
import { SINGLE_SELECT_COMBOBOX } from "@/constants/common";

/**
 * SingleSelectComboboxPreview Component
 *
 * Displays a preview card for the single-select combobox component,
 * including a title, description, preview image, and a link to the full demo.
 *
 * @returns {JSX.Element} The preview card component
 */
const SingleSelectComboboxPreview: FC = () => {
  return (
    <Card
      className="w-full max-w-[400px]"
      role="article"
      aria-labelledby="single-select-title"
    >
      {/* Header Section */}
      <CardHeader>
        <CardTitle
          id="single-select-title"
          className="text-center text-xl font-semibold"
        >
          {SINGLE_SELECT_COMBOBOX.title}
        </CardTitle>
        <CardDescription
          className="text-center text-sm text-muted-foreground"
          id="single-select-description"
        >
          {SINGLE_SELECT_COMBOBOX.description}
        </CardDescription>
      </CardHeader>

      {/* Content Section */}
      <CardContent>
        <div
          className="flex flex-col items-center justify-center gap-6"
          role="presentation"
        >
          {/* Preview Image */}
          <div
            className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-md"
            role="img"
            aria-label="Single-select combobox preview image"
          >
            <Image
              src="/images/preview/single-select-combobox.png"
              alt="Single select dropdown interface demonstration"
              fill
              className="rounded-md object-contain"
              priority
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>

          {/* Preview Link */}
          <div
            className="flex w-full justify-center"
            role="navigation"
            aria-label="Demo navigation"
          >
            <PreviewLink href="/single-select-combobox" title="Preview" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleSelectComboboxPreview;
