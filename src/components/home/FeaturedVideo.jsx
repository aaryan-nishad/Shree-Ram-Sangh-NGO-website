import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';
import featuredVideo from '../../data/featuredVideo.js';
import Button from '../ui/Button';
import Container from '../ui/Container';

function FeaturedVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const handleTogglePlayback = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
        setHasStarted(true);
      } catch (error) {
        console.warn('Video playback was blocked:', error);
      }
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f1ea] py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />

      <Container className="relative">
        <div className="relative grid items-center gap-6 md:grid-cols-[1.3fr_0.9fr] md:gap-8 lg:gap-10">
          <div className="absolute inset-y-0 left-[53%] hidden w-20 bg-gradient-to-r from-[#f7f1ea]/0 via-[#f7f1ea]/70 to-[#f5efe9] md:block" />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#eadcc9] bg-[#f0e7df] shadow-[0_18px_40px_rgba(31,29,27,0.04)]">
            <video
              ref={videoRef}
              className="aspect-[16/10] w-full object-cover"
              poster={featuredVideo.poster}
              playsInline
              muted
              loop
            >
              <source src={featuredVideo.src} type="video/mp4" />
            </video>

            {!hasStarted && (
              <button
                type="button"
                aria-label="Play featured video"
                onClick={handleTogglePlayback}
                className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#d9773d]/90 text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Play size={20} className="ml-0.5" fill="currentColor" />
              </button>
            )}

            {hasStarted && (
              <button
                type="button"
                aria-label={isPlaying ? 'Pause featured video' : 'Play featured video'}
                onClick={handleTogglePlayback}
                className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" fill="currentColor" />}
              </button>
            )}

            <button
              type="button"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              onClick={handleToggleMute}
              className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>

          <div className="relative rounded-[1.5rem] border border-[#eadcc9] bg-gradient-to-br from-[#f8f3ee] via-[#f5efe8] to-[#f0e6dc] p-6 sm:p-8 lg:p-10">
            <div className="mb-4 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#d9773d]">
              <span className="h-px w-8 bg-[#d9773d]/70" />
              {featuredVideo.eyebrow}
            </div>

            <h2 className="max-w-md font-['Noto_Serif_Devanagari'] text-3xl leading-tight text-[#1f1d1b] sm:text-4xl">
              {featuredVideo.heading}
            </h2>

            <p className="mt-4 max-w-lg text-base leading-7 text-[#5d5a57]">
              {featuredVideo.description}
            </p>

            <Button size="lg" className="mt-7 border border-[#d9773d] bg-[#d9773d] text-white hover:bg-[#c96a31]">
              {featuredVideo.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedVideo;
