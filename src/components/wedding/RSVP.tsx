import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { UserCheck, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { premiumFeatures } from '@/config/premiumFeatures';
import { toast } from 'sonner';

type FormState = {
  name: string;
  guests: string;
};

const emptyForm: FormState = {
  name: '',
  guests: ''
};

const RSVP = () => {
  const [form, setForm] = useState<FormState>(emptyForm);

  const babyName = weddingConfig.couple.coupleNames;

  const buildWhatsAppMessage = useCallback(() => {
    const lines = [
      `Hola! Confirmo asistencia al baby shower de ${babyName}.`,
      '',
      `Nombre completo: ${form.name.trim() || '—'}`,
      `Cantidad total de asistentes: ${form.guests.trim() || '—'}`,
      '',
      '¡Gracias!'
    ];
    return lines.join('\n');
  }, [babyName, form.name, form.guests]);

  const validateBeforeWhatsApp = useCallback(() => {
    const nameOk = form.name.trim().length >= 2;
    const guestsRaw = form.guests.trim();
    const n = parseInt(guestsRaw.replace(/\D/g, ''), 10);
    const guestsOk = guestsRaw.length > 0 && !Number.isNaN(n) && n >= 1;
    if (!nameOk || !guestsOk) {
      toast.error(
        'Completá tu nombre completo y la cantidad de asistentes (al menos 1) antes de abrir WhatsApp.'
      );
      return false;
    }
    return true;
  }, [form.name, form.guests]);

  const handleGoogleForm = () => {
    if (weddingConfig.rsvp.googleForm?.enabled && weddingConfig.rsvp.googleForm?.url) {
      window.open(weddingConfig.rsvp.googleForm.url, '_blank');
    }
  };

  const handleWhatsApp = (number: string) => {
    if (!validateBeforeWhatsApp()) return;
    let message = buildWhatsAppMessage();
    const tmpl = weddingConfig.rsvp.whatsapp.message?.replace(/\\n/g, '\n')?.trim();
    if (tmpl) message = `${tmpl.trim()}\n\n${message}`;
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmitEmail = () => {
    if (weddingConfig.rsvp.email.enabled) {
      const body = buildWhatsAppMessage();
      const emailUrl = `mailto:${weddingConfig.rsvp.email.address}?subject=${encodeURIComponent(`Confirmación — Baby shower ${babyName}`)}&body=${encodeURIComponent(body)}`;
      window.location.href = emailUrl;
    }
  };

  const contacts =
    'whatsappContacts' in weddingConfig.rsvp &&
    Array.isArray(
      (weddingConfig.rsvp as { whatsappContacts?: { label: string; number: string }[] }).whatsappContacts
    )
      ? (weddingConfig.rsvp as { whatsappContacts: { label: string; number: string }[] }).whatsappContacts
      : [];

  const hasWhatsApp =
    premiumFeatures.rsvpWhatsApp &&
    (contacts.length > 0 || weddingConfig.rsvp.whatsapp.enabled);

  const deadlineFmt = new Date(weddingConfig.rsvp.deadline).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const showStep1Fields = weddingConfig.rsvp.inlineForm?.enabled !== false;
  const cfg = weddingConfig.rsvp as typeof weddingConfig.rsvp & {
    whatsappStepTitle?: string;
    whatsappStepHint?: string;
    googleMandatoryTitle?: string;
    googleMandatoryNotice?: string;
    googleFormButtonLabel?: string;
  };

  const showGoogleBlock =
    weddingConfig.rsvp.googleForm?.enabled === true &&
    Boolean((weddingConfig.rsvp.googleForm?.url || '').trim());

  const showEmailQrBlock =
    (premiumFeatures.rsvpEmail && weddingConfig.rsvp.email.enabled) ||
    Boolean((weddingConfig.rsvp.qrImageUrl || '').trim());

  return (
    <section
      id="rsvp"
      className="section-container invite-section-rsvp bg-gradient-to-b from-primary/[0.1] via-secondary/40 to-accent/[0.06]"
    >
      <div className="max-w-3xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-11 lg:mb-12"
        >
          <UserCheck className="w-11 h-11 sm:w-12 sm:h-12 text-primary mx-auto mb-4 md:mb-6" strokeWidth={1.35} />
          <h2 className="invite-section-title mb-4 max-w-xl mx-auto">Confirmación de asistencia</h2>
          <p className="invite-section-lead px-2">
            {weddingConfig.rsvp.introMessage ||
              `Tu respuesta nos ayuda a organizar la merienda y los rincones del bosque. Agradecemos que confirmes antes del ${deadlineFmt}.`}
          </p>
        </motion.div>

        {showStep1Fields && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="organic-frame p-5 sm:p-8 md:p-10 shadow-elegant mb-7 md:mb-10 fairy-soft-card"
          >
            <div className="text-center mb-7 md:mb-8">
              <h3 className="font-display text-[clamp(1.25rem,3.8vw,1.75rem)] font-semibold text-foreground mb-2">
                {cfg.whatsappStepTitle ?? '1 · Confirmación por WhatsApp'}
              </h3>
              <p className="font-body text-sm sm:text-[0.95rem] text-foreground/80 max-w-xl mx-auto leading-relaxed px-2">
                {cfg.whatsappStepHint}
              </p>
            </div>

            <div className="grid gap-5 md:gap-6 mb-8">
              <div className="space-y-2">
                <Label htmlFor="rsvp-name">Tu nombre completo</Label>
                <Input
                  id="rsvp-name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Ej. María Pérez"
                  className="bg-card/90 border border-primary/12 text-foreground min-h-[48px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rsvp-guests">Cantidad total de asistentes</Label>
                <Input
                  id="rsvp-guests"
                  inputMode="numeric"
                  value={form.guests}
                  onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
                  placeholder="Ej. 2 (vos + una persona más)"
                  className="bg-card/90 border border-primary/12 text-foreground min-h-[48px]"
                />
              </div>
            </div>

            <div className="space-y-3">
              {contacts.length > 0 ? (
                contacts.map((c, i) => (
                  <Button
                    key={i}
                    type="button"
                    onClick={() => handleWhatsApp(c.number)}
                  className="w-full btn-brand-whatsapp rounded-xl py-6 text-[0.95rem] sm:text-base"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                  {c.label}
                  </Button>
                ))
              ) : (
                hasWhatsApp && (
                  <Button
                    type="button"
                    onClick={() =>
                      weddingConfig.rsvp.whatsapp.number &&
                      handleWhatsApp(weddingConfig.rsvp.whatsapp.number)
                    }
                    className="w-full btn-brand-whatsapp rounded-xl py-6"
                    size="lg"
                    disabled={!weddingConfig.rsvp.whatsapp.number}
                  >
                    <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                    Enviar confirmación por WhatsApp
                  </Button>
                )
              )}
              {!contacts.length && !hasWhatsApp && (
                <p className="text-center text-sm text-muted-foreground">
                  Configurá en <code className="text-xs">VITE_RSVP_WHATSAPP_YAMI</code> y{' '}
                  <code className="text-xs">VITE_RSVP_WHATSAPP_JUAN</code> para mostrar los botones de
                  WhatsApp.
                </p>
              )}
            </div>
          </motion.div>
        )}

        {showGoogleBlock && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="organic-frame border-2 border-primary/35 p-5 sm:p-9 md:p-10 shadow-elegant mb-7 md:mb-10 bg-primary/[0.06] fairy-soft-card"
          >
            <h3 className="font-display text-[clamp(1.25rem,3.85vw,1.85rem)] font-semibold text-foreground mb-4 text-center">
              {cfg.googleMandatoryTitle ?? '2 · Formulario obligatorio'}
            </h3>
            <p className="font-body text-[0.95rem] sm:text-base text-foreground/[0.92] whitespace-pre-line text-center leading-relaxed mb-7 md:mb-8 max-w-2xl mx-auto font-medium px-1">
              {cfg.googleMandatoryNotice}
            </p>
            <Button
              type="button"
              onClick={handleGoogleForm}
              className="w-full rounded-xl py-6 btn-enchant-music text-[0.95rem] font-semibold"
              size="lg"
            >
              {cfg.googleFormButtonLabel ?? 'Abrir formulario de confirmación'}
            </Button>
          </motion.div>
        )}

        {showEmailQrBlock && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="organic-frame p-6 sm:p-10 md:p-12 shadow-elegant fairy-soft-card"
          >
            <div className="space-y-4">
              {premiumFeatures.rsvpEmail && weddingConfig.rsvp.email.enabled && (
                <Button
                  type="button"
                  onClick={handleSubmitEmail}
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10 font-semibold"
                  size="lg"
                >
                  <Mail className="w-5 h-5 mr-2 shrink-0" />
                  Enviar por correo (misma info que WhatsApp)
                </Button>
              )}

              {weddingConfig.rsvp.qrImageUrl ? (
                <div className="pt-8 border-t border-border/50 text-center space-y-4">
                  <p className="font-display text-xl text-foreground">{weddingConfig.rsvp.qrCaption}</p>
                  <img
                    src={weddingConfig.rsvp.qrImageUrl}
                    alt="Código QR para confirmar asistencia"
                    className="mx-auto w-44 h-44 md:w-52 md:h-52 object-contain rounded-2xl border border-primary/25 bg-card p-2 shadow-soft"
                  />
                  <p className="font-body text-sm text-muted-foreground">
                    Ideal para compartir por WhatsApp, imprimir o mostrar el día del encuentro.
                  </p>
                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RSVP;
