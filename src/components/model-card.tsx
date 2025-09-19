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
import { DraftingCompassIcon, MulticoloredIcon, SolidMicIcon } from "./custom-icons";
import { ImageIcon, Film, PictureInPicture, Sparkles, Compass, Move, Bot, BrainCircuit, LucideIcon, Wand2, Mic } from "lucide-react";

type ModelCardProps = {
  model: Model;
  className?: string;
  layout?: "default" | "overlay";
};

const iconConfig: { [key: string]: { background: string, icon: React.ElementType | LucideIcon, iconClassName?: string } } = {
    Image: { background: "dark-gray-gradient", icon: ImageIcon, iconClassName: "text-white" },
    Video: { background: "bg-orange-500", icon: Film, iconClassName: "text-white" },
    Realtime: { background: "blue-gradient", icon: PictureInPicture, iconClassName: "text-white" },
    Enhancer: { background: "black-to-white-gradient", icon: Wand2, iconClassName: "text-white" },
    Edit: { background: "edit-purple-gradient", icon: DraftingCompassIcon, iconClassName: "text-white/90" },
    "Video Lipsync": { background: "lipsync-gradient", icon: SolidMicIcon, iconClassName: "text-white" },
    "Motion Transfer": { background: "bg-black", icon: Move, iconClassName: "text-white" },
    Train: { background: "bg-white", icon: MulticoloredIcon, iconClassName: "" },
    "multicolored": { background: "multicolored", icon: Wand2, iconClassName: "text-white" },
};


export function ModelCard({ model, className, layout = "default" }: ModelCardProps) {
    const config = iconConfig[model.name] || { background: 'bg-muted', icon: model.icon, iconClassName: 'text-muted-foreground' };
    const IconComponent = config.icon as React.ElementType;

    const getBackgroundClass = () => {
        switch (config.background) {
            case 'blue-gradient':
                return 'bg-gradient-to-b from-sky-500 to-sky-300';
            case 'black-to-white-gradient':
                return 'bg-gradient-to-br from-black to-gray-500 dark:from-white dark:to-gray-300';
            case 'dark-purple-gradient':
                return 'bg-gradient-to-br from-purple-800 to-purple-900';
            case 'edit-purple-gradient':
                return 'bg-gradient-to-b from-purple-950 to-purple-800';
            case 'multicolored':
                 return 'bg-gradient-to-br from-red-400 via-green-400 to-blue-400';
            case 'dark-gray-gradient':
                return 'bg-gradient-to-b from-gray-600 to-gray-400';
            case 'lipsync-gradient':
                return 'bg-gradient-to-b from-gray-800 via-teal-500 to-gray-400';
            default:
                return config.background;
        }
    }

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

  return (
    <Card className={cn("overflow-hidden rounded-3xl shadow-none border-none", className)}>
      <CardContent className="p-4 flex items-center gap-4">
        <div className={cn("rounded-2xl p-3 flex items-center justify-center", getBackgroundClass())}>
            <IconComponent className={cn("w-7 h-7", config.iconClassName)} />
        </div>
        <div className="flex-grow flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-semibold">{model.name}</CardTitle>
            {model.isNew && <Badge variant="info">New</Badge>}
          </div>
          <CardDescription className="text-xs">
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
