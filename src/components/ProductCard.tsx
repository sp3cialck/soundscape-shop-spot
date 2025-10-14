import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-to-b from-card to-card/50 border-border/50 transition-all duration-300 hover:shadow-[var(--shadow-product-hover)]">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-5">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">${price}</p>
          <Button size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
