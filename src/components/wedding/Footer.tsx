import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-primary/30 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Heart className="w-12 h-12 text-rose mx-auto" />
          
          <h3 className="font-display text-3xl md:text-4xl text-foreground">
            ¡Te esperamos!
          </h3>
          
          <p className="font-body text-muted-foreground">
            {weddingConfig.event.ceremony.date}
          </p>

          <div className="elegant-divider" />

          <p className="font-body text-sm text-muted-foreground">
            Esperamos con ansias celebrar este día tan especial con vos
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
