"use client";

import React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navItems } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";

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

export function AppSidebar() {
  const pathname = usePathname();

  return (
      <Sidebar>
        <SidebarHeader>
            <div className="flex items-center gap-2">
                <KreaLogo />
                <div className="flex flex-col">
                    <span className="font-semibold tracking-tight text-lg">Krea</span>
                </div>
            </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  href={item.href}
                  isActive={item.href === "/" ? pathname === item.href : pathname.startsWith(item.href)}
                  className="h-10 justify-start"
                  tooltip={item.label}
                >
                    <div className="p-2 bg-muted rounded-full">
                        <item.icon className="size-5 text-secondary-foreground" />
                    </div>
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <ThemeToggle />
          <div className="flex items-center gap-3">
             <Avatar className="size-8">
              <AvatarImage src="https://picsum.photos/seed/107/100/100" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
                <span className="font-semibold text-foreground">User</span>
                <span className="text-muted-foreground">user@krea.ai</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
  );
}
