import React from 'react';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductHeaderProps {
  className?: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      'flex items-center justify-between h-16 w-full px-4 md:px-6',
      'sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b',
      className
    )}>
      <a href="#" className="text-2xl font-bold text-primary">
        AudioPure
      </a>
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" size="icon" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="User Account">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute top-[9px] right-[9px] text-xs font-semibold text-foreground">0</span>
        </Button>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default ProductHeader;
