import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Animations | BlockParty Festival",
  description: "Animations du festival BlocParty",
};

export default function NosAnimations() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          NOS ANIMATIONS
        </h1>
        <Image
          className="absolute w-full h-auto mx-auto lg:w-full lg:h-auto opacity-30"
          src="/images/FRESQUE_LOGO.png"
          width={1000}
          height={1000}
          alt="Fresque logo"
        />
      </div>
      <div className="bg-[#231f20] h-[3rem] px-[2rem]">
        {/* <h2 className="text-[2rem] font-bison text-white">
          BlockParty Festival
        </h2> */}
      </div>
      <section className="mt-[2rem] flex gap-[0.5rem] lg:gap-[2rem] px-[1rem] flex-wrap justify-center items-center max-w-[50rem] mx-auto">
        <div className="flex-1 flex flex-col gap-[2rem] justify-center">
          <h2 className="font-bison text-[2rem]">La journée BlockParty</h2>
          <div className="h-[8rem] w-[100%] md:h-[10rem]">
            <Image
              className=" object-cover w-full h-full rounded-1rem"
              src="/images/image00001.png"
              width={2000}
              height={1000}
              alt="Photo du lieu de l'événement"
            />
          </div>
          <p className=" text-justify">
            Pour cette première édition, le BlockParty Festival vous propose du
            lourd en termes d&apos;animations.{" "}
            <span className="font-bold">
              Tout au long de la journée, préparez-vous à entrer dans
              l&apos;univers Hip Hop sous tous ces angles.{" "}
            </span>{" "}
            <br /> <br /> Dans un cadre authentique, laissez-nous vous embarquer
            par la culture qui à traverser les époques (et oui, 50 ans
            d&apos;existence), qui a su évoluer et séduire le plus grand nombre.
            Mais revenons au source, qu&apos;est-ce qu&apos;une block party ?
          </p>
          <h3 className="font-bison text-[1.5rem]">
            &quot;Et le 22 juin, qu&apos;est-ce qu&apos;on peut faire ?&quot;
          </h3>
          <p>
            Allez à la découverte des artistes locaux à travers les stands
            d&apos;expositions, déguster une bonne boisson sous le soleil depuis
            l&apos;espace détente, s&apos;ambiancer sur les sets des DJs qui
            envoient du gros son. Tellement de scénarios possibles drant
            l&apos;après-midi du premier battement.{" "}
            <span className=" font-bold">
              Une chose est sûr, vous vivrez un moment fort et surtout unique au
              Moule à Gaufre pour débuter l&apos;été de la meilleure des
              manières.
            </span>
          </p>

          <div className="flex flex-col lg:flex-row gap-[1rem] justify-center items-center">
            <div className="h-[5rem] w-[100%] md:h-[10rem]">
              <Image
                className=" object-cover w-full h-full rounded-1rem"
                src="/images/lucarne.jpg"
                width={2000}
                height={1000}
                alt="Photo du lieu de l'événement"
              />
            </div>
            <p></p>
            <p className="">
              Bien évidemment, différents happening sont prévus entre 14h et
              18h,{" "}
              <span className="font-bold">
                des défilés de créateurs, démonstration de graffiti, performance
                de danse, de beatbox ou encore JAM session
              </span>
              . <br /> <br /> Les plus sportifs auront l&apos;occasion de défier
              la lucarne de Block Party,{" "}
              <span className="font-bold">
                auront-ils la précision nécessaire pour parvenir à marquer ?
              </span>
            </p>
          </div>

          <p>
            Nous vous attendons nombreux dès l&apos;ouverture du site.
            N&apos;oubliez surtout pas de venir avec votre meilleure énergie,
            votre plus grand sourire et un cou bien musclé pour résister au
            tremblement des 808.
          </p>
          <p className="font-bison text-[1.5rem]">
            Bref, on se donne rendez-vous le 22 juin au Moule à Gaufre à Fleury
            Les Aubrais !
          </p>
        </div>
        {/* <div className="lg:flex-1">
          <Image
            className=" object-cover w-full h-full rounded-1rem"
            src="/images/moule.jpg"
            width={2000}
            height={1000}
            alt="Photo du moule à gaufres"
          />
        </div> */}
      </section>
    </div>
  );
}
