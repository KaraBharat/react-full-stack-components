import { OptionType, UserProfile } from "../types";

export const taskTypes: OptionType[] = [
  { label: "Bug", value: "bug" },
  { label: "Story", value: "story" },
  { label: "Task", value: "task" },
  { label: "Subtask", value: "subtask" },
  { label: "Epic", value: "epic" },
];

export const taskStatuses: OptionType[] = [
  { label: "To Do", value: "todo" },
  { label: "In Progress", value: "in_progress" },
  { label: "Done", value: "done" },
  { label: "To Verify", value: "to_verify" },
  { label: "Closed", value: "closed" },
];

export const taskPriorities: OptionType[] = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export const userProfiles: UserProfile[] = [
  {
    id: "ed9209ef-9769-47e8-aef5-97d06ad6b139",
    name: "John Doe",
    avatar: "/images/avatar/1.jpg",
  },
  {
    id: "4c3e985c-3b78-4448-84ac-4336a0a361ae",
    name: "Jane Doe",
    avatar: "/images/avatar/2.jpg",
  },
  {
    id: "03856b5f-5d4d-4501-a053-ea911a9190df",
    name: "Jim Beam",
    avatar: "/images/avatar/3.jpg",
  },
  {
    id: "917456ef-c8ac-47bd-b7b7-33e07dd02c4e",
    name: "Jill Hill",
    avatar: "/images/avatar/4.jpg",
  },
  {
    id: "b0c0e6b2-7107-456b-9b64-fac9c7b9d574",
    name: "Jack Daniels",
    avatar: "/images/avatar/5.jpg",
  },
  {
    id: "d2e5f7b8-9c3a-4d6e-8b1f-2a5c4d7e9f0a",
    name: "Michael Chen",
    avatar: "/images/avatar/7.jpg",
  },
  {
    id: "a1b2c3d4-e5f6-4a5b-9c8d-7e6f5a4b3c2d",
    name: "Sofia Rodriguez",
    avatar: "/images/avatar/8.jpg",
  },
  {
    id: "f9e8d7c6-b5a4-3c2b-1d0e-9f8e7d6c5b4a",
    name: "Lucas Silva",
    avatar: "/images/avatar/9.jpg",
  },
  {
    id: "4b3c2d1e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    name: "Sarah Johnson",
    avatar: "/images/avatar/10.jpg",
  },
  {
    id: "8a7b6c5d-4e3f-2a1b-0c9d-8f7e6d5c4b3a",
    name: "David Kim",
    avatar: "/images/avatar/11.jpg",
  },
  {
    id: "c5d4e3f2-1a0b-9c8d-7e6f-5a4b3c2d1e0f",
    name: "Maria Garcia",
    avatar: "/images/avatar/12.jpg",
  },
  {
    id: "e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b",
    name: "Alex Thompson",
    avatar: "/images/avatar/13.jpg",
  },
  {
    id: "b9a8c7d6-e5f4-3b2a-1c0d-9e8f7a6b5c4d",
    name: "Olivia Parker",
    avatar: "/images/avatar/14.jpg",
  },
  {
    id: "d7c6b5a4-3e2f-1d0c-9b8a-7f6e5d4c3b2a",
    name: "William Zhang",
    avatar: "/images/avatar/15.jpg",
  },
];