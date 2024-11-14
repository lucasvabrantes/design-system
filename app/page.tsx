import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center items-center min-h-screen p-12 gap-3">
      <Input label="Label" placeholder="Design System" />
      <Input label="Label" hint="Hint" placeholder="Design System With Hint" />
      <Input disabled placeholder="Design System Disabled" />
      <Input icon="ri-tent-fill" placeholder="Design System With Icons" />
    </div>
  );
}
