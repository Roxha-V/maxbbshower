import { useRef, useState, useEffect } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { weddingConfig } from '@/config/weddingConfig';

/** Sonido ambiente opcional del bosque (URL en .env). No se reproduce hasta que la persona pulse. */
const ForestAmbience = () => {
  const { ambience } = weddingConfig;
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!ambience.enabled || !ambience.url) return;
    const a = audioRef.current;
    if (!a) return;
    a.volume = ambience.volume;
    if (on) {
      void a.play().catch(() => setOn(false));
    } else {
      a.pause();
    }
  }, [on, ambience.enabled, ambience.url, ambience.volume]);

  if (!ambience.enabled || !ambience.url) return null;

  return (
    <>
      <audio ref={audioRef} src={ambience.url} loop preload="none" />
      <div className="fixed bottom-20 left-4 z-[2147483645] print:hidden md:bottom-24">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={() => setOn(!on)}
          className="forest-ambience-toggle h-10 w-10 rounded-full bg-primary/92 hover:bg-primary text-primary-foreground shadow-elegant border border-white/25"
          title={on ? 'Silenciar sonido del bosque' : 'Activar sonido suave del bosque'}
          aria-pressed={on}
        >
          {on ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          <span className="sr-only">Sonido ambiente bosque</span>
        </Button>
      </div>
    </>
  );
};

export default ForestAmbience;
