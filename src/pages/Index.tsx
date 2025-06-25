import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react';

import ProductHeader from '../components/ProductDetail/ProductHeader';
import BreadcrumbNavigation from '../components/ProductDetail/BreadcrumbNavigation';
import ProductImageShowcase from '../components/ProductDetail/ProductImageShowcase';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface ColorOption {
  name: string;
  hex: string;
}

const colorOptions: readonly ColorOption[] = [
  { name: 'Onyx Black', hex: '#1a1a1a' },
  { name: 'Pearl White', hex: '#f0f0f0' },
  { name: 'Cobalt Blue', hex: '#0047ab' },
] as const;

const IndexPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => {
      const newQuantity = prev + amount;
      if (newQuantity < 1) return 1;
      if (newQuantity > 10) return 10; // Max quantity limit
      return newQuantity;
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-sans">
      <ProductHeader />

      <main className="flex-1 bg-secondary/30">
        <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
          <BreadcrumbNavigation className="mb-8 hidden md:flex" />
          
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <ProductImageShowcase />

            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  AuraSound X1 Wireless
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent-secondary text-accent-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">(128 reviews)</p>
                </div>
                <p className="text-3xl font-semibold text-primary">$249.00</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-medium text-foreground">Color: <span className="font-normal text-muted-foreground">{selectedColor.name}</span></h3>
                  <div className="mt-2 flex items-center gap-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          'h-8 w-8 rounded-full border-2 transition-transform duration-150 ease-in-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                          selectedColor.hex === color.hex ? 'ring-2 ring-primary ring-offset-2' : 'border-border'
                        )}
                        style={{ backgroundColor: color.hex }}
                        aria-label={`Select color ${color.name}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <h3 className="text-md font-medium text-foreground">Quantity</h3>
                  <div className="flex items-center rounded-md border border-input">
                    <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => handleQuantityChange(-1)} aria-label="Decrease quantity">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-medium text-foreground">{quantity}</span>
                    <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => handleQuantityChange(1)} aria-label="Increase quantity">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full text-base font-semibold">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <div className="space-y-4 text-sm text-foreground/90">
                <h3 className="text-lg font-semibold text-foreground">Product Details</h3>
                <p>
                  Experience unparalleled audio with the AuraSound X1 Wireless headphones. Designed for audiophiles and casual listeners alike, they offer crystal-clear highs, deep bass, and active noise cancellation. Enjoy up to 30 hours of playtime on a single charge and seamless Bluetooth 5.2 connectivity.
                </p>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Active Noise Cancellation (ANC)</li>
                  <li>30-Hour Battery Life</li>
                  <li>High-Fidelity Graphene Drivers</li>
                  <li>Plush Memory Foam Earcups</li>
                  <li>Includes Protective Travel Case</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
