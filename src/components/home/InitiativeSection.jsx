import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import initiatives from '../../data/initiatives.js';
import Container from '../ui/Container.jsx';

function InitiativeSection() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(initiatives.length);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [slideStep, setSlideStep] = useState(0);

  useEffect(() => {
    const updateCarousel = () => {
      const firstSlide = trackRef.current?.firstElementChild;
      if (firstSlide) {
        const styles = window.getComputedStyle(trackRef.current);
        const columnGap = Number.parseFloat(styles.columnGap);
        const gap = Number.isFinite(columnGap)
          ? columnGap
          : Number.parseFloat(styles.gap) || 0;
        setSlideStep(firstSlide.getBoundingClientRect().width + gap);
      }
    };

    const frameId = window.requestAnimationFrame(updateCarousel);
    const observer = new ResizeObserver(updateCarousel);
    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    window.addEventListener('resize', updateCarousel);
    window.addEventListener('load', updateCarousel);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('resize', updateCarousel);
      window.removeEventListener('load', updateCarousel);
    };
  }, []);


  const ensureSlideStep = () => {
    if (slideStep > 0) {
      return;
    }

    const firstSlide = trackRef.current?.firstElementChild;
    if (!firstSlide || !trackRef.current) {
      return;
    }

    const styles = window.getComputedStyle(trackRef.current);
    const gap = Number.parseFloat(styles.columnGap) || Number.parseFloat(styles.gap) || 0;
    setSlideStep(firstSlide.getBoundingClientRect().width + gap);
  };

    const handlePrevious = () => {
        ensureSlideStep();
        setIsTransitionEnabled(true);

        setCurrentIndex((index) => index - 1);
    };

    const handleNext = () => {
        ensureSlideStep();
        setIsTransitionEnabled(true);

        setCurrentIndex((index) => index + 1);
    };

    const handleTransitionEnd = () => {
        const total = initiatives.length;

        // We moved into the cloned copy at the beginning
        if (currentIndex < total) {
            setIsTransitionEnabled(false);
            setCurrentIndex(currentIndex + total);
        }

        // We moved into the cloned copy at the end
        if (currentIndex >= total * 2) {
            setIsTransitionEnabled(false);
            setCurrentIndex(currentIndex - total);
        }
    };

  return (
    <section
      className="border-t border-orange-600 bg-orange-400 py-10 sm:py-10 lg:py-10"
      aria-labelledby="initiatives-heading"
    >
      <Container className="max-w-none">
        <div className="grid items-start gap-x-8 gap-y-10 md:items-center md:grid-cols-[minmax(0,3fr)_minmax(240px,2fr)] lg:grid-cols-[minmax(0,1.65fr)_minmax(270px,1fr)] lg:gap-x-14">
          <div
            ref={viewportRef}
            className="order-2 min-w-0 overflow-hidden md:order-1 md:row-span-2"
            aria-label="Our initiatives carousel"
          >
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-3 sm:gap-2 lg:gap-3 ${
                isTransitionEnabled ? 'transition-transform duration-500 ease-out' : ''
              }`}
              style={{
                transform: `translate3d(-${currentIndex * slideStep}px, 0, 0)`,
              }}
            >
              {[...initiatives, ...initiatives, ...initiatives].map((initiative, index) => {
                const cardImage = initiative.images?.[0] ?? initiative.image ?? '/logo.jpeg';

                return (
                  <Link
                    key={`${initiative.id}-${index}`}
                    to={initiative.link}
                    className="group relative block min-w-0 basis-full shrink-0 overflow-hidden border rounded-md border-[#d8b889]/70 bg-[#eadcc9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-muted sm:basis-[calc(45%-0.625rem)] lg:basis-[calc(45%-0.75rem)]"
                    aria-label={`View ${initiative.title}`}
                  >
                    <img
                      src={cardImage}
                      alt={initiative.title}
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
                      onError={(event) => {
                        if (event.currentTarget.src.endsWith('/logo.jpeg')) {
                          return;
                        }
                        event.currentTarget.src = '/logo.jpeg';
                      }}
                    />
                    <span className="absolute inset-0 bg-[#7b4226]/0 transition-colors duration-400 ease-out group-hover:bg-[#7b4226]/30 group-focus-visible:bg-[#7b4226]/30" />
                    <span className="absolute inset-x-5 bottom-5 translate-y-3 text-base font-semibold leading-tight text-white opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:text-lg">
                      {initiative.title} <ArrowRight className="ml-1 inline-block" size={18} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="order-1 md:order-2 md:pb-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white sm:text-sm">
              INITIATIVES Undertaken
            </p>
            <h2
              id="initiatives-heading"
              className="mt-4 max-w-sm text-xl font-medium leading-[0.98] tracking-[-0.04em] text-red-800 sm:text-[1.8rem] lg:text-[2rem]"
              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
            >
              Turning Purpose Into Action
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-gray-100 ">
              Our initiatives turn our values into meaningful action, creating opportunities to serve communities, preserve our heritage, protect our environment and care for all living beings.
            </p>
          </div>

          <div className="order-3 flex items-center gap-5 border-t border-[#ffff]/70 pt-5 md:col-start-2 md:row-start-2 md:-mt-2">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Show previous initiatives"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-900 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-muted"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              {/* Previous */}
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Show next initiatives"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-900 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-muted"
            >
              {/* Next */}
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default InitiativeSection;