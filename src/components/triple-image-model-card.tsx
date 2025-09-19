"use client";

import Image from "next/image";
import type { Model } from "@/lib/data";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TripleImageModelCardProps = {
  model: Model;
  className?: string;
};

const images = [
    { src: "https://picsum.photos/seed/carousel-wan-1/400/600", alt: "Abstract digital art 1", hint: "digital art" },
    { src: "https://picsum.photos/seed/carousel-wan-2/400/600", alt: "Abstract digital art 2", hint: "abstract painting" },
    { src: "https://picsum.photos/seed/carousel-wan-3/400/600", alt: "Abstract digital art 3", hint: "surreal landscape" },
]

export function TripleImageModelCard({ model, className }: TripleImageModelCardProps) {
  return (
    <Card className={cn("overflow-hidden relative rounded-3xl bg-card", className)}>
        <div className="absolute inset-0 flex">
            {images.map((image, index) => (
                <div key={index} className="relative w-1/3 h-full">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={image.hint}
                    />
                </div>
            ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-black/90" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            <p className="font-extralight uppercase tracking-tighter text-xs">{model.isNew ? "New image model" : ""}</p>
            <div className="flex-grow flex items-center justify-center">
                <CardTitle className="text-4xl font-extrabold text-center">
                    {model.name}
                </CardTitle>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-medium">{model.name} Image generation</p>
                <p className="text-xs text-white/80 max-w-[75%] line-clamp-3">{model.description}</p>
              </div>
              <div>
                  <Button className="bg-white text-black hover:bg-neutral-200 hover:text-black border-none rounded-full">
                      Try "{model.name}"
                  </Button>
              </div>
            </div>
        </div>
    </Card>
  );
}
