"use client"

import * as React from "react"
import { recommendations } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ModelCard } from "./model-card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const scrollTo = React.useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-8">
          {recommendations.map((model) => (
            <CarouselItem key={model.id} className="basis-5/6 md:basis-2/3 aspect-video pl-8">
              <ModelCard model={model} layout="overlay" className="h-full"/>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="relative mt-4 flex items-center justify-center">
        <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                    i === current -1 ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                    }`}
                />
            ))}
        </div>
        <div className="absolute right-0 flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={scrollPrev}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={scrollNext}>
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
      </div>
    </div>
  );
}
