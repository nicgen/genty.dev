import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProps {
  images: (string | { src: string })[];
  title: string;
  theme?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title, theme = 'dark' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getImageUrl = (img: string | { src: string }) => {
    return typeof img === 'string' ? img : img.src;
  };

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const primaryColor = theme === 'light' ? 'bg-primary' : 'bg-primary';

  return (
    <div className="aspect-[16/10] bg-surface-container overflow-hidden relative group border border-outline-variant">
      <div className="w-full h-full relative flex">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={getImageUrl(images[currentImageIndex])}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
      
      {/* Indicators - Centered Circles */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'bg-primary scale-125' : 'bg-on-surface/20'
              }`}
            />
          ))}
        </div>
      )}
      
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default Gallery;
