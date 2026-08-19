import { ArrowRight, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import heroVideos from '../../data/heroSlides.js';
import Button from '../ui/Button';

function Hero() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isReducedMotion, setIsReducedMotion] = useState(() =>
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    );
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
    );
    const activeVideo = heroVideos[0];

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleMotionChange = (event) => {
            setIsReducedMotion(event.matches);
        };

        mediaQuery.addEventListener('change', handleMotionChange);

        return () => mediaQuery.removeEventListener('change', handleMotionChange);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handleViewportChange = (event) => setIsMobile(event.matches);

        mediaQuery.addEventListener('change', handleViewportChange);

        return () => mediaQuery.removeEventListener('change', handleViewportChange);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) {
            return undefined;
        }

        if (isReducedMotion) {
            video.pause();
            return undefined;
        }

        video.play().catch(() => undefined);

        return () => {
            video.pause();
        };
    }, [isReducedMotion]);

    const handleVideoToggle = async () => {
        const video = videoRef.current;
        if (!video) {
            return;
        }

        if (video.paused) {
            try {
                await video.play();
                setIsPlaying(true);
            } catch (error) {
                console.warn('Hero video playback was blocked:', error);
            }
            return;
        }

        video.pause();
        setIsPlaying(false);
    };

    return (
        <section className="relative w-full overflow-hidden bg-[#fffdf9]">
            <div className="relative mx-auto max-w-[1600px]">
                <div className="relative flex h-[70vh] min-h-[500px] flex-col-reverse overflow-hidden md:flex-row">

                    {/* Content */}
                    <div className=" relative flex basis-full items-start bg-[#ffff] px-5 py-8 sm:px-9 sm:py-10 md:basis-[42%] md:px-[5vw] md:pt-12 md:pb-8 lg:pt-14 lg:pb-8">
                        <div className="relative z-10 max-w-[30rem]">

                            <p className="font-['Noto_Sans_Devanagari'] text-xs font-semibold tracking-[0.12em] text-[#d9773d] sm:text-sm">
                                {activeVideo.eyebrow}
                            </p>

                            <h4 className="mt-2 max-w-[30rem] font-[Newsreader] text-[1.8rem] leading-[0.95] text-[#1f1d1b] sm:text-[2rem] lg:text-[2rem] xl:text-[2.5rem]">
                                {activeVideo.title}
                            </h4>

                            <p className="mt-5 max-w-[28rem] text-sm leading-6 text-[#5d5a57] sm:text-base">
                                {activeVideo.description}
                            </p>

                            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <Button size="lg" className="w-full sm:w-auto">
                                    {activeVideo.primaryAction}
                                </Button>

                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1f1d1b] transition-colors hover:text-[#d9773d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9773d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f2eb]"
                                >
                                    <span>{activeVideo.secondaryAction}</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>

                            <div className="mt-8 hidden items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#5d5a57] sm:flex">
                                <span className="flex h-8 items-center justify-center">
                                    <span className="h-8 w-px bg-[#d9773d]" />
                                </span>
                                <span>Scroll to explore</span>
                            </div>

                        </div>
                    </div>

                    {/* Video */}
                    <div className="relative flex min-h-[38vh] basis-full overflow-hidden rounded-bl-[2rem] bg-[#e8d9ce] md:min-h-0 md:basis-[58%]">

                        {/* Left gradient */}
                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[70px] bg-gradient-to-r from-[#d9773d] via-[#d9773d]/60 to-transparent"
                        />

                        {/* Bottom gradient */}
                        <div
                            className=" pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[55px] bg-gradient-to-t from-[#d9773d] via-[#d9773d]/60 to-transparent "
                        />

                        <video
                            ref={videoRef}
                            className="h-full w-full object-cover"
                            src={activeVideo.src}
                            poster={activeVideo.poster}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                objectPosition: isMobile
                                    ? activeVideo.mobilePosition
                                    : activeVideo.desktopPosition,
                            }}
                            aria-label={activeVideo.title}
                        />

                        {/* Video control */}
                        <button
                            type="button"
                            aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
                            onClick={handleVideoToggle}
                            className="absolute bottom-5 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-colors hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            {isPlaying ? (
                                <Pause size={16} />
                            ) : (
                                <Play size={16} className="ml-0.5" fill="currentColor" />
                            )}
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
