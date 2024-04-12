import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stand & Expositions | BlockParty Festival",
  description: "Les stand et les expositions du festival BlocParty",
};

export default function StandExpos() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          STANDS & EXPOSITIONS
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
          <p className=" text-justify">
            La première édition, Block Party : Premier Battement aura lieu le 22
            juin au Moule à Gaufres à Fleury-Les-Aubrais. Se succèderont des
            artistes locaux, émergents et des têtes d&apos;affiche, promettant
            une expérience musicale riche et diversifiée ! Avant cela, on
            retrouvera dans la journée des stands et des créateurs locaux,
            plusieurs animations viendront rythmer l&apos;événement. La Block
            Party promet une immersion totale dans la culture Hip-Hop dans un
            cadre authentique !
          </p>
          <p>
            Une conférence traitant de l&apos;évolution de la culture Hip-Hop
            Orléanaise depuis les années 1990 sera organisée sur place, en début
            d&apos;après-midi avec des acteurs de la scène Hip-Hop Orléanaise.
            Cette conférence sera conclue par un éventail des possibilités
            artistiques sur Orléans et ses alentours (concours,
            opportunités...).
          </p>
          <p>
            Une jam session sera organisée juste avant le passage des artistes
            sur la grosse scène permettant au public de prendre part au show.
            Plusieurs stands seront installés au cœur du festival. Les talents
            locaux dans les domaines de la mode, la danse, le graffiti ou encore
            le sport pourront proposer au public diverses animations tout au
            long de la journée.
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
