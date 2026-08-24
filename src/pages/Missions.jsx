import { useEffect } from 'react';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import MissionsHero from '../components/missions/MissionsHero.jsx';
import MissionIntro from '../components/missions/MissionIntro.jsx';
import MissionDetail from '../components/missions/MissionDetail.jsx';
import missions from '../data/missions.js';
import missionsPage from '../data/missionsPage.js';


function Missions() {

    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return undefined;

        const id = decodeURIComponent(hash.substring(1));
        let frameId;
        let correctionFrameId;

        const scrollToMission = () => {
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        };

        frameId = requestAnimationFrame(() => {
            scrollToMission();

            const pendingImages = Array.from(document.images)
                .filter((image) => !image.complete)
                .map(
                    (image) =>
                        new Promise((resolve) => {
                            image.addEventListener('load', resolve, { once: true });
                            image.addEventListener('error', resolve, { once: true });
                        }),
                );

            Promise.all(pendingImages).then(() => {
                correctionFrameId = requestAnimationFrame(scrollToMission);
            });
        });

        return () => {
            cancelAnimationFrame(frameId);
            if (correctionFrameId) cancelAnimationFrame(correctionFrameId);
        };
    }, []);
    
    return (
        <div className="overflow-hidden bg-[#fffdf9]">
            <MissionsHero />

            {/*
        Single shared watermark for the whole content area below the
        banner (quote, heading, all four missions, closing CTA) — not
        repeated per mission section, per spec.
      */}
            <div className="relative">
                <img
                    src={missionsPage.watermark}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute top-24 right-[-10%] hidden w-[70%] max-w-[560px] opacity-[0.05] select-none sm:block lg:right-[-4%] lg:top-32 lg:w-[46%] lg:opacity-[0.07]"
                />

                <div className="relative">
                    <MissionIntro />

                    <section className="pb-20 sm:pb-28 lg:pb-32" aria-label="Our missions in detail">
                        <Container>
                            <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10 lg:space-y-[50px]">
                                {missions.map((mission, index) => (
                                    <article
                                        key={mission.link}
                                        id={mission.link.split('#')[1]}
                                        className="scroll-mt-24 border-t border-[#eae1d8] pt-8 first:border-t-0 first:pt-0 sm:pt-10 sm:first:pt-0 lg:pt-[50px] lg:first:pt-0"
                                    >
                                        <MissionDetail mission={mission} imageFirst={index % 2 === 1} />
                                    </article>
                                ))}
                            </div>
                        </Container>
                    </section>

                    <section className="border-t border-[#eae1d8] pb-24 pt-16 text-center sm:pb-28 sm:pt-20">
                        <Container>
                            <div className="mx-auto max-w-2xl">
                                <h2
                                    className="text-[1.9rem] font-medium tracking-[-0.03em] text-[#1f1d1b] sm:text-4xl"
                                    style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                                >
                                    {missionsPage.closing.heading}
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
                                    {missionsPage.closing.body}
                                </p>
                                <div className="mt-8 flex justify-center">
                                    <Button variant="primary" size="lg">
                                        Get Involved
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Missions;
