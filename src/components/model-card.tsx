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
import { MulticoloredIcon, BlackToWhiteGradientIcon, BlueGradientIcon, DarkPurpleGradientIcon, BlackTealGradientIcon } from "./custom-icons";
import { ImageIcon } from "lucide-react";

type ModelCardProps = {
  model: Model;
  className?: string;
  layout?: "default" | "overlay";
};

const iconComponents: { [key: string]: React.ElementType } = {
  Image: ImageIcon,
  Video: "orange",
  Realtime: BlueGradientIcon,
  Enhancer: BlackToWhiteGradientIcon,
  Edit: "skip",
  "Video Lipsync": DarkPurpleGradientIcon,
  "Motion Transfer": BlackTealGradientIcon,
  Train: "black",
  "multicolored": MulticoloredIcon,
};

export function ModelCard({ model, className, layout = "default" }: ModelCardProps) {
  const IconComponent = iconComponents[model.name] || model.icon;
  
  const getIcon = () => {
    if (typeof IconComponent === 'string') {
        if(IconComponent === 'orange'){
            return <model.icon className="w-6 h-6 text-orange-500 fill-orange-500" />;
        }
        if(IconComponent === 'black'){
            return <model.icon className="w-6 h-6 text-black fill-black dark:text-white dark:fill-white" />;
        }
        if(IconComponent === 'skip'){
            return <model.icon className="w-6 h-6 text-muted-foreground" />;
        }
    }
    if(model.name === 'Image'){
        return <model.icon className="w-6 h-6 text-gray-400 fill-gray-400" />;
    }
    return <IconComponent className="w-6 h-6" />;
  };


  if (layout === "overlay") {
    return (
      <Card className={cn("overflow-hidden relative rounded-3xl", className)}>
        <Image
          src={model.imageUrl}
          alt={model.name}
          fill
          className="object-cover"
          data-ai-hint={model.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-black/90" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            <p className="font-extralight uppercase tracking-tighter text-xs">{model.isNew ? "New image model" : ""}</p>
            <div className="flex-grow flex items-center justify-center">
                  <CardTitle className="text-4xl font-bold text-center">
                    {model.name}
                  </CardTitle>
              </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-medium">Create with</p>
                <p className="text-xs text-white/80">{model.description}</p>
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

  return (
    <Card className={cn("overflow-hidden rounded-3xl shadow-none border-none", className)}>
      <CardContent className="p-4 flex items-center gap-4">
        <div className="bg-muted rounded-lg p-2 flex items-center justify-center">
            {getIcon()}
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg font-semibold">{model.name}</CardTitle>
            {model.isNew && <Badge variant="info">New</Badge>}
          </div>
          <CardDescription className="text-sm mt-1">
            {model.description}
          </CardDescription>
        </div>
        <Button variant="ghost" size="sm" className="bg-muted hover:bg-white hover:text-black rounded-full">
          Open
        </Button>
      </CardContent>
    </Card>
  );
}
