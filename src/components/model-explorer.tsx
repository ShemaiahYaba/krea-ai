import { models } from "@/lib/data";
import { ModelCard } from "./model-card";

export function ModelExplorer() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
