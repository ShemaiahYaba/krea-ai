"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const KreaLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="url(#paint0_linear_1_2)"/>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8E44AD"/>
                <stop offset="1" stopColor="#9B59B6"/>
            </linearGradient>
        </defs>
    </svg>
)

export function AppHeader() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
            <KreaLogo />
            <span className="">Krea</span>
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            {navItems.map(item => (
                <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                        "transition-colors hover:text-foreground",
                        (item.href === "/" ? pathname === item.href : pathname.startsWith(item.href))
                            ? "text-foreground"
                            : "text-muted-foreground"
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:justify-end md:gap-2 lg:gap-4">
            <Button variant="outline" size="icon" className="h-8 w-8">
                <Upload className="h-4 w-4" />
                <span className="sr-only">Upload</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
                <Bell className="h-4 w-4" />
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
