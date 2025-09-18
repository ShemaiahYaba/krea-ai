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
  const [isXl, setIsXl] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px) and (max-width: 1279px)");
    const xlMediaQuery = window.matchMedia("(min-width: 1280px)");
    
    const handleLgResize = () => setIsLg(lgMediaQuery.matches);
    const handleXlResize = () => setIsXl(xlMediaQuery.matches);

    handleLgResize();
    handleXlResize();

    lgMediaQuery.addEventListener("change", handleLgResize);
    xlMediaQuery.addEventListener("change", handleXlResize);

    return () => {
        lgMediaQuery.removeEventListener("change", handleLgResize);
        xlMediaQuery.removeEventListener("change", handleXlResize);
    }
  }, []);

  const getInitialCount = () => {
    if (isXl) return 8;
    if (isLg) return 3;
    if (isMobile) return 2;
    return 4;
  }

  const initialCount = getInitialCount();
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
