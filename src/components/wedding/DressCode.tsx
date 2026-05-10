import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Shirt, X, Check } from 'lucide-react';

const DressCode = () => {
  return (
    <section className="section-container bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Shirt className="w-12 h-12 text-primary/85 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {weddingConfig.dressCode.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-border/50"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl md:text-4xl text-primary mb-4">
              {weddingConfig.dressCode.code}
            </h3>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              {weddingConfig.dressCode.description}
            </p>
          </div>

          <div className="elegant-divider" />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Colores a evitar */}
            <div className="space-y-4">
              <h4 className="font-display text-xl text-foreground flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                Colores a Evitar
              </h4>
              <div className="space-y-2">
                {weddingConfig.dressCode.colors.avoid.map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2 font-body text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-destructive/50" />
                    {color}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Colores sugeridos */}
            <div className="space-y-4">
              <h4 className="font-display text-xl text-foreground flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Colores Sugeridos
              </h4>
              <div className="space-y-2">
                {weddingConfig.dressCode.colors.suggested.map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2 font-body text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {color}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;
