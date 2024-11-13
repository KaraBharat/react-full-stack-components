"use client";

// External dependencies
import { type FC } from "react";

import TaskTypeField from "./task-type-field";
import TaskPriorityField from "./task-priority-field";
import TaskStatusField from "./task-status-field";
import TaskAssigneeField from "./task-assignee-field";
import VegetableField from "./vegetable-field";

/**
 * MultiSelectComboboxUseCases Component
 *
 * Demonstrates various use cases for the multi-select combobox component.
 * Includes examples for:
 * - Task type selection
 * - Task status selection
 * - Task priority selection
 * - Task assignee selection
 *
 * Each field is independently managed and demonstrates different aspects
 * of the combobox functionality.
 *
 * @returns {JSX.Element} The demo component with multiple field examples
 */
const MultiSelectComboboxUseCases: FC = () => {
  return (
    <div
      className="grid w-full grid-cols-1 gap-10 p-4 md:grid-cols-2"
      role="region"
      aria-label="Multi-select combobox examples"
    >
      {/* Task assignee filter */}
      <section className="p-2">
        <TaskAssigneeField />
      </section>

      {/* Vegetable filter */}
      <section className="p-2">
        <VegetableField />
      </section>

      {/* Task type filter */}
      <section className="p-2">
        <TaskTypeField />
      </section>

      {/* Task priority filter */}
      <section className="p-2">
        <TaskPriorityField />
      </section>

      {/* Task status filter */}
      <section className="p-2">
        <TaskStatusField />
      </section>
    </div>
  );
};

export default MultiSelectComboboxUseCases;
