# Shree Ram Sangh Project Reference

This document is the primary architecture and development reference for the project. It records the implementation as it exists when this file was created; update it only when a major architectural, design, routing, or data decision changes.

## 1. Project Overview

- **Project name:** `shree-ram-sangh` (Shree Ram Sangh website, Phase 1).
- **Purpose:** A public-facing NGO website for Shree Ram Sangh, presenting its cultural, social welfare, environmental, and animal welfare work.
- **Organization/client:** Shree Ram Sangh. The current metadata identifies Lucknow, Uttar Pradesh; verified client details and programme outcomes are not yet complete.
- **Development stage:** Phase 1 implementation. Core homepage, About page, Missions page, mission anchors, and initiative presentations exist. Some copy, banners, video labels, contact details, and calls to action remain placeholders.
- **Technologies:** React 19, React DOM, JavaScript/JSX, React Router DOM 7, Lucide React icons.
- **Build tool:** Vite 8 with `@vitejs/plugin-react`.
- **CSS framework:** Tailwind CSS 4 through `@tailwindcss/vite`, with additional CSS in `src/index.css`.
- **Routing:** `BrowserRouter`, `Routes`, `Route`, `Link`, and `NavLink` from React Router DOM.
- **Icon library:** `lucide-react`.
- **Linting:** Oxlint with React and Oxc plugins.

## 2. Project Structure

Only the development-relevant structure is listed here:

```text
/
├── BRAIN.md                 Project reference (this file)
├── index.html               HTML shell, metadata, title, and Google Font imports
├── package.json              Scripts and dependencies
├── vite.config.js            Vite, React, and Tailwind plugin setup
├── public/
│   ├── assets/               Initiative images referenced by root-relative URLs
│   ├── logo.jpeg             Organization logo and common fallback image
│   ├── icon.png              Favicon link target
│   └── favicon.svg           Additional favicon asset
└── src/
    ├── main.jsx              React entry point and BrowserRouter setup
    ├── App.jsx               Shared shell and route definitions
    ├── index.css             Tailwind import, theme tokens, carousel CSS, and mission grid CSS
    ├── assets/               Imported local About, mission, background, and logo images
    ├── components/
    │   ├── about/             About banner, content, and photo reel
    │   ├── home/              Homepage sections, including ImpactSection
    │   ├── layout/            TopBar and sticky Navbar
    │   ├── missions/          Mission detail and initiative-page components
    │   └── ui/                Reusable Container and Button primitives
    ├── data/                  Content/configuration modules consumed by components
    ├── pages/                 Route-level page components
    ├── hooks/                 Shared hooks area, currently not central to the page flow
    └── utils/                 Shared utilities area, currently not central to the page flow
```

Important files:

- `src/App.jsx` -> Shared TopBar/Navbar shell and all current routes.
- `src/index.css` -> Tailwind theme values, global defaults, About reel animation, and mission grid layout.
- `src/components/home/Hero.jsx` -> Homepage hero video and controls.
- `src/components/home/MissionSection.jsx` -> Homepage mission previews.
- `src/components/home/InitiativeSection.jsx` -> Homepage initiatives carousel.
- `src/components/home/ImpactSection.jsx` -> Homepage impact heading and responsive metric-card grid.
- `src/components/about/AboutContent.jsx` -> About copy and photo reel layout.
- `src/components/about/VerticalPhotoCarousel.jsx` -> Auto-scrolling, pausable About photo reel.
- `src/components/missions/MissionDetail.jsx` -> Individual mission presentation and expandable full description.
- `src/components/missions/InitiativeBlock.jsx` -> Individual mission-page initiative block.
- `src/data/missions.js` -> Four mission records and their imported images.
- `src/data/initiatives.js` -> Eight initiative records and their public image paths.
- `src/data/aboutPage.js` -> Full About page copy and imported About images.
- `src/data/missionsPage.js` -> Missions page copy, banner, watermark, and closing CTA copy.
- `src/data/impact.js` -> Impact section background configuration, intro copy, six placeholder-safe impact records, and Lucide icon references.

## 3. Application Flow

Routes currently defined in `src/App.jsx`:

- `/` -> Homepage (`Home`).
- `/about` -> Full About page (`About`).
- `/missions` -> Full Missions page (`Missions`).
- `/missions/mission-01` -> The same `Missions` page component.
- `/missions/mission-02` -> The same `Missions` page component.
- `/missions/mission-03` -> The same `Missions` page component.
- `/missions/mission-04` -> The same `Missions` page component.

