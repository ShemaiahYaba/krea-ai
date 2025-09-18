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
];

export const recommendations = models.slice(0, 3);
