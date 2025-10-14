import { ArrowRight, Star, ShoppingCart, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-headphones.jpg";
import wirelessPro from "@/assets/product-wireless-pro.jpg";
import noiseCancel from "@/assets/product-noise-cancel.jpg";
import studio from "@/assets/product-studio.jpg";
import sport from "@/assets/product-sport.jpg";
import luxury from "@/assets/product-luxury.jpg";
import travel from "@/assets/product-travel.jpg";

const Index = () => {
  const products = [
    { id: 1, name: "Wireless Pro X", price: 299, image: wirelessPro, category: "Wireless" },
    { id: 2, name: "QuietMax ANC", price: 349, image: noiseCancel, category: "Noise Canceling" },
    { id: 3, name: "Studio Monitor HD", price: 279, image: studio, category: "Studio" },
    { id: 4, name: "Sport Earbuds", price: 159, image: sport, category: "Sport" },
    { id: 5, name: "Luxury Edition", price: 449, image: luxury, category: "Premium" },
    { id: 6, name: "Travel Compact", price: 189, image: travel, category: "Travel" },
  ];

  const featuredProduct = products[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(220,40%,15%)] to-[hsl(217,50%,25%)]">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Premium Sound,
                <span className="text-primary block">Unmatched Quality</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-lg">
                Experience audio like never before with our cutting-edge headphone technology. Crystal clear sound meets premium comfort.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Shop Now <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Explore Collection
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center"
                    >
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">50,000+ Happy Customers</p>
                  <p className="text-white/60">5-Star Reviews</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={heroImage}
                alt="Premium Headphones"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section id="featured" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured This Month</h2>
            <p className="text-muted-foreground text-lg">Our bestselling headphone</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="aspect-square bg-secondary/20 rounded-xl overflow-hidden">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                    {featuredProduct.category}
                  </p>
                  <h3 className="text-3xl font-bold mb-4">{featuredProduct.name}</h3>
                  <p className="text-muted-foreground">
                    Experience studio-quality sound with advanced noise cancellation technology. 
                    Perfect for music lovers and professionals alike.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">${featuredProduct.price}</span>
                    <span className="text-muted-foreground line-through">$399</span>
                  </div>
                  
                  <Button size="lg" className="w-full gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Collection</h2>
            <p className="text-muted-foreground text-lg">Find the perfect headphones for your lifestyle</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Headphones className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">AudioPro</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2025 AudioPro. Premium headphones for audiophiles.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
