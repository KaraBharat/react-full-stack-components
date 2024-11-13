"use client";

// External dependencies
import { type FC, useState } from "react";

// Internal dependencies
import { taskStatuses } from "../data";
import { MultiSelectCombobox } from "../components/multi-select-combobox";

/**
 * Interface for TaskStatusField props
 * @interface TaskStatusFieldProps
 */
interface TaskStatusFieldProps {
  className?: string;
}

/**
 * TaskStatusField Component
 *
 * A form field component that implements a multi-select combobox for task statuses.
 * Displays up to 3 selected statuses as comma-separated text, then switches to count.
 *
 * Features:
 * - Multiple selection capability
 * - Smart label rendering (shows labels for ≤3 selections, count for >3)
 *
 * @component
 * @example
 * ```tsx
 * <TaskStatusField />
 * ```
 */
const TaskStatusField: FC<TaskStatusFieldProps> = ({ className }) => {
  // State to track selected task statuses
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  /**
   * Formats the selected statuses for display
   * @param {string[]} values - Array of selected status IDs
   * @returns {string} Formatted selection summary
   */
  const handleRenderSelectedItem = (values: string[]): string => {
    // Return empty string if nothing is selected
    if (values.length === 0) return "";

    // Show individual status labels if 3 or fewer items are selected
    if (values.length <= 3) {
      return taskStatuses
        .reduce<string[]>((accumulator, option) => {
          if (values.includes(option.value)) {
            accumulator.push(option.label);
          }
          return accumulator;
        }, [])
        .join(", ");
    }

    // Show count if more than 3 items are selected
    return `${values.length} selected`;
  };

  return (
    <div className={className}>
      <MultiSelectCombobox
        label="Status"
        options={taskStatuses}
        value={selectedStatuses}
        onChange={setSelectedStatuses}
        renderItem={(option) => (
          <div
            role="option"
            aria-selected={selectedStatuses.includes(option.value)}
          >
            {option.label}
          </div>
        )}
        renderSelectedItem={handleRenderSelectedItem}
        aria-label="Filter by task status"
        aria-required="false"
        aria-multiselectable="true"
        aria-describedby="status-field-description"
      />
      <span id="status-field-description" className="sr-only">
        Select one or more task statuses. Shows individual status names when 3
        or fewer are selected.
      </span>
    </div>
  );
};

export default TaskStatusField;
