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
 *   - This knowledge base is compiled from the independently researched
 *     "Candidate Knowledge Base" reference document (Version 1.0, research
 *     cut-off 10 September 2026), which draws only on publicly available
 *     sources: INEC and Oyo State Government publications, the candidate's
 *     Wikipedia profile (https://en.wikipedia.org/wiki/Abimbola_Adekanmbi),
 *     his LinkedIn profile, and Nigerian news coverage (Nigerian Tribune,
 *     Premium Times, Channels TV, The Guardian, Business Hallmark, Vanguard,
 *     The Nation, InsideOyo and others).
 *   - The research document grades every claim: VERIFIED (multiple independent
 *     or official sources), SINGLE SOURCE, SELF-REPORTED (the candidate's own
 *     account) and UNVERIFIED. This file reflects that grading in how it words
 *     things: verified facts are stated plainly; the candidate's own accounts
 *     are attributed to him ("he has said", "according to his own account")
 *     rather than presented as established fact.
 *   - The candidate had NOT published a formal manifesto as at the research
 *     cut-off. Policy topics therefore describe the DIRECTIONAL positions he
 *     has stated publicly, and deliberately avoid specific figures, costings,
 *     and timelines that are not yet public. Do NOT invent them.
 *   - Where the document says something should not be repeated publicly as
 *     fact (rumours, partisan allegations, disputed motives), this file either
 *     omits it or frames it as an open question, never as a settled claim.
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
    tags: ["bio", "biography", "background", "who", "born", "age", "family", "origin", "history", "ibadan", "roots"],
    content: `Hon. Abimbola Olalere Adekanmbi, popularly known as Bimbo Adekanmbi (also spelled
Adekanbi), is a Nigerian chartered accountant, public finance specialist and politician. He is the
Allied Peoples Movement (APM) candidate for Governor of Oyo State in the election scheduled for
6 February 2027. He was born in Ibadan, Oyo State, to Reverend Olalere Adekanmbi (a clergyman and a
founding member of the Omo Aj'orosun Club, Ibadan) and Madam Ashiyanbi Adekanmbi (a well-known trader
in Bodija Market), of Ile Ojo Seriki Compound, Beyerunka, Ibadan. He is the second child of the
family. He was born and raised in Ibadan — growing up across the Apata, Iwo Road and Bodija areas —
and describes himself as a son of Ibadan. His public date of birth is 5 April 1973; the campaign is
best placed to confirm the exact date, and his specific Local Government Area of origin is not stated
in public sources and should be confirmed with the campaign.`,
  },
  {
    title: "The Name — Adekanbi vs Adekanmbi",
    tags: ["name", "spelling", "adekanbi", "adekanmbi", "surname"],
    content: `Two spellings of the surname appear in public: "Adekanmbi" and "Adekanbi". They refer to
the same person. National newspapers and his Wikipedia entry generally use "Adekanmbi", while some
campaign material has used "Adekanbi". If a visitor is confused by the two spellings, reassure them
that both refer to the same candidate.`,
  },
  {
    title: "Education",
    tags: ["education", "school", "university", "degree", "study", "qualification", "accountant", "mba", "fcca"],
    content: `Adekanmbi began his early education at Orita Mefa Baptist Primary School, Ibadan, and
attended Federal Government College, Okigwe (in what was then Imo State) for secondary school. He was
admitted to Obafemi Awolowo University, Ile-Ife, in 1991 and graduated with a bachelor's degree in
Accounting in 1998. He later earned a Bachelor's degree in Applied Accounting from Oxford Brookes
University in the United Kingdom, and a Master of Business Administration (MBA) in Strategy and Finance
from Liverpool John Moores University. He is a Fellow of the Association of Chartered Certified
Accountants (FCCA). He has also completed professional and executive programmes, including SAP
Financial Accounting and Controlling (FICO) training at the SAP Academy in Johannesburg (2002), a
programme at Aston University (2008), and Leading and Managing People at the Wharton School,
University of Pennsylvania (2012). His education is closely matched to the office he seeks: it is built
around accounting and finance, which is directly relevant to a state's revenue, debt and budget
challenges.`,
  },
  {
    title: "Professional and Business Career",
    tags: ["career", "work", "job", "consultant", "finance", "banking", "accountant", "experience", "professional", "uk", "consulting"],
    content: `Adekanmbi completed the National Youth Service Corps (NYSC) in 1999, serving as an Accounts
Officer in Maiduguri, Borno State, and worked in Nigeria's banking sector between 1999 and 2001. From
about 2002 to 2011 he worked in the United Kingdom as a finance and management consultant. According
to his professional profile, he contributed to finance-transformation and systems projects for
organisations including Accenture, Verizon Business, GlaxoSmithKline, AstraZeneca, IBM, TNT,
Caterpillar Logistics, the Kingfisher Group (B&Q), CP Ships, Birmingham City Council, the UK
Department for Transport, and Kent Police. This UK consulting record is largely based on his own
professional account, so it is best described as his reported experience rather than as independently
audited fact. Since 2019 he has been Chief Executive Officer of iNCUBhUB and Brickonstruct. In 2020 he
was appointed a pioneer member of the Digital Economy Policy Commission of the Nigerian Economic
Summit Group (NESG).`,
  },
  {
    title: "Public Service in Oyo State",
    tags: ["public service", "commissioner", "finance", "ajimobi", "government", "record", "track record", "revenue", "budget"],
    content: `Adekanmbi joined the Oyo State Government in 2011 as Deputy Chief of Staff to the Governor
during the administration of the late Governor Abiola Ajimobi. He later served as Acting Chairman of
the Oyo State Board of Internal Revenue, and was appointed Commissioner for Finance, Budget and
Planning, a role he held until the administration left office in 2019. (Public sources differ on
whether the commissioner appointment began in 2015 or 2016; both agree it ran to 2019 and that he
served roughly nine years in Oyo State government overall.) In that role he was responsible for the
state's budgeting, fiscal management and financial administration during a difficult national revenue
period that included the 2016 recession and reduced federal allocations. He has said his achievements
in office included automating the state's salary payment process; these are his own accounts of his
tenure.`,
  },
  {
    title: "Ibadan Airport Upgrade Committee",
    tags: ["airport", "aviation", "infrastructure", "committee", "chairman", "ibadan", "makinde", "project"],
    content: `In July 2024, Oyo State Governor Seyi Makinde appointed Adekanmbi as chairman of the
eleven-member committee overseeing the upgrade of the Samuel Ladoke Akintola Airport in Ibadan. The
project — reported at around N41 billion — involves extending the runway from 2,400 to 3,000 metres
and building a new terminal designed to raise annual passenger capacity from roughly 100,000 to one
million, with the goal of achieving international status for the airport. The first phase began in
September 2024. This is a current, verifiable executive responsibility and gives him direct knowledge
of one of the flagship projects the next governor would inherit. He has also spoken publicly about the
potential of Ibadan's airport to become an aviation hub attracting foreign carriers.`,
  },
  {
    title: "Political History and Party Affiliation",
    tags: ["politics", "party", "apc", "pdp", "apm", "history", "political", "affiliation", "switch"],
    content: `Adekanmbi's route into politics was through appointment rather than election. He served in
the APC administration of Governor Abiola Ajimobi (2011–2019) and contested the Oyo South senatorial
seat on the APC platform in 2023, which was unsuccessful — his only electoral contest to date. He
formally joined the Peoples Democratic Party (PDP) in December 2025. In May 2026 he became the
governorship candidate of the Allied Peoples Movement (APM). If asked why a PDP member is the APM
candidate: this is the mechanism of the PDP–APM alliance in Oyo State (widely credited to Governor
Makinde), which allows the governing PDP structure and the APM platform to field a single ticket. On
his movement between parties, Adekanmbi and Governor Makinde have both argued that competence should
matter more than party label; two administrations of opposing parties (APC and PDP) each entrusted him
with senior responsibility.`,
  },
  {
    title: "2027 Governorship Candidacy and Endorsement",
    tags: ["2027", "election", "candidate", "apm", "governor", "makinde", "endorsement", "governorship", "primary"],
    content: `In May 2026, Adekanmbi emerged as the consensus governorship candidate of the Allied
Peoples Movement (APM) for the 2027 Oyo State governorship election, following the party's primary in
Ibadan, and received the party's flag and Certificate of Return. Oyo State Governor Seyi Makinde
publicly named him his preferred successor, defending the choice with the argument that "party colour
doesn't matter" and that competence should determine who is entrusted with governance. Makinde also
advised him publicly: "Don't inherit my enemies, chart your own path." In his acceptance he pledged to
build on the Makinde administration's programmes. The election is scheduled for Saturday, 6 February
2027 (for governorship and state assembly seats), under INEC's revised timetable.`,
  },
  {
    title: "Running Mate — Engr. Muftau 'Open' Salawu",
    tags: ["running mate", "deputy", "salawu", "open", "ogbomoso", "ticket"],
    content: `Adekanmbi's running mate (candidate for Deputy Governor) is Engr. Muftau "Open" Salawu,
who was unveiled in June 2026 at the APM secretariat in Oke Ado, Ibadan. He is an Ogbomoso-born
politician and entrepreneur with a background in engineering, project monitoring and public
administration. The ticket is deliberately balanced by geography (an Ibadan-based principal with an
Ogbomoso-zone running mate) and by faith (Adekanmbi is Christian and Salawu is Muslim).`,
  },
  {
    title: "Vision and Why He Is Running",
    tags: ["why", "running", "motivation", "vision", "mission", "goal", "purpose", "competence", "continuity", "capacity"],
    content: `Adekanmbi frames his candidacy around competence, continuity and capacity, drawing on his
background as a chartered accountant and public finance manager. He has said his decision to contest
was driven not by a desire for political power but by the need to provide purposeful and accountable
leadership for the people of Oyo State. In his own words: "I am ready to be held accountable because
governance is about the people and not about the individual occupying the office," and "I stand out. I
have the experience and native intelligence to be the next governor of Oyo State." His core proposition
is continuity with the Makinde administration — especially sustaining the regular payment of salaries
and pensions — combined with a more data-driven method of his own, including using accurate data and a
state poverty map to target resources where they are most needed.`,
  },
  {
    title: "Priority Areas",
    tags: ["priorities", "agenda", "plans", "policy", "focus", "manifesto"],
    content: `Adekanmbi has identified his priority areas as the economy and investment, education,
healthcare, agriculture, infrastructure, security, technology, youth employment, workers' welfare,
tourism and commerce. He has promised a formal manifesto containing measurable targets for his first
100 days, six months and one year in office. As at the research cut-off (10 September 2026) that
manifesto had not yet been published, so the positions described in this knowledge base are his
publicly stated directions of travel. For specific figures, costings, funding sources and timelines,
the assistant should tell visitors these will be set out in the forthcoming manifesto and invite them
to contact the campaign, rather than inventing details.`,
  },
  {
    title: "Education Policy",
    tags: ["education", "schools", "students", "teachers", "learning", "skills", "vocational", "out-of-school"],
    content: `Education is one of Adekanmbi's priority areas. His stated positions are: rehabilitating
public schools and providing essential learning facilities; strengthening technical and vocational
education; and aligning the education system with the demands of the modern economy so students gain
practical skills for employment and entrepreneurship. On out-of-school children, he has said: "I'll
use accurate data to plan for out-of-school children and provide targeted intervention. We need a
poverty map." He has also reflected personally that but for education he might have ended up as a meat
seller, using this to underline how much schooling can change a life. Detailed programmes, targets and
funding are expected in the forthcoming manifesto and have not yet been published.`,
  },
  {
    title: "Healthcare Policy",
    tags: ["health", "healthcare", "hospitals", "clinics", "medical", "primary healthcare", "rural"],
    content: `Healthcare is one of Adekanmbi's priority areas. His stated position is to strengthen
primary healthcare centres across the state and improve access to affordable medical services, with
particular attention to rural communities. He has said residents should not have to travel long
distances to access basic healthcare. Detailed proposals, targets and funding are expected in the
forthcoming manifesto and have not yet been published.`,
  },
  {
    title: "Agriculture and Food Security",
    tags: ["agriculture", "farming", "farmers", "food", "value chain", "processing", "crops", "rural"],
    content: `Adekanmbi describes agriculture as "a major area of opportunity" for Oyo State. His
stated position is that the state must move beyond producing raw agricultural commodities into
processing and value chains that create jobs and generate additional revenue. He proposes supporting
farmers with improved access to inputs, modern farming techniques, financing, processing facilities
and markets, and connecting farms to markets and urban areas through better roads. Specific schemes,
targets and funding are expected in the forthcoming manifesto and have not yet been published.`,
  },
  {
    title: "Economy, Jobs and Youth Employment",
    tags: ["economy", "jobs", "employment", "youth", "entrepreneurship", "business", "sme", "commerce", "investment"],
    content: `Adekanmbi's stated economic approach is to create an investment- and business-friendly
environment and to reduce the bureaucratic obstacles that entrepreneurs face. On youth employment, he
argues government cannot be the primary employer, saying: "We cannot continue to tell our young people
to wait for government jobs when the government alone cannot employ everybody. What we need is a
government that will create the conditions for young people to become employers of labour." He proposes
prioritising skills acquisition, entrepreneurship, and technical and vocational education so young
people become economically productive. Specific programmes, targets and funding are expected in the
forthcoming manifesto.`,
  },
  {
    title: "Infrastructure, Roads and the Circular Road",
    tags: ["infrastructure", "roads", "transport", "circular road", "development", "connectivity", "airport"],
    content: `Infrastructure is one of Adekanmbi's priority areas. He proposes a coordinated approach to
road development that emphasises connectivity between rural communities, agricultural centres, markets
and urban areas. He has committed specifically to completing the Ibadan Circular Road, and has
disclosed that he personally lost land in the Ona-Ara area to the project's right of way, saying no
sacrifice is too great for the state's advancement and pledging to deliver the project regardless. He
also chairs the committee overseeing the c. N41 billion upgrade of the Samuel Ladoke Akintola Airport,
Ibadan. Specific figures and timelines for the wider road programme are expected in the forthcoming
manifesto.`,
  },
  {
    title: "Security",
    tags: ["security", "safety", "policing", "abduction", "oriire", "kidnapping", "rural security"],
    content: `Security is one of Adekanmbi's priority areas, and he argues that economic development is
difficult to achieve without adequate security — residents and investors need to be able to live, work
and do business safely. His stated position is to strengthen collaboration between government, security
agencies and communities to improve the security of lives and property across the state. In May 2026
he led an APM delegation on a condolence visit to the Ahoro-Esinele, Yawota and neighbouring Oriire
communities following an attack and abductions there, and expressed confidence in the rescue efforts
of the state government and security agencies. A detailed, specific security policy is expected in the
forthcoming manifesto; as at the research cut-off his public position on security was directional
rather than detailed.`,
  },
  {
    title: "Public Finance and Workers' Welfare",
    tags: ["finance", "salaries", "pensions", "workers", "fiscal", "budget", "igr", "revenue", "welfare"],
    content: `Public finance is Adekanmbi's core area of expertise, as a chartered accountant and former
Commissioner for Finance, Budget and Planning. He has committed to sustaining the regular payment of
workers' salaries and pensions, saying: "I won't have a problem paying workers' salaries and pensions
because Governor Makinde has set a standard, and I have learnt a lot from his administration." He has
pledged to run a transparent and accountable administration in which public resources are used for the
benefit of the people. Detailed forward positions on internally generated revenue (IGR), taxation and
state debt strategy have not yet been set out publicly and are expected in the forthcoming manifesto.`,
  },
  {
    title: "Technology, Digital Government and Data-Driven Governance",
    tags: ["technology", "digital", "data", "innovation", "poverty map", "governance", "systems"],
    content: `Technology and data-driven governance are a consistent theme for Adekanmbi. He is a
certified SAP FICO consultant and a pioneer member of the NESG Digital Economy Policy Commission
(2020). He proposes evidence-led governance: using accurate data for planning, and building a
comprehensive state poverty map to determine where poverty is concentrated and direct resources
accordingly. He has indicated that the forthcoming manifesto will include a dedicated section on
digital economy and innovation, aimed partly at expanding access to education. Specific programmes and
targets have not yet been published.`,
  },
  {
    title: "Tourism, Culture and Commerce",
    tags: ["tourism", "culture", "commerce", "trade", "heritage"],
    content: `Tourism, culture and commerce are among the areas Adekanmbi has pledged to build on from
the Makinde administration's programmes. As at the research cut-off, his position on these areas was
directional rather than detailed, and specific tourism or cultural policy proposals had not yet been
published. Detail is expected in the forthcoming manifesto.`,
  },
  {
    title: "Leadership Philosophy",
    tags: ["leadership", "philosophy", "accountability", "values", "principles", "transparency", "criticism"],
    content: `Adekanmbi presents governance as a relationship of accountability rather than a possession
of office, saying "governance is about the people and not about the individual occupying the office."
He publicly welcomes criticism: "I am not going into government to silence people. If you see something
that is wrong, tell me. If I make a mistake, criticise me. If the criticism is constructive, it will
help us to correct ourselves and serve the people better." His documented principles include competence
over party affiliation, evidence-based governance, transparency, fiscal discipline, and a limited view
of the state as employer (with the private sector creating most jobs). He cites exposure to several
former Oyo governors — Ladoja, Alao-Akala, Ajimobi and Makinde — as having given him different
approaches to governance to learn from.`,
  },
  {
    title: "Awards and Recognitions",
    tags: ["awards", "recognition", "honour", "honours", "achievements", "scout"],
    content: `Adekanmbi has received several community, media and association recognitions, including the
Award of Exemplary Service from the Aj'orosun Club, Ibadan (2022); the Man of Honour Award from
Solutions FM, Ibadan (2024); and the Christian Prestigious Award (CPA) from the Central Council of
Ibadan Indigenes (CCII) in 2025. In 2025 he was invested as President of the Oyo State Council of the
Scout Association of Nigeria. These are local Ibadan-based honours that reflect his standing and
recognition in the community.`,
  },
  {
    title: "Family and Personal Life",
    tags: ["family", "wife", "married", "children", "personal", "religion", "christian", "spouse"],
    content: `Adekanmbi is a Christian and is married to Dr. Olukemi Adekanmbi, a Senior Lecturer in the
Department of Medicine, College of Medicine, University of Ibadan, and Acting Director of the college's
Infectious Disease Institute. They have three children, and the family lives in Ibadan, Oyo State. His
late father, Reverend Olalere Adekanmbi, was a clergyman and a founding member of the Omo Aj'orosun
Club in Ibadan; his mother, Madam Ashiyanbi Adekanmbi, was a well-known trader in Bodija Market.`,
  },
  {
    title: "Campaign, the Thank-You Tour and Stakeholder Engagement",
    tags: ["campaign", "tour", "thank you tour", "rally", "zones", "engagement", "stakeholders", "outreach"],
    content: `Following his emergence as candidate, Adekanmbi and his running mate conducted a statewide
"Thank-You Tour" of Oyo State from June to July 2026, reaching all of the state's zones — Ibadan
metropolitan constituencies, the Ibadan periphery (Ido, Oluyole, Akinyele), Ibarapa, the Ogbomoso zone
(Ogbomoso, Surulere, Ogo-Oluwa), the Oyo zone, and the Oke-Ogun / Oyo North axis (concluding with the
Saki and Iseyin legs). The tour's stated purpose was to thank party members, build unity, and listen
to local stakeholders so the campaign's roadmap reflects their needs. He has engaged party structures,
traditional rulers (including the Aseyin of Iseyin), women's groups, youth wings, and the media. He has
said his campaign will focus on issues affecting residents rather than personal attacks on opponents.`,
  },
  {
    title: "Understanding Oyo State (Context)",
    tags: ["oyo state", "context", "state", "population", "lga", "zones", "igr", "voters"],
    content: `Oyo State comprises 33 Local Government Areas across distinct zones — Ibadan metropolitan,
the Ibadan periphery, Ibarapa, the Ogbomoso zone, the Oyo zone, and Oke-Ogun (the state's agricultural
heartland) — with materially different economies and needs. Governor Seyi Makinde is term-limited,
making 2027 an open governorship race. The incumbent administration is widely credited with a strong
recent record on revenue and on the regular payment of salaries and pensions. The most acute inherited
challenge is security, following the abduction of pupils and teachers from Oriire Local Government Area
in 2026 (those abducted regained freedom in July 2026). A new governor would also inherit major capital
projects mid-delivery, including the Ibadan Circular Road and the Ibadan airport upgrade. When quoting
specific state statistics (such as IGR figures), note that public figures vary and should be confirmed
against official Oyo State budget documents before use.`,
  },
  {
    title: "What He Has Achieved (Verified vs His Own Account)",
    tags: ["achievements", "record", "verified", "accomplishments", "delivered", "results"],
    content: `It helps to separate what is independently documented from what rests on the candidate's
own account. Independently documented: his senior appointments across two administrations of opposing
parties (Deputy Chief of Staff and Commissioner for Finance under the APC's Ajimobi; airport committee
chairman under the PDP's Makinde); his emergence as APM governorship candidate with Governor Makinde's
public endorsement; and completion of a statewide Thank-You Tour. Based on his own account (and awaiting
documentation): automating the state's salary payment process, an intervention that preserved World
Bank funding for the Ibadan Urban Flood Management Project, and specific delivery outcomes from his UK
consulting career. When discussing his record, the assistant should present the documented items
plainly and attribute the self-reported items to him rather than stating them as established fact.`,
  },
  {
    title: "Criticisms and Difficult Questions",
    tags: ["criticism", "controversy", "godfather", "godfatherism", "party switching", "opportunism", "difficult", "questions"],
    content: `An honest assistant should be able to address the main criticisms fairly. The recurring
ones are: (1) Godfatherism — that because Governor Makinde endorsed him before the primary and he was
adopted by consensus, his candidacy reflects imposition. Both Adekanmbi and Makinde have publicly
rejected this; Makinde has said he will not become a political godfather and told him to "chart your
own path." Whether the endorsement amounts to godfatherism is a matter of political opinion, on which
reasonable people differ. (2) Party-switching — moving from APC to PDP to an APM ticket within about
eighteen months. The sequence is factual; he and Makinde argue competence should outweigh party label,
and note that two opposing administrations each trusted him with senior roles. (3) Accountability for
Ajimobi-era finances — as former finance commissioner he has himself spoken publicly about
mismanagement in that administration. Importantly, no criminal conviction, indictment, prosecution or
adverse court or regulatory finding against him personally was located in public sources. This is a
sensitive, nuanced topic; the assistant should stick to these documented points, avoid speculation
about motives, and suggest visitors contact the campaign for a fuller account.`,
  },
  {
    title: "Frequently Asked Questions",
    tags: ["faq", "questions", "age", "born", "from", "lga", "married", "office", "election date", "spelling"],
    content: `Quick answers to common questions. How old is he / when was he born? His public date of
birth is 5 April 1973 (born in Ibadan); the campaign can confirm the exact date. Where is he from? He
was born and raised in Ibadan, Oyo State; his family compound is Ile Ojo Seriki, Beyerunka, Ibadan.
His specific Local Government Area of origin is not stated in public sources and should be confirmed
with the campaign. Is he married? Yes, to Dr. Olukemi Adekanmbi, a University of Ibadan clinical
academic; they have three children. Which party is he running for? The Allied Peoples Movement (APM),
under the PDP–APM alliance in Oyo State. Has he held elective office before? No — his previous public
offices were by appointment; he contested (unsuccessfully) the Oyo South senatorial seat in 2023. When
is the election? Saturday, 6 February 2027. Why are there two spellings of his name? "Adekanbi" and
"Adekanmbi" refer to the same person.`,
  },
  {
    title: "Omituntun 3.0 — The Campaign Message",
    tags: ["omituntun", "slogan", "message", "3.0", "bridge", "continuity", "makinde", "theme"],
    content: `Adekanmbi's signature campaign message is "Omituntun 3.0" — continued development building on
the Omituntun legacy of the Makinde administration. He describes the progression as Omituntun 1.0
(accelerated development), Omituntun 2.0 (sustainable development), and Omituntun 3.0 (continued
development). He captures the idea with a bridge metaphor: "Governor Seyi Makinde has built a bridge,
and I will take the people of Oyo across the bridge by continuing the good works of the present
administration." His stated stance is continuity paired with independent judgment — building on what
works and improving what needs to change, rather than pure repetition. In his own words: "I seek to
serve not for the title, but to build on what is working, confront what needs to change, and keep
government firmly centred on the people."`,
  },
  {
    title: "From a Consumption to a Production Economy",
    tags: ["economy", "production", "consumption", "thesis", "cassava", "manufacturing", "value chain", "sme", "investment"],
    content: `The clearest single statement of Adekanmbi's economic thesis is his commitment to move Oyo
State "from consumption to production economy." He has said: "I remain committed to moving Oyo State
from consumption to production economy." The idea is to build the state's internal capacity to create
value — through agriculture and agro-processing, manufacturing, SMEs, technology, innovation and
tourism — rather than relying primarily on consumption and government spending. On agriculture
specifically, he has pointed to cassava and related value chains as one of Oyo's clearest comparative
advantages, with an emphasis on processing and value-addition industries rather than exporting raw
commodities. This production-economy framing recurs across his 2026 campaign messaging.`,
  },
  {
    title: "Youth as Economic Assets and Entrepreneurs",
    tags: ["youth", "young people", "entrepreneurship", "unicorn", "jobs", "employment scheme", "20000"],
    content: `Adekanmbi frames young people as economic assets who can build businesses, not merely
recipients of government programmes. He has said "every young man is a potential unicorn" in discussing
unemployment and youth opportunity. He points to a track record of designing youth programmes: he has
said "The Youth Employment Scheme, which engaged about 20,000 youths across sectors, was based on a
brief I wrote," offering this as evidence that his candidacy rests on demonstrated programme design
rather than promises alone. His earlier record includes sponsoring a technical and vocational
programme in 2019 in which about 100 young people were trained in areas such as system security, CCTV
installation, film production, fashion, agro-allied activities and paint production, explicitly to help
them start and run micro and small businesses. Specific new youth programmes and targets are expected
in the forthcoming manifesto.`,
  },
  {
    title: "Education Initiatives Record (Free JAMB Forms, Bursaries)",
    tags: ["education", "jamb", "bursary", "scholarship", "students", "record", "access"],
    content: `Adekanmbi has a documented record of education-access initiatives. He has said "Education
is the best form of legacy that can be given to children and youths." In November 2019 he began
distributing free JAMB forms to students, initially across 11 local governments, with plans to expand
statewide. In February 2022, as an Oyo South senatorial aspirant, he provided approximately N5 million
in bursaries to tertiary students from Ibadan and Ibarapa, saying students need motivation to perform
well, compete effectively and become employable after school. These are part of the evidence he offers
that his approach to education is about widening access, employability and targeted support.`,
  },
  {
    title: "Endorsements and the PDP–APM Coalition",
    tags: ["endorsement", "coalition", "makinde", "speaker", "ogundoyin", "assembly", "pdp", "apm", "support"],
    content: `Adekanmbi has assembled broad support across party lines and institutions in a short span.
In May 2026, Governor Seyi Makinde publicly named him his preferred successor, framing the candidacy as
continuity paired with independent judgment ("chart your own path"). Also in May 2026, Oyo State House
of Assembly Speaker Rt. Hon. Adebo Ogundoyin led a delegation of lawmakers to formally endorse him,
citing his experience, political maturity and capacity to unite stakeholders. The Allied Peoples
Movement (APM) then adopted him as its consensus governorship candidate at its primary in Ibadan. His
candidacy sits inside a broader PDP–APM political alliance in Oyo State, which party leaders and
lawmakers (including Rep. Adedeji Dhikrullahi Olajide and Hon. Stanley Odidiomo) have publicly
described as a trust-based partnership built to sustain the Omituntun development agenda beyond 2027.
The alliance has been reinforced through statewide "Thank You" tour stops.`,
  },
  {
    title: "The 2027 Electoral Landscape and Rivals",
    tags: ["2027", "election", "rivals", "opponents", "apc", "adc", "alli", "adegoke", "three-way", "race"],
    content: `As of September 2026, the Oyo governorship race is shaping into a competitive three-way
contest. The main candidates are: Bimbo Adekanmbi (APM, with PDP-coalition backing), running on
continuity and improvement building on the Makinde administration's record; Senator Sharafadeen Alli
(APC), his party's consensus candidate drawing on the national party structure; and Chief Taofeek
Adegboyega Adegoke (ADC), positioning the ADC as a third-force alternative after winning his party's
primary. Adekanmbi's camp frames the race as a referendum on whether Oyo's recent development gains
should be sustained and extended rather than reversed. When discussing opponents, the assistant should
be factual and respectful and must not attack or disparage other candidates.`,
  },
  {
    title: "Humanitarian Response — Bode Market Fire and Community Support",
    tags: ["bode market", "fire", "relief", "donation", "compassion", "community", "iseyin", "ekunle", "bridge"],
    content: `Adekanmbi has emphasised putting humanitarian response ahead of campaign politics in
moments of local crisis. After the Bode Market fire in July 2026 he visited affected traders and
donated N2.5 million, saying: "Politics and governance are important, but they must take the back seat
whenever disaster strikes." In September 2026, at Ekunle Day in Iseyin, he announced N5 million in
community support and presented engineering preparations for the proposed reconstruction of the Odo
Ogba Bridge and connecting roads, saying: "We do not just make promises. We back them up with immediate
action and proper technical preparation." He also called for a moment of silence for victims of the
Oriire abduction incident in June 2026, affirming that protecting lives and property is a fundamental
government responsibility.`,
  },
  {
    title: "Local Government Autonomy",
    tags: ["local government", "autonomy", "grassroots", "decentralisation", "communities", "lg"],
    content: `Adekanmbi has expressed support for full local-government autonomy, consistent with his
grassroots-development message and his emphasis on pushing fiscal and administrative capacity closer to
communities. He frames community-led projects and stronger grassroots voice as recurring priorities.
Detailed proposals on how this would be implemented are expected as the campaign platform develops.`,
  },
  {
    title: "Women's Empowerment",
    tags: ["women", "empowerment", "gender", "programmes", "pillars"],
    content: `Women's empowerment is one of the five pillars around which Adekanmbi's public-facing
campaign material is organised (alongside Healthcare, Agriculture, Economy & Jobs, Security, and Youth
& Women). As at the research cut-off, the commitment was stated at the level of empowerment-focused
programming; concrete programmes to accompany it had not yet been published and are expected as the
platform develops.`,
  },
  {
    title: "Accountability and Openness to Scrutiny",
    tags: ["accountability", "scrutiny", "media", "transparency", "oversight", "criticism"],
    content: `Adekanmbi consistently invites rather than avoids scrutiny. He has said: "I am ready to be
held accountable because governance is about the people and not about the individual occupying the
office." In September 2026 he asked media professionals to critically and fairly evaluate all
candidates on competence, character, experience and value proposition — welcoming close examination of
his own record. This openness to media and citizen oversight is a recurring theme, tied to his emphasis
on transparency and performance measurement.`,
  },
  {
    title: "Circular Road — Development with Fairness",
    tags: ["circular road", "ona-ara", "land", "compensation", "fairness", "property", "development", "infrastructure"],
    content: `Adekanmbi's handling of the Ibadan Circular Road is one of the clearest illustrations of
his stated principles: pro-development and pro-fairness at once. He supports completing the project,
saying "No sacrifice was too much for the development of the state... We will not stop the project,
because it is a great project." At the same time he insists that affected property owners must be
treated with dignity and fairness — a position made more credible by his disclosure that he personally
lost land in Ona-Ara to the project. He has voiced this fairness position publicly (August–September
2026), pairing full backing for the road with genuine acknowledgement of affected residents' concerns.`,
  },
  {
    title: "Governing Narrative — Nine Recurring Themes",
    tags: ["narrative", "themes", "philosophy", "summary", "priorities", "overview"],
    content: `Read across his public record, Adekanmbi's proposition centres on nine recurring themes:
(1) preserve what is working — treating the Makinde administration as a foundation to build on rather
than a burden to escape; (2) improve rather than simply replicate — his language favours "build on,"
"improve" and "confront what needs to change"; (3) move Oyo from consumption to production —
agriculture, agro-processing, SMEs, technology, tourism and youth entrepreneurship as the economic
engine; (4) finish major infrastructure — the Circular Road and the international airport as flagship
commitments; (5) govern with data — the proposed poverty map and targeted intervention for
out-of-school children; (6) protect government workers and pensioners — prompt salary and pension
payment as a standard to preserve; (7) push development to the grassroots — community-led projects and
local government autonomy; (8) lead with competence — his finance and accounting background as a core
qualification; and (9) stay people-centred, as shown by his balanced handling of the Circular Road.`,
  },
  {
    title: "Where the Platform Is Still Taking Shape",
    tags: ["gaps", "manifesto", "unpublished", "details", "targets", "pending", "research"],
    content: `In the interest of honesty, several parts of the platform are still being built out and
specific detail is not yet public. As at 11 September 2026 these include: a formally released "Omituntun
3.0" policy document or manifesto; a detailed economic plan beyond the consumption-to-production
framing; specific healthcare targets beyond the primary-care emphasis; numerical education targets to
accompany the poverty-map concept; operational detail on the security architecture beyond broad
commitments; concrete programmes to accompany the women's empowerment commitment; and the specific
commodities, financing mechanisms and locations for the agricultural value-addition strategy. If a
visitor asks for these specifics, the assistant should say honestly that the detail will come in the
forthcoming manifesto and invite them to follow the campaign, rather than inventing figures.`,
  },
  {
    title: "How to Get Involved",
    tags: ["volunteer", "join", "support", "donate", "involved", "campaign", "help", "contact", "social", "website"],
    content: `Supporters can get involved by volunteering with the campaign, joining local outreach
efforts, and helping share the candidate's message in their communities. The campaign information hub is
bimbo4gov.com. Official social channels include Facebook (/bimadek1), Instagram (@bimboadekanmbi), X /
Twitter (@adekanmbi_bimbo) and TikTok (@bimbo4gov). To volunteer or learn more, visitors can use these
channels or the contact details on the website.`,
  },
];
