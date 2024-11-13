"use client";

// External dependencies
import { type FC, useState } from "react";

// UI Components
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Internal dependencies
import {
  BaseOption,
  MultiSelectCombobox,
} from "../components/multi-select-combobox";
import { aiModels } from "../data";

/**
 * Extended option type for ai model data
 * @interface AiModelOption
 * @extends BaseOption
 */
interface AiModelOption extends BaseOption {
  icon: string;
  description: string;
}

/**
 * Props interface for AiModelField
 * @interface AiModelFieldProps
 */
interface AiModelFieldProps {
  className?: string;
}

/**
 * AiModelField Component
 *
 * A form field component that implements a multi-select combobox for ai models.
 * Features avatar display, tooltips, and a visual indicator for multiple selections.
 *
 * Features:
 * - Avatar display for each ai model
 * - Tooltips showing full names
 * - Shows up to 5 avatars with overflow indicator
 *
 * @component
 */
const AiModelField: FC<AiModelFieldProps> = ({ className }) => {
  // State to track selected ai models
  const [selectedAiModels, setSelectedAiModels] = useState<string[]>([]);

  /**
   * Renders an individual ai model option with icon
   * @param {AiModelOption} option - The ai model option to render
   */
  const renderAiModelOption = (option: AiModelOption) => (
    <div
      className="flex items-start justify-center gap-2"
      role="option"
      aria-selected={selectedAiModels.includes(option.value)}
    >
      <span className="text-xl">{option.icon}</span>
      <div className="flex flex-col items-start gap-1">
        <span>{option.label}</span>
        <span className="text-sm text-stone-600">{option.description}</span>
      </div>
    </div>
  );

  /**
   * Renders the selected ai models display
   * @param {string[]} value - Array of selected ai model IDs
   */
  const renderSelectedAiModels = (value: string[]) => {
    if (value.length === 0) return "";

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span>{value.length} selected</span>
        </TooltipTrigger>
        <TooltipContent>
          {value.map((aiModelId) => {
            const aiModel = aiModels.find((v) => v.value === aiModelId)!;
            return (
              <div key={aiModel.value} className="flex items-center gap-2">
                <span className="text-[14px]">{aiModel.icon}</span>
                <span>{aiModel.label}</span>
              </div>
            );
          })}
        </TooltipContent>
      </Tooltip>
    );
  };

  return (
    <div className={className}>
      <MultiSelectCombobox<AiModelOption>
        label="Ai Model"
        options={aiModels.map((aiModel) => ({
          label: aiModel.label,
          value: aiModel.value,
          icon: aiModel.icon,
          description: aiModel.description,
        }))}
        value={selectedAiModels}
        onChange={setSelectedAiModels}
        renderItem={renderAiModelOption}
        renderSelectedItem={renderSelectedAiModels}
        aria-label="Filter by ai model"
        aria-required="false"
        aria-multiselectable="true"
        aria-describedby="ai-model-field-description"
      />
      <span id="ai-model-field-description" className="sr-only">
        Select one or more ai models. Shows up to 5 ai model icons with a count
        for additional selections.
      </span>
    </div>
  );
};

export default AiModelField;
