/**
 * ============================================================================
 *  AI KNOWLEDGE BASE  —  EDIT THIS FILE
 * ============================================================================
 *
 *  Everything the AI chatbot knows about the candidate lives here.
 *  The chatbot ONLY answers using the information in this file (this keeps
 *  answers accurate and stops the AI from inventing facts about the candidate).
 *
 *  HOW TO EDIT:
 *   - Each entry below is one "topic". Give it a clear `title` and fill the
 *     `content` with the real facts.
 *   - Keep each topic focused on one subject (e.g. one policy area).
 *   - Add as many topics as you like — just copy an existing block and change
 *     the text. Add tags to help the AI find the topic.
 *
 *  SOURCING NOTE (important for a political candidate):
 *   - The biography, career, family, and awards below are drawn from public
 *     sources, primarily his Wikipedia profile
 *     (https://en.wikipedia.org/wiki/Abimbola_Adekanmbi) and Nigerian news
 *     coverage (Channels TV, The Guardian, Tribune, Independent, Vanguard),
 *     accurate as of mid-2026.
 *   - Sections marked "CAMPAIGN TO CONFIRM" contain only what public sources
 *     support at a high level. Do NOT invent detailed promises, figures, or
 *     dates. Replace those sections with the campaign's official manifesto
 *     wording before publishing.
 * ============================================================================
 */

export type KnowledgeEntry = {
  /** Short title of the topic, e.g. "Education Policy". */
  title: string;
  /** Keywords that help the AI match a question to this topic. */
  tags: string[];
  /** The factual content the AI is allowed to use when answering. */
  content: string;
};

