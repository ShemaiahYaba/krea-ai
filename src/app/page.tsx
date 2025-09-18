import { CarouselSection } from "@/components/carousel-section";
import { ModelExplorer } from "@/components/model-explorer";
import { GallerySection } from "@/components/gallery-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <CarouselSection />
      <ModelExplorer />
      <GallerySection />
    </div>
  );
}
