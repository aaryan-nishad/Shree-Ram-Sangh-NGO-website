function AboutHero() {
  return (
    <div className="relative h-[190px] w-full overflow-hidden bg-[#eadcc9] sm:h-[230px] lg:h-[32vh] lg:min-h-[250px]">
      <img
        src="/about-banner.jpg"
        alt=""
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.src = '/logo.jpeg';
          event.currentTarget.classList.add('opacity-40');
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[#3d2a1f]/[0.08]" />
    </div>
  );
}

export default AboutHero;