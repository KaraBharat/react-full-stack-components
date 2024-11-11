"use client";

// External dependencies
import { type FC, useState } from "react";

// Internal dependencies
import { taskPriorities } from "../data";
import { MultiSelectCombobox } from "../components/multi-select-combobox";

/**
 * Interface for TaskPriorityField props
 * @interface TaskPriorityFieldProps
 */
interface TaskPriorityFieldProps {
  className?: string;
}

/**
 * TaskPriorityField Component
 *
 * A form field component that implements a multi-select combobox for task priorities.
 * Displays up to 2 selected priorities joined with "and", then switches to count.
 *
 * Features:
 * - Multiple selection capability
 * - Smart label rendering (shows labels for ≤2 selections, count for >2)
 * - Natural language formatting ("and" conjunction for two items)
 *
 * @component
 * @example
 * ```tsx
 * <TaskPriorityField />
 * ```
 */
const TaskPriorityField: FC<TaskPriorityFieldProps> = ({ className }) => {
  // State to track selected task priorities
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);

  /**
   * Formats the selected priorities for display
   * @param {string[]} values - Array of selected priority IDs
   * @returns {string} Formatted selection summary
   */
  const handleRenderSelectedItem = (values: string[]): string => {
    // Return empty string if nothing is selected
    if (values.length === 0) return "";

    // Show individual priority labels if 2 or fewer items are selected
    if (values.length <= 2) {
      return taskPriorities
        .reduce<string[]>((accumulator, option) => {
          if (values.includes(option.value)) {
            accumulator.push(option.label);
          }
          return accumulator;
        }, [])
        .join(" and ");
    }

    // Show count if more than 2 items are selected
    return `${values.length} selected`;
  };

  return (
    <div className={className}>
      <MultiSelectCombobox
        label="Priority"
        options={taskPriorities}
        value={selectedPriorities}
        onChange={setSelectedPriorities}
        renderItem={(option) => (
          <div
            role="option"
            aria-selected={selectedPriorities.includes(option.value)}
          >
            {option.label}
          </div>
        )}
        renderSelectedItem={handleRenderSelectedItem}
        aria-label="Filter by task priority"
        aria-required="false"
        aria-multiselectable="true"
        aria-describedby="priority-field-description"
      />
      <span id="priority-field-description" className="sr-only">
        Select one or more task priorities. Shows priority names joined by 'and'
        when 2 or fewer are selected.
      </span>
    </div>
  );
};

export default TaskPriorityField;
