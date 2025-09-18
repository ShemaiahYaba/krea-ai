import { CarouselSection } from "@/components/carousel-section";
import { ModelExplorer } from "@/components/model-explorer";
import { GallerySection } from "@/components/gallery-section";
import { ImageGenerator } from "@/components/image-generator";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <CarouselSection />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ModelExplorer />
        </div>
        <div className="row-start-1 lg:row-start-auto">
          <ImageGenerator />
        </div>
      </div>
      <GallerySection />
    </div>
  );
}
