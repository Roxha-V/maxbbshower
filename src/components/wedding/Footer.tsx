import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  const closing = weddingConfig.sectionCopy.footerClosing;
  const baby = weddingConfig.couple.coupleNames;
  const closingSegments = closing.split('{bebé}');
  const bs = weddingConfig.babyShower;
  const sisterName = bs?.sister?.name?.trim();
  const familyLine = sisterName
    ? `${bs.momName}, ${bs.dadName} y ${sisterName}`
    : `${bs.momName}, ${bs.dadName} y familia`;
  const hasBabyPlaceholder = closing.includes('{bebé}');

  const footerBg = weddingConfig.sectionCopy.footerBackgroundImage;

  return (
    <footer className="relative overflow-hidden py-14 sm:py-16 print:pb-10">
      {footerBg ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 print:scale-100"
            style={{ backgroundImage: `url(${footerBg})` }}
            aria-hidden
          />
          {/* Capas de lectura: oscurece la foto y vuelve al pergamino */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/97 via-card/[0.93] to-primary/[0.88] print:from-background print:via-background print:to-background"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,hsl(var(--card)/0.72),transparent_55%)]"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-primary/20"
          aria-hidden
        />
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl rounded-[1.75rem] border border-border/45 bg-card/[0.52] px-5 py-9 shadow-soft backdrop-blur-xl sm:px-8 sm:py-10 print:border-0 print:bg-transparent print:shadow-none print:backdrop-blur-0"
        >
          <div className="space-y-5 sm:space-y-6">
            <Sparkles className="w-11 h-11 sm:w-12 sm:h-12 text-primary mx-auto opacity-95" strokeWidth={1.2} />

            <h3 className="font-accent text-[clamp(1.85rem,6.5vw,2.85rem)] text-foreground leading-[1.12] px-1 [text-shadow:0_2px_20px_hsl(var(--card)/1),0_1px_2px_hsl(var(--foreground)/0.15)]">
              Te esperamos bajo las estrellas ✨
            </h3>

            <p className="font-body text-foreground text-[clamp(0.95rem,2.85vw,1.0825rem)] font-semibold">
              {weddingConfig.event.ceremony.date}
            </p>

            {weddingConfig.socialMedia?.hashtag ? (
              <p className="font-body text-[0.9rem] text-foreground/90 sm:text-[0.9375rem]">
                <span className="font-semibold text-foreground">{weddingConfig.socialMedia.hashtag}</span>
                {weddingConfig.socialMedia.instagram
                  ? (
                      <>
                        <span className="text-foreground/50"> · </span>
                        <span className="text-foreground/88">{weddingConfig.socialMedia.instagram}</span>
                      </>
                    )
                  : null}
              </p>
            ) : null}

            <div className="elegant-divider mx-auto max-w-[12rem] opacity-90" />

            <p className="font-body mx-auto max-w-lg px-1 text-center text-[clamp(0.9rem,2.65vw,1.055rem)] leading-relaxed text-foreground whitespace-pre-line sm:text-justify sm:[text-align-last:center] [text-shadow:0_1px_14px_hsl(var(--card)/0.95)]">
              {hasBabyPlaceholder && closingSegments.length === 2 ? (
                <>
                  {closingSegments[0]}
                  <span className="font-semibold text-foreground">{baby}</span>
                  {closingSegments[1]}
                </>
              ) : (
                closing
              )}
              <br />
              <span className="mt-3 inline-block w-full text-center font-body text-[0.95rem] font-semibold text-foreground sm:text-base">
                {familyLine}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
