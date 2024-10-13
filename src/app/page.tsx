// Import necessary modules from Next.js
import { redirect } from "next/navigation";

// Home component definition
export default function Home() {
  // Redirect to the multi-select-combobox page
  redirect("/multi-select-combobox");

  // Render the main content of the page
  return (
    <div>
      {/* Main heading for the page */}
      <h1 tabIndex={0}>Multi select dropdown</h1>
    </div>
  );
}