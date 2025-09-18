"use client"
import { models } from "@/lib/data";
import { ModelCard } from "./model-card";
import { useIsMobile } from "@/hooks/use-mobile";

export function ModelExplorer({ isExpanded }: { isExpanded: boolean }) {
  const isMobile = useIsMobile();
  const initialCount = isMobile ? 2 : 4;
  const itemsToShow = isExpanded ? models : models.slice(0, initialCount);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {itemsToShow.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
          />
        ))}
      </div>
    </div>
  );
}
