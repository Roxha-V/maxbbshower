import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Sparkles } from 'lucide-react';

function isImportantNotesParagraph(text: string) {
  return text.includes('Algunas cositas importantes');
}

function parseImportantItems(text: string): string[] {
  const lines = text.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  const items: string[] = [];
  let pending = false;

  for (const line of lines) {
    if (line.includes('Algunas cositas importantes')) continue;
    if (line === '✨' || line.startsWith('✨')) {
      const inline = line.replace(/^✨\s*/, '').trim();
      if (inline) {
        items.push(inline);
        pending = false;
      } else {
        pending = true;
      }
      continue;
    }
    if (pending || items.length > 0) {
      items.push(line);
      pending = false;
    }
  }

  return items.filter(Boolean);
}

function renderImportantNotesBlock(text: string) {
  const lines = text.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  const title = lines.find((l) => l.includes('Algunas cositas importantes')) || 'Algunas cositas importantes 🌿';
  const items = parseImportantItems(text);

  return (
    <div className="w-full max-w-lg mx-auto my-3 md:my-4 rounded-2xl border border-primary/15 bg-secondary/45 px-5 py-5 md:px-7 md:py-6">
      <p className="font-display text-lg md:text-xl text-foreground text-center font-semibold tracking-tight mb-4">
        {title}
      </p>
      <ul className="space-y-3 font-body text-foreground/85 list-none pl-0 font-medium text-left md:text-justify">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start leading-relaxed">
            <span className="shrink-0 text-base" aria-hidden>
              ✨
            </span>
            <span>{item}</span>
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
          <div className="text-center mb-6 md:mb-8">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-4 drop-shadow-sm opacity-90" />
            <h2 className="invite-section-title text-center max-w-2xl mx-auto">
              {weddingConfig.familyMessage.sectionTitle || 'Un mensaje para vos'}
            </h2>
          </div>

          <div className="max-w-prose mx-auto space-y-5 md:space-y-6 font-body text-foreground/86 leading-relaxed">
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
                  className={`text-center md:text-justify whitespace-pre-line text-[clamp(0.95rem,2.9vw,1.08rem)] leading-relaxed ${boldIndices.includes(index) ? 'font-semibold text-foreground' : ''}`}
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
                className="text-center md:text-justify text-sm sm:text-base text-foreground/80 pt-2 font-medium"
              >
                <a
                  href="#regalos"
                  className="underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors"
                >
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
