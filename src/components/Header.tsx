import { ShoppingCart, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Headphones className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">AudioPro</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </a>
          <a href="#featured" className="text-sm font-medium hover:text-primary transition-colors">
            Featured
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <Button size="sm" variant="ghost">
          <ShoppingCart className="h-5 w-5" />
          <span className="ml-2 hidden sm:inline">Cart</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
