import { ModelExplorer } from "@/components/model-explorer";
import { Recommendations } from "@/components/recommendations";

export function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <Recommendations />
      <ModelExplorer />
    </div>
  );
}
