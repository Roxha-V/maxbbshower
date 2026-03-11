import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Gift, ExternalLink, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gifts = () => {
  const { gifts } = weddingConfig;
  const hasMercadoLibre = gifts.mercadoLibreUrl && gifts.mercadoLibreUrl.trim() !== '';
  const { bankTransfer } = gifts;

  return (
    <section id="regalos" className="section-container bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <Gift className="w-12 h-12 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 md:mb-4">
            {gifts.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
            {gifts.message.replace(/\\n/g, '\n')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Lista de regalos - Mercado Libre */}
          {hasMercadoLibre && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl p-8 shadow-elegant border border-border/50"
            >
              <h3 className="font-display text-2xl text-foreground mb-4 text-center">
                Lista de regalos
              </h3>
              <Button
                onClick={() => window.open(gifts.mercadoLibreUrl!, '_blank')}
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver lista de regalos
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
              className="bg-gradient-to-br from-secondary/50 to-primary/20 rounded-3xl p-8 border border-border/50"
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <CreditCard className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    Transferencia bancaria
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl p-6 md:col-span-2">
                    <p className="font-body text-sm text-muted-foreground mb-1 text-center md:text-left">
                      Alias
                    </p>
                    <p className="font-body text-lg font-semibold text-foreground text-center md:text-left break-all">
                      {bankTransfer.alias}
                    </p>
                  </div>

                  {'cbu' in bankTransfer && bankTransfer.cbu && (
                    <div className="bg-card rounded-2xl p-6 md:col-span-2">
                      <p className="font-body text-sm text-muted-foreground mb-1 text-center md:text-left">
                        CBU
                      </p>
                      <p className="font-body text-lg font-semibold text-foreground text-center md:text-left break-all font-mono">
                        {bankTransfer.cbu}
                      </p>
                    </div>
                  )}

                  <div className="bg-card rounded-2xl p-6 md:col-span-2">
                    <p className="font-body text-sm text-muted-foreground mb-1 text-center md:text-left">
                      Destinatario
                    </p>
                    <p className="font-body text-lg font-semibold text-foreground text-center md:text-left">
                      {'destinatario' in bankTransfer ? bankTransfer.destinatario : bankTransfer.accountHolderName}
                    </p>
                  </div>

                  {'motivo' in bankTransfer && bankTransfer.motivo && (
                    <div className="bg-card rounded-2xl p-6 md:col-span-2">
                      <p className="font-body text-sm text-muted-foreground mb-1 text-center md:text-left">
                        Motivo de transferencia
                      </p>
                      <p className="font-body text-lg font-semibold text-foreground text-center md:text-left">
                        {bankTransfer.motivo}
                      </p>
                    </div>
                  )}

                  {bankTransfer.bank && (
                    <div className="bg-card rounded-2xl p-6">
                      <p className="font-body text-sm text-muted-foreground mb-1">Banco</p>
                      <p className="font-body text-lg font-semibold text-foreground">{bankTransfer.bank}</p>
                    </div>
                  )}
                  {bankTransfer.accountNumber && !('cbu' in bankTransfer && bankTransfer.cbu) && (
                    <div className="bg-card rounded-2xl p-6">
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
