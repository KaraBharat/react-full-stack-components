"use client";

// External dependencies
import { type FC, useState } from "react";

// UI Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { userProfiles } from "../data";
import { createInitials } from "@/lib/utils";

/**
 * Extended option type for user data
 * @interface UserOption
 * @extends BaseOption
 */
interface UserOption extends BaseOption {
  profileAvatarURL: string;
}

/**
 * Props interface for TaskAssigneeField
 * @interface TaskAssigneeFieldProps
 */
interface TaskAssigneeFieldProps {
  className?: string;
}

/**
 * TaskAssigneeField Component
 *
 * A form field component that implements a multi-select combobox for task assignees.
 * Features avatar display, tooltips, and a visual indicator for multiple selections.
 *
 * Features:
 * - Avatar display for each user
 * - Tooltips showing full names
 * - Shows up to 5 avatars with overflow indicator
 *
 * @component
 */
const TaskAssigneeField: FC<TaskAssigneeFieldProps> = ({ className }) => {
  // State to track selected assignees
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);

  /**
   * Renders an individual assignee option with avatar
   * @param {UserOption} option - The user option to render
   */
  const renderAssigneeOption = (option: UserOption) => (
    <div
      className="flex items-center gap-2"
      role="option"
      aria-selected={selectedAssignees.includes(option.value)}
    >
      <Avatar className="size-6">
        <AvatarImage
          className="size-6 object-cover"
          src={option.profileAvatarURL}
          alt={`${option.label}'s avatar`}
          loading="lazy"
        />
        <AvatarFallback
          aria-label={`${option.label}'s initials`}
          className="border border-stone-300 bg-stone-100 text-[10px] text-stone-500"
        >
          {createInitials(option.label)}
        </AvatarFallback>
      </Avatar>
      {option.label}
    </div>
  );

  /**
   * Renders the selected assignees display
   * @param {string[]} value - Array of selected assignee IDs
   */
  const renderSelectedAssignees = (value: string[]) => {
    if (value.length === 0) return "";

    return (
      <div
        className="flex -space-x-2"
        role="list"
        aria-label={`${value.length} assignees selected`}
      >
        {/* Display up to 5 avatars */}
        {value.slice(0, 5).map((userId) => {
          const user = userProfiles.find((u) => u.id === userId)!;
          return (
            <Tooltip key={user.id}>
              <TooltipTrigger asChild>
                <div role="listitem">
                  <Avatar className="size-6 ring-2 ring-white">
                    <AvatarImage
                      className="size-6 object-cover"
                      src={user.avatar}
                      alt={`${user.name}'s avatar`}
                      loading="lazy"
                    />
                    <AvatarFallback
                      className="border border-stone-300 bg-stone-100 text-[10px] text-stone-500"
                      aria-label={`${user.name}'s initials`}
                    >
                      {createInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </TooltipTrigger>
              <TooltipContent>{user.name}</TooltipContent>
            </Tooltip>
          );
        })}

        {/* Overflow indicator */}
        {value.length > 5 && (
          <div
            className="z-10 flex size-6 items-center justify-center rounded-full bg-stone-100 text-[10px] text-stone-500 ring-2 ring-white"
            role="listitem"
            aria-label={`Plus ${value.length - 5} more assignees`}
          >
            +{value.length - 5}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={className}>
      <MultiSelectCombobox<UserOption>
        label="Assignee"
        options={
          userProfiles?.map((userProfile) => ({
            label: userProfile.name,
            value: userProfile.id,
            profileAvatarURL: userProfile.avatar,
          })) || []
        }
        value={selectedAssignees}
        onChange={setSelectedAssignees}
        renderItem={renderAssigneeOption}
        renderSelectedItem={renderSelectedAssignees}
        aria-label="Filter by assignee"
        aria-required="false"
        aria-multiselectable="true"
        aria-describedby="assignee-field-description"
      />
      <span id="assignee-field-description" className="sr-only">
        Select one or more assignees. Shows up to 5 assignee avatars with a
        count for additional selections.
      </span>
    </div>
  );
};

export default TaskAssigneeField;
