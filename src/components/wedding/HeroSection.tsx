import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Encuadre por imagen: mama-max tiene mucho cielo/cortinas arriba; bajamos el ancla para subir el sujeto. */
function heroBackgroundPosition(src: string): string {
  if (src.includes('mama-max-panza')) return 'center 72%';
  return 'center center';
}

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
    <section className="relative min-h-[100dvh] min-h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.35, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="w-full h-full relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover scale-[1.06] hero-bosque-photo bg-no-repeat"
              style={{
                backgroundImage: `url(${images[currentImage]})`,
                backgroundPosition: heroBackgroundPosition(images[currentImage])
              }}
              role="presentation"
            />
            <div className="absolute inset-0 hero-fairy-overlay" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Brillos muy sutiles */}
      <div className="enchant-sparkles opacity-55 mix-blend-soft-light" aria-hidden />

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 bg-white/12 hover:bg-white/22 text-white backdrop-blur-md border border-white/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 bg-white/12 hover:bg-white/22 text-white backdrop-blur-md border border-white/10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-white w-8' : 'bg-white/45 hover:bg-white/70'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="relative z-10 min-h-[100dvh] min-h-screen flex flex-col items-center justify-center text-center px-[clamp(1rem,5vw,1.75rem)] pb-[max(6.5rem,env(safe-area-inset-bottom,0px)+4.5rem)] sm:pb-24 pt-[max(3.25rem,env(safe-area-inset-top,0px)+1rem)]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="space-y-[clamp(0.875rem,2.8vw,1.65rem)] max-w-[min(100%,42rem)] mx-auto"
        >
          {weddingConfig.hero?.title && (
            <motion.p
              className="font-accent text-white hero-text-shadow text-[clamp(1.35rem,4.25vw,2.55rem)] leading-tight px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.58 }}
            >
              {weddingConfig.hero.title}
            </motion.p>
          )}

          {weddingConfig.babyShower?.parentsLine && (
            <motion.p
              className="font-body text-white/92 hero-text-shadow max-w-xl mx-auto text-[clamp(0.8125rem,3.1vw,1.0625rem)] font-medium tracking-wide px-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.62 }}
            >
              {weddingConfig.babyShower.parentsLine}
            </motion.p>
          )}

          <motion.h1
            className="font-display font-semibold tracking-tight text-white hero-text-shadow leading-[0.95] px-2 text-[clamp(3rem,13.5vw,6.75rem)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.78 }}
          >
            {weddingConfig.couple.coupleNames}
          </motion.h1>

          {weddingConfig.hero?.taglineLead && (
            <motion.p
              className="font-body text-white/[0.96] hero-text-shadow font-medium px-4 text-[clamp(0.9rem,3.3vw,1.125rem)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.85 }}
            >
              {weddingConfig.hero.taglineLead}
            </motion.p>
          )}
          {weddingConfig.hero?.taglineSoft && (
            <motion.p
              className="font-display italic font-medium text-white max-w-xl mx-auto leading-relaxed hero-text-shadow px-5 text-[clamp(0.975rem,3.55vw,1.285rem)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.95 }}
            >
              {weddingConfig.hero.taglineSoft}
            </motion.p>
          )}

          {weddingConfig.hero?.celebrationLine && (
            <motion.p
              className="font-accent text-white text-3xl md:text-4xl lg:text-[2.75rem] hero-text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.05 }}
            >
              {weddingConfig.hero.celebrationLine}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Indicador de scroll (solo pantalla) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.85, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 print:hidden sm:bottom-8"
      >
        <div className="w-6 h-10 border-2 border-white/45 rounded-full flex items-start justify-center p-2 bg-black/10 backdrop-blur-[2px]">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.55, repeat: Infinity }}
            className="w-1 h-2 bg-white/75 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
