import { Link } from 'react-router-dom';
import missions from '../../data/missions.js';
import Container from '../ui/Container.jsx';

function MissionSection() {
  return (
    <section className="bg-[#fffdf9] py-20 sm:py-24 lg:py-32" aria-labelledby="mission-heading">
      <Container>
        <div className="mx-auto max-w-5xl">
          <header className="mb-2 text-center sm:mb-1 lg:mb-2">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#d9773d] sm:text-sm"
            style={{ fontFamily: '"Playfair Display", serif' }}>
              धर्म एव हतो हन्ति धर्मो रक्षति रक्षि तः
            </p>
            <h2
              id="mission-heading"
              className="mt-4 text-[2.8rem] font-medium tracking-[-0.04em] text-[#1f1d1b] sm:text-[2rem] lg:text-[2.8rem]"
              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
            >
              OUR MISSION
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-[#5d5a57] sm:text-lg">
                         " One Who is Engaged in the Welfare of All Beings Attains Peace."
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-orange-500 sm:text-base">
                          Establishing a prosperous, cultured, devout, and self-reliant society where every
                          individual is committed to respecting the environment, culture, duty, emotions, and all
                          living beings.
            </p>
          </header>

          <div className="space-y-13 md:space-y-10 lg:space-y-13">
            {missions.map((mission, index) => {
              const isImageFirst = index % 2 === 1;

              return (
                <article
                  key={mission.link}
                  className="border-t border-[#eae1d8] pt-10 first:border-t-0"
                >
                  <div className="grid items-center gap-7 md:gap-10 lg:gap-14 xl:gap-16 md:grid-cols-2 border-2 border-amber-400 box-shadow-md rounded-lg p-5 hover:shadow-orange-200 hover:shadow-xl transition-shadow duration-300 ">
                    {isImageFirst ? (
                      <>
                        <div className="order-2 md:order-1">
                          <Link
                            to={mission.link}
                            className="group relative block overflow-hidden rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9773d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf9]"
                            aria-label={`View ${mission.title}`}
                          >
                            <div className="relative overflow-hidden">
                              <img
                                src={mission.image}
                                alt={mission.title}
                                className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
                                onError={(event) => {
                                  event.currentTarget.style.display = 'none';
                                  event.currentTarget.parentElement?.appendChild(Object.assign(document.createElement('div'), {
                                    className: 'flex aspect-[16/10] w-full items-center justify-center bg-[#f1e6dc] text-sm font-medium uppercase tracking-[0.18em] text-[#5d5a57]',
                                    textContent: 'Image unavailable',
                                  }));
                                }}
                              />
                              <div className="absolute inset-0 bg-[#d9773d]/60 opacity-0 transition-opacity duration-400 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="translate-y-3 text-sm font-semibold uppercase tracking-[0.22em] text-white opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                                  KNOW MORE <span aria-hidden="true">→</span>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="order-1 md:order-2">
                          <div className="max-w-xl">
                            {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9773d] sm:text-base">
                              {mission.number}
                            </p> */}
                            <h3
                              className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#1f1d1b] sm:text-[2.2rem]"
                              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                            >
                              {mission.title}
                            </h3>
                                          <div className="mt-5 space-y-3">
                                              {mission.description.map((point) => (
                                                  <div
                                                      key={point}
                                                      className="flex items-start gap-3 text-sm leading-6 text-text-muted sm:text-base"
                                                  >
                                                      <span
                                                          aria-hidden="true"
                                                          className="mt-1 shrink-0 text-sm text-[#d9773d]"
                                                      >
                                                          卐
                                                      </span>

                                                      <span>{point}</span>
                                                  </div>
                                              ))}
                                          </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="order-1">
                          <div className="max-w-xl">
                            {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9773d] sm:text-base">
                              {mission.number}
                            </p> */}
                            <h3
                              className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#1f1d1b] sm:text-[2.2rem]"
                              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                            >
                              {mission.title}
                            </h3>
                                              <div className="mt-5 space-y-3">
                                                  {mission.description.map((point) => (
                                                      <div
                                                          key={point}
                                                          className="flex items-start gap-3 text-sm leading-6 text-text-muted sm:text-base"
                                                      >
                                                          <span
                                                              aria-hidden="true"
                                                              className="mt-1 shrink-0 text-sm text-[#d9773d]"
                                                          >
                                                              卐
                                                          </span>

                                                          <span>{point}</span>
                                                      </div>
                                                  ))}
                                              </div>
                          </div>
                        </div>

                        <div className="order-2">
                          <Link
                            to={mission.link}
                            className="group relative block overflow-hidden rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9773d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf9]"
                            aria-label={`View ${mission.title}`}
                          >
                            <div className="relative overflow-hidden">
                              <img
                                src={mission.image}
                                alt={mission.title}
                                className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
                                onError={(event) => {
                                  event.currentTarget.style.display = 'none';
                                  event.currentTarget.parentElement?.appendChild(Object.assign(document.createElement('div'), {
                                    className: 'flex aspect-[16/10] w-full items-center justify-center bg-[#f1e6dc] text-sm font-medium uppercase tracking-[0.18em] text-[#5d5a57]',
                                    textContent: 'Image unavailable',
                                  }));
                                }}
                              />
                              <div className="absolute inset-0 bg-[#d9773d]/60 opacity-0 transition-opacity duration-400 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="translate-y-3 text-sm font-semibold uppercase tracking-[0.22em] text-white opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                                  KNOW MORE <span aria-hidden="true">→</span>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MissionSection;
