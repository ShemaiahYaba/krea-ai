"use client"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Wand2, Film, PictureInPicture } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ImageGenerator() {
    const generatedImage = PlaceHolderImages.find(p => p.id === 'generated-image');

    return (
        <Card className="w-full">
            <CardContent className="p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                        <Tabs defaultValue="enhance">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="enhance"><Wand2 className="mr-2 size-4" />Enhance</TabsTrigger>
                                <TabsTrigger value="realtime"><PictureInPicture className="mr-2 size-4"/>Realtime</TabsTrigger>
                                <TabsTrigger value="animate"><Film className="mr-2 size-4"/>Animate</TabsTrigger>
                            </TabsList>
                            <TabsContent value="enhance" className="mt-4">
                                <p className="text-sm text-muted-foreground">Upscale, edit and enhance your images with AI.</p>
                            </TabsContent>
                            <TabsContent value="realtime" className="mt-4">
                                <p className="text-sm text-muted-foreground">Generate images in real-time as you type.</p>
                            </TabsContent>
                             <TabsContent value="animate" className="mt-4">
                                <p className="text-sm text-muted-foreground">Bring your images to life with motion.</p>
                            </TabsContent>
                        </Tabs>

                        <div className="relative">
                            <Textarea 
                                placeholder="A cinematic shot of a raccoon in a futuristic city, neon lights, 8k"
                                className="min-h-[120px] pr-20"
                            />
                            <Button className="absolute bottom-2.5 right-2.5">Generate</Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Select defaultValue="1:1">
                                <SelectTrigger>
                                    <SelectValue placeholder="Aspect Ratio" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1:1">1:1</SelectItem>
                                    <SelectItem value="16:9">16:9</SelectItem>
                                    <SelectItem value="4:3">4:3</SelectItem>
                                    <SelectItem value="3:2">3:2</SelectItem>
                                </SelectContent>
                            </Select>
                             <Select defaultValue="v2.2">
                                <SelectTrigger>
                                    <SelectValue placeholder="Model" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="v2.2">WAN 2.2</SelectItem>
                                    <SelectItem value="v2.1">WAN 2.1</SelectItem>
                                    <SelectItem value="v2.0">WAN 2.0</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-muted/50 rounded-lg overflow-hidden border">
                         {generatedImage && (
                            <Image
                                src={generatedImage.imageUrl}
                                alt={generatedImage.description}
                                data-ai-hint={generatedImage.imageHint}
                                width={512}
                                height={512}
                                className="aspect-square object-cover"
                            />
                         )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
