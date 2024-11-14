import { SrInput } from "@/components/shared/input";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center items-center min-h-screen p-12 gap-3">
      <SrInput label="Label" placeholder="Design System" />
      <SrInput
        label="Label"
        hint="Hint"
        placeholder="Design System With Hint"
      />
      <SrInput disabled placeholder="Design System Disabled" />
      <SrInput icon="ri-tent-fill" placeholder="Design System With Icons" />
    </div>
  );
}
