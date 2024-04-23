import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const artistes = [
    {
      id: 1,
      slug: "rad-cartier",
      name: "RAD CARTIER",
      image: "/images/rad.jpg",
      description:
        "rad cartier (tout en minuscules) est un auteur, compositeur et interprête originaire d'Orléans. Il trace aujourd'hui son chemin dans un univers musical où ses influences Cloud Trap et rap Français se mêlent à une identité visuelle colorée, puissante et avant-gardiste pour créer une 'montée émotionnelle', selon ses propres termes. \n\nrad cartier est un artiste aux multiples facettes à l'écriture parfaitement ciselée. Sa sensibilité artistique s'exprime aussi bien par son flow que par le chant. Il affirme aujourd'hui une nouvelle maturité artistique. \n\nAprès le Street CD 'VT ZOOM' paru début 2021, il participe à la comédie musicale 'Baiser Mortel' à la Bourse du Commerce Pinault. En fin 2021, il a sorti le très attendu 'VISION THERMIQUE', un EP qui affirme sa singularité dans la scène musicale contemporaine. \n\nÀ l'été 2022, il s'est affirmé sur la scène rap au cours de sa tournée européenne, le VT TOUR, avec un live ciselé, précis et explosif, dont on peut voir un bel aperçu avec Dans le Club sur Arte. Cet été, Il a également sorti 'EXTENSION DU TERRITOIRE [1.0]' qui comprend des featurings avec Joanna, Lazuli et Lala &ce. \n\nÉgalement très actif dans le milieu de la mode, rad cartier apparaît dans la campagne de Marine Serre (Prix LVMH), ainsi que dans le projet de Rémi Besse pour Nowness. Il collabore également avec des créateurs émergents, tel que La Maskarade, pour façonner son image unique.",
      youtube: "https://www.youtube.com/@radcartier7267",
      clip: "8xh3WYZz8yM",
      instagram: "https://www.instagram.com/rad.cartier?igsh=dmQ1d3locDF6Mmdz",
      stream: "https://radcartier.lnk.to/VISION-NOCTURNE",
      link: "/artistes/rad-cartier",
    },
    {
      id: 2,
      slug: "myra",
      name: "MYRA",
      image: "/images/myra.jpg",
      description:
        "Artiste complète et plurielle, Myra incarne parfaitement cette nouvelle génération de touche à-touche qui ne s'interdisent rien. Compositrice, chanteuse et actrice, elle crée son univers musical en 2020, véritable saudade d'aujourd'hui, entre délicatesse et incandescence. \n\nEn hommage à Cesária Evora, elle nomme son dernier projet Saudade Palace qui associe arpèges, mélodies de guitares latines et drums chaleureuses, invitant à bouger son corps et à laisser l'esprit s'évader en toute intimité. \n\n2024 s'annonce comme un tournant dans la carrière de Myra avec la sortie de son nouveau projet 'Passion Câlins' axé autour de nombreuses collaborations : Myra fédère les artistes invités dans une ambiance chaleureuse et sensuelle pour un projet 100% featurings - ou presque...",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "Ig-wZhYQpss",
      instagram: "https://www.instagram.com/",
      stream: "https://mmyra.lnk.to/recommencer",
      link: "/artistes/myra",
    },
    {
      id: 3,
      slug: "lhiroyd",
      name: "LHIROYD",
      image: "/images/lhi.jpeg",
      description:
        "Lhiroyd évolue dans l'AfroFusion francophone. Son parcours atypique transparaît à travers sa voix et les émotions qui émanent de sa musique. Son univers est gorgé d'influences Africaines, Caribéennes et Américaines. \n\nEntre les différents pays de son enfance, le Burundi, le Rwanda et le Gabon, il a accumulé une énergie qui se dégage de ses morceaux.",
      youtube: "https://www.youtube.com/@Lhiroyd",
      clip: "zxRUr5b1MnU",
      instagram: "https://www.instagram.com/lhiroyd?igsh=MTF6ajM4dG9hcG9wag==",
      stream: "https://alterk.lnk.to/SugarDaddy",
      link: "/artistes/lhiroyd",
    },
    {
      id: 4,
      slug: "partymore",
      name: "PARTYMORE",
      image: "/images/partymore.jpg",
      description:
        "C'est en se laissant porter par le creux des vagues, que l'on se rend compte que l'on fait partie de l'océan. Be water. \n\nC'est ainsi que Partymore définit sa proposition musicale. L'authenticité englobe chaque contour de ses mots, derrière chacune de ses virgules se cache la volonté d'expression de sujets ou d'émotions que la société a, au quotidien, plus ou moins du mal à exprimer.",
      youtube: "https://www.youtube.com/@Partymore",
      clip: "9B7G6TglS18",
      instagram:
        "https://www.instagram.com/jesuispartymore?igsh=MWdlNmF3c3Fpc3c2MQ==",
      stream:
        "https://social.tunecore.com/linkShare?linkid=WljiduDLYGqGIdD37Pay4w",
      link: "/artistes/partymore",
    },
    {
      id: 5,
      slug: "lfk",
      name: "LFK",
      image: "/images/lfkcomp.jpg",
      description:
        "Avec son dernier EP 'La Chanche n'existe pas', LFK a vécu une année 2023 fulgurante. Très en vue sur les scènes, il se distingue en remportant le prix coup de coeur du concours jeune talent et en étant finaliste du tremplin Versailles Live. \n\nA tout juste 25 ans, le chanteur orléanais continue son ascension en se baladant entre la variété française et l'afro, ses principales influences musicales. \n\nAvec un univers doux et réconfortant, il met les textes au centre de sa musique en parlant de sa vie en marron : symbole de l'aventure, de la maturité et d'un état d'esprit positif qui prend le pas sur les difficultés de la vie. \n\nEn ce début d'année, il revient avec un nouveau projet en préparation e ta semble-t-il tout ce qu'il faut pour concquérir le coeur du grand public. Et si 2024 était son année ?",
      youtube: "https://www.youtube.com/@LFKYounglosa",
      clip: "_sEQ5ABYG_A",
      instagram: "https://www.instagram.com/lfkyounglosa?igsh=d2FiNGRjbzkzMG9o",
      stream: "https://linktr.ee/lfkyounglosa",
      link: "/artistes/lfk",
    },
    {
      id: 6,
      slug: "sulka",
      name: "SULKA",
      image: "/images/sulka.jpeg",
      description:
        "Seule la passion permet de surmonter la flemme. Sulka en est la preuve. \n\nSuite à la découverte d'un autotune souvent triste, il sort en avril 2023 un EP qui indique son état d'esprit 'Je finirai demain'. Et pourtant, seulement quelques mois plus tard, il réitère avec un projet encore plus abouti qui sonne comme une étape dans la canalisation de sa paresse : 'J'ai plus trop sommeil'. \n\nJusqu'où alors ce regain d'envie saura le porter pour la suite ? Il laisse quelques indices sur ses volontés d'en offrir de plus en plus. Originaire de Tours, lui même ne sait plus si il y trouve de l'inspiration, ou si la simplicité et le calme de son studio seront à jamais suffisant, il est temps d'en sortir mais : 'Y'a tout qui crame'. \n\nMarqué par les flows envolés de Columbine étant jeune, par la mélancolie et la versatilité d'un Zed Yun Pavarotti plus tard, il propose une musique bourrée d'émotions excellement décrites, magnifiées par des compostions ambitieuses. Désormais, Sulka ne remet les choses à demain.",
      youtube: "https://www.youtube.com/channel/UCWmAZJ76FVARAaVOY5sEwUA",
      clip: "ewFI9oPyhfk",
      instagram: "https://www.instagram.com/sulka_?igsh=MWNzb2lyb21ocXNuYg==",
      stream: "https://www.spotify.tv/",
      link: "/artistes/sulka",
    },
    {
      id: 7,
      slug: "soma-exe",
      name: "SOMA EXE",
      image: "/images/soma.jpg",
      description:
        "Lauréat de l'accompagnement Subsonik organisé par l'Astrolabe et le Polysonik, Soma Exe est un artiste, auteur et interprète issu de la scène orléanaise. \n\nDiplômé en école d'art, c'est par le graphisme et la direction artistique de plusieurs projets qu'il tente lui-même sa chance dans l'univers musical. Recherchant avant tout des sonorités marquées par ces inspirations de la chanson française, il exploite également sa culture cinématographique pour se mettre en scène à travers des personnages haut en couleur. \n\nGrâce à ses singles 'Immense', 'Middle' ou encore 'Adolescent', il impose son univers musical et visuel lui offrant des opportunités de se produire sur scène mais également d'être accompagné par les pilliers des organismes musicaux de sa ville. \n\nC'est sur scène que l'artiste se démarquera grâce à ces refrains entrainant et ces tenues colorées. Il se produira dans les salles les plus emblématiques d'Orléans entre décembre 2022 et novembre 2023.",
      youtube: "https://www.youtube.com/@Somaexe",
      clip: "sVkWR44VCb0",
      instagram: "https://www.instagram.com/soma_exe?igsh=MTVvMGQ0NDl0OGFpdg==",
      stream: "https://www.spotify.tv/",
      link: "/artistes/soma-exe",
    },
    {
      id: 8,
      slug: "anagramms",
      name: "ANAGRAMMS",
      image: "/images/anagramms.png",
      description:
        "Anagramms est une artiste originaire d'Orléans. Enfant de la neo-soul, du RnB et des sonorités hip-hop, elle fait la fusion de ces genres pour créer une vibe très suave. \n\nC'est avec Gracy Hopkins qu'elle fait ses premiers pas dans la musique avec le titre 'Outside'. Son morceau 'fax' pose la première pierre à l'édifice puis s'en suivra le morceau 'J'essaie'. \n\nA chacune de ses performances, elle envoûte son public avec ses mélodies entêtantes et ses textes poignants. Grimpez dans le train Anagramms car elle n'a pas fini de vous charmer.",
      youtube: "https://www.youtube.com/channel/UCDQ0V1t3hFle1t5RckM8NWA",
      clip: "Q_bmMOKdgvM",
      instagram:
        "https://www.instagram.com/anagramms?igsh=MTRmeWZ4c2dpYmRjYw==",
      stream: "https://linktr.ee/anagramms",
      link: "/artistes/anagramms",
    },
    {
      id: 9,
      slug: "kayefuru",
      name: "KAYEFURU",
      image: "/images/kayefuru.jpeg",
      description:
        "Kayefuru est une jeune DJ originaire de banlieue parisienne. Autodidacte, elle a su s'imposer en 2 ans parmi les DJs les plus en vogue de Paris en participant notamment aux éditions de la Yard ou de la Vivienne Party et en démontrant son talent dans différents clubs parisiens (Silencio, Wanderlust, Folies Pigalle etc.). \n\nDurant sa carrière de DJ, Kayefuru a pu travailler avec plusieurs marques notamment en période de Fashion Week : Patta, Foot Locker, Nike, Adidas... C'est en 2022, qu'elle deviendra une DJ résidente du flagship Lacoste des Champs Elysées.",
      youtube: "https://www.youtube.com/@KayEfuru",
      clip: "G7TIL9cwqZ4",
      instagram: "https://www.instagram.com/kayefuru?igsh=eTFlOWVrZDNtZnJj",
      stream: "https://soundcloud.com/kay-efuru",
      link: "/artistes/kayefuru",
    },
  ];

  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          Line Up
        </h1>
        <Image
          className="absolute w-full h-auto mx-auto lg:w-full lg:h-auto opacity-30"
          src="/images/FRESQUE_LOGO.png"
          width={1000}
          height={1000}
          alt="Fresque logo"
        />
      </div>
      <div className="bg-[#231f20] h-[3rem] px-[2rem]"></div>
      <section className="mt-[2rem] flex gap-[2rem] sm:gap-[2rem] px-[1rem] flex-wrap max-w-[50rem] mx-auto">
        <div className="mt-[2rem] flex gap-[0.5rem] flex-wrap justify-center max-w-[50rem] mx-auto">
          {artistes.map((artiste) => (
            <Link href={artiste.link} key={artiste.name}>
              <article className="w-[10.5rem] h-[15rem] sm:w-[15rem] sm:h-[20rem] relative rounded-1rem">
                <Image
                  className=" object-cover w-full h-full rounded-1rem"
                  src={artiste.image}
                  width={2000}
                  height={1000}
                  alt={artiste.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-1rem">
                  <p className="text-white font-rubikBold">En savoir plus</p>
                </div>
                <p className="absolute w-full bottom-0 text-[1.2rem] sm:text-[1.5rem] rounded-1remartiste p-[1rem] text-center mx-auto text-white font-rubikBold">
                  {artiste.name}
                </p>
              </article>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-[1rem] justify-center items-center mt-[2rem] mx-auto">
          <Link href="/">
            <p className="w-[12rem] text-[1.5rem] text-center text-white font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]">
              Retour à l&apos;accueil
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
