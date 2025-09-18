import { ModelExplorer } from "./model-explorer";
import { Button } from "./ui/button";

export function GenerateSection() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Generate</h2>
        <Button variant="outline">See All</Button>
      </div>
      <ModelExplorer />
    </div>
  );
}
