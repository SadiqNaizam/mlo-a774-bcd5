import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  className?: string;
}

const breadcrumbItems: BreadcrumbItem[] = [
  { name: 'Home', href: '#' },
  { name: 'Headphones', href: '#' },
  { name: 'AuraSound X1' },
];

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ className }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('w-full', className)}>
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <li>
              {item.href ? (
                <a href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {item.name}
                </a>
              ) : (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
            {index < breadcrumbItems.length - 1 && (
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNavigation;
