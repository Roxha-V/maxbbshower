import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Sparkles } from 'lucide-react';

const OurStory = () => {
  const sis = weddingConfig.babyShower.sister?.name?.trim() || "Mia";

  return (
    <section className="section-container bg-gradient-to-b from-secondary/38 via-accent/[0.04] to-muted/22">
      <div className="max-w-6xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <Sparkles className="w-11 h-11 sm:w-12 sm:h-12 text-accent mx-auto mb-5 opacity-95" strokeWidth={1.2} />
          <h2 className="invite-section-title mb-4 max-w-sm mx-auto">{weddingConfig.ourStory.title}</h2>
          <div className="w-[min(30%,14rem)] h-px bg-gradient-to-r from-transparent via-accent/90 to-transparent mx-auto shadow-soft" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Texto a la izquierda (primer columna en desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 md:order-1"
          >
            <p className="font-body text-foreground/[0.88] leading-relaxed whitespace-pre-line text-[clamp(0.95rem,2.75vw,1.165rem)] text-center md:text-left">
              {weddingConfig.ourStory.content}
            </p>

            {/* Firma decorativa */}
            <div className="pt-8 border-t border-border/50">
              <p className="font-display text-2xl md:text-3xl text-primary text-center md:text-left">
                Con cariño,
              </p>
              <p className="font-display text-2xl md:text-3xl text-foreground text-center md:text-left mt-2">
                {weddingConfig.babyShower.momName}, {weddingConfig.babyShower.dadName} y {sis}
                {' — '}
                <span className="font-body text-xl md:text-2xl font-medium text-foreground/78 italic">
                  esperando con todo el amor a {weddingConfig.couple.coupleNames}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Imagen a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-[4/5] max-h-[min(92vh,520px)] mx-auto md:mx-0 w-full rounded-[clamp(1.25rem,4vw,1.85rem)] overflow-hidden shadow-elegant ring-2 ring-accent/25 ring-offset-4 ring-offset-background">
              <img
                src={weddingConfig.ourStory.image}
                alt="El bosque de Max"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -inset-3 rounded-[clamp(1.35rem,4.2vw,2rem)] border border-primary/22 -z-10" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
