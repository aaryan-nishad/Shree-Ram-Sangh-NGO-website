import initiatives from '../../data/initiatives.js';
import Container from '../ui/Container.jsx';
import InitiativeBlock from './InitiativeBlock.jsx';

function InitiativesSection() {
  return (
    <section className="border-t border-[#eae1d8] bg-[#f7f2eb] py-15 sm:py-10 lg:py-15" aria-labelledby="initiatives-section-heading">
      <Container>
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-3xl text-center">
            {/* <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9773d] sm:text-sm">
              धर्म के साथ सेवा
            </p> */}
            <h2
              id="initiatives-section-heading"
              className="mt-1 text-[2.3rem] font-medium tracking-[-0.04em] text-[#1f1d1b] sm:text-[2.3rem] lg:text-[2.5rem]"
              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
            >
              INITIATIVES UNDERTAKEN
            </h2>
            <p className="mt-1 text-lg leading-7 text-text-muted sm:text-lg">
              These initiatives are how Shree Ram Sangh turns its mission into practical action, creating sustained support for people, culture, the environment and living beings across the community.
            </p>
          </header>

          <div className="mt-5 space-y-12 sm:mt-14 lg:mt-5 lg:space-y-16">
            {initiatives.map((initiative, index) => (
              <InitiativeBlock key={initiative.id} initiative={initiative} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default InitiativesSection;
