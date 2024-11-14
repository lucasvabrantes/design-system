import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center items-center min-h-screen p-12 gap-3">
      <Input label="Label" placeholder="Design System" />
      <Input label="Label" hint="Hint" placeholder="Design System" />
      <Input disabled placeholder="Design System Disabled" />
    </div>
  );
}
