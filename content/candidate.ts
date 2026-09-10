/**
 * ============================================================================
 *  CANDIDATE PROFILE  —  EDIT THIS FILE
 * ============================================================================
 *
 *  This is the single source of truth for the candidate's identity and
 *  branding across the whole website. Replace the placeholder values below
 *  with the real details. No coding knowledge needed — just change the text
 *  inside the quotes.
 *
 *  For the AI chatbot's knowledge (bio, positions, achievements, etc.),
 *  edit the file:  content/knowledge-base.ts
 * ============================================================================
 */

export const candidate = {
  // Full name as it should appear on the site.
  name: "Hon. Bimbo Adekanmbi",

  // The office being contested.
  office: "Governor of Oyo State",

  // Political party (leave as "" to hide).
  party: "Allied Peoples' Movement (APM)",

  // A short one-line slogan shown on the homepage hero.
  slogan: "A New Dawn for Oyo State",

  // 1–2 sentence tagline shown under the slogan.
  tagline:
    "Building a prosperous, secure, and united Oyo State where every citizen has the opportunity to thrive.",

  // Election year (shown in footer/hero). Use "" to hide.
  electionYear: "2027",

  // Candidate photo. Put the image file in the `public/` folder and reference
  // it here starting with a slash, e.g. "/candidate.jpeg". Leave "" to show a
  // placeholder instead.
  // TIP: If you replace the image, save it under a NEW filename (e.g.
  // candidate-v2.jpeg) and update the name below. A new filename guarantees
  // browsers load the new version instead of a cached copy.
  photo: "/candidate-v2.jpeg",

  // Contact + social details (leave any blank to hide).
  contact: {
    email: "info@adekanmbi2027.ng",
    phone: "+234 800 000 0000",
    address: "Campaign HQ, Ibadan, Oyo State, Nigeria",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export type Candidate = typeof candidate;
