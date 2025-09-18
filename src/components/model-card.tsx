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
};

export function ModelCard({ model, className }: ModelCardProps) {
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
