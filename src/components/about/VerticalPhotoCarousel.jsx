import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

function Photo({ image }) {
  return (
    <figure className="about-reel-photo group relative shrink-0 overflow-hidden border border-[#d4a62a]/35 bg-[#f8f2eb] shadow-[0_8px_24px_rgba(111,73,35,0.08)]">
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        onError={(event) => {
          event.currentTarget.src = '/logo.jpeg';
          event.currentTarget.classList.add('opacity-45', 'object-contain', 'p-10');
        }}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#eab308]/15" />
    </figure>
  );
}

function VerticalPhotoCarousel({ images }) {
  const [isPaused, setIsPaused] = useState(false);
  const reelImages = [...images, ...images];

  return (
    <div
      className="about-reel-viewport relative w-full h-lvw overflow-hidden" 
      onPointerDown={() => setIsPaused(true)}
      onPointerUp={() => setIsPaused(false)}
      onPointerCancel={() => setIsPaused(false)}
      onPointerLeave={() => setIsPaused(false)}
      aria-label="Photo reel"
    >
      <div
        className={`about-reel-track flex ${isPaused ? 'about-reel-paused' : ''}`} 
      >
        {reelImages.map((image, index) => (
          <Photo image={image} key={`${image.src}-${index}`} />
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fffdf9] to-transparent lg:hidden" />
      <div className="mt-3 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#9a6d28] lg:absolute lg:bottom-2 lg:left-[-2.75rem] lg:mt-0 lg:-rotate-90 lg:origin-left">
        <ArrowDown size={13} strokeWidth={1.5} aria-hidden="true" />
        <span>Photo archive</span>
      </div>
    </div>
  );
}

export default VerticalPhotoCarousel;