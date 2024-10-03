import { redirect } from "next/navigation";

export default function Home() {
  // redirect to multi-select-combobox page
  redirect("/multi-select-combobox");

  return (
    <div>
      <h1>Multi select dropdown</h1>
    </div>
  );
}