Mission links use hash targets rather than separate mission-detail rendering:

- `/missions#child-women`
- `/missions#temple-restoration`
- `/missions#environmental-conservation`
- `/missions#animal-welfare`

Initiative links use `/missions#initiative-01` through `/missions#initiative-08`.

`Missions.jsx` watches `location.hash` and `location.pathname`. After render it finds the decoded element ID and smoothly scrolls to it. If images are still loading, it retries after all pending images settle. Targets use `scroll-mt-24` to account for the sticky navbar. Homepage mission cards link to their mission hash, and the homepage initiative carousel links directly to initiative hashes on the Missions page.

The Impact, Stories, and Get Involved navbar items currently use hash-like placeholder links and mostly have placeholder submenu labels. There are no corresponding page routes or implemented sections. Donate buttons currently have no action.

The homepage Impact section is not a separate route. It is rendered after initiatives at `/` and has the local `#impact` anchor for future navigation integration.

## 4. Homepage Structure

`src/pages/Home.jsx` renders this order:

1. `src/components/home/Hero.jsx` -> Hero content and a single data-driven video record from `src/data/heroSlides.js`. Includes responsive video positioning, autoplay, play/pause control, and reduced-motion handling. Text and primary/secondary actions include placeholder copy or `#` links where applicable.
2. `src/components/home/AboutSection.jsx` -> Compact About preview, Devanagari quote, organization introduction from `src/data/aboutus.js`, logo watermark, and `/about` Read More link.
3. `src/components/home/MissionSection.jsx` -> Four mission previews from `src/data/missions.js`. Alternates text/image order on desktop, uses each mission background image with an overlay, displays description points with the `卐` marker, and links images to the mission hash.
4. `src/components/home/InitiativeSection.jsx` -> Homepage initiative carousel from `src/data/initiatives.js`. It renders three copies of the list for looping, calculates slide width with `ResizeObserver`, and provides previous/next icon controls.
5. `src/components/home/ImpactSection.jsx` -> Homepage impact section from `src/data/impact.js`. It uses a replaceable background image layer with a warm color fallback and maps six cards containing an icon, `TBD` metric placeholder, title, and supporting description.

There is no Footer currently mounted in `Home`, `About`, or `Missions`. `FeaturedVideo.jsx` and `featuredVideo.js` exist as a reusable featured-video section/data module but are not currently rendered by `Home.jsx`.

## 5. About Page

- `src/pages/About.jsx` renders `AboutHero`, a quote/translation block, a Shree Ram Sangh heading, and `AboutContent`.
- `src/data/aboutPage.js` is the full About data source: quote, translation, title, introduction, four long paragraphs, and six `{ src, alt }` image objects.
- `AboutHero.jsx` uses `/about-banner.jpg`. If unavailable, it falls back to `/logo.jpeg` and lowers opacity. The banner is 190px mobile, 230px at `sm`, and viewport-based with minimum height at large sizes.
- The Sanskrit quote is `सेवा परमो धर्मः`; its translation is stored in the same data file.
- `AboutContent.jsx` uses a single-column layout until large screens, then separates editorial copy and the photo reel.
- `VerticalPhotoCarousel.jsx` duplicates the six images to create a continuous reel. It scrolls vertically on desktop/tablet and horizontally on mobile, pauses on pointer interaction, pauses on hover through CSS, and uses `object-cover` with a logo fallback on image error.
- About navigation is the `/about` route from the Navbar and homepage Read More link. Images are imported from `src/assets` through `aboutPage.js`.

## 6. Mission System

`src/data/missions.js` exports an array of four records. The actual structure is:

```js
{
  number,
  title,
  description,       // array of short bullet strings
  shortDescription,
  fullDescription,
  image,             // imported src/assets image
  link,              // /missions#...
  backgroundImage    // imported src/assets background image
}
```

Current missions are Child & Women Welfare, Temple Restoration & Cultural Awakening, Environmental Conservation, and Animal Welfare. Each has a normal image and a mission background image.

