const stands = [
  {
    id: 1,
    title: "AfricaGraffitis",
    insta: "https://www.instagram.com/africagraffitis/",
    content:
      "Nous, c'est AfricaGraffitis, une association orléanaise. On a pour but de favoriser et développer des réseaux relais pour mieux vivre dans la ville, dans un souci d'intégration dans l'espace citoyen. Nous contribuons au rapprochement des différentes cultures présentes dans notre ville, par notre engagement, nous voulons participer à la réduction des inégalités sociales et au renforcement des échanges dans le temps. Pour le faire concrètement, on agit comme facilitateur dans les projets comme les déménagements, les recherches d'appartements ou encore l'organisation d'événements.",
    image: "/images/stands/ag.png",
  },
  {
    id: 2,
    insta: "https://www.instagram.com/bellenippeshop/",
    title: "Belle Nippe",
    content:
      "Belle Nippe est une marque de vêtement française sur-mesure. Elle propose des pièces uniques ou des pièces en séries limités. Avec un esprit audaciaux et novateur, Belle Nippe veut montrer, à travers ses créations, une identité rare mais identifiable.",
    image: "/images/stands/bnBlackLogo.png",
  },
  {
    id: 3,
    insta: "",
    title: "Fiveur",
    content: "",
    image: "",
  },
  {
    id: 4,
    insta: "",
    title: "Kill Your God / Purgatory",
    content: "",
    image: "",
  },
  {
    id: 5,
    insta: "https://www.instagram.com/gin.imaginaire/",
    title: "L'Imaginaire",
    content:
      "Fondée il y a plusieurs années par des passionnés de spiritueux, l'entreprise s'engage à créer des gins d'exception en utilisant des méthodes artisanales et des ingrédients locaux de qualité.",
    image: "/images/stands/imaginaire.png",
  },
  {
    id: 6,
    insta: "https://www.instagram.com/lesfrenchfruits/",
    title: "Les French Fruits",
    content:
      "Nous sommes les French Fruits, une association de danse Hip Hop orléanaise spécialisée dans l'improvisation (dit freestyle). Nous souhaitons répandre cette pratique au grand public, par l'intermédiaire de workshop, cours et représentation scénique.",
    image: "/images/stands/lff.png",
  },
  {
    id: 7,
    insta: "https://www.instagram.com/maisonfrancoeurclothing/",
    title: "Maison Francoeur",
    content:
      "Maison Francoeur, friperie éclectique, vise à offrir des pièces uniques, de qualité et abordables, transcendant les époques pour une gamme variée qui séduit tous les goûts, sans se limiter à une niche spécifique.",
    image: "/images/stands/mf.jpg",
  },
  {
    id: 8,
    insta: "https://www.instagram.com/mathildedurand_/",
    title: "Mathilde Durand",
    content:
      "La seule chose que j’ai conservé de mes études en journalisme sont des magazines et des journaux. Mon « effet papillon », c’est le jour où je les ai redécoupé en petits fragments pour reproduire la pochette de l'album L'amour d'A2H. Dans le collage, je trouve quelque chose de très thérapeutique. C’est comme un immense puzzle d'albums qui m'ont particulièrement marqué. Depuis, je n’ai jamais arrêté.",
    image: "/images/stands/md.jpg",
  },
  {
    id: 9,
    insta: "https://www.instagram.com/matiere__blanche/",
    title: "Matière Blanche",
    content:
      "L'Atelier Matière Blanche n'est pas une marque de vêtements comme les autres, elle est le fruit d'une décennie de recherches, d'expérimentations, et d'explorations de l'identité et de la personnalité. Dans chaque vêtement, nous offrons bien plus qu'un simple habit : nous proposons une expérience de découverte de soi, une opportunité d'expression authentique. Dans notre quête pour repousser les frontières du streetwear conventionnel et proposer une alternative raffinée, nous créons des vêtements du quotidien qui allient élégance et confort. Chaque pièce de l'Atelier Matière Blanche est conçue pour être une toile vierge, un espace où votre propre singularité peut s'exprimer librement. Comme notre logo, nos vêtements ne sont que des signatures sur cette toile de votre individualité, des témoins silencieux de votre voyage vers l'authenticité. Chez nous, la créativité est sacrée, et chaque couture est une célébration de l'unicité de chaque être. Bienvenue à l'Atelier Matière Blanche, où chaque vêtement est bien plus qu'une simple pièce de tissu, c'est une invitation à découvrir la beauté de votre propre essence.",
    image: "/images/stands/mb.png",
  },
  {
    id: 10,
    insta: "https://www.instagram.com/matiere__blanche/",
    title: "Mélocratie",
    content:
      "Mélocratie est une association loi 1901, basée à Orléans. Notre Association a pour but de favoriser et de promouvoir la rencontre, le partage et la création multiculturelle par l’enseignement, la pratique musicale, la mise en place d’évènement et le recours à des intervenants extérieurs afin de créer du lien social.",
    image: "/images/stands/melo.png",
  },
  {
    id: 11,
    insta: "https://www.instagram.com/meuf.one/",
    title: "Meuf.one",
    content:
      "Artiste graffeuse, je peins dans la rue des clitoris pour vulgariser et questionner sur l'anatomie féminine. En effet, la représentation du clitoris dans les livres de Sciences et Vies de la Terre des collégiens apparait seulement en 2017. Mon but est d'apporter un visuel entre l'art et l'éducation.",
    image: "/images/stands/meuf.jpg",
  },
  {
    id: 12,
    insta: "https://www.instagram.com/mintacustom/",
    title: "Minta Custom",
    content:
      "Minta Custom, customisatrice de basket depuis 5 ans, je crée des designs personnalisés en fonction des demandes des clients, les customs sont réalisés à la main et avec une peinture spécialisée pour le cuir. J'ai réalisé plusieurs expositions sur Orléans, et j'ai eu la chance de faire un custom pour DJ Snake qu'il a porté sur scène pendant un festival au Japon.",
    image: "",
  },
  {
    id: 13,
    insta: "https://www.instagram.com/pezer.97/",
    title: "Pezer",
    content: "",
    image: "",
  },
  {
    id: 14,
    insta: "https://www.instagram.com/radio_campus_orleans/",
    title: "Radio Campus",
    content: "",
    image: "/images/partenaires/Radio Campus Orleans noir.png",
  },
  {
    id: 15,
    insta: "",
    title: "Scienck Art",
    content: "",
    image: "",
  },
  {
    id: 16,
    insta: "https://www.instagram.com/underground.socialclub/",
    title: "Underground Social Club",
    content:
      "Association d'artistes multi disciplines, notre but étant de pouvoir créer des expositions/événements pour partager, rassembler et créer des moments uniques. Quand le graffiti se mélange avec des sculpteurs, plasticiens, la musique et tout ce qui est possible !!",
    image: "/images/stands/under.png",
  },
  {
    id: 17,
    insta: "https://www.instagram.com/ztem.studio/",
    title: "ZTEM Studio",
    content:
      "ZTEM est une créatrice de mode engagée et éco-responsable. Elle mêle des looks déstructurés en utilisant uniquement des matériaux de seconde-main, à des esthétiques plus lisses grâce à sa technique et à la qualité des tissus utilisés, ce qui permet aux pièces créées d’allier originalité et durabilité.",
    image: "/images/stands/logo.png",
  },
];

export default stands;
