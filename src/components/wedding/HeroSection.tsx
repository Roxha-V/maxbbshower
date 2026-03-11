import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = weddingConfig.heroImages;

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow de imágenes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          >
            {/* Overlay más oscuro para que el texto blanco se lea bien sobre fotos B/N */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/65" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles del slideshow */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicadores */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Contenido central */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-5 md:space-y-7 max-w-4xl mx-auto"
        >
          {/* Título "¡Nuestra Boda!" */}
          {weddingConfig.hero?.title && (
            <motion.p
              className="font-accent text-white text-2xl md:text-3xl tracking-wide hero-text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {weddingConfig.hero.title}
            </motion.p>
          )}

          {/* Nombres de los novios */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white hero-text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {weddingConfig.couple.coupleNames}
          </motion.h1>

          {/* Cita bíblica - más grande y destacada */}
          {weddingConfig.hero?.bibleRef && (
            <motion.p
              className="font-body text-white text-base md:text-lg hero-text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {weddingConfig.hero.bibleRef}
            </motion.p>
          )}
          {weddingConfig.hero?.bibleQuote && (
            <motion.p
              className="font-accent text-white text-lg md:text-xl lg:text-2xl italic max-w-xl mx-auto leading-relaxed hero-text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {weddingConfig.hero.bibleQuote}
            </motion.p>
          )}

          {/* "Nuestro sí para siempre" */}
          {weddingConfig.hero?.ourYes && (
            <motion.p
              className="font-accent text-white text-xl md:text-2xl lg:text-3xl hero-text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {weddingConfig.hero.ourYes}
            </motion.p>
          )}

          {/* Fecha - más grande */}
          <motion.p
            className="font-body text-white text-xl md:text-2xl lg:text-3xl font-medium hero-text-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {weddingConfig.event.ceremony.date}
          </motion.p>

          {/* Divisor decorativo */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
