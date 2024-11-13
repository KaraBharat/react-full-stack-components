// React and types
import { type FC } from "react";

// Next.js components
import Image from "next/image";

// UI Components
import { Card } from "@/components/ui/card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PreviewLink } from "@/components/preview-link";

// Constants
import { CUSTOMIZED_MULTI_SELECT_COMBOBOX } from "@/constants/common";

/**
 * Component Props Interface
 */
interface PreviewCardProps {
  className?: string;
}

/**
 * MultiSelectCombobox2Preview Component
 *
 * A preview card component that showcases the multi-select combobox functionality.
 * Includes a title, description, visual demonstration, and a link to the full demo.
 *
 * Features:
 * - Responsive preview image
 * - Accessible card structure
 * - Clear navigation to full demo
 *
 * @component
 * @example
 * ```tsx
 * <MultiSelectCombobox2Preview />
 * ```
 */
const MultiSelectCombobox2Preview: FC<PreviewCardProps> = ({ className }) => {
  const PREVIEW_IMAGE = {
    src: "/images/preview/customized-multi-select-combobox.png",
    alt: "Interactive demonstration of a multi-select dropdown interface with search functionality",
    height: 300,
  };

  return (
    <Card
      className="w-full max-w-[400px]"
      role="article"
      aria-labelledby="multi-select-title"
    >
      {/* Header: Title and Description */}
      <CardHeader className="space-y-2">
        <CardTitle
          id="multi-select-title"
          className="text-center text-xl font-semibold"
        >
          {CUSTOMIZED_MULTI_SELECT_COMBOBOX.title}
        </CardTitle>
        <CardDescription
          id="multi-select-description"
          className="text-center text-sm text-muted-foreground"
        >
          {CUSTOMIZED_MULTI_SELECT_COMBOBOX.description}
        </CardDescription>
      </CardHeader>

      {/* Main Content: Preview Image and Demo Link */}
      <CardContent>
        <div
          className="flex flex-col items-center justify-center gap-6"
          role="presentation"
        >
          {/* Preview Image Container */}
          <figure
            className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-md"
            role="img"
            aria-labelledby="preview-image-caption"
          >
            <Image
              src={PREVIEW_IMAGE.src}
              alt={PREVIEW_IMAGE.alt}
              fill
              className="rounded-md object-contain"
              priority
              sizes="(max-width: 400px) 100vw, 400px"
              quality={90}
            />
            <figcaption id="preview-image-caption" className="sr-only">
              {PREVIEW_IMAGE.alt}
            </figcaption>
          </figure>

          {/* Preview Link */}
          <div
            className="flex w-full justify-center"
            role="navigation"
            aria-label="Demo navigation"
          >
            <PreviewLink href="/customized-multi-select-combobox" title="Preview" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiSelectCombobox2Preview;
