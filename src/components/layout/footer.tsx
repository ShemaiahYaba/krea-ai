import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Library, CreditCard } from "lucide-react";

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
            <Library className="h-4 w-4" />
            <span className="font-normal tracking-tight">Legal</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="h-8 rounded-full bg-muted text-foreground hover:bg-white hover:text-black font-normal"
        >
          <Link href="#">
            <CreditCard className="h-4 w-4" />
            <span className="font-normal tracking-tight">Pricing</span>
          </Link>
        </Button>
      </div>
    </footer>
  );
}
