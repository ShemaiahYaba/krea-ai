import Image from "next/image";
import type { Model } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ModelCardProps = {
  model: Model;
  className?: string;
  layout?: "default" | "overlay";
};

export function ModelCard({ model, className, layout = "default" }: ModelCardProps) {
  if (layout === "overlay") {
    return (
      <Card className={cn("overflow-hidden relative group", className)}>
        <Image
          src={model.imageUrl}
          alt={model.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          data-ai-hint={model.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-black/90" />
        <div className="relative flex flex-col h-full p-6 text-white text-center">
            <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-none">New image model</Badge>
            </div>
            <div className="flex-grow" />
            <CardTitle className="text-4xl font-bold">
              {model.name}
            </CardTitle>
            <div className="absolute bottom-4 right-4 mt-6">
                <Button variant="outline" size="lg" className="bg-white text-black hover:bg-neutral-200 border-none">
                    Try "{model.name}"
                </Button>
            </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("overflow-hidden flex flex-col", className)}>
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={model.imageUrl}
            alt={model.name}
            fill
            className="object-cover"
            data-ai-hint={model.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold">{model.name}</CardTitle>
        <CardDescription className="text-sm mt-1">
          {model.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Badge variant="secondary">by {model.author}</Badge>
        <Button variant="outline" size="sm">
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
}
