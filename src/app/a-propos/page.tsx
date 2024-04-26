import React from "react";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Propos | BlockParty Festival",
  description: "A propos du festival BlocParty",
};

export default function APropos() {
  return (
    <div>
      <section className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white uppercase pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          à propos
        </h1>
        <Image
          className="absolute w-full h-auto mx-auto lg:w-full lg:h-auto opacity-30"
          src="/images/FRESQUE_LOGO.png"
          width={1000}
          height={1000}
          alt="Fresque logo"
        />
      </section>
      <div className="bg-[#231f20] h-[3rem] px-[2rem]"></div>
      <section className=" mt-[3rem] px-[1rem] flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-[2rem] sm:gap-[1.5rem] sm:px-[8rem] lg:px-[4rem]">
        <article className="flex flex-col gap-[2rem] justify-evenly sm:gap-[2rem] lg:gap-[1.5rem] lg:w-[65%]">
          <h2 className="font-bison text-[2rem]">Histoire</h2>
          <p className="text-[#231f20] font-rubikLight">
            La Block Party, ancrée dans la culture américaine, se présente comme{" "}
            <span className=" font-rubikMedium">
              une célébration de quartier rassemblant la communauté autour de
              performances musicales
            </span>
            . Sa popularité connaît une ascension notable à partir des années
            1970. Ces événements jouent un rôle significatif dans
            l&apos;émergence de la culture Hip-Hop, du rap et du Deejaying.{" "}
            <br /> <br /> Loin d&apos;être simplement des concerts,{" "}
            <span className=" font-rubikMedium">
              les Block Parties sont des moments de communion où les habitants
              se retrouvent pour partager leur amour de la musique et de la
              danse.
            </span>{" "}
            Ils offrent une plateforme aux artistes locaux pour s&apos;exprimer
            et pour que leur talent soit recnnu au sein de leur propre
            communauté. Ces événements contribuent également à{" "}
            <span className=" font-rubikMedium">
              {" "}
              renforcer les liens sociaux et à promouvoir la diversité
              culturelle en offrant un espace où chacun est le bienvenu, quel
              que soit son âge, son origine ou son statut social.
            </span>{" "}
            renforcer les
            <br /> <br /> Au fil des décennies, les Block Parties ont évolué
            pour devenir des symboles de résilience, de créativité et
            d&apos;unité au sein de quartiers urbains. Ils continuent
            d&apos;influencer la musique, la mode et la culture populaire à
            travers le monde,{" "}
            <span className=" font-rubikMedium">
              {" "}
              témoignant de l&apos;impact durable de cette forme
              d&apos;expression artistique sur la société contemporaine.
            </span>
          </p>
          <h2 className="font-bison text-[2rem]">Contexte</h2>
          <p className="text-[#231f20] font-rubikLight">
            La première édition,{" "}
            <span className=" font-rubikMedium">
              Block Party : Premier Battement
            </span>{" "}
            aura lieu le 22 juin au Moule à Gaufres à Fleury-Les-Aubrais. Se
            succèderont des artistes locaux, émergents et des têtes
            d&apos;affiche, promettant une expérience musicale riche et
            diversifiée ! <br /> <br />{" "}
            <span className=" font-rubikMedium">
              La Block Party promet une immersion totale dans la culture Hip-Hop
              dans une cadre authentique.
            </span>
          </p>
          <h2 className="font-bison text-[2rem]">Qui sommes-nous ?</h2>
          <p className="text-[#231f20] font-rubikLight">
            La Block Party est le fruit d&apos;une réflexion, la volonté de
            créer un événement rassembleur d&apos;une plus grande envergure
            autour de l&apos;esthétique Hip-Hop. <br /> Connaissez-vous
            l&apos;expression{" "}
            <span className=" font-rubikMedium">
              &quot;On est jamais mieux servi que par soi-même&quot;
            </span>{" "}
            ?
            <br /> <br />{" "}
            <span className=" font-rubikMedium">
              Nos différentes structures se sont rassemblées afin
              d&apos;additionner les forces vives et organiser la totalité de
              l&apos;événement.
            </span>
          </p>
          <div
            aria-label="Liste des structures organisant l'événement."
            className="flex flex-wrap items-center gap-8 lg:gap-4"
          >
            <div
              aria-label="La première structure : Le Saloon."
              className="flex flex-col gap-8 sm:w-[45%] sm:h-[18rem] lg:w-[48%] p-1"
            >
              <div className="w-full h-[4rem] lg:h-[7rem]">
                <Image
                  className=" object-contain w-auto h-[5rem] mx-auto md:h-full lg:h-full lg:w-[12rem]"
                  src="/images/partenaires/logo saloon_page-0001.jpg"
                  width={300}
                  height={300}
                  alt="Logo du Saloon"
                />
              </div>
              <p className="text-[#231f20] font-rubikLight">
                Le Saloon est une association qui accompagne les pratiques
                artistiques Hip-Hop grâce à un studio d&apos;enregistrement,
                l&apos;action culturelle et l&apos;organisation
                d&apos;événements live (concerts, jams sessions, open-mic...)
              </p>
            </div>
            <div
              aria-label="La seconde structure : Orlinside."
              className="flex flex-col gap-8 sm:w-[45%] sm:h-[18rem] lg:w-[48%] p-1"
            >
              <div className="w-full h-[4rem] lg:h-[7rem]">
                <Image
                  className="object-contain w-auto h-[3rem] mx-auto md:h-full lg:h-full lg:w-[15rem]"
                  src="/images/partenaires/Unknown.png"
                  width={300}
                  height={300}
                  alt="Logo d'Orlinside"
                />
              </div>
              <p className="text-[#231f20] font-rubikLight">
                Orlinside est une boîte de productoin orléanaise orientée vers
                l&apos;impulsion des talents et projets locaux auprès du grand
                public. Ils créent leur propre contenu audio-visuel pour le
                diffuser via leurs réseaux sociaux.
              </p>
            </div>
            <div
              aria-label="La troisième structure : Parade Prod."
              className="flex flex-col gap-8 sm:w-[45%] sm:h-[18rem] lg:w-[48%] p-1"
            >
              <div className="w-full h-[4rem] lg:h-[7rem] bg-slate-300">
                <Image
                  className="object-contain w-auto h-[4rem] mx-auto md:w-[7rem] md:h-full lg:h-full lg:w-[12rem]"
                  src="/images/partenaires/PARADE PROD.png"
                  width={300}
                  height={300}
                  alt="Logo de Parade Prod"
                />
              </div>
              <p className="text-[#231f20] font-rubikLight">
                Parade Prod accompagne également les pratiques artistiques par
                le biais de l&apos;organisation dévénements live, le
                développement et la production d&apos;artistes émergents ainsi
                que par de nombreux concepts sociaux (le Ziktober).
              </p>
            </div>
            <div
              aria-label="Les deux dernières structures : NextUpMusicGroup et Only One Way"
              className="flex flex-col gap-8 sm:w-[45%] sm:h-[18rem] lg:w-[48%] p-1"
            >
              <div className="w-full h-[4rem] lg:h-[7rem] flex">
                <Image
                  className="object-contain w-auto h-[5rem] mx-auto md:w-[7rem] md:h-full lg:w-[12rem] lg:h-full"
                  src="/images/partenaires/thumbnail_frf.png"
                  width={300}
                  height={300}
                  alt="Logo de Next Up Music"
                />
                <Image
                  className="object-contain w-auto h-[5rem] mx-auto md:w-[7rem] md:h-full lg:h-full"
                  src="/images/partenaires/thumbnail_Capturefrfre.png"
                  width={300}
                  height={300}
                  alt="Logo de Only One Way"
                />
              </div>
              <p className="text-[#231f20] font-rubikLight">
                Next Up Music et Only One Way sont des labels indépendants qui
                accompagnent la carrière des artistes locaux.
              </p>
            </div>
          </div>

          {/* <div className="text-center flex lg:gap-[1rem]">
            <Image
              className="w-[5rem] h-[5rem] mx-auto md:w-[7rem] md:h-full lg:w-[15rem] lg:h-full"
              src="/images/logo/LOGO_VERT.png"
              width={300}
              height={300}
              alt="Fresque logo"
            />
            <Image
              className="w-[5rem] h-[5rem] mx-auto md:w-[7rem] md:h-full lg:w-[15rem] lg:h-full"
              src="/images/logo/LOGO_ORANGE.png"
              width={300}
              height={300}
              alt="Fresque logo"
            />
            <Image
              className="w-[5rem] h-[5rem] mx-auto md:w-[7rem] md:h-full lg:w-[15rem] lg:h-full"
              src="/images/logo/LOGO_NOIRCLAIR.png"
              width={300}
              height={300}
              alt="Fresque logo"
            />
          </div> */}

          {/* <div className="text-center">
            <Image
              className="w-[100%] block lg:hidden h-auto mx-auto rounded-1rem sm:w-[100%] lg:w-[50rem]"
              src="/images/maxime-bhm-9ZnGWdsqNZ4-unsplash.jpg"
              width={300}
              height={300}
              alt="Fresque logo"
            />
          </div>
          <div className="text-center">
            <Image
              className="w-[100%] hidden lg:block h-auto mx-auto rounded-1rem lg:w-[50rem]"
              src="/images/maxime-bhm-9ZnGWdsqNZ4-unsplash.jpg"
              width={300}
              height={300}
              alt="Fresque logo"
            />
          </div> */}
        </article>
      </section>
    </div>
  );
}
