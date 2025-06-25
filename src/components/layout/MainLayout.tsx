import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('grid min-h-screen w-full grid-rows-[auto_1fr_auto]', className)}>
      <Header />
      <main className="flex flex-col items-center bg-secondary">
        {children}
      </main>
      <footer className="flex items-center justify-center border-t bg-background p-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AudioPure. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
