import Container from '../ui/Container.jsx';
import impactData from '../../data/impact.js';

function ImpactCard({ impact }) {
  const Icon = impact.icon;

  return (
      <article className="group flex min-h-[245px] min-w-0 flex-col items-center rounded-md border-2 border-amber-200 bg-white p-6 pt-8 text-center shadow-[0_10px_28px_rgba(61,42,31,0.1)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-amber-200/40">
      <div className="-mt-14 flex h-12 w-12 items-center justify-center rounded-full border border-[#eadcc9] bg-white text-[#d9773d] shadow-[0_6px_18px_rgba(61,42,31,0.12)]">
        <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
      </div>
      <p className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#d9773d] sm:text-[2.35rem]">
        {impact.number}
      </p>
      <h3
        className="mt-3 text-base font-semibold leading-snug text-[#1f1d1b] sm:text-lg"
        style={{ fontFamily: '"Noto Sans Devanagari", sans-serif' }}
      >
        {impact.title}
      </h3>
      <p className="mt-2 max-w-[18rem] text-sm leading-6 text-[#5d5a57]">
        {impact.description}
      </p>
    </article>
  );
}

function ImpactSection() {
  return (
    <section
      id="impact"
          className="relative isolate overflow-hidden scroll-mt-24 bg-[#eadcc9] py-14 sm:py-13 lg:py-15"
      aria-labelledby="impact-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{
          backgroundColor: '#eadcc9',
          backgroundImage: `url(${impactData.backgroundImage})`,
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-red-900/60" />

      <Container>
        <header className="mx-auto max-w-3xl text-center text-white">
          <p
            className="text-sm font-semibold tracking-[0.16em] text-white/90 sm:text-base"
            style={{ fontFamily: '"Noto Sans Devanagari", sans-serif' }}
          >
            हमारा प्रभाव
          </p>
          <h2
            id="impact-heading"
            className="mt-3 text-[2.5rem] font-medium leading-none tracking-[-0.04em] sm:text-5xl"
            style={{ fontFamily: '"Newsreader", Georgia, serif' }}
          >
            OUR IMPACT
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            {impactData.intro}
          </p>
        </header>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-8 lg:gap-9">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {impactData.items.slice(0, 4).map((impact) => (
              <ImpactCard key={impact.id} impact={impact} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-auto lg:w-[75%] lg:grid-cols-3 lg:gap-6">
            {impactData.items.slice(4).map((impact) => (
              <ImpactCard key={impact.id} impact={impact} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ImpactSection;