import AboutSection from '../components/home/AboutSection.jsx';
import Hero from '../components/home/Hero.jsx';
import ImpactSection from '../components/home/ImpactSection.jsx';
import InitiativeSection from '../components/home/InitiativeSection.jsx';
import MissionSection from '../components/home/MissionSection.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hash === '#impact') {
        document.getElementById('impact')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <Hero />
      <AboutSection />
      <MissionSection />
      <InitiativeSection />
      <ImpactSection />
    </>
  );
}

export default Home;
