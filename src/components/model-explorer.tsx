"use client"
import React from "react";
import { models } from "@/lib/data";
import { ModelCard } from "./model-card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ModelExplorer() {
  const isMobile = useIsMobile();
  const [isLg, setIsLg] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1400px)");
    const handleResize = () => setIsLg(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const initialCount = isLg ? 8 : isMobile ? 2 : 4;
  const itemsToShow = isExpanded || initialCount >= models.length ? models : models.slice(0, initialCount);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Generate</h2>
        {models.length > initialCount && (
            <Button variant="link" className="text-info" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
            {isExpanded ? "See Less" : "See All"}
            </Button>
        )}
      </div>
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
