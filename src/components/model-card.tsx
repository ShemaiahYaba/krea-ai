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
      <Card className={cn("overflow-hidden relative group rounded-3xl", className)}>
        <Image
          src={model.imageUrl}
          alt={model.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          data-ai-hint={model.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-black/90" />
        <div className="relative flex flex-col h-full p-12 text-white">
            <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-transparent text-white border-none font-light uppercase tracking-tighter">New image model</Badge>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <CardTitle className="text-4xl font-bold text-center">
                  {model.name}
                </CardTitle>
            </div>
            <div className="absolute bottom-16 left-16">
                <p className="text-sm font-medium">Create with</p>
                <p className="text-xs text-white/80">{model.description}</p>
            </div>
            <div className="absolute bottom-16 right-16">
                <Button className="bg-white text-black hover:bg-neutral-200 hover:text-black border-none rounded-full">
                    Try "{model.name}"
                </Button>
            </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("overflow-hidden rounded-3xl shadow-none border-none", className)}>
      <CardContent className="p-4 flex items-center gap-4">
        <div className="bg-muted rounded-lg p-2 flex items-center justify-center">
          <model.icon className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg font-semibold">{model.name}</CardTitle>
            {model.isNew && <Badge>New</Badge>}
          </div>
          <CardDescription className="text-sm mt-1">
            {model.description}
          </CardDescription>
        </div>
        <Button variant="ghost" size="sm" className="bg-muted hover:bg-background hover:text-black rounded-full">
          Open
        </Button>
      </CardContent>
    </Card>
  );
}
