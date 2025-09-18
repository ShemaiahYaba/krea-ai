import {
  Camera,
  Home,
  LayoutGrid,
  Pencil,
  Scissors,
  Type,
  LucideIcon,
  Wand2,
  PictureInPicture,
  Film,
  Sparkles,
  PenTool,
  Palette,
  Scan,
  Database,
  User,
  Trees,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Generate", href: "#", icon: Camera },
  { label: "Edit", href: "#", icon: Scissors },
  { label: "Draw", href: "#", icon: Pencil },
  { label: "Text", href: "#", icon: Type },
  { label: "Models", href: "#", icon: LayoutGrid },
];

export type Model = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  isFeatured?: boolean;
  icon: LucideIcon;
  isNew?: boolean;
};

export const models: Model[] = [
  {
    id: "1",
    name: "WAN 2.2",
    description: "The latest in generative image technology.",
    imageUrl: "https://picsum.photos/seed/106/800/600",
    imageHint: "neural network",
    icon: Wand2,
    isNew: true,
  },
  {
    id: "2",
    name: "Realtime Gen",
    description: "See your creations come to life instantly.",
    imageUrl: "https://picsum.photos/seed/101/600/400",
    imageHint: "abstract tech",
    icon: PictureInPicture,
  },
  {
    id: "3",
    name: "Image Enhance",
    description: "Upscale and refine your images with AI.",
    imageUrl: "https://picsum.photos/seed/102/600/400",
    imageHint: "futuristic city",
    icon: Sparkles,
  },
  {
    id: "4",
    name: "Motion Transfer",
    description: "Animate your static images with motion.",
    imageUrl: "https://picsum.photos/seed/103/600/400",
    imageHint: "dynamic motion",
    icon: Film,
    isNew: true,
  },
  {
    id: "5",
    name: "Logo Diffusion",
    description: "Create stunning logos from text prompts.",
    imageUrl: "https://picsum.photos/seed/105/600/400",
    imageHint: "minimalist logo",
    icon: Scan,
  },
  {
    id: "6",
    name: "Upscale+",
    description: "Advanced upscaling for professional quality.",
    imageUrl: "https://picsum.photos/seed/104/600/400",
    imageHint: "high resolution",
    icon: Database,
  },
  {
    id: "7",
    name: "Vector Magic",
    description: "Generate high-quality vector graphics.",
    imageUrl: "https://picsum.photos/seed/109/600/400",
    imageHint: "geometric patterns",
    icon: PenTool,
  },
  {
    id: "8",
    name: "AI Painter",
    description: "Transform photos into artistic paintings.",
    imageUrl: "https://picsum.photos/seed/110/600/400",
    imageHint: "oil painting",
    icon: Palette,
    isNew: true,
  },
];

export const recommendations: Model[] = [
    ...models.slice(0, 6),
    {
        id: "9",
        name: "3D Texture",
        description: "Generate textures for 3D models.",
        imageUrl: "https://picsum.photos/seed/111/600/400",
        imageHint: "fabric texture",
        icon: Trees,
    },
    {
        id: "10",
        name: "Portrait Plus",
        description: "Create lifelike portraits from descriptions.",
        imageUrl: "https://picsum.photos/seed/112/600/400",
        imageHint: "detailed portrait",
        icon: User,
    },
    {
        id: "11",
        name: "Fantasy World",
        description: "Build breathtaking fantasy landscapes.",
        imageUrl: "https://picsum.photos/seed/113/600/400",
        imageHint: "fantasy landscape",
        icon: Trees,
    },
].slice(0, 9);

export type GalleryItem = {
  id: string;
  imageUrl: string;
  imageHint: string;
  rowSpan?: number;
  colSpan?: number;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", imageUrl: "https://picsum.photos/seed/g1/800/600", imageHint: "abstract nature", colSpan: 2, rowSpan: 2 },
  { id: "g2", imageUrl: "https://picsum.photos/seed/g2/600/800", imageHint: "cyberpunk alley", rowSpan: 2 },
  { id: "g3", imageUrl: "https://picsum.photos/seed/g3/600/400", imageHint: "serene lake" },
  { id: "g4", imageUrl: "https://picsum.photos/seed/g4/600/400", imageHint: "mountain peak" },
  { id: "g5", imageUrl: "https://picsum.photos/seed/g5/800/600", imageHint: "glowing forest", colSpan: 2, rowSpan: 2 },
  { id: "g6", imageUrl: "https://picsum.photos/seed/g6/600/400", imageHint: "retro diner" },
  { id: "g7", imageUrl: "https://picsum.photos/seed/g7/600/400", imageHint: "space station" },
];
