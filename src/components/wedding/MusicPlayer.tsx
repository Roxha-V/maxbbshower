import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  // Con Spotify la música no arranca sola; con audio directo intentamos autoplay
  const [isPlaying, setIsPlaying] = useState(!weddingConfig.music.spotifyEmbed);
  const [showUnlockHint, setShowUnlockHint] = useState(true); // Overlay "Tocá para escuchar" hasta primera interacción
  const audioRef = useRef<HTMLAudioElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  // Auto-play para audio directo: cuando el audio esté listo y en el mount
  useEffect(() => {
    if (!weddingConfig.music.audioUrl) return;
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setShowUnlockHint(false);
        })
        .catch(() => setIsPlaying(false));
    };

    const timer = setTimeout(tryPlay, 500);
    audio.addEventListener('canplaythrough', tryPlay);
    return () => {
      clearTimeout(timer);
      audio.removeEventListener('canplaythrough', tryPlay);
    };
  }, [weddingConfig.music.audioUrl]);

  // Primer toque/clic en la página: ocultar hint y intentar play (útil para Spotify y cuando el navegador bloquea autoplay)
  useEffect(() => {
    if (!weddingConfig.music.enabled) return;
    const handleFirstInteraction = () => {
      setShowUnlockHint(false);
      if (weddingConfig.music.spotifyEmbed && playButtonRef.current && !isPlaying) {
        playButtonRef.current.click();
      }
      if (weddingConfig.music.audioUrl && audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    const opts = { capture: true, once: true };
    document.addEventListener('click', handleFirstInteraction, opts);
    document.addEventListener('touchstart', handleFirstInteraction, opts);
    return () => {
      document.removeEventListener('click', handleFirstInteraction, opts);
      document.removeEventListener('touchstart', handleFirstInteraction, opts);
    };
  }, [weddingConfig.music.enabled, weddingConfig.music.spotifyEmbed, weddingConfig.music.audioUrl, isPlaying]);

  // Controlar audio directo
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!weddingConfig.music.enabled) return null;

  // Función para convertir URL de embed a URL normal de Spotify
  const getSpotifyUrl = (embedUrl: string): string => {
    // Convierte: https://open.spotify.com/embed/playlist/... 
    // a: https://open.spotify.com/playlist/...
    return embedUrl.replace('/embed/', '/');
  };

  // Función para intentar hacer clic en el botón de play/pause del iframe de Spotify
  const handleSpotifyPlayPause = () => {
    if (iframeRef.current) {
      try {
        // Intentar acceder al contenido del iframe
        const iframe = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (iframe) {
          // Buscar el botón de play/pause en el iframe usando múltiples selectores
          // Spotify usa diferentes selectores según la versión y tipo de contenido
          const selectors = [
            'button[data-testid*="play"]',
            'button[data-testid*="pause"]',
            'button[data-testid*="Play"]',
            'button[data-testid*="Pause"]',
            'button[aria-label*="Play"]',
            'button[aria-label*="Reproducir"]',
            'button[aria-label*="Pause"]',
            'button[aria-label*="Pausar"]',
            'button[title*="Play"]',
            'button[title*="Reproducir"]',
            'button[title*="Pause"]',
            'button[title*="Pausar"]',
            '.control-button',
            '[role="button"][aria-label*="Play"]',
            '[role="button"][aria-label*="Pause"]'
          ];
          
          let playButton: HTMLButtonElement | null = null;
          for (const selector of selectors) {
            playButton = iframe.querySelector(selector) as HTMLButtonElement;
            if (playButton) break;
          }
          
          if (playButton) {
            playButton.click();
            setIsPlaying(!isPlaying);
            return;
          }
        }
      } catch (e) {
        // CORS bloquea el acceso, intentar método alternativo
        // Esto es normal con iframes de Spotify
      }
      
      // Método alternativo: intentar hacer clic en el iframe usando postMessage
      // Spotify puede escuchar mensajes postMessage en algunos casos
      try {
        if (iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            { command: isPlaying ? 'pause' : 'play' },
            'https://open.spotify.com'
          );
        }
      } catch (e) {
        // Si postMessage no funciona, intentar clic directo
      }
      
      // Último recurso: cambiar estado visual (el iframe seguirá funcionando automáticamente)
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Si hay un embed de Spotify
  if (weddingConfig.music.spotifyEmbed) {
    const spotifyUrl = getSpotifyUrl(weddingConfig.music.spotifyEmbed);
    const spotifyEmbedUrl = weddingConfig.music.spotifyEmbed.includes('?')
      ? `${weddingConfig.music.spotifyEmbed}&autoplay=1`
      : `${weddingConfig.music.spotifyEmbed}?autoplay=1`;

    const spotifyUI = (
      <>
        {/* Overlay "Tocá para escuchar" */}
        {showUnlockHint && (
          <div
            role="dialog"
            aria-label="Activar música"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2147483647,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(6px)',
            }}
            onClick={() => setShowUnlockHint(false)}
          >
            <button
              type="button"
              style={{
                padding: '16px 28px',
                borderRadius: '9999px',
                backgroundColor: '#fff',
                color: '#111',
                fontSize: '18px',
                fontWeight: 600,
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.stopPropagation();
                setShowUnlockHint(false);
                handleSpotifyPlayPause();
              }}
            >
              🎵 Tocá para escuchar la música
            </button>
          </div>
        )}
        {/* Botones flotantes */}
        <div
          style={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 2147483646,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Button
            ref={playButtonRef}
            variant="secondary"
            size="icon"
            onClick={handleSpotifyPlayPause}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-elegant"
            title={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-white" />
            ) : (
              <Play className="h-4 w-4 text-white" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(weddingConfig.music.collaborativePlaylistUrl || spotifyUrl, '_blank')}
            className="rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-white shadow-elegant gap-2 px-4"
            title={weddingConfig.music.collaborativePlaylistUrl ? "Ver playlist y sumar tu tema" : "Abrir en Spotify"}
          >
            <svg
              className="h-5 w-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span className="text-sm font-medium">{weddingConfig.music.collaborativePlaylistUrl ? "Playlist" : "Spotify"}</span>
          </Button>
        </div>
        {/* Iframe Spotify (oculto pero en viewport) */}
        <div
          style={{
            position: 'fixed',
            left: 4,
            bottom: 80,
            width: 300,
            height: 80,
            opacity: 0.02,
            pointerEvents: 'none',
            zIndex: -1,
            transform: 'scale(0.3)',
            transformOrigin: 'bottom left',
          }}
        >
          <iframe
            ref={iframeRef}
            title="Spotify"
            src={spotifyEmbedUrl}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{ borderRadius: 12 }}
          />
        </div>
      </>
    );

    return createPortal(spotifyUI, document.body);
  }

  // Si hay una URL de audio directo
  if (weddingConfig.music.audioUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleAudio}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-elegant"
          title={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </Button>
        <audio
          ref={audioRef}
          src={weddingConfig.music.audioUrl}
          loop
          className="hidden"
        />
      </motion.div>
    );
  }

  return null;
};

export default MusicPlayer;
