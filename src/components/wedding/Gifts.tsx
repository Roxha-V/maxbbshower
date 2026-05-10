import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Gift, ExternalLink, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section
      id="regalos"
      className="section-container bg-gradient-to-b from-background/95 via-secondary/32 to-accent/[0.05]"
    >
      <div className="max-w-5xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-14"
        >
          <Gift className="w-11 h-11 sm:w-12 sm:h-12 text-accent mx-auto mb-4 md:mb-6 drop-shadow-[0_4px_12px_hsl(var(--accent)/0.22)]" strokeWidth={1.35} />
          <h2 className="invite-section-title mb-4">{gifts.title}</h2>
          <p className="invite-section-lead max-w-2xl whitespace-pre-line">
            {gifts.message.replace(/\\n/g, '\n')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {hasRegistry && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="organic-frame fairy-soft-card rounded-3xl p-6 sm:p-8"
            >
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 text-center font-semibold">
                Lista de regalos
              </h3>
              <p className="font-body text-center text-muted-foreground mb-6 text-sm md:text-base">
                Enlace general (Amazon, tienda, wishlist, etc.) — editá la URL en tu archivo de
                entorno.
              </p>
              <Button
                onClick={() => window.open(registryUrl, '_blank')}
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir lista de regalos
              </Button>
            </motion.div>
          )}

          {/* Lista de regalos - Mercado Libre */}
          {hasMercadoLibre && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="organic-frame fairy-soft-card rounded-3xl p-6 sm:p-8"
            >
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 text-center font-semibold">
                Lista Mercado Libre
              </h3>
              <Button
                onClick={() => window.open(gifts.mercadoLibreUrl!, '_blank')}
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir lista en Mercado Libre
              </Button>
            </motion.div>
          )}

          {/* Transferencia bancaria / Alias */}
          {bankTransfer.enabled && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="organic-frame rounded-3xl p-6 sm:p-8 border-accent/25 bg-gradient-to-br from-secondary/85 via-muted/55 to-primary/15 fairy-soft-card"
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <CreditCard className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    Transferencia bancaria
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="organic-frame rounded-2xl p-5 sm:p-6 md:col-span-2 fairy-soft-card">
                    <p className="font-body text-sm text-muted-foreground mb-1 text-center md:text-left">
                      Alias
                    </p>
                    <p className="font-body text-lg font-semibold text-foreground text-center md:text-left break-all">
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

                  {bankTransfer.bank && (
                    <div className="organic-frame rounded-2xl p-5 sm:p-6 fairy-soft-card">
                      <p className="font-body text-sm text-muted-foreground mb-1">Banco</p>
                      <p className="font-body text-lg font-semibold text-foreground">{bankTransfer.bank}</p>
                    </div>
                  )}
                  {bankTransfer.accountNumber && !('cbu' in bankTransfer && bankTransfer.cbu) && (
                    <div className="organic-frame rounded-2xl p-5 sm:p-6 fairy-soft-card">
                      <p className="font-body text-sm text-muted-foreground mb-1">CBU / Cuenta</p>
                      <p className="font-body text-lg font-semibold text-foreground">{bankTransfer.accountNumber}</p>
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
