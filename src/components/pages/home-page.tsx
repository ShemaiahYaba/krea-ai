import { ImageGenerator } from "@/components/image-generator";
import { ModelExplorer } from "@/components/model-explorer";
import { Recommendations } from "@/components/recommendations";

export function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <ImageGenerator />
      <Recommendations />
      <ModelExplorer />
    </div>
  );
}
