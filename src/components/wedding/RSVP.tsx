import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { UserCheck, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { premiumFeatures } from '@/config/premiumFeatures';

const RSVP = () => {
  const handleGoogleForm = () => {
    if (weddingConfig.rsvp.googleForm?.enabled && weddingConfig.rsvp.googleForm?.url) {
      window.open(weddingConfig.rsvp.googleForm.url, '_blank');
    }
  };

  const handleWhatsApp = (number: string) => {
    let message = weddingConfig.rsvp.whatsapp.message || `Hola! Confirmo mi asistencia a la boda de ${weddingConfig.couple.coupleNames}`;
    message = message.replace(/\\n/g, '\n');
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmitEmail = () => {
    if (weddingConfig.rsvp.email.enabled) {
      const confirmationMessage = `Hola! Confirmo mi asistencia a la boda de ${weddingConfig.couple.coupleNames}`;
      const emailUrl = `mailto:${weddingConfig.rsvp.email.address}?subject=${encodeURIComponent('Confirmación de Asistencia')}&body=${encodeURIComponent(confirmationMessage)}`;
      window.location.href = emailUrl;
    }
  };

  const contacts = 'whatsappContacts' in weddingConfig.rsvp && Array.isArray((weddingConfig.rsvp as { whatsappContacts?: { label: string; number: string }[] }).whatsappContacts)
    ? (weddingConfig.rsvp as { whatsappContacts: { label: string; number: string }[] }).whatsappContacts
    : [];

  const hasWhatsApp = premiumFeatures.rsvpWhatsApp && (contacts.length > 0 || weddingConfig.rsvp.whatsapp.enabled);

  return (
    <section className="section-container bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <UserCheck className="w-12 h-12 text-accent mx-auto mb-4 md:mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 md:mb-4">
            Asistencia
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {weddingConfig.rsvp.introMessage || `Con mucho cariño hemos decidido que seas parte de este gran día para nosotros, agradecemos tu confirmación hasta el ${new Date(weddingConfig.rsvp.deadline).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}.`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-border/50"
        >
          <div className="space-y-4">
            {contacts.length > 0 ? (
              <>
                {contacts.map((c, i) => (
                  <Button
                    key={i}
                    onClick={() => handleWhatsApp(c.number)}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {c.label}
                  </Button>
                ))}
              </>
            ) : (
              hasWhatsApp && (
                <Button
                  onClick={() => handleWhatsApp(weddingConfig.rsvp.whatsapp.number)}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Confirmar por WhatsApp
                </Button>
              )
            )}

            {weddingConfig.rsvp.googleForm?.enabled && weddingConfig.rsvp.googleForm?.url && (
              <Button
                onClick={handleGoogleForm}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                size="lg"
              >
                Confirmar asistencia
              </Button>
            )}

            {premiumFeatures.rsvpEmail && weddingConfig.rsvp.email.enabled && (
              <Button
                onClick={handleSubmitEmail}
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10 font-semibold"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Confirmar por Email
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
