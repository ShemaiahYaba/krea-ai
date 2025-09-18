import { ChevronDown } from "lucide-react";
import { ModelExplorer } from "./model-explorer";
import { Button } from "./ui/button";

export function GenerateSection() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Generate</h2>
        <Button variant="link" className="text-info">
          <ChevronDown className="mr-2 h-4 w-4" />
          See All
        </Button>
      </div>
      <ModelExplorer />
    </div>
  );
}
