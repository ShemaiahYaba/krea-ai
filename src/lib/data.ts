import {
  Camera,
  Home,
  LayoutGrid,
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
  Image as ImageIcon,
  Move,
  Bot,
  BrainCircuit,
  Mic,
  Folder,
} from "lucide-react";
import { DraftingCompassIcon, SolidMicIcon } from "@/components/custom-icons";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Image", href: "#", icon: ImageIcon },
  { label: "Video", href: "#", icon: Film },
  { label: "Realtime", href: "#", icon: PictureInPicture },
  { label: "Enhancer", href: "#", icon: Wand2 },
  { label: "Edit", href: "#", icon: DraftingCompassIcon },
  { label: "Files", href: "#", icon: Folder },
];

export type Model = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  isFeatured?: boolean;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  isNew?: boolean;
};

export const models: Model[] = [
  {
    id: "1",
    name: "Image",
    description: "Generate images from text.",
    imageUrl: "https://picsum.photos/seed/106/800/600",
    imageHint: "neural network",
    icon: ImageIcon,
    isNew: true,
  },
  {
    id: "2",
    name: "Video",
    description: "Create videos from text or images.",
    imageUrl: "https://picsum.photos/seed/101/600/400",
    imageHint: "abstract tech",
    icon: Film,
  },
  {
    id: "3",
    name: "Realtime",
    description: "See your creations come to life instantly.",
    imageUrl: "https://picsum.photos/seed/102/600/400",
    imageHint: "futuristic city",
    icon: PictureInPicture,
  },
  {
    id: "4",
    name: "Enhancer",
    description: "Upscale and enhance images and videos up to 22k",
    imageUrl: "https://picsum.photos/seed/103/600/400",
    imageHint: "dynamic motion",
    icon: Wand2,
    isNew: true,
  },
  {
    id: "5",
    name: "Edit",
    description: "Edit your images with text prompts.",
    imageUrl: "https://picsum.photos/seed/105/600/400",
    imageHint: "minimalist logo",
    icon: DraftingCompassIcon,
    isNew: true,
  },
  {
    id: "6",
    name: "Video Lipsync",
    description: "Make your portraits talk.",
    imageUrl: "https://picsum.photos/seed/104/600/400",
    imageHint: "high resolution",
    icon: SolidMicIcon,
    isNew: true,
  },
  {
    id: "7",
    name: "Motion Transfer",
    description: "Animate your static images with motion.",
    imageUrl: "https://picsum.photos/seed/109/600/400",
    imageHint: "geometric patterns",
    icon: Move,
    isNew: true,
  },
  {
    id: "8",
    name: "Train",
    description: "Teach Krea to replicate your style, products or characters",
    imageUrl: "https://picsum.photos/seed/110/600/400",
    imageHint: "oil painting",
    icon: BrainCircuit,
    isNew: false,
  },
];

export const recommendations: Model[] = [
    {
        id: "1",
        name: "WAN 2.2",
        description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
        imageUrl: "https://picsum.photos/seed/106/800/600",
        imageHint: "neural network",
        icon: ImageIcon,
        isNew: true,
    },
    {
        id: "2",
        name: "Open source",
        description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with in Krea Image",
        imageUrl: "https://picsum.photos/seed/101/600/400",
        imageHint: "abstract tech",
        icon: Film,
        isNew: true,
    },
    {
        id: "3",
        name: "Realtime",
        description: "See your creations come to life instantly.",
        imageUrl: "https://picsum.photos/seed/102/600/400",
        imageHint: "futuristic city",
        icon: PictureInPicture,
        isNew: true,
    },
    {
        id: "4",
        name: "Enhancer",
        description: "Upscale and refine your images with AI.",
        imageUrl: "https://picsum.photos/seed/103/600/400",
        imageHint: "dynamic motion",
        icon: Wand2,
        isNew: true,
    },
    {
        id: "5",
        name: "Edit",
        description: "Edit your images with text prompts.",
        imageUrl: "https://picsum.photos/seed/105/600/400",
        imageHint: "minimalist logo",
        icon: DraftingCompassIcon,
        isNew: true,
    },
    {
        id: "6",
        name: "Video Lipsync",
        description: "Make your portraits talk.",
        imageUrl: "https://picsum.photos/seed/104/600/400",
        imageHint: "high resolution",
        icon: SolidMicIcon,
        isNew: true,
    },
    {
        id: "9",
        name: "3D Texture",
        description: "Generate textures for 3D models.",
        imageUrl: "https://picsum.photos/seed/111/600/400",
        imageHint: "fabric texture",
        icon: Trees,
        isNew: true,
    },
    {
        id: "10",
        name: "Portrait Plus",
        description: "Create lifelike portraits from descriptions.",
        imageUrl: "https://picsum.photos/seed/112/600/400",
        imageHint: "detailed portrait",
        icon: User,
        isNew: true,
    },
    {
        id: "11",
        name: "Fantasy World",
        description: "Build breathtaking fantasy landscapes.",
        imageUrl: "https://picsum.photos/seed/113/600/400",
        imageHint: "fantasy landscape",
        icon: Trees,
        isNew: true,
    },
];

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
