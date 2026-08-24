import Container from '../ui/Container.jsx';
import VerticalPhotoCarousel from './VerticalPhotoCarousel.jsx';

function AboutContent({ page }) {
  return (
    <section className="pb-20 pt-8 sm:pb-28 sm:pt-10 lg:pt-14">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,1fr)] lg:gap-20 xl:gap-28">
          <article className="max-w-[680px]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9773d]">
              Who We Are
            </p>
            <p className="max-w-[65ch] text-lg leading-[1.85] text-[#3b3733] sm:text-xl sm:leading-[1.8]">
              {page.introduction}
            </p>
            <div className="mt-3 space-y-6 border-t border-[#eae1d8] pt-8 text-[1rem] leading-[1.85] text-[#5d5a57] sm:text-[1.05rem]">
              {page.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[65ch]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div className="min-w-0 lg:flex lg:self-stretch lg:pt-2">
            <VerticalPhotoCarousel images={page.images} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutContent;