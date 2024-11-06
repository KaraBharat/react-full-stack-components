import { z } from "zod";
import { TaskPriorityEnum, TaskStatusEnum, TaskTypeEnum } from "../types";

// Define the schema for the collection form
export const singleSelectComboBoxFormSchema = z.object({
  // Name field: must be a non-empty string
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  assigneeId: z.string().min(1, "Assignee is required"),
  type: z.enum(Object.values(TaskTypeEnum) as [string, ...string[]], {
    required_error: "Type is required",
    invalid_type_error: "Type must be a valid task type",
    message: "Type is required",
  }),
  priority: z.enum(Object.values(TaskPriorityEnum) as [string, ...string[]], {
    required_error: "Priority is required",
    invalid_type_error: "Priority must be a valid task priority",
    message: "Priority is required",
  }),
  status: z.enum(Object.values(TaskStatusEnum) as [string, ...string[]], {
    required_error: "Status is required",
    invalid_type_error: "Status must be a valid task status",
    message: "Status is required",
  }),
});

// Type inference for the collection form schema
export type SingleSelectComboBoxFormType = z.infer<
  typeof singleSelectComboBoxFormSchema
>;
