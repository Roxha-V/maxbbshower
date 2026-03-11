import { useEffect } from 'react';
import HeroSection from '@/components/wedding/HeroSection';
import Countdown from '@/components/wedding/Countdown';
import FamilyMessage from '@/components/wedding/FamilyMessage';
// FUNCIONES PREMIUM
import OurStory from '@/components/wedding/OurStory';
import EventDetails from '@/components/wedding/EventDetails';
import Schedule from '@/components/wedding/Schedule';
import Gallery from '@/components/wedding/Gallery';
import Location from '@/components/wedding/Location';
import DressCode from '@/components/wedding/DressCode';
import Gifts from '@/components/wedding/Gifts';
import RSVP from '@/components/wedding/RSVP';
import MusicPlayer from '@/components/wedding/MusicPlayer';
import Footer from '@/components/wedding/Footer';
import { designThemes } from '@/config/designThemes';
import { premiumFeatures } from '@/config/premiumFeatures';
import { weddingConfig } from '@/config/weddingConfig';

const InvitationRomantic = () => {
  useEffect(() => {
    // Scroll al top siempre que se carga la página
    window.scrollTo(0, 0);

    // Aplicar tema romántico
    const theme = designThemes.romantic;
    document.documentElement.style.setProperty('--primary', theme.colors.primary);
    document.documentElement.style.setProperty('--secondary', theme.colors.secondary);
    document.documentElement.style.setProperty('--accent', theme.colors.accent);
    document.documentElement.style.setProperty('--background', theme.colors.background);
    document.documentElement.style.setProperty('--foreground', theme.colors.foreground);
    document.documentElement.style.setProperty('--muted', theme.colors.muted);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Countdown />
      {weddingConfig.familyMessage?.enabled && <FamilyMessage />}
      <EventDetails />
      <Location />
      <Gifts />
      <RSVP />
      <MusicPlayer />

      {premiumFeatures.ourStory && <OurStory />}
      {premiumFeatures.schedule && <Schedule />}
      {premiumFeatures.gallery && <Gallery />}
      {premiumFeatures.dressCode && <DressCode />}
      {premiumFeatures.footer && <Footer />}
    </div>
  );
};

export default InvitationRomantic;
