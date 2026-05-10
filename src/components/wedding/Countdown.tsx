import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(weddingConfig.eventDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ];

  return (
    <section className="section-container bg-gradient-to-b from-secondary/50 via-primary/[0.06] to-background/95">
      <div className="max-w-4xl mx-auto text-center w-full min-w-0 px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {weddingConfig.sectionCopy.countdownTitle ? (
            <h2 className="invite-section-title mb-4">{weddingConfig.sectionCopy.countdownTitle}</h2>
          ) : null}
          <p
            className={`font-display font-medium italic leading-snug mx-auto max-w-xl text-foreground/88 text-shadow-soft text-[clamp(1.125rem,3.85vw,1.725rem)] ${
              weddingConfig.sectionCopy.countdownTitle ? 'mb-10 md:mb-12' : 'mb-10 md:mb-14 mt-1'
            }`}
          >
            {weddingConfig.sectionCopy.countdownSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-7">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="enchant-count-cell"
            >
              <div className="font-display font-semibold text-primary mb-2 tabular-nums text-[clamp(2rem,8vw,3.85rem)] leading-none tracking-tight">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="font-body text-[clamp(0.65rem,2.3vw,0.775rem)] text-foreground/72 uppercase tracking-[0.14em] font-semibold">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="elegant-divider mt-8 md:mt-12 lg:mt-16"
        />
      </div>
    </section>
  );
};

export default Countdown;
