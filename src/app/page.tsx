import { CarouselSection } from "@/components/carousel-section";
import { GenerateSection } from "@/components/generate-section";
import { GallerySection } from "@/components/gallery-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <CarouselSection />
      <GenerateSection />
      <GallerySection />
    </div>
  );
}
