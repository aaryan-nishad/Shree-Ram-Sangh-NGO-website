import missionsPage from '../../data/missionsPage.js';

/**
 * MissionsHero — short landscape banner for the /missions page.
 *
 * Deliberately mirrors AboutHero.jsx (same height steps, same
 * object-cover treatment, same graceful onError fallback) so the two
 * pages read as part of one site rather than two different templates.
 */
function MissionsHero() {
  return (
    <div className="relative h-[160px] w-full overflow-hidden bg-[#eadcc9] sm:h-[220px] lg:h-[28vh] lg:min-h-[260px] lg:max-h-[320px]">
      <img
        src={missionsPage.banner}
        alt=""
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.src = missionsPage.bannerFallback;
          event.currentTarget.classList.add('opacity-40');
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[#3d2a1f]/[0.08]" />
    </div>
  );
}

export default MissionsHero;
