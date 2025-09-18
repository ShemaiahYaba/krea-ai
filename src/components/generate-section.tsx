import { models } from "@/lib/data";
import { ModelCard } from "./model-card";
import { Button } from "./ui/button";

export function GenerateSection() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Generate</h2>
        <Button variant="outline">See All</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
