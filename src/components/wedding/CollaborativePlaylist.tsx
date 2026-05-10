import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/weddingConfig';
import { Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

function spotifyEmbedToOpenUrl(embedUrl: string): string {
  return embedUrl.replace('/embed/', '/').split('?')[0];
}

const CollaborativePlaylist = () => {
  const {
    enabled,
    collaborativePlaylistUrl,
    spotifyEmbed,
    playlistTitle,
    playlistDescription
  } = weddingConfig.music;

  if (!enabled) return null;

  const url = (collaborativePlaylistUrl || '').trim() || (spotifyEmbed ? spotifyEmbedToOpenUrl(spotifyEmbed) : '');
  if (!url) return null;

  return (
    <section
      id="playlist"
      className="section-container bg-gradient-to-b from-accent/[0.05] via-secondary/35 to-muted/28"
    >
      <div className="max-w-3xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="organic-frame p-6 sm:p-9 md:p-10 shadow-elegant text-center fairy-soft-card"
        >
          <Music className="w-10 h-10 sm:w-11 sm:h-11 text-accent mx-auto mb-4 opacity-95" strokeWidth={1.35} />
          <h2 className="invite-section-title mb-3 max-w-md mx-auto">{playlistTitle}</h2>
          <p className="invite-section-lead px-3 mb-8">
            {playlistDescription}
          </p>
          <Button
            type="button"
            size="lg"
            className="w-full sm:w-auto min-h-[52px] btn-enchant-music px-10 text-[0.95rem]"
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          >
            Abrir la playlist en Spotify
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborativePlaylist;
