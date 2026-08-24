import Container from "../ui/Container.jsx";
import about from '../../data/aboutus.js';
import { Link } from "react-router-dom";

function AboutSection() {
    return (
        
        <section className="relative overflow-hidden bg-transparent py-10 sm:py-0 lg:py-10">
            {/* Bottom gradient */}
            {/* <div
                className=" pointer-events-none absolute left-0 right-0 z-10 h-[55px] bg-gradient-to-b from-[#d9773d] via-[#d9773d]/60 to-transparent "
            /> */}
            
            <img
                src="/logo.jpeg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-80 z-0 w-[320px] -translate-x-1/2 -translate-y-1/2 opacity-[0.5] blur-[1px] select-none sm:w-[500px] md:w-[600px] lg:w-[700px]"
            />
            <Container className="relative">
                <div className="mx-auto max-w-5xl text-center mt-10 lg:mx-0 lg:ml-[3%] lg:max-w-10xl">
                    {/* Sanskrit / Hindi quote */}
                    <div>
                        {/* <span
                            aria-hidden="true"
                            className="mx-auto mb-6 block h-px w-10"
                            style={{ backgroundColor: ACCENT }}
                        /> */}
                        <p
                            lang="sa"
                            className="text-[1.75rem] leading-snug text-orange-500 sm:text-4xl lg:text-[2.75rem]"
                            style={{ fontFamily: '"Tillana", system- ui' }}
                        >
                            {about.quoteDevanagari}
                            <span
                                aria-hidden="true"
                                className="mx-auto mb-3 block h-0.5 w-50 sm:mb-6 sm:w-30 lg:w-50 lg:mb-6 bg-orange-500 "
                            />
                        </p>
                        {/* <p className="mt-3 text-sm tracking-wide text-text-muted sm:text-base">
                            {about.quoteTranslation}
                        </p> */}
                    </div>

                    {/* About heading */}
                    {/* <h2
                        className="m-0 text-3xl text-yellow-500 sm:mt-6 sm:ml-2 sm:text-3xl lg:text-4xl"
                        style={{ fontFamily: '"Caveat", cursive', fontWeight: 600 }}
                    >
                        {about.heading}
                    </h2> */}

                    {/* Introduction paragraph */}
                    <p className="mx-auto mt-6 max-w-fit text-base leading-relaxed text-text-muted sm:text-lg lg:mx-0">
                        <span className="text-lg font-bold text-orange-500 sm:text-xl"
                            style={{ fontFamily: '"Playfair Display", serif' }}>
                            
                            {about.paragraphIntro}
                        </span>{" "}
                        {about.paragraph}
                    </p>
                    <div className="mt-8 flex justify-end">
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 rounded-md bg-[#d9773d] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#c8662f] hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9773d] focus-visible:ring-offset-2">
                            Read More
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                {/* Reserved space for a future NGO-related animation */}
                {/* <div
                    aria-hidden="true"
                    className="mx-auto mt-16 h-40 w-full max-w-md rounded-sm border border-dashed border-border bg-background-muted/60 sm:mt-20 sm:h-48 lg:mx-0 lg:ml-[6%] lg:mt-24 lg:h-56"
                >
                    <span className="flex h-full items-center justify-center text-xs tracking-wide text-text-muted/70 uppercase">
                        [Animation placeholder]
                    </span>
                </div> */}
            </Container>
        </section>
    );
}

export default AboutSection;
