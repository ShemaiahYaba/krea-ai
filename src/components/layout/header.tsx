"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Image, Headphones, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

export function AppHeader() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
        <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="text-lg font-bold w-10 h-10 p-0">
                <Link href="/">K</Link>
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 rounded-full h-9 w-auto px-2 bg-white hover:bg-white font-normal text-black">
                        <Avatar className="h-8 w-8 bg-gradient-to-b from-pink-300/50 to-blue-400/50 backdrop-blur-2xl">
                            <AvatarFallback className="bg-transparent text-white"></AvatarFallback>
                        </Avatar>
                        <span className="hidden md:block text-sm">Username</span>
                        <ChevronDown className="h-4 w-4 hidden md:block" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
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
                                    ? "text-neutral-500 bg-white"
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

        <div className="flex items-center gap-2">
            <Button asChild className="h-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black font-normal">
              <Link href="/gallery">
                <Image className="h-4 w-4" />
                <span className="tracking-tight">Gallery</span>
              </Link>
            </Button>
            <Button asChild className="h-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black font-normal">
              <Link href="#">
                <Headphones className="h-4 w-4" />
                <span className="tracking-tight">Support</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black">
                <Bell className="h-4 w-4" fill="currentColor" />
                <span className="sr-only">Notifications</span>
            </Button>
            <ThemeToggle />
            <Avatar className="h-8 w-8 bg-gradient-to-b from-pink-300/50 to-blue-400/50 backdrop-blur-2xl">
                <AvatarFallback className="bg-transparent text-white"></AvatarFallback>
            </Avatar>
        </div>
    </header>
  );
}
