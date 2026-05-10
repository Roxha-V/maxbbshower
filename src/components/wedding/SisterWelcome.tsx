import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Heart, Sparkles } from 'lucide-react';

const SisterWelcome = () => {
  const { sister } = weddingConfig.babyShower || {};
  if (!sister?.enabled) return null;

  const name = sister.name?.trim();
  const showPhoto = Boolean(sister.image);
  const baby = weddingConfig.couple.coupleNames;
  const photoAlt = name
    ? `${name} abraza la panza donde está ${baby}`
    : `Familia esperando a ${baby}`;

  return (
    <section className="section-container bg-gradient-to-b from-muted/28 via-background/95 to-secondary/38">
      <div className="max-w-3xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="organic-frame p-8 md:p-12 shadow-elegant relative overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-primary/12 blur-xl"
            aria-hidden
          />

          <div className="text-center mb-8">
            <div className="flex justify-center gap-3 mb-4">
              <Heart className="w-10 h-10 text-primary/90 drop-shadow-sm" strokeWidth={1.5} />
              <Sparkles className="w-10 h-10 text-accent/90 opacity-95" strokeWidth={1.5} />
            </div>
            <p className="font-accent text-[clamp(1.5rem,4.5vw,2.35rem)] text-primary mb-2">{sister.kicker}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.65rem] text-foreground mb-4">
              {sister.sectionTitle}
            </h2>
            {sister.sectionSubtitle ? (
              <p className="font-body text-muted-foreground text-lg">{sister.sectionSubtitle}</p>
            ) : null}
          </div>

          <div
            className={`grid gap-8 items-start ${showPhoto ? 'md:grid-cols-2 md:gap-10' : ''}`}
          >
            {showPhoto ? (
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none"
              >
                <div className="aspect-[3/4] rounded-[1.35rem] overflow-hidden shadow-elegant border border-border/50 ring-2 ring-accent/15">
                  <img
                    src={sister.image}
                    alt={photoAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {sister.imageCaption ? (
                  <p className="text-center text-sm text-muted-foreground mt-3 font-body italic">
                    {sister.imageCaption}
                  </p>
                ) : null}
              </motion.div>
            ) : null}

            <div
              className={`space-y-5 font-body text-muted-foreground leading-relaxed text-lg ${
                showPhoto ? 'text-center md:text-left' : 'text-center'
              }`}
            >
              {sister.openingLine?.trim() ? (
                <p
                  className={`font-display text-2xl md:text-3xl text-primary ${showPhoto ? 'text-center md:text-left' : 'text-center'}`}
                >
                  {sister.openingLine}
                </p>
              ) : null}

              {name && sister.introTemplate?.trim() ? (
                <p className="text-foreground/90 font-medium whitespace-pre-line">
                  {sister.introTemplate.replace(/\{name\}/g, name)}
                </p>
              ) : !name && sister.introWithoutName?.trim() ? (
                <p className="text-foreground/90 font-medium whitespace-pre-line">{sister.introWithoutName}</p>
              ) : null}
              {sister.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="whitespace-pre-line"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SisterWelcome;
