import { Input } from "@/components/shared/input";
import { Ri24HoursFill } from "@remixicon/react";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center items-center min-h-screen p-12 gap-3">
      <Input label="Label" placeholder="Design System" />
      <Input label="Label" hint="Hint" placeholder="Design System With Hint" />
      <Input Icon={Ri24HoursFill} placeholder="Design System With Icons" />
      <Input disabled placeholder="Design System Disabled" />
    </div>
  );
}
