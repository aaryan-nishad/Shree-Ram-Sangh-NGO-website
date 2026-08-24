import { useId, useState } from 'react';

/**
 * MissionDetail — one editorial mission block: number, title, image,
 * and an expandable description.
 *
 * `imageFirst` controls the alternating desktop layout (mirrors the
 * same alternation already used in the homepage MissionSection) via
 * the `.mission-grid` / `.mission-grid--reverse` classes in index.css.
 * On mobile, order is always number+title -> image -> paragraph,
 * regardless of `imageFirst`, per the page's mobile IA.
 *
 * The image reuses MissionSection's existing hover treatment —
 * aspect-[16/10], object-cover, and a 500ms scale-up on hover/focus —
 * unchanged. The one deliberate difference: MissionSection's image is
 * a link to this detail page, so its hover state shows a "KNOW MORE"
 * overlay. Here the image isn't a navigation target (we're already on
 * the detail page), so that overlay/link is dropped and only the
 * scale transition is kept.
 */
function MissionDetail({ mission, imageFirst = false }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className={`mission-grid ${imageFirst ? 'mission-grid--reverse' : ''}`}>
      <div className="mission-grid-header">
        <p
          className="text-sm font-semibold tracking-[0.14em]"
          style={{ color: '#d9773d' }}
          aria-hidden="true"
        >
          {mission.number}
        </p>
        <h3
          className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#1f1d1b] sm:text-[2.2rem]"
          style={{ fontFamily: '"Newsreader", Georgia, serif' }}
        >
          {mission.title}
        </h3>
      </div>

      <div className="mission-grid-image">
        <div className="border border-[#eadcc9] bg-white p-1.5">
          <div className="group relative overflow-hidden">
            <img
              src={mission.image}
              alt={mission.title}
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                event.currentTarget.parentElement?.appendChild(
                  Object.assign(document.createElement('div'), {
                    className:
                      'flex aspect-[16/10] w-full items-center justify-center bg-[#f1e6dc] text-sm font-medium uppercase tracking-[0.18em] text-[#5d5a57]',
                    textContent: 'Image unavailable',
                  }),
                );
              }}
            />
          </div>
        </div>
      </div>

      <div className="mission-grid-body">
        <p className="max-w-prose text-[1rem] leading-[1.85] text-text-muted sm:text-[1.05rem]">
          {mission.shortDescription}
        </p>

        <div
          id={contentId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <p
              className={`max-w-prose pt-4 text-[1rem] leading-[1.85] text-text-muted transition-opacity duration-300 ease-out sm:text-[1.05rem] ${
                expanded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {mission.fullDescription}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          aria-controls={contentId}
          className="group mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9773d] transition-colors duration-200 hover:text-[#bf6930] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9773d] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {expanded ? 'Read Less' : 'Read More'}
          <span
            aria-hidden="true"
            className={`inline-block transition-transform duration-200 ${
              expanded ? 'rotate-90' : 'group-hover:translate-x-1'
            }`}
          >
            {expanded ? '↑' : '→'}
          </span>
        </button>
      </div>
    </div>
  );
}

export default MissionDetail;
