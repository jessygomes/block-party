import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Infos Pratique | BlockParty Festival",
  description: "Festival de musique",
};

export default function InfosPratque() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          INFOS PRATIQUES
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
          <h2 className="font-bison text-[2rem]">Le Moule à Gaufre</h2>
          <p className=" text-justify">
            Le site choisi pour accueillir le festival, le Moule à Gaufres,
            ancienne usine à tabac, représente désormais un lieu emblématique au
            cœur de l&apos;agglomération orléanaise. Passer ses portes,
            c&apos;est s&apos;immerger dans une expérience sans limite,
            suscitant la curiosité et encourageant la découverte.
          </p>
        </div>
        <div className="lg:flex-1">
          <Image
            className=" object-cover w-full h-full rounded-1rem"
            src="/images/moule.jpg"
            width={2000}
            height={1000}
            alt="Photo du moule à gaufres"
          />
        </div>
      </section>
    </div>
  );
}
