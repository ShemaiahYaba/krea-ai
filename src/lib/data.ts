import {
  Camera,
  Home,
  LayoutGrid,
  Pencil,
  Scissors,
  Type,
  LucideIcon,
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
  author: string;
  imageUrl: string;
  imageHint: string;
  isFeatured?: boolean;
};

export const models: Model[] = [
  {
    id: "1",
    name: "WAN 2.2",
    description: "The latest in generative image technology.",
    author: "Krea AI",
    imageUrl: "https://picsum.photos/seed/106/800/600",
    imageHint: "neural network",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Realtime Gen",
    description: "See your creations come to life instantly.",
    author: "Community",
    imageUrl: "https://picsum.photos/seed/101/600/400",
    imageHint: "abstract tech",
  },
  {
    id: "3",
    name: "Image Enhance",
    description: "Upscale and refine your images with AI.",
    author: "Krea AI",
    imageUrl: "https://picsum.photos/seed/102/600/400",
    imageHint: "futuristic city",
  },
  {
    id: "4",
    name: "Motion Transfer",
    description: "Animate your static images with motion.",
    author: "Community",
    imageUrl: "https://picsum.photos/seed/103/600/400",
    imageHint: "dynamic motion",
  },
  {
    id: "5",
    name: "Logo Diffusion",
    description: "Create stunning logos from text prompts.",
    author: "Krea AI",
    imageUrl: "https://picsum.photos/seed/105/600/400",
    imageHint: "minimalist logo",
    isFeatured: true,
  },
  {
    id: "6",
    name: "Upscale+",
    description: "Advanced upscaling for professional quality.",
    author: "Krea AI",
    imageUrl: "https://picsum.photos/seed/104/600/400",
    imageHint: "high resolution",
  },
  {
    id: "7",
    name: "Vector Magic",
    description: "Generate high-quality vector graphics.",
    author: "Community",
    imageUrl: "https://picsum.photos/seed/109/600/400",
    imageHint: "geometric patterns",
  },
  {
    id: "8",
    name: "AI Painter",
    description: "Transform photos into artistic paintings.",
    author: "Krea AI",
    imageUrl: "https://picsum.photos/seed/110/600/400",
    imageHint: "oil painting",
  },
];

export const recommendations: Model[] = [
    ...models.slice(0, 6),
    {
        id: "9",
        name: "3D Texture",
        description: "Generate textures for 3D models.",
        author: "Community",
        imageUrl: "https://picsum.photos/seed/111/600/400",
        imageHint: "fabric texture"
    },
    {
        id: "10",
        name: "Portrait Plus",
        description: "Create lifelike portraits from descriptions.",
        author: "Krea AI",
        imageUrl: "https://picsum.photos/seed/112/600/400",
        imageHint: "detailed portrait"
    },
    {
        id: "11",
        name: "Fantasy World",
        description: "Build breathtaking fantasy landscapes.",
        author: "Community",
        imageUrl: "https://picsum.photos/seed/113/600/400",
        imageHint: "fantasy landscape"
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
