import { models } from "@/lib/data";
import { ModelCard } from "./model-card";

export function ModelExplorer() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Explore Models</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            className={model.isFeatured ? "md:col-span-2" : ""}
          />
        ))}
      </div>
    </div>
  );
}
