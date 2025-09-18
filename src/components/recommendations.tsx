import { recommendations } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ModelCard } from "./model-card";

export function Recommendations() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold tracking-tight mb-4">Recommended For You</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {recommendations.map((model) => (
            <CarouselItem key={model.id} className="md:basis-1/2 lg:basis-1/3">
              <ModelCard model={model} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
