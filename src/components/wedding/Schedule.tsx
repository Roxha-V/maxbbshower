import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { UtensilsCrossed, Music, PartyPopper, Sparkles, Star, Mail } from 'lucide-react';

const iconMap: Record<string, typeof Star> = {
  glass: Sparkles,
  dinner: UtensilsCrossed,
  dance: Music,
  party: PartyPopper,
  star: Star,
  sparkles: Sparkles,
  mail: Mail,
  music: Music
};

const Schedule = () => {
  return (
    <section className="section-container bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {weddingConfig.sectionCopy.scheduleTitle}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {weddingConfig.sectionCopy.scheduleSubtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {weddingConfig.schedule.map((item, index) => {
              const Icon = iconMap[item.icon] || Star;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row gap-8`}
                >
                  {/* Contenido */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left ml-20 md:ml-0`}>
                    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 inline-block">
                      <p className="font-display text-2xl md:text-3xl text-primary mb-2">
                        {item.time}
                      </p>
                      <p className="font-body text-lg text-foreground">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* Icono central */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow z-10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Espaciador para el layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
