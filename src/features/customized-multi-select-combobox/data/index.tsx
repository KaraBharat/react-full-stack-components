import { AiModel, OptionType, UserProfile, Vegetable } from "../types";

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

export const vegetables: Vegetable[] = [
  { value: "spinach", label: "Spinach", icon: "🥬", calories: 23 },
  { value: "broccoli", label: "Broccoli", icon: "🥦", calories: 55 },
  { value: "carrots", label: "Carrots", icon: "🥕", calories: 41 },
  { value: "kale", label: "Kale", icon: "🌿", calories: 33 },
  { value: "cauliflower", label: "Cauliflower", icon: "🥦", calories: 25 },
  { value: "bell_pepper", label: "Bell Pepper", icon: "🌶️", calories: 31 },
  { value: "asparagus", label: "Asparagus", icon: "🍀", calories: 20 },
  { value: "tomato", label: "Tomato", icon: "🍅", calories: 18 },
  { value: "zucchini", label: "Zucchini", icon: "🥒", calories: 17 },
  { value: "sweet_potato", label: "Sweet Potato", icon: "🍠", calories: 86 },
  { value: "cucumber", label: "Cucumber", icon: "🥒", calories: 16 },
  { value: "onion", label: "Onion", icon: "🧅", calories: 40 },
  { value: "mushroom", label: "Mushroom", icon: "🍄", calories: 22 },
  { value: "pumpkin", label: "Pumpkin", icon: "🎃", calories: 26 },
  { value: "green_beans", label: "Green Beans", icon: "🍃", calories: 31 },
  { value: "eggplant", label: "Eggplant", icon: "🍆", calories: 25 },
  { value: "lettuce", label: "Lettuce", icon: "🥗", calories: 15 },
  {
    value: "brussels_sprouts",
    label: "Brussels Sprouts",
    icon: "🟢",
    calories: 43,
  },
  { value: "radish", label: "Radish", icon: "🌰", calories: 16 },
  { value: "cabbage", label: "Cabbage", icon: "🍈", calories: 25 },
  { value: "beetroot", label: "Beetroot", icon: "🍠", calories: 43 },
  { value: "celery", label: "Celery", icon: "🌱", calories: 16 },
  { value: "parsley", label: "Parsley", icon: "🪴", calories: 36 },
  { value: "okra", label: "Okra", icon: "🥭", calories: 33 },
];

export const aiModels: AiModel[] = [
  {
    value: "gpt_model",
    label: "GPT Model",
    icon: "🤖",
    description: "Generate text, answer questions",
  },
  {
    value: "stable_diffusion",
    label: "Stable Diffusion",
    icon: "🎨",
    description: "Text-to-image generation",
  },
  {
    value: "sentiment_analysis",
    label: "Sentiment Analysis",
    icon: "😊",
    description: "Analyze emotional tone in text",
  },
  {
    value: "recommendation",
    label: "Recommendation Engine",
    icon: "📈",
    description: "Suggest products or content",
  },
  {
    value: "ocr",
    label: "OCR (Text Extraction)",
    icon: "📝",
    description: "Extract text from images",
  },
  {
    value: "data_preprocessing",
    label: "Data Preprocessing",
    icon: "📂",
    description: "Clean and prepare data for analysis",
  },
  {
    value: "image_classification",
    label: "Image Classification",
    icon: "🖼️",
    description: "Classify images into categories",
  },
  {
    value: "object_detection",
    label: "Object Detection",
    icon: "🔍",
    description: "Identify objects in images",
  },
  {
    value: "time_series_forecasting",
    label: "Time Series Forecasting",
    icon: "📊",
    description: "Predict future data points",
  },
];
