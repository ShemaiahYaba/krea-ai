"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Image, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppHeader() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
        <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="text-lg font-bold w-10 h-10 p-0">
                <Link href="/">K</Link>
            </Button>
            <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/seed/107/100/100" alt="User" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
        </div>
        
        <nav className="hidden md:flex">
            <div className="flex items-center gap-2 rounded-full bg-muted p-1">
                {navItems.map(item => {
                    const Icon = item.icon;
                    return (
                        <Button
                            key={item.label}
                            asChild
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "h-8 w-8 rounded-full bg-transparent transition-colors hover:bg-white hover:text-foreground",
                                (item.href === "/" ? pathname === item.href : pathname.startsWith(item.href))
                                    ? "text-foreground bg-white"
                                    : "text-muted-foreground"
                            )}
                        >
                            <Link href={item.href} title={item.label}>
                                <Icon className="h-4 w-4" />
                                <span className="sr-only">{item.label}</span>
                            </Link>
                        </Button>
                    );
                })}
            </div>
        </nav>

        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
            <Button asChild className="h-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black">
              <Link href="/gallery">
                <Image className="h-4 w-4" />
                <span>Gallery</span>
              </Link>
            </Button>
            <Button asChild className="h-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black">
              <Link href="#">
                <Headphones className="h-4 w-4" />
                <span>Support</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black">
                <Bell className="h-4 w-4" fill="currentColor" />
                <span className="sr-only">Notifications</span>
            </Button>
            <ThemeToggle />
            <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/seed/107/100/100" alt="User" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
        </div>
    </header>
  );
}
