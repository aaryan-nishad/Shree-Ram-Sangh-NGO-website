import mission01 from '../assets/mission-01.jpeg';
import mission02 from '../assets/mission-02.jpeg';
import mission03 from '../assets/mission-03.jpeg';
import mission04 from '../assets/mission-04.jpeg';

const missions = [
  {
    number: '01',
    title: 'Child & Women Welfare',
    description: [
      'Education and skill development',
      'Health and nutrition awareness',
      'Empowerment and legal assistance',
    ],
    image: mission01,
    link: '/missions/mission-01',
  },

  {
    number: '02',
    title: 'Temple Restoration & Cultural Awakening',
    description: [
      'Preservation of historical temples',
      'Promotion of cultural and spiritual heritage',
      'Fostering love and respect for the nation and culture',
    ],
    image: mission02,
    link: '/missions/mission-02',
  },

  {
    number: '03',
    title: 'Environmental Conservation',
    description: [
      'Tree plantation drives',
      'Water resource management',
      'Cleanliness and anti-pollution campaigns',
    ],
    image: mission03,
    link: '/missions/mission-03',
  },

  {
    number: '04',
    title: 'Animal Welfare',
    description: [
      'Arrangement of food and shelter for animals and birds',
      'Ensuring their safety and medical care',
      'Integrating animal care into daily life',
    ],
    image: mission04,
    link: '/missions/mission-04',
  },
];

export default missions;