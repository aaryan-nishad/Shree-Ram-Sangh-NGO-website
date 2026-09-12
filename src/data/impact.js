import {
  GraduationCap,
  HeartHandshake,
  Leaf,
  Droplets,
  Users,
} from 'lucide-react';

import impactBackground from '../assets/mission-03.jpeg';

const impactData = {
  backgroundImage: impactBackground,
  intro:
    'हमारा काम समुदाय, संस्कृति, पर्यावरण और सभी जीवों के लिए निरंतर सेवा के माध्यम से बदलाव लाता है।',
  items: [
    {
      id: 'impact-01',
      number: '1+ वर्ष',
      title: 'मिशन मातृ गोमती',
      description: 'इस मिशन का सत्यापित विवरण शीघ्र जोड़ा जाएगा।',
      icon: Droplets,
    },
    {
      id: 'impact-02',
      number: '35+ स्थानों पर',
      title: 'स्वच्छता अभियान',
      description: 'इस अभियान का सत्यापित विवरण शीघ्र जोड़ा जाएगा।',
      icon: Users,
    },
    {
      id: 'impact-03',
      number: '500+',
      title: 'पौधे रोपे गए',
      description: 'इस पहल का सत्यापित विवरण शीघ्र जोड़ा जाएगा।',
      icon: Leaf,
    },
    {
      id: 'impact-04',
      number: '1000+ लोगों को',
      title: 'भोजन वितरण',
      description: 'इस सेवा का सत्यापित विवरण शीघ्र जोड़ा जाएगा।',
      icon: HeartHandshake,
    },
    {
      id: 'impact-05',
      number: '2',
      title: 'बच्चों तक शैक्षणिक सहयोग',
      description: 'इस सहयोग का सत्यापित विवरण शीघ्र जोड़ा जाएगा।',
      icon: GraduationCap,
    },
    {
      id: 'impact-06',
      number: '6+',
      title: 'रक्तदाताओं का योगदान',
      description: 'इस योगदान का सत्यापित विवरण शीघ्र जोड़ा जाएगा।',
      icon: HeartHandshake,
    },
    {
      id: 'impact-07',
      number: '—',
      title: 'स्वयंसेवक एवं सहयोगी',
      description: 'सत्यापित संख्या उपलब्ध होने पर यहां जोड़ी जाएगी।',
      icon: Users,
    },
  ],
};

export default impactData;