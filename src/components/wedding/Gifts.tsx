import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Gift, ExternalLink, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Paleta bosque encantado — hex fijos para que siempre se vean en pantalla */
const WISHLIST_PALETTE = [
  { label: 'Matcha Latte', hex: '#D1EFBD' },
  { label: 'Botanist', hex: '#89D385' },
  { label: 'Dark green', hex: '#0A3323' },
  { label: 'Moss green', hex: '#839958' },
  { label: 'Midnight green', hex: '#105666' },
  { label: 'Aquamarine', hex: '#6CD1F0' },
  { label: 'Grape Soda', hex: '#A1A1F7' },
  { label: 'Pink Diamond', hex: '#EFCCEA' },
  { label: 'Rosy brown', hex: '#D3968C' },
  { label: 'Beige', hex: '#F7F4D5' },
] as const;

const WishlistPaletteStrip = ({ note }: { note?: string }) => (
  <div className="wishlist-palette mb-6 md:mb-7">
    <p className="wishlist-palette-label">Paleta del bosque · colores sugeridos</p>
    {note ? (
      <p className="font-body text-center text-sm md:text-base text-forest-darkGreen/90 leading-relaxed max-w-lg mx-auto mb-4 px-1 font-medium">
        {note}
      </p>
    ) : null}
    <div className="wishlist-palette-row" role="list" aria-label="Colores sugeridos para regalos">
      {WISHLIST_PALETTE.map((color) => (
        <span
          key={color.label}
          role="listitem"
          title={color.label}
          className="wishlist-swatch"
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </div>
    <p className="font-body text-center text-xs text-forest-midnight/70 mt-3 hidden sm:block">
      {WISHLIST_PALETTE.map((c) => c.label).join(' · ')}
    </p>
  </div>
);

const Gifts = () => {
  const { gifts } = weddingConfig;
  const hasMercadoLibre = gifts.mercadoLibreUrl && gifts.mercadoLibreUrl.trim() !== '';
  const registryUrl =
    'registryUrl' in gifts && typeof gifts.registryUrl === 'string'
      ? gifts.registryUrl.trim()
      : '';
  const hasRegistry = registryUrl.length > 0;
  const { bankTransfer } = gifts;

  return (
    <section id="regalos" className="section-container gifts-wishlist-section">
      <div className="max-w-5xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-14"
        >
          <Gift
            className="w-11 h-11 sm:w-12 sm:h-12 text-pastel-grape mx-auto mb-4 md:mb-6 drop-shadow-[0_4px_14px_hsl(var(--palette-grape)/0.35)]"
            strokeWidth={1.35}
          />
          <h2 className="invite-section-title mb-4">{gifts.title}</h2>
          <p className="invite-section-lead max-w-2xl whitespace-pre-line">{gifts.message.replace(/\\n/g, '\n')}</p>
        </motion.div>

        <div className="space-y-8">
          {hasRegistry && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="wishlist-registry-card p-6 sm:p-8 md:p-9"
            >
              <WishlistPaletteStrip
                note={'paletteNote' in gifts && typeof gifts.paletteNote === 'string' ? gifts.paletteNote : undefined}
              />

              <h3 className="font-display text-xl sm:text-2xl text-[#0A3323] mb-4 text-center font-semibold">
                {'registryTitle' in gifts && typeof gifts.registryTitle === 'string'
                  ? gifts.registryTitle
                  : 'Lista de regalos'}
              </h3>
              {'registryDescription' in gifts && gifts.registryDescription ? (
                <p className="font-body text-center text-forest-darkGreen/82 mb-6 text-sm md:text-base leading-relaxed px-1">
                  {gifts.registryDescription}
                </p>
              ) : null}
              <Button
                onClick={() => window.open(registryUrl, '_blank', 'noopener,noreferrer')}
                className="btn-wishlist-pinterest"
              >
                <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
                {'registryButtonLabel' in gifts && typeof gifts.registryButtonLabel === 'string'
                  ? gifts.registryButtonLabel
                  : 'Abrir lista de regalos'}
              </Button>
            </motion.div>
          )}

          {hasMercadoLibre && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="organic-frame fairy-soft-card rounded-3xl p-6 sm:p-8 border-pastel-grape/30"
            >
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 text-center font-semibold">
                Lista Mercado Libre
              </h3>
              <Button
                onClick={() => window.open(gifts.mercadoLibreUrl!, '_blank')}
                variant="outline"
                className="w-full border-forest-moss/50 hover:bg-pastel-matcha/40 min-h-[52px]"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir lista en Mercado Libre
              </Button>
            </motion.div>
          )}

          {bankTransfer.enabled && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="organic-frame gifts-transfer-card rounded-3xl p-6 sm:p-8 fairy-soft-card"
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <CreditCard className="w-10 h-10 text-forest-midnight mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-forest-darkGreen mb-2">
                    Transferencia bancaria
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="organic-frame rounded-2xl p-5 sm:p-6 md:col-span-2 fairy-soft-card bg-pastel-matcha/25 border-forest-moss/25">
                    <p className="font-body text-sm text-forest-midnight/75 mb-1 text-center md:text-left">
                      Alias
                    </p>
                    <p className="font-body text-lg font-semibold text-forest-darkGreen text-center md:text-left break-all">
                      {bankTransfer.alias}
                    </p>
                  </div>

                  {'cbu' in bankTransfer && bankTransfer.cbu && (
                    <div className="organic-frame rounded-2xl p-5 sm:p-6 md:col-span-2 fairy-soft-card">
                      <p className="font-body text-sm text-muted-foreground mb-1 text-center md:text-left">
                        CBU
                      </p>
                      <p className="font-body text-lg font-semibold text-foreground text-center md:text-left break-all font-mono">
                        {bankTransfer.cbu}
                      </p>
                    </div>
                  )}

                  <div className="organic-frame rounded-2xl p-5 sm:p-6 md:col-span-2 fairy-soft-card">
                    <p className="font-body text-sm text-muted-foreground mb-1 text-center md:text-left">
                      Destinatario
                    </p>
                    <p className="font-body text-lg font-semibold text-foreground text-center md:text-left">
                      {'destinatario' in bankTransfer ? bankTransfer.destinatario : bankTransfer.accountHolderName}
                    </p>
                  </div>

                  {'motivo' in bankTransfer && bankTransfer.motivo && (
                    <div className="organic-frame rounded-2xl p-5 sm:p-6 md:col-span-2 fairy-soft-card">
                      <p className="font-body text-sm text-muted-foreground mb-1 text-center md:text-left">
                        Motivo de transferencia
                      </p>
                      <p className="font-body text-lg font-semibold text-foreground text-center md:text-left">
                        {bankTransfer.motivo}
                      </p>
                    </div>
                  )}

                  {bankTransfer.bank?.trim() ? (
                    <div className="organic-frame rounded-2xl p-5 sm:p-6 fairy-soft-card">
                      <p className="font-body text-sm text-muted-foreground mb-1">Banco</p>
                      <p className="font-body text-lg font-semibold text-foreground">{bankTransfer.bank}</p>
                    </div>
                  ) : null}
                  {bankTransfer.accountNumber?.trim() &&
                    !('cbu' in bankTransfer && bankTransfer.cbu) && (
                      <div className="organic-frame rounded-2xl p-5 sm:p-6 fairy-soft-card">
                        <p className="font-body text-sm text-muted-foreground mb-1">CBU / Cuenta</p>
                        <p className="font-body text-lg font-semibold text-foreground">
                          {bankTransfer.accountNumber}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gifts;
