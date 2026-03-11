import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Heart } from 'lucide-react';

const FamilyMessage = () => {
  if (!weddingConfig.familyMessage?.enabled || !weddingConfig.familyMessage.paragraphs?.length) {
    return null;
  }

  const paragraphs = weddingConfig.familyMessage.paragraphs;
  const boldIndices = weddingConfig.familyMessage.boldParagraphIndices || [];
  const accountInfoNote = weddingConfig.familyMessage.accountInfoNote;

  return (
    <section className="section-container bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-border/50"
        >
          <div className="text-center mb-6">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Un mensaje para vos
            </h2>
          </div>

          <div className="space-y-5 font-body text-muted-foreground leading-relaxed text-center">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`text-center ${boldIndices.includes(index) ? 'font-bold text-foreground' : ''}`}
              >
                {paragraph}
              </motion.p>
            ))}
            {accountInfoNote && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: paragraphs.length * 0.08 }}
                className="text-center text-sm text-muted-foreground pt-2"
              >
                <a href="#regalos" className="underline hover:text-primary transition-colors">
                  {accountInfoNote}
                </a>
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyMessage;
