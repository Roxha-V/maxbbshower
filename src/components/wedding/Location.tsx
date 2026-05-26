import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  const { lat, lng } = weddingConfig.location.coordinates;

  const openMapsUrl =
    weddingConfig.location.mapUrl?.trim() ||
    `https://www.google.com/maps?q=${lat},${lng}&z=15`;

  const embedUrl =
    weddingConfig.location.mapEmbedUrl?.trim() ||
    `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  const handleOpenMaps = () => {
    window.open(openMapsUrl, '_blank');
  };

  return (
    <section className="section-container bg-gradient-to-b from-primary/[0.06] via-muted/38 to-secondary/25">
      <div className="max-w-6xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-14"
        >
          <MapPin className="w-11 h-11 sm:w-12 sm:h-12 text-primary mx-auto mb-4 md:mb-6 opacity-95 drop-shadow-[0_3px_10px_hsl(var(--primary)/0.2)]" strokeWidth={1.4} />
          <h2 className="invite-section-title mb-4">
            {weddingConfig.sectionCopy.locationTitle}
          </h2>
          <p className="invite-section-lead">{weddingConfig.sectionCopy.locationSubtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="organic-frame p-6 sm:p-8 shadow-elegant">
              <h3 className="font-display text-[clamp(1.5rem,4.8vw,1.875rem)] text-foreground mb-4 text-center md:text-left font-semibold tracking-tight">
                {weddingConfig.location.venue}
              </h3>
              <p className="font-body text-base sm:text-lg text-foreground/80 mb-6 text-center md:text-left leading-relaxed font-medium">
                {weddingConfig.location.address}
              </p>

              <Button
                onClick={handleOpenMaps}
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground font-semibold"
                size="lg"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Abrir en mapas
              </Button>
            </div>

            <div className="rounded-2xl p-6 border border-primary/14 bg-secondary/42 backdrop-blur-sm shadow-soft">
              <h4 className="font-display text-xl text-foreground mb-3 text-center md:text-left">
                Indicaciones
              </h4>
              <p className="font-body text-foreground/82 text-center md:text-left leading-relaxed">
                {weddingConfig.location.directions}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] min-h-[220px] sm:min-h-[260px] rounded-[clamp(1.25rem,4vw,1.75rem)] overflow-hidden shadow-elegant border border-primary/15 ring-1 ring-accent/10">
              <iframe
                title="Mapa del baby shower"
                src={embedUrl}
                className="w-full h-full min-h-[inherit] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-accent/25 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
