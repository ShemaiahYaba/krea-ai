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
import { ImageIcon, Film, PictureInPicture, Sparkles, Pencil, Move, Bot, BrainCircuit, LucideIcon, Wand2 } from "lucide-react";

type ModelCardProps = {
  model: Model;
  className?: string;
  layout?: "default" | "overlay";
};

const iconConfig: { [key: string]: { background: string, icon: React.ElementType | LucideIcon, iconClassName?: string } } = {
    Image: { background: "bg-gray-200 dark:bg-gray-700", icon: ImageIcon, iconClassName: "text-gray-500 dark:text-gray-400" },
    Video: { background: "bg-orange-500", icon: Film, iconClassName: "text-white" },
    Realtime: { background: "blue-gradient", icon: PictureInPicture, iconClassName: "text-white" },
    Enhancer: { background: "black-to-white-gradient", icon: Sparkles, iconClassName: "text-black dark:text-white" },
    Edit: { background: "bg-muted", icon: Pencil, iconClassName: "text-muted-foreground" },
    "Video Lipsync": { background: "dark-purple-gradient", icon: Bot, iconClassName: "text-white" },
    "Motion Transfer": { background: "black-teal-gradient", icon: Move, iconClassName: "text-white" },
    Train: { background: "bg-black dark:bg-white", icon: BrainCircuit, iconClassName: "text-white dark:text-black" },
    "multicolored": { background: "multicolored", icon: Wand2, iconClassName: "text-white" },
};


export function ModelCard({ model, className, layout = "default" }: ModelCardProps) {
    const config = iconConfig[model.name] || { background: 'bg-muted', icon: model.icon, iconClassName: 'text-muted-foreground' };
    const IconComponent = config.icon as React.ElementType;

    const getBackgroundClass = () => {
        switch (config.background) {
            case 'blue-gradient':
                return 'bg-gradient-to-br from-blue-400 to-blue-600';
            case 'black-to-white-gradient':
                return 'bg-gradient-to-br from-black to-gray-500 dark:from-white dark:to-gray-300';
            case 'dark-purple-gradient':
                return 'bg-gradient-to-br from-purple-800 to-purple-900';
            case 'black-teal-gradient':
                return 'bg-gradient-to-br from-black to-teal-600';
            case 'multicolored':
                 return 'bg-gradient-to-br from-red-400 via-green-400 to-blue-400';
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
        <div className={cn("rounded-lg p-2 flex items-center justify-center", getBackgroundClass())}>
            <IconComponent className={cn("w-6 h-6", config.iconClassName)} />
        </div>
        <div className="flex-grow flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-semibold">{model.name}</CardTitle>
            {model.isNew && <Badge variant="info">New</Badge>}
          </div>
          <CardDescription className="text-sm">
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
