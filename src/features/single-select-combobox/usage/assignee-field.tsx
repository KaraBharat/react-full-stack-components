"use client";

// External dependencies
import { type FC, useState } from "react";
import { Check } from "lucide-react";

// UI Components
import { CommandItem } from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ComboBox } from "../components/single-select-combobox";

// Types and Data
import { type UserProfile } from "../types";
import { userProfiles } from "../data";
import { cn, createInitials } from "@/lib/utils";

/**
 * Props interface for UserItem component
 */
interface UserItemProps {
  userProfile: UserProfile;
  isSelected?: boolean;
}


/**
 * UserItem Component
 * Renders a user profile with avatar and name
 *
 * @param {UserItemProps} props - Component props
 * @returns {JSX.Element} User item with avatar and name
 */
const UserItem: FC<UserItemProps> = ({ userProfile, isSelected }) => (
  <div
    className="flex items-center gap-2"
    role="option"
    aria-selected={isSelected}
    aria-label={userProfile.name}
  >
    {/* User Avatar */}
    <Avatar className="size-6">
      <AvatarImage
        className="size-6 object-cover"
        src={userProfile.avatar}
        alt={`${userProfile.name}'s avatar`}
        loading="lazy"
      />
      <AvatarFallback
        aria-label={`${userProfile.name}'s initials`}
        className="border border-stone-300 bg-stone-100 text-[10px] text-stone-500"
      >
        {createInitials(userProfile.name)}
      </AvatarFallback>
    </Avatar>

    {/* User Name */}
    <span className="truncate">{userProfile.name}</span>
  </div>
);

/**
 * AssigneeField Component
 *
 * A form field component for selecting assignees with search and autocomplete.
 *
 * @returns {JSX.Element} Assignee selection field
 */
const AssigneeField: FC = () => {
  const [selectedAssigneeId, setSelectedAssigneeId] = useState<string | null>(
    null,
  );

  // Find currently selected user
  const selectedUser = userProfiles.find(
    (profile) => profile.id === selectedAssigneeId,
  );

  return (
    <div
      className="flex flex-col gap-2"
      role="region"
      aria-labelledby="assignee-field-label"
    >
      {/* Field Label */}
      <label
        id="assignee-field-label"
        htmlFor="assignee-select"
        className="text-sm font-medium"
      >
        Assignee
      </label>

      {/* Assignee Combobox */}
      <ComboBox
        placeholder="Select assignee..."
        selectedItem={
          selectedUser ? (
            <UserItem userProfile={selectedUser} isSelected={true} />
          ) : (
            "Select assignee..."
          )
        }
        aria-labelledby="assignee-field-label"
        aria-required="true"
      >
        {/* User Options */}
        {userProfiles.map((profile) => {
          const isSelected = selectedAssigneeId === profile.id;

          return (
            <CommandItem
              key={profile.id}
              value={profile.name}
              onSelect={() => setSelectedAssigneeId(profile.id)}
              className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50"
              role="option"
              aria-selected={isSelected}
            >
              {/* Selection Indicator */}
              <Check
                className={cn(
                  "mr-2 h-4 w-4 transition-opacity",
                  isSelected ? "opacity-100" : "opacity-0",
                )}
                aria-hidden="true"
              />

              {/* User Display */}
              <UserItem userProfile={profile} isSelected={isSelected} />

              {/* Screen Reader Description */}
              <span className="sr-only">
                {isSelected ? "Selected assignee: " : ""}
                {profile.name}
              </span>
            </CommandItem>
          );
        })}
      </ComboBox>
    </div>
  );
};

export default AssigneeField;
