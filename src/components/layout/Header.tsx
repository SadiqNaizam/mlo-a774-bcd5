import React from 'react';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between h-16 w-full px-4 md:px-6',
        'sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="flex items-center gap-6">
        <a href="#" className="text-2xl font-bold text-primary">
          AudioPure
        </a>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" size="icon" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="User Account">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute top-[9px] right-[9px] flex h-2 w-2 items-center justify-center rounded-full text-[10px] font-bold text-primary-foreground">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
             <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px]">0</span>
          </span>
        </Button>
        <Button variant="ghost" size="icon" aria-label="Menu" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
