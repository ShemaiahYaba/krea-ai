import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AppFooter() {
  return (
    <footer className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="ghost"
          className="h-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black font-normal"
        >
          <Link href="#">
            <span className="font-normal tracking-tight">Legal</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="h-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black font-normal"
        >
          <Link href="#">
            <span className="font-normal tracking-tight">Pricing</span>
          </Link>
        </Button>
      </div>
    </footer>
  );
}
