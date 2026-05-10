import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Sparkles } from 'lucide-react';

function isImportantNotesParagraph(text: string) {
  return text.includes('Algunas cositas importantes') && text.includes('✨ Confirmar');
}

function renderImportantNotesBlock(text: string) {
  const lines = text.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  const title = lines[0] || '';
  const items = lines.slice(1).filter((l) => l.startsWith('✨'));
  return (
    <div className="w-full flex flex-col items-center gap-4 my-2">
      <p className="font-display text-lg md:text-xl text-foreground text-center font-semibold tracking-tight">
        {title}
      </p>
      <ul className="w-full max-w-md mx-auto text-left space-y-2.5 font-body text-foreground/82 list-none pl-0 font-medium">
        {items.map((line, i) => (
          <li key={i} className="flex gap-2.5 items-start leading-snug">
            <span className="shrink-0 mt-0.5" aria-hidden>
              ✨
            </span>
            <span>{line.replace(/^✨\s*/, '')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const FamilyMessage = () => {
  if (!weddingConfig.familyMessage?.enabled || !weddingConfig.familyMessage.paragraphs?.length) {
    return null;
  }

  const paragraphs = weddingConfig.familyMessage.paragraphs;
  const boldIndices = weddingConfig.familyMessage.boldParagraphIndices || [];
  const accountInfoNote = weddingConfig.familyMessage.accountInfoNote;

  return (
    <section className="section-container bg-gradient-to-b from-accent/[0.07] via-secondary/45 to-muted/25">
      <div className="max-w-3xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="organic-frame fairy-soft-card p-6 sm:p-9 md:p-12 shadow-elegant"
        >
          <div className="text-center mb-6">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-4 drop-shadow-sm opacity-90" />
            <h2 className="invite-section-title mb-6 text-center max-w-2xl mx-auto">
              {weddingConfig.familyMessage.sectionTitle || 'Un mensaje para vos'}
            </h2>
          </div>

          <div className="space-y-5 font-body text-foreground/84 leading-relaxed text-center">
            {paragraphs.map((paragraph, index) =>
              isImportantNotesParagraph(paragraph) ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {renderImportantNotesBlock(paragraph)}
                </motion.div>
              ) : (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`text-center whitespace-pre-line text-[clamp(0.95rem,2.9vw,1.08rem)] leading-relaxed ${boldIndices.includes(index) ? 'font-semibold text-foreground' : ''}`}
                >
                  {paragraph}
                </motion.p>
              )
            )}
            {accountInfoNote && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: paragraphs.length * 0.08 }}
                className="text-center text-sm text-foreground/75 pt-2"
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
