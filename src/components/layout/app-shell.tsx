import React from "react";
import { AppHeader } from "@/components/layout/header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <AppHeader />
        <main className="flex-1 p-4 sm:px-8 sm:py-6">
            {children}
        </main>
    </div>
  );
}
