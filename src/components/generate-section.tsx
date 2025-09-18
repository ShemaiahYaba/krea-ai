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
      <div className="flex flex-col gap-4">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} layout="row" />
        ))}
      </div>
    </div>
  );
}
