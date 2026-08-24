import AboutContent from '../components/about/AboutContent.jsx';
import AboutHero from '../components/about/AboutHero.jsx';
import aboutPage from '../data/aboutPage.js';

function About() {
  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <AboutHero />
      <section className="px-4 pb-5 pt-10 text-center sm:pb-7 sm:pt-14">
        <p
          lang="sa"
          className="text-[2rem] leading-tight text-[#d9773d] sm:text-[2.65rem]"
          style={{ fontFamily: '"Tillana", "Noto Sans Devanagari", sans-serif' }}
        >
          {aboutPage.quote}
        </p>
        <div className="mx-auto mt-2 flex w-fit flex-col items-center gap-3 text-[#d9773d]">
          <span aria-hidden="true" className=" h-px w-24 bg-[#d9773d] sm:w-32" />
          {aboutPage.quoteTranslation}
        </div>
      </section>

      <section className="px-4 pb-8 pt-5 text-center sm:pb-12 sm:pt-1">
        <h1 className="font-display text-[2.3rem] font-normal leading-none text-[#1f1d1b] sm:text-5xl">
                  <span className="mr-2 text-[#d9773d]" style={{ fontFamily: '"Playfair Display", serif' }}>
          Shree Ram Sangh
          </span>
        </h1>
      </section>

      <AboutContent page={aboutPage} />
    </div>
  );
}

export default About;