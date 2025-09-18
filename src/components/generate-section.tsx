"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { ModelExplorer } from "./model-explorer";
import { Button } from "./ui/button";
import React from "react";

export function GenerateSection() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Generate</h2>
        <Button variant="link" className="text-info" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
          {isExpanded ? "See Less" : "See All"}
        </Button>
      </div>
      <ModelExplorer isExpanded={isExpanded} />
    </div>
  );
}