export const knowledgeBase: KnowledgeEntry[] = [
  {
    title: "Biography and Background",
    tags: ["bio", "biography", "background", "who", "born", "age", "family", "origin", "history", "ibadan"],
    content: `Abimbola Olalere Adekanmbi, popularly known as Bimbo Adekanmbi, is a Nigerian public
policy expert, chartered accountant, and politician. He was born on 5 April 1973 in Ibadan, Oyo
State, to Reverend Olalere Adekanmbi and Madam Ashiyanbi Adekanmbi of Ile Ojo Seriki Compound,
Beyerunka, Ibadan. He is the second child of the family. He is the Allied Peoples Movement (APM)
consensus candidate for the 2027 Oyo State governorship election.`,
  },
  {
    title: "Education",
    tags: ["education", "school", "university", "degree", "study", "qualification", "accountant", "mba"],
    content: `Adekanmbi began his early education at Orita Mefa Baptist Primary School, Ibadan, and
attended Federal Government College, Okigwe (in present-day Imo State) for secondary school. In 1991
he gained admission to Obafemi Awolowo University, Ile-Ife, where he graduated with a bachelor's
degree in Accounting in 1998. He later earned a Bachelor's degree in Applied Accounting from Oxford
Brookes University in the United Kingdom, and a Master of Business Administration (MBA) in Strategy
and Finance from Liverpool John Moores University. He has also completed executive and professional
programmes, including SAP Financial Accounting training in Johannesburg (2002) and Leading and
Managing People at the Wharton School, University of Pennsylvania (2012).`,
  },
  {
    title: "Professional and Business Career",
    tags: ["career", "work", "job", "consultant", "finance", "banking", "accountant", "experience", "professional"],
    content: `Adekanmbi completed the National Youth Service Corps (NYSC) in 1999 and worked in
Nigeria's banking sector between 1999 and 2001. From 2002 to 2011 he worked in the United Kingdom as
a finance and management consultant, contributing to projects for organisations including
GlaxoSmithKline, AstraZeneca, IBM, Accenture, TNT, Caterpillar Logistics, Verizon Business, the
Kingfisher Group (B&Q), Birmingham City Council, the Department for Transport, and Kent Police. He is
a Fellow of the Association of Chartered Certified Accountants (FCCA). In 2020 he was appointed a
pioneer member of the Digital Economy Policy Commission of the Nigerian Economic Summit Group (NESG).`,
  },
  {
    title: "Public Service in Oyo State",
    tags: ["public service", "commissioner", "finance", "ajimobi", "government", "record", "track record", "revenue"],
    content: `Adekanmbi joined the Oyo State Government in 2011 as Deputy Chief of Staff to the Governor
during the administration of the late Governor Abiola Ajimobi. He later served as Acting Chairman of
the Oyo State Board of Internal Revenue, and was appointed Commissioner for Finance, Budget and
Planning in 2016, a role he held until 2019. In that position he oversaw the state's budgeting, fiscal
management, and financial administration.`,
  },
  {
    title: "2027 Governorship Candidacy",
    tags: ["2027", "election", "candidate", "apm", "governor", "makinde", "running mate", "governorship"],
    content: `In May 2026, Adekanmbi emerged as the consensus governorship candidate of the Allied
Peoples Movement (APM) for the 2027 Oyo State governorship election, following the party's primary in
Ibadan, and received the party's Certificate of Return. Oyo State Governor Seyi Makinde has publicly
described him as his preferred successor. In his acceptance speech, Adekanmbi pledged to build on the
policies and programmes of the Makinde administration. His declared priority areas are education,
healthcare, agriculture, infrastructure, security, technology, tourism, and commerce.`,
  },
  {
    title: "Vision and Why He Is Running",
    tags: ["why", "running", "motivation", "vision", "mission", "goal", "purpose", "competence", "continuity"],
    content: `Adekanmbi presents his candidacy around the themes of competence, continuity, and
capacity, drawing on his background as a chartered accountant and public finance manager. He has said
his candidature is aimed at restoring hope and dignity to governance in Oyo State, and he has pledged
inclusive governance and grassroots development. He has committed to sustaining and building on the
development agenda of Governor Seyi Makinde's administration.`,
  },
  {
    title: "Priority Areas",
    tags: ["priorities", "agenda", "plans", "policy", "focus", "manifesto"],
    content: `Adekanmbi has publicly identified his focus areas as education, healthcare, agriculture,
infrastructure, security, technology, tourism, and commerce. (CAMPAIGN TO CONFIRM: detailed policy
proposals, targets, and specific programmes for each area should be added here by the campaign from
the official manifesto. The AI should not state specific figures, timelines, or promises that are not
written in this knowledge base.)`,
  },
  {
    title: "Education Policy",
    tags: ["education", "schools", "students", "teachers", "learning", "skills"],
    content: `Education is one of Adekanmbi's stated priority areas for Oyo State. (CAMPAIGN TO CONFIRM:
the campaign should add the candidate's specific education proposals here — for example plans for
public schools, teachers, technical and vocational skills, and access — using the official manifesto.
Until then, the assistant should describe education only as a stated priority and avoid inventing
specific promises.)`,
  },
  {
    title: "Healthcare Policy",
    tags: ["health", "healthcare", "hospitals", "clinics", "medical", "insurance"],
    content: `Healthcare is one of Adekanmbi's stated priority areas. (CAMPAIGN TO CONFIRM: add the
candidate's specific healthcare proposals here from the official manifesto — for example primary
healthcare, hospitals, and affordability. The assistant should not state specific health programmes or
figures that are not written here.)`,
  },
  {
    title: "Agriculture and Economy",
    tags: ["agriculture", "farming", "farmers", "economy", "jobs", "commerce", "trade", "business"],
    content: `Agriculture, commerce, and economic development are among Adekanmbi's stated priority
areas, and his professional background is in finance and public financial management. (CAMPAIGN TO
CONFIRM: add specific agriculture, jobs, and economic proposals here from the official manifesto. The
assistant should not invent specific schemes, figures, or targets.)`,
  },
  {
    title: "Infrastructure, Security, Technology and Tourism",
    tags: ["infrastructure", "roads", "security", "technology", "digital", "tourism", "development", "airport"],
    content: `Infrastructure, security, technology, and tourism are all among Adekanmbi's stated priority
areas for Oyo State. He has also spoken publicly about the potential of Ibadan's airport as an aviation
hub. (CAMPAIGN TO CONFIRM: add specific infrastructure, security, technology, and tourism proposals
here from the official manifesto. The assistant should not invent specific projects, figures, or
timelines.)`,
  },
  {
    title: "Awards and Recognitions",
    tags: ["awards", "recognition", "honour", "honours", "achievements", "scout"],
    content: `Adekanmbi has received several recognitions, including the Award of Exemplary Service from
the Aj'orosun Club, Ibadan (2022); the Man of Honour Award from Solutions FM, Ibadan (2024); and the
Christian Prestigious Award (CPA) from the Central Council of Ibadan Indigenes (CCII) in 2025. In 2025
he was invested as President of the Oyo State Council of the Scout Association of Nigeria.`,
  },
  {
    title: "Family and Personal Life",
    tags: ["family", "wife", "married", "children", "personal", "religion", "christian"],
    content: `Adekanmbi is married to Dr. Olukemi Adekanmbi, a Senior Lecturer in the Department of
Medicine, College of Medicine, University of Ibadan, and Acting Director of the college's Infectious
Disease Institute. They have three children, and the family lives in Ibadan, Oyo State.`,
  },
  {
    title: "How to Get Involved",
    tags: ["volunteer", "join", "support", "donate", "involved", "campaign", "help", "contact"],
    content: `Supporters can get involved by volunteering with the campaign, joining local outreach
efforts, and helping share the candidate's message in their communities. To volunteer or learn more,
visitors can use the contact details on the website or reach out through the campaign's official social
media channels.`,
  },
];