- `MissionSection.jsx` maps the mission array into homepage cards, alternating image placement by index. Cards use each background image under a dark red overlay, an image hover zoom, a translucent orange hover overlay, and a `KNOW MORE` label.
- `Missions.jsx` maps the same array into articles. The article ID is extracted from `mission.link`, which creates the four hash targets. `MissionDetail.jsx` uses the `.mission-grid` classes from `index.css` to alternate desktop image placement while keeping header, image, body order on mobile.
- `MissionDetail.jsx` shows number, title, image, short description, and a controlled Read More/Read Less expansion for `fullDescription`.
- Mission images use `aspect-[16/10]`, `object-cover`, and a 500ms scale-up on hover. Broken images become an `Image unavailable` placeholder.
- The mission page includes a low-opacity logo watermark from `missionsPage.watermark`, a closing Get Involved button, and the initiative section.

## 7. Initiative System

`src/data/initiatives.js` exports eight records. The actual structure is:

```js
{
  id,
  number,
  title,
  shortDescription,
  points: [{ title, description }],
  images: ['/assets/...', '/assets/...', '/assets/...'],
  sectionId,
  link: '/missions#initiative-...'
}
```

The eight titles cover assistance helpline, temple restoration/community services, an anti-adulteration campaign, cultural awakening, illegal encroachment action, animal welfare, social awareness campaigns, and cultural identity promotion. Some initiative copy is supplied as draft content and contains wording/placeholder-quality issues; do not silently turn it into verified claims.

- `src/components/home/InitiativeSection.jsx` renders the first image from each initiative in a three-copy looping carousel. It links each card to `initiative.link`, uses responsive card widths, `object-cover`, 500ms image zoom, and an orange-brown overlay/title reveal on hover/focus.
- `src/components/missions/InitiativesSection.jsx` maps all initiatives into full blocks and gives the section a light muted background.
- `src/components/missions/InitiativeBlock.jsx` assigns `id={initiative.sectionId}` to each article, alternates text and image columns on large screens, and renders all point objects with the `卐` marker. The first image is full width; remaining images form a two-column supporting-image grid at `sm` and above. All images use `object-cover`, a 500ms group hover scale, and an `Image unavailable` fallback.
- Initiative hash navigation is owned by `Missions.jsx`, not by `InitiativeBlock.jsx`.
- The initiative carousel has no autoplay; it moves only from arrow controls and disables the transform transition briefly when wrapping cloned items.

## 8. Navbar / Routing

- Navbar location: `src/components/layout/Navbar.jsx`.
- `Topbar.jsx` is a desktop/tablet contact strip hidden below `sm`, with email, phone placeholder, Lucknow location, and placeholder social links.
- The sticky orange Navbar contains the logo, Hindi brand name, About, Our Work, Impact, Stories, Get Involved, and a Donate button.
- Our Work is a real route (`/missions`) with four hash submenu links. About is a direct route. Impact, Stories, and Get Involved are currently placeholder dropdowns without implemented destinations.
- Desktop navigation is shown at `xl`; mobile uses a Menu/X button and an expandable vertical menu below the header. Dropdowns close on outside mouse down and Escape. Selecting a mobile link closes the menu.
- `NavLink` supplies active route styling for route-backed items. Hash targets do not create separate active-page logic.
- The Navbar is `sticky top-0 z-50`. `Container` is passed a ref so outside-click handling can identify the navigation region.
- Important constraint: mission slug routes are aliases that all render the same Missions page. The hash in the link is the mechanism that selects a location.

## 9. Design System

Theme tokens are defined in `src/index.css` under `@theme`:

- **Primary orange:** `#d9773d`; hover `#bf6930`; common direct hover value `#c96a31`.
- **Soft primary:** `#fff2e7`.
- **Background:** `#fffdf9`.
- **Muted background:** `#f6f1ec`.
- **Surface:** `#ffffff`.
- **Text:** `#1f1d1b`.
- **Muted text:** `#5d5a57`.
- **Border:** `#eae1d8`.
- Common supporting colors include `#eadcc9`, `#f7f1ea`, `#f8f2eb`, `#3d2a1f`, `#2b2724`, and yellow marker/accent `#ffee03` / `#eab308`.
- Buttons use `rounded-md`, compact fixed heights, medium weight, 200ms color transitions, and focus rings. `Button.jsx` supports `primary`, `secondary`, and `text` variants and `sm`, `md`, and `lg` sizes.
- Most content uses borders and restrained shadows. Existing cards may use small rounded corners; do not introduce large rounded-card systems.
- `Container.jsx` centralizes layout width: `max-w-[1200px]`, full width, and `px-4 sm:px-6 lg:px-8 2xl:px-0`.
- Spacing follows Tailwind utility scales and responsive section padding, with editorial max-widths around `max-w-5xl`/`max-w-6xl`.

## 10. Typography

Fonts are loaded from Google Fonts in `index.html`:

- **Body:** Inter, configured as `--font-sans`; used for normal UI and body copy.
- **Display/serif headings:** Newsreader, configured as `--font-display`; used for editorial headings and mission/initiative titles.
- **Devanagari body:** Noto Sans Devanagari; used for the brand and as a Devanagari fallback.
- **Devanagari serif:** Noto Serif Devanagari; used by the unused FeaturedVideo heading class.
- **Sanskrit quote:** Tillana, with Noto Sans Devanagari fallback, set inline in About and Mission quote blocks.
- **Brand/selected accent:** Rozha One is set inline for the Hindi Navbar brand. Playfair Display is set inline for selected About and mission introductory text.

Common sizing is responsive rather than globally standardized: body text is generally `text-base` to `text-lg` with generous line height; editorial headings commonly range from roughly `2rem` to `2.8rem`; Sanskrit quotes use `2rem` mobile and `2.65rem` from `sm`.

## 11. Image Conventions

- Imported local images live in `src/assets` and are imported by JavaScript data modules. This is used for About, mission, mission-background, and logo images.
- Public-served images live in `public/`. Initiative images are under `public/assets/` and must be referenced as `/assets/example.jpeg` in data, because Vite serves the `public` directory at the site root.
- `/assets/example.jpeg` means a public-root URL and is correct for `public/assets/example.jpeg`.
- `../assets/example.jpeg` is a relative module/import path and is appropriate only when resolving a file relative to a source module; it is not the convention used for public initiative images.
- Common fallback is `/logo.jpeg`. About and mission banners swap to a fallback and reduce opacity; content images either swap to the logo or replace themselves with an `Image unavailable` block.
- Photos generally use `object-cover`; mission and carousel images use fixed aspect ratios to prevent layout shifts. Mission images commonly use `16/10`; initiative cards use `4/3`; About reel photos use `16/10`.
- Hover behavior is restrained: normally a 500ms ease-out scale around `1.03` to `1.05`, sometimes paired with a low-opacity overlay and title reveal.

## 12. Responsive Design

Tailwind 4 responsive utilities use the standard project breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), and `2xl` (1536px). CSS media queries in `index.css` use 767px, 768-1023px, and 1023px boundaries for the photo reel.

- Mobile stacks major content and uses horizontal About photo scrolling. The mobile Navbar replaces desktop links with a menu.
- Tablet keeps the vertical About reel and adapts its photos to 280x175.
- Desktop uses two-column editorial layouts, alternating mission/initiative order, desktop dropdown navigation, and a vertical About reel.
- Common patterns are one-column-to-two-column grids, `Container` max-width behavior, full-width responsive banners, and mobile-first stacking.
- The homepage hero switches from a reversed stacked layout on mobile to text/video side by side from `md`.
- Reduced motion is respected globally through `prefers-reduced-motion`; it disables smooth scrolling and effectively disables transitions/animations. The hero video also pauses when reduced motion is requested.

## 13. Existing Component Conventions

- Reuse `Container` for page-width alignment and horizontal padding. It supports an optional `as` prop, forwards refs, and accepts extra class names.
- Reuse `Button` for action buttons so variants, sizing, focus rings, and disabled state remain consistent.
- Reuse `Navbar`/`TopBar` through the shared `App` shell; do not add page-specific copies.
- Use `MissionDetail` for full mission records and `InitiativeBlock` for full initiative records. Keep presentation logic in components and content in `src/data`.
- Use Lucide icons for controls such as arrows, menu, close, play/pause, volume, mail, phone, and location.

## 14. Data-Driven Components

The preferred pattern is:

```text
data module
  -> page/section component
    -> .map()
      -> reusable item component
```

Missions, initiatives, and Impact cards are rendered from arrays rather than hardcoded repeated markup. About copy/images and hero/video content also come from data modules. New repeatable content should extend the relevant data shape and be rendered through the existing item component. Impact icon values are Lucide component references stored in `src/data/impact.js`; replace those references in data when changing categories. Avoid embedding client content directly in JSX unless it is truly structural UI text.

## 15. Animation Conventions

- Image hover zoom: usually `duration-500 ease-out`, scale around `1.03` or `1.05`.
- Overlay and title reveals: opacity/translate transitions around 400ms ease-out.
- Buttons and navigation colors: generally 200ms ease-out.
- Homepage initiative carousel: transform transition `duration-500 ease-out`; cloned records provide infinite wraparound.
- About reel: CSS linear animation over 28 seconds, paused on hover or pointer interaction. Desktop moves vertically; mobile moves horizontally.
- Mission Read More expansion: grid-row and opacity transitions around 300ms ease-out.
- Keep motion sparse and editorial. Preserve reduced-motion behavior and do not add excessive effects that undermine the warm, trustworthy NGO presentation.

