import missionsPage from '../../data/missionsPage.js';

/**
 * MissionIntro — Sanskrit quote, "OUR MISSION" heading and short
 * intro statement.
 *
 * Styling deliberately mirrors the inline quote block in About.jsx
 * (same Tillana treatment, same orange, same divider rule) so this
 * page reads as a continuation of the About page rather than a new
 * visual language.
 */
function MissionIntro() {
  return (
    <>
      <section className="px-4 pb-5 pt-10 text-center sm:pb-7 sm:pt-14">
        <p
          lang="sa"
          className="text-[2rem] leading-tight text-[#d9773d] sm:text-[2.65rem]"
          style={{ fontFamily: '"Tillana", "Noto Sans Devanagari", sans-serif' }}
        >
          {missionsPage.quote}
        </p>
        <div className="mx-auto mt-2 flex w-fit flex-col items-center gap-3 text-[#d9773d]">
          <span aria-hidden="true" className="h-px w-24 bg-[#d9773d] sm:w-32" />
          {missionsPage.quoteTranslation}
        </div>
      </section>

      <section className="px-4 pb-10 pt-2 text-center sm:pb-14">
        <h1
          className="text-[2.2rem] font-medium tracking-[-0.03em] text-[#1f1d1b] sm:text-5xl"
          style={{ fontFamily: '"Newsreader", Georgia, serif' }}
        >
          {missionsPage.heading}
        </h1>
        <p className="mx-auto mt-4 max-w-6xl text-fit leading-7 text-text-muted sm:text-lg lg:max-w-6xl sm:max-w-4xl ">
          {missionsPage.intro}
        </p>
      </section>
    </>
  );
}

export default MissionIntro;
