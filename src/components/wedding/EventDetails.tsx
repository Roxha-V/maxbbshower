import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Baby, Sparkles, MapPin, Clock } from 'lucide-react';

const EventDetails = () => {
  const { ceremony } = weddingConfig.event;

  return (
    <section className="section-container bg-gradient-to-b from-background/90 via-secondary/35 to-accent/[0.06]">
      <div className="max-w-3xl mx-auto w-full min-w-0 px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-11"
        >
          <h2 className="invite-section-title mb-4">{ceremony.title}</h2>
          <p className="invite-section-lead">{weddingConfig.sectionCopy.eventIntro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="organic-frame p-6 sm:p-9 md:p-10 shadow-elegant hover:shadow-glow transition-all duration-300"
        >
          <div className="flex flex-col items-start text-left space-y-6 w-full">
            <div className="flex items-center justify-center gap-5 w-full">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.6rem] bg-gradient-to-br from-primary/22 to-secondary flex items-center justify-center text-primary shrink-0">
                <Baby strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.6rem] bg-gradient-to-br from-accent/25 to-secondary flex items-center justify-center text-primary shrink-0">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 opacity-90" />
              </div>
            </div>

            <div className="space-y-5 w-full pl-0 md:pl-1">
              <div className="flex gap-3 justify-start items-start text-left">
                <Clock className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-foreground">{ceremony.date}</p>
                  <p className="font-body text-lg font-semibold text-primary">{ceremony.time}</p>
                  {'arrivalNote' in ceremony && ceremony.arrivalNote ? (
                    <p className="font-body text-sm text-foreground/82 mt-1.5 font-medium leading-relaxed">
                      {ceremony.arrivalNote}
                    </p>
                  ) : null}
                </div>
              </div>
              {'physicalLocation' in ceremony && ceremony.physicalLocation ? (
                <div className="flex gap-3 justify-start items-start text-left max-w-lg">
                  <MapPin className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
                  <p className="font-body text-sm sm:text-base text-foreground/88 leading-relaxed font-semibold">
                    {ceremony.physicalLocation}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
