"use client"
import Image from "next/image";
import { galleryItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export function GallerySection() {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                {galleryItems.map((item, index) => (
                    <Card
                        key={item.id}
                        className={cn(
                            "group overflow-hidden relative rounded-xl",
                            item.rowSpan && `md:row-span-${item.rowSpan}`,
                            item.colSpan && `md:col-span-${item.colSpan}`
                        )}
                    >
                        <Image
                            src={item.imageUrl}
                            alt={item.imageHint}
                            fill
                            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            data-ai-hint={item.imageHint}
                        />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                         <div className="absolute bottom-4 left-4">
                            <p className="text-white text-sm font-medium">Explore</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
