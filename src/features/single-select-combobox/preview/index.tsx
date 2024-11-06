import { Card } from "@/components/ui/card";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { PreviewLink } from "@/components/preview-link";
import { SINGLE_SELECT_COMBOBOX } from "@/constants/common";

export default function SingleSelectComboboxPreview() {
  return (
    <Card className="w-full max-w-[400px]">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          {SINGLE_SELECT_COMBOBOX.title}
        </CardTitle>
        <CardDescription className="text-center text-sm text-muted-foreground">
          {SINGLE_SELECT_COMBOBOX.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-md">
            <Image
              src="/images/preview/single-select-combobox.png"
              alt="Single select dropdown"
              fill
              className="rounded-md object-contain"
            />
          </div>
          <div className="flex w-full justify-center">
            <PreviewLink href="/single-select-combobox" title="Preview" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
