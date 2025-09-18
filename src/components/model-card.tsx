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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative flex flex-col h-full p-4 text-white">
            <div className="flex-grow" />
            <CardTitle className="text-lg font-semibold">{model.name}</CardTitle>
            <CardDescription className="text-sm mt-1 text-white/90">
                {model.description}
            </CardDescription>
            <div className="mt-4 flex justify-between items-center">
                <Badge variant="secondary" className="bg-white/20 text-white border-none">by {model.author}</Badge>
                <Button variant="outline" size="sm" className="bg-white/20 text-white border-none hover:bg-white/30">
                    Explore
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
