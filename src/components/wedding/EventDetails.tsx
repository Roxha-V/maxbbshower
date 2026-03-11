import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Church, PartyPopper, MapPin, Clock } from 'lucide-react';

const EventDetails = () => {
  const { ceremony } = weddingConfig.event;

  return (
    <section className="section-container bg-gradient-to-b from-secondary/30 to-background pt-0 md:pt-6 lg:pt-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 md:mb-4">
            Ceremonia y Celebración
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Nos encantaría que nos acompañes en este momento tan especial
          </p>
        </motion.div>

        {/* Una sola card con ambos iconos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Dos iconos juntos: ceremonia y celebración */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-rose">
                <Church className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-accent">
                <PartyPopper className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </div>

            <div className="space-y-4 w-full">
              <h3 className="font-display text-2xl md:text-3xl text-foreground">
                {ceremony.title}
              </h3>

              <div className="flex flex-col gap-4 justify-center items-center text-center">
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-center">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body text-foreground">{ceremony.date}</p>
                    <p className="font-body text-lg font-semibold text-primary">{ceremony.time}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-center max-w-md mx-auto">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground">{ceremony.venue}</p>
                    <p className="font-body text-sm text-muted-foreground">{ceremony.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
