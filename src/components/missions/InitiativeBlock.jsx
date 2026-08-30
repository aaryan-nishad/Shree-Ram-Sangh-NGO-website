function InitiativeBlock({ initiative, index }) {
  const isTextFirst = index % 2 === 0;

  return (
    <article
      id={initiative.sectionId}
      className="group scroll-mt-24 border-t border-[#eae1d8] pt-8 sm:pt-5 lg:pt-8"
    >
      <div
        className={`grid items-center gap-6 lg:gap-10 ${
          isTextFirst ? 'lg:grid-cols-[1.05fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1.05fr]'
        }`}
      >
        <div className={isTextFirst ? 'lg:order-1' : 'lg:order-2'}>
          {/* <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#d9773d] sm:text-xs">
            Initiative {initiative.number}
          </p> */}
          <h3
            className="mt-1 text-[2rem] font-medium tracking-[-0.04em] text-[#1f1d1b] sm:text-[2rem]"
            style={{ fontFamily: '"Newsreader", Georgia, serif' }}
          >
            {initiative.title}
          </h3>
          <p className="mt-1 max-w-xl text-base leading-7 text-text-muted sm:text-md">
            {initiative.shortDescription}
          </p>

          <ul className="mt-2 space-y-4">
            {initiative.points.map((point) => (
              <li key={`${initiative.id}-${point.title}`} className="flex items-start gap-3 text-base leading-7 text-[#2b2825]">
                <span aria-hidden="true" className="mt-1 shrink-0 text-sm leading-none text-[#d9773d]">
                  卐
                </span>
                <span className="min-w-0 break-words">
                  <span className="font-semibold text-[#1f1d1b]">{point.title}</span>
                  <span className="text-text-muted"> — {point.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={isTextFirst ? 'lg:order-2' : 'lg:order-1'}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="overflow-hidden border border-[#e7d9c5] bg-[#f8f2eb] p-1">
                <img
                  src={initiative.images[0]}
                  alt={`${initiative.title} primary view`}
                  className="aspect-[1/0.5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                    event.currentTarget.parentElement?.appendChild(
                      Object.assign(document.createElement('div'), {
                        className:
                          'flex aspect-[4/3] w-full items-center justify-center bg-[#f1e6dc] text-xs font-medium uppercase tracking-[0.18em] text-[#5d5a57]',
                        textContent: 'Image unavailable',
                      }),
                    );
                  }}
                />
              </div>
            </div>

            {initiative.images.slice(1).map((image, imageIndex) => (
              <div key={`${initiative.id}-image-${imageIndex}`}>
                <div className="overflow-hidden border border-[#e7d9c5] bg-[#f8f2eb] p-1.5">
                  <img
                    src={image}
                    alt={`${initiative.title} supporting view ${imageIndex + 1}`}
                    className="aspect-[1/0.5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                      event.currentTarget.parentElement?.appendChild(
                        Object.assign(document.createElement('div'), {
                          className:
                            'flex aspect-[4/5] w-full items-center justify-center bg-[#f1e6dc] text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#5d5a57]',
                          textContent: 'Image unavailable',
                        }),
                      );
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default InitiativeBlock;
