import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

const imagesData: ProductImage[] = [
  { id: 'img1', src: '/placeholder.svg', alt: 'AuraSound X1 headphones on a yellow background' },
  { id: 'img2', src: '/placeholder.svg', alt: 'AuraSound X1 headphones on a pink background' },
  { id: 'img3', src: '/placeholder.svg', alt: 'AuraSound X1 earbuds version with case on a light purple surface' }
];

interface ProductImageShowcaseProps {
  className?: string;
}

const ProductImageShowcase: React.FC<ProductImageShowcaseProps> = ({ className }) => {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(imagesData[0]);

  // This function is for demonstration; replace src with actual image paths.
  // A simple way to get different placeholder colors.
  const getPlaceholderSrc = (id: string, color: string) => {
    const text = id.toUpperCase();
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='100%25' height='100%25' fill='%23${color}'/%3E%3C/svg%3E`;
  };

  const enrichedImages = [
    { ...imagesData[0], src: getPlaceholderSrc('Main', 'facc15') }, // yellow-400
    { ...imagesData[1], src: getPlaceholderSrc('Side', 'f9a8d4') }, // pink-300
    { ...imagesData[2], src: getPlaceholderSrc('Case', 'e9d5ff') }  // purple-200
  ];

  const [mainImage, setMainImage] = useState(enrichedImages[0]);

  const handleThumbnailClick = (image: ProductImage) => {
    setMainImage(image);
  };

  return (
    <div className={cn('grid gap-4 md:gap-6', className)}>
      <Card className="overflow-hidden rounded-xl border-none shadow-none">
        <img
          alt={mainImage.alt}
          src={mainImage.src}
          className="aspect-[4/3] w-full object-cover object-center"
        />
      </Card>
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {enrichedImages.map((image) => (
          <button
            key={image.id}
            onClick={() => handleThumbnailClick(image)}
            className={cn(
              'overflow-hidden rounded-lg ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              mainImage.id === image.id ? 'ring-2 ring-primary' : 'ring-1 ring-border'
            )}
          >
            <img
              alt={image.alt}
              src={image.src}
              className="aspect-square w-full object-cover object-center transition-transform hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageShowcase;
