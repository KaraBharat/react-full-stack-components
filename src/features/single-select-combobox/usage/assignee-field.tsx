"use client";

// External dependencies
import React, { useState } from "react";
import { Check, UserIcon } from "lucide-react";

// Internal UI components

import { CommandItem } from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Utilities and types
import { cn } from "@/lib/utils";
import { ComboBox } from "../components/single-select-combobox";
import { UserProfile } from "../types";
import { userProfiles } from "../data";

/**
 * UserItem Component
 * Renders a user profile with avatar and name in a consistent format
 *
 * @component
 * @param {Object} props - Component props
 * @param {UserProfile} props.userProfile - User profile data
 */
const UserItem: React.FC<{ userProfile: UserProfile }> = ({ userProfile }) => (
  <div
    className="flex items-center gap-2"
    role="option"
    aria-label={`${userProfile.name}`}
  >
    <Avatar className="size-6">
      <AvatarImage
        className="size-6 object-cover"
        src={userProfile.avatar}
        alt={`${userProfile.name}'s avatar`}
        loading="lazy"
      />
      <AvatarFallback
        aria-label={`${userProfile.name}'s default avatar`}
        className="border border-stone-300 bg-stone-100 text-[10px] text-stone-500"
      >
        {userProfile.name
          .split(" ")
          .map((name) => name[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
    <span className="truncate">{userProfile.name}</span>
  </div>
);

/**
 * AssigneeField Component
 * A form field component for selecting task assignees with autocomplete functionality
 *
 * @component
 */
export const AssigneeField: React.FC = () => {
  const [selectedAssigneeId, setSelectedAssigneeId] = useState<string | null>(
    null,
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Assignee</label>
      <ComboBox
        placeholder="Select assignee..."
        selectedItem={(() => {
          const userProfile = userProfiles.find(
            (profile) => profile.id === selectedAssigneeId,
          );
          return userProfile ? (
            <UserItem userProfile={userProfile} />
          ) : (
            "Select assignee..."
          );
        })()}
      >
        {userProfiles.map((profile) => (
          <CommandItem
            key={profile.id}
            value={profile.name}
            onSelect={() => setSelectedAssigneeId(profile.id)}
            role="option"
            aria-selected={selectedAssigneeId === profile.id}
            className="cursor-pointer"
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                selectedAssigneeId === profile.id ? "opacity-100" : "opacity-0",
              )}
              aria-hidden="true"
            />
            <UserItem userProfile={profile} />
          </CommandItem>
        ))}
      </ComboBox>
    </div>
  );
};

// Default export for cleaner imports
export default AssigneeField;