## 16. Design Philosophy

The intended personality is warm, cultural, traditional, editorial, human, trustworthy, NGO-oriented, and sophisticated but approachable. Visual decisions should support reading, community trust, cultural identity, and clear calls to action.

Avoid generic SaaS layouts, excessive rounded cards, glassmorphism, excessive gradients or shadows, unnecessary animation, overly futuristic UI, and generic AI-generated layouts. Preserve the existing orange, cream, brown, red, and restrained yellow accent language unless a deliberate client-approved redesign changes it.

## 17. Development Rules

1. Do not modify unrelated components.
2. Reuse existing components where appropriate.
3. Follow existing design tokens.
4. Prefer data-driven rendering.
5. Keep pages responsive.
6. Do not invent NGO statistics or factual claims.
7. Use placeholder content only where actual client information is unavailable.
8. Preserve existing routing.
9. Preserve existing hover/animation behavior unless explicitly asked to change it.
10. Run `npm run lint` after changes.
11. Run `npm run build` after changes.
12. Fix only errors introduced by the current task unless an existing error blocks the task.

## 18. Current Project Status

Completed or implemented at the time this document was created:

- Homepage hero with responsive video, fallback poster, controls, and reduced-motion handling
- Homepage About preview
- Full About page with banner fallback, Sanskrit quote, editorial copy, and photo reel
- Homepage mission section with four mission records
- Full Missions page with mission intro, four mission details, expandable descriptions, and alternating layouts
- Mission alias routes (`/missions/mission-01` through `/missions/mission-04`)
- Mission hash navigation for the four mission anchors
- Homepage initiatives carousel
- Full Missions-page initiatives section with eight initiatives
- Initiative hash navigation from homepage cards and Navbar submenu
- Homepage Impact section with six data-driven, placeholder-safe cards and responsive background configuration
- Sticky responsive Navbar with desktop dropdowns and mobile menu
- Shared `Container` and `Button` primitives
- Theme tokens, responsive grids, image fallbacks, and reduced-motion CSS

### Currently In Development

- Verified organization copy, programme details, outcomes, statistics, contact phone number, and social destinations
- Final About and Missions banner assets (`about-banner.jpg`, `missions-banner.jpg`)
- Final hero and featured-video content/copy
- Functional Donate, Get Involved, Stories, and contact workflows
- Verified Impact figures and final `/assets/impact-bg.jpeg` background asset
- Any sections represented by placeholder navbar links or placeholder text

## 19. Future Development Notes

Use this section for decisions that future developers need to preserve:

- **Client requirements:** Record verified Shree Ram Sangh copy, contact details, approved claims, programme outcomes, and approved calls to action here.
- **Design decisions:** Preserve the warm orange editorial language, serif display typography, Devanagari treatment, restrained motion, and image-led storytelling.
- **Route decisions:** Keep mission and initiative anchors compatible with `/missions#...` links unless routing is intentionally redesigned. Decide whether mission alias routes should eventually render a single selected mission.
- **Data decisions:** Keep repeated content in `src/data`. Replace placeholders only with client-verified information and keep image paths consistent with the public/imported asset rules above.
- **Known limitations:** Several navbar destinations and CTA buttons are placeholders; banner fallback assets are used when expected public banners are absent; `FeaturedVideo` is currently unused.
- **Features intentionally postponed:** Stories, Get Involved, Donate, contact workflows, and verified Impact statistics are not complete in this phase. The Impact presentation exists, but its figures remain `TBD` until approved client data is supplied.
- **Impact convention:** Keep Impact content in `src/data/impact.js`, keep the section on the homepage after initiatives, and use the configured background path with its color fallback until the client supplies the final asset.

## IMPORTANT FOR FUTURE CODING TASKS

Future coding agents should:

1. Read `BRAIN.md` FIRST.
2. Use it as the primary project context.
3. Do NOT scan the entire project again unless `BRAIN.md` is missing required information.
4. Only inspect specific files when necessary to implement the requested change.
5. Update `BRAIN.md` when a major architectural/design/routing decision changes.
6. Do not rewrite `BRAIN.md` unnecessarily.