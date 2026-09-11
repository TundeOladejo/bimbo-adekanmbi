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
 *
 *  A NOTE ON THE NAME: the campaign's own domain (bimboadekanbi.com) uses the
 *  spelling "Adekanbi", so the website uses that spelling throughout for
 *  consistency. National newspapers and Wikipedia often use "Adekanmbi" — both
 *  refer to the same person.
 * ============================================================================
 */

export const candidate = {
  // Full name as it should appear on the site.
  name: "Bimbo Adekanbi",

  // How the campaign refers to him in running text (first name / short form).
  shortName: "Bimbo",

  // The office being contested.
  office: "Governor of Oyo State",

  // Political party (leave as "" to hide).
  party: "Allied Peoples Movement (APM)",

  // The running mate (Deputy Governor candidate). Leave name "" to hide.
  runningMate: {
    name: "Engr. Muftau 'Open' Salawu",
    role: "Deputy Governor candidate",
    from: "Ogbomoso zone",
  },

  // A short slogan shown on the homepage hero. Grounded in his own message:
  // continuity with competence, and accountability to the people.
  slogan: "Competence you can hold to account",

  // 1–2 sentence tagline shown under the slogan. Drawn from his stated message.
  tagline:
    "A chartered accountant and former Oyo State finance commissioner asking to be judged on delivery, not promises — building on what works and fixing what does not, across all 33 local governments.",

  // Election details.
  electionYear: "2027",
  electionDate: "6 February 2027",

  // Candidate photo. Put the image file in the `public/` folder and reference
  // it here starting with a slash, e.g. "/candidate.jpeg". Leave "" to show a
  // placeholder instead.
  photo: "/candidate-v2.jpeg",

  // A secondary photo used on the About page (put another file in /public).
  photoAlt: "/candidate.jpeg",

  // Contact + social details (leave any blank to hide).
  // Social handles below are the accounts located publicly; confirm/replace
  // with the campaign's official accounts before launch.
  contact: {
    email: "",
    phone: "",
    address: "Ibadan, Oyo State, Nigeria",
    website: "https://bimbo4gov.com",
    twitter: "https://x.com/adekanmbi_bimbo",
    facebook: "https://www.facebook.com/bimadek1",
    instagram: "https://www.instagram.com/bimboadekanmbi",
    tiktok: "https://www.tiktok.com/@bimbo4gov",
    linkedin: "https://www.linkedin.com/in/bimbo-adekanmbi-fcca-a573444",
  },
};

export type Candidate = typeof candidate;
