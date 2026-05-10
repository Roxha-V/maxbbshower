import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import {
  Baby,
  CalendarHeart,
  Ruler,
  Grid3x3,
  HeartHandshake,
  Mail,
  Utensils,
  Music2,
} from 'lucide-react';

const iconMap = {
  baby: Baby,
  calendar: CalendarHeart,
  ruler: Ruler,
  bingo: Grid3x3,
  advice: HeartHandshake,
  mail: Mail,
  taste: Utensils,
  music: Music2,
} as const;

const GamesActivities = () => {
  const { games } = weddingConfig;
  if (!games?.enabled || !games.items?.length) return null;

  return (
    <section id="juegos" className="section-container bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {games.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {games.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {games.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Baby;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="fairy-soft-card group relative rounded-[1.35rem] border border-border/55 bg-card/85 p-6 md:p-7 shadow-soft hover:shadow-elegant hover:border-primary/25"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.35rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(120% 80% at 10% -20%, hsl(var(--accent) / 0.12), transparent 55%)',
                  }}
                  aria-hidden
                />

                <div className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/22 to-accent/20 text-primary shadow-sm">
                    <Icon className="h-6 w-6 opacity-95" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 text-left flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamesActivities;
