import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Heart } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="section-container bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heart className="w-12 h-12 text-rose mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {weddingConfig.ourStory.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={weddingConfig.ourStory.image}
                alt="Nuestra historia"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-3xl -z-10" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed whitespace-pre-line">
              {weddingConfig.ourStory.content}
            </p>

            {/* Firma decorativa */}
            <div className="pt-8 border-t border-border/50">
              <p className="font-display text-2xl md:text-3xl text-primary text-center md:text-left">
                Con amor,
              </p>
              <p className="font-display text-3xl md:text-4xl text-foreground text-center md:text-left mt-2">
                {weddingConfig.couple.coupleNames}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
