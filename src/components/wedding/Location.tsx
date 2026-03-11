import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  const handleOpenMaps = () => {
    window.open(weddingConfig.location.mapUrl, '_blank');
  };

  return (
    <section className="section-container bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <MapPin className="w-12 h-12 text-accent mx-auto mb-4 md:mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 md:mb-4">
            Ubicación
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Aquí celebraremos nuestro gran día
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-3xl p-8 shadow-elegant border border-border/50">
              <h3 className="font-display text-3xl text-foreground mb-4 text-center md:text-left">
                {weddingConfig.location.venue}
              </h3>
              <p className="font-body text-lg text-muted-foreground mb-6 text-center md:text-left">
                {weddingConfig.location.address}
              </p>
              
              <Button 
                onClick={handleOpenMaps}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold"
                size="lg"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Ver Ubicación
              </Button>
            </div>

            {/* Indicaciones */}
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border/30">
              <h4 className="font-display text-xl text-foreground mb-3 text-center md:text-left">
                Indicaciones
              </h4>
              <p className="font-body text-muted-foreground text-center md:text-left">
                {weddingConfig.location.directions}
              </p>
            </div>
          </motion.div>

          {/* Mapa - embed Las Heras */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
              <iframe
                title="Ubicación Complejo Las Heras"
                src={weddingConfig.location.mapEmbedUrl || `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7015.8109170779735!2d-65.7698569!3d-28.4522662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94242900366bce83%3A0x8887df41d788a98b!2sLas%20Heras!5e0!3m2!1ses!2sar!4v1773243680124!5m2!1ses!2sar`}
                className="w-full h-full border-0 min-h-[300px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-accent/30 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
