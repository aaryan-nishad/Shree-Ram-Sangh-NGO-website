import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import heroSlides from '../../data/heroSlides.js';
import Button from '../ui/Button';
import Container from '../ui/Container';

const AUTOPLAY_DELAY = 5000;

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsPaused(true);
      return undefined;
    }

    if (isPaused) {
      return undefined;
    }

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalRef.current);
  }, [isPaused]);

  useEffect(() => {
    return () => window.clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPaused(true);
      return;
    }

    setIsPaused(true);
    window.clearTimeout(intervalRef.current);
    intervalRef.current = window.setTimeout(() => setIsPaused(false), 7000);
  };

  const goToPrevious = () => {
    goToSlide((activeIndex - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    goToSlide((activeIndex + 1) % heroSlides.length);
  };

  const activeSlide = heroSlides[activeIndex];

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#1f1d1b]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured organization carousel"
    >
      <div className="relative h-[60vh] min-h-[420px] sm:h-[68vh] md:h-[72vh] lg:h-[78vh]">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                style={{ objectPosition: slide.mobilePosition || slide.imagePosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.68)_0%,rgba(12,12,12,0.38)_38%,rgba(12,12,12,0.18)_100%)]" />
            </div>
          );
        })}

        <div className="absolute inset-0 z-10 flex items-end">
          <Container className="pb-8 pt-12 sm:pb-10 lg:pb-12">
            <div className="max-w-[32rem] text-white">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-orange-100">
                {activeSlide.eyebrow}
              </p>
              <h1 className="mt-4 font-[Newsreader] text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
                {activeSlide.title}
              </h1>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/85 sm:text-base">
                {activeSlide.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" className="w-full border border-[#d9773d] bg-[#d9773d] text-white hover:bg-[#c96a31] sm:w-auto">
                  {activeSlide.primaryAction}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full border-white/30 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
                >
                  {activeSlide.secondaryAction}
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 items-center gap-2 sm:right-6 lg:right-8">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPrevious}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center sm:bottom-7">
          <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/15 px-3 py-2 backdrop-blur-sm">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === activeIndex ? 'w-6 bg-[#d9773d]' : 'w-2 bg-white/60 hover:bg-white/85'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
