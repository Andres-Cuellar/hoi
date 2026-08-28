export type Stud = {
  slug: string;
  name: string;
  tags: string[];
  headline: string;
  description: string;
  image: string;
  accent: string;
  atmosphere: string;
  discoverLabel: string;
  price: string;
  phenotype: string;
  colorCoat: string;
  health: string;
};

export const studs: Stud[] = [
  {
    slug: 'pink-chenzo',
    name: 'PINK CHENZO',
    tags: ['ISABELLA', 'PINK VISUAL', 'BIG ROPE'],
    headline: 'THE NEXT GENERATION STARTS HERE.',
    description: 'An 8-month rising star with a docile, playful temperament, permanent Big Rope and compact Isabella structure.',
    image: '/pink-chenzo.webp',
    accent: '#d700c5',
    atmosphere: 'isabella',
    discoverLabel: 'DISCOVER PINK CHENZO',
    price: '$2,500',
    phenotype: 'Visual Pink with an Isabella & Tan base. Permanent Big Rope, wide shoulders and a compact short-backed structure.',
    colorCoat: 'at/at, A/A, b/b, n/co, d/d, EM/EM, n/Int, l1/l1, n/S. Negative for Merle, Furnishings and Curl.',
    health: 'Carries CDPA (N/C). Clear for CMR1, CY3, DM, HUU and JHC.',
  },
  {
    slug: 'pink-boss',
    name: 'PINK BOSS',
    tags: ['ISABELLA', 'NEW SHADE', 'FLUFFY'],
    headline: 'BUILT TO LEAVE A LEGACY.',
    description: 'Isabella New Shade Fludor with massive head, heavy bone, wide chest and an ultra-short back.',
    image: '/pink-boss.webp',
    accent: '#d7ae7c',
    atmosphere: 'champagne',
    discoverLabel: 'DISCOVER PINK BOSS',
    price: '$3,500',
    phenotype: 'Isabella New Shade Fludor with a massive head, heavy bone, wide chest and ultra-short back.',
    colorCoat: 'at/at, n/A, b/b, co/co, d/d, EM/e, Int/Int, n/F, l1/l1. Negative for Merle, Spotting and Curl.',
    health: 'Carries CDDY (N/C) and CDPA (N/C). Clear for CMR1, CY3, DM, HUU, JHC and cord1.',
  },
  {
    slug: 'pink-slime',
    name: 'PINK SLIME',
    tags: ['RED & TAN', 'BIG ROPE', 'COMPACT'],
    headline: 'PRECISION IN EVERY GENERATION.',
    description: 'A high-demand commercial stud combining pure red color, Big Rope and an impeccable compact structure.',
    image: '/pink-slime.webp',
    accent: '#88a8ff',
    atmosphere: 'ice',
    discoverLabel: 'DISCOVER PINK SLIME',
    price: '$2,500',
    phenotype: 'Rojo & Tan with a Big Rope, thick compact structure and a short-back profile.',
    colorCoat: 'at/a, n/A, b/b, n/co, D/d, EM/e, l1/l1, n/SD. Negative for Merle, Spotting, Curl and Furnishings.',
    health: 'Carries the Shrink Gene (CDPA). Clear for CMR1, CY3, DM, HUU and JHC.',
  },
  {
    slug: 'pink-face',
    name: 'PINK FACE',
    tags: ['PINK VISUAL', 'DOUBLE FLUFFY', 'DOUBLE BLUE'],
    headline: 'A FACE MADE TO BE REMEMBERED.',
    description: 'Clean genetics, calm temperament, wide shoulders and a rare three-generation tailless lineage.',
    image: '/pink-face.webp',
    accent: '#6c8eff',
    atmosphere: 'midnight',
    discoverLabel: 'DISCOVER PINK FACE',
    price: '$2,500',
    phenotype: 'Visual Pink, Double Fluffy and Double Blue. Very short 8-9 inch back, wide shoulders and a 3-generation tailless lineage.',
    colorCoat: 'at/at, A/A, b/b, d/d, n/co, EM/e, Int/Int, l1/l1. Negative for Merle, Spotting, Curl and Furnishings.',
    health: 'Clear panel for DM, JHC, HUU and CMR1.',
  },
  {
    slug: 'steph-curly',
    name: 'STEPH CURLY',
    tags: ['RED FLUDOR', 'MERLE', 'BIG ROPE'],
    headline: 'RARE CHARACTER. REAL POTENTIAL.',
    description: 'Elite red genetics without mixing into Pink lines, with heavy bone, an 8-inch back and pronounced Big Rope.',
    image: '/steph-curly.webp',
    accent: '#f09da5',
    atmosphere: 'rose',
    discoverLabel: 'DISCOVER CURLY',
    price: '$2,500',
    phenotype: 'Rojo Fludor Merle (Isabella & Tan) with heavy bone, an 8-inch back and a pronounced Big Rope fold.',
    colorCoat: 'at/at, n/A, b/b, d/d, n/co, EM/EM, Int/Int, n/M, n/C1, l4/l4, n/n shedding. Negative for Spotting, Curl and Furnishings.',
    health: 'Carries CDPA. Clear health panel with a rare DNA lineage.',
  },
];
