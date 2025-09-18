"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppHeader() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
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
            <Button asChild className="h-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black">
              <Link href="#">
                <LayoutGrid className="h-4 w-4" />
                <span>Gallery</span>
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
