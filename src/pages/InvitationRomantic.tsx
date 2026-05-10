import { useEffect } from 'react';
import HeroSection from '@/components/wedding/HeroSection';
import Countdown from '@/components/wedding/Countdown';
import FamilyMessage from '@/components/wedding/FamilyMessage';
import SisterWelcome from '@/components/wedding/SisterWelcome';
import OurStory from '@/components/wedding/OurStory';
import EventDetails from '@/components/wedding/EventDetails';
import Location from '@/components/wedding/Location';
import Gifts from '@/components/wedding/Gifts';
import RSVP from '@/components/wedding/RSVP';
import MusicPlayer from '@/components/wedding/MusicPlayer';
import CollaborativePlaylist from '@/components/wedding/CollaborativePlaylist';
import ForestAmbience from '@/components/wedding/ForestAmbience';
import Footer from '@/components/wedding/Footer';
import { enchantedForestCssVars } from '@/config/designThemes';
import { premiumFeatures } from '@/config/premiumFeatures';
import { weddingConfig } from '@/config/weddingConfig';

const InvitationRomantic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Object.entries(enchantedForestCssVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, []);

  return (
    <div className="min-h-screen enchanted-invitation invitation-print-root relative overflow-x-hidden">
      <div className="forest-float-layer pointer-events-none print:hidden" aria-hidden />

      <HeroSection />

      <div aria-hidden className="pointer-events-none mx-auto hidden md:block relative -mt-px h-3 max-w-xl overflow-hidden rounded-full opacity-70">
        <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-accent/85 to-transparent" />
        {[12, 38, 64, 88].map((p) => (
          <span
            key={p}
            className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-glow animate-pulse"
            style={{ left: `${p}%` }}
          />
        ))}
      </div>

      <div className="fairy-garland-row print:hidden" aria-hidden />

      <Countdown />
      {weddingConfig.familyMessage?.enabled && <FamilyMessage />}
      <SisterWelcome />
      <EventDetails />
      <Location />
      <Gifts />
      <RSVP />
      <CollaborativePlaylist />
      <MusicPlayer />
      <ForestAmbience />

      {premiumFeatures.ourStory && <OurStory />}
      {premiumFeatures.footer && <Footer />}
    </div>
  );
};

export default InvitationRomantic;
