import aboutPage from './aboutPage.js';
import logo from '../assets/logo.jpeg';

/*
  Content for the /missions page.

  The Sanskrit quote and its translation are intentionally reused from
  aboutPage.js rather than retyped here — both pages use the same
  line, so this keeps a single source of truth.

  `banner` and `watermark` are placeholder asset references only:

  - banner: expected at /missions-banner.jpg in the public folder
    (same convention as the About page's banner). Falls back
    gracefully to the existing logo if that file isn't present yet.
  - watermark: reuses the existing org logo at low opacity as a
    stand-in NGO emblem until a dedicated watermark mark is supplied.
*/
const missionsPage = {
    banner: '/missions-banner.jpg',
    bannerFallback: '/logo.jpeg',
    watermark: logo,

    quote: aboutPage.quote,
    quoteTranslation: aboutPage.quoteTranslation,

    heading: 'OUR MISSION',

    intro:
        'Shri Ram Sangh is committed to serving society through compassion, responsibility, and collective action. Our mission is to empower communities, support the underprivileged, protect the environment, preserve India’s cultural heritage, promote education and safety, and inspire people to come together for a cleaner, stronger, and more harmonious society.',

    closing: {
        heading: '[PLACEHOLDER] Every Mission Needs Hands to Carry It Forward.',
        body: '[PLACEHOLDER] Whether through time, resources, or simply spreading the word — there is a place for you in this work. Verified ways to get involved will be added here once confirmed by Shree Ram Sangh.',
    },
};

export default missionsPage;
