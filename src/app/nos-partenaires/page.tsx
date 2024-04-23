import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Partenaires | BlockParty Festival",
  description: "Les partenaires du festival BlocParty",
};

export default function NosPartenaires() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          NOS PARTENAIRES
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
      <section className="mt-[2rem] flex gap-[0.5rem] lg:gap-[2rem] px-[1rem] flex-wrap justify-center items-center max-w-[50rem] mx-auto">
        <div className="flex-1 flex flex-col gap-[2rem] justify-center">
          <h2 className="font-bison text-[2rem]">Une aide précieuse</h2>
          <p className=" text-justify">
            Peut être un petit paragraphe pour expliquer le rôle des partenaires
          </p>
        </div>
        <div className="flex flex-wrap gap-[2rem] w-full items-center justify-center">
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/CNM-logo_standard_noir_partenaire.png"
              width={1000}
              height={1000}
              alt="Logo du Centre National de Musique"
            />
          </div>
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/infolab-noir.png"
              width={1000}
              height={1000}
              alt="Logo de l'Infolab"
            />
          </div>
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/Unknown.png"
              width={1000}
              height={1000}
              alt="Logo de la boîte de production - Orlinside"
            />
          </div>
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/thumbnail_frf.png"
              width={1000}
              height={1000}
              alt="Logo de Next Music Group"
            />
          </div>
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/logo saloon_page-0001.jpg"
              width={1000}
              height={1000}
              alt="Logo du Saloon"
            />
          </div>
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/thumbnail_Capturefrfre.png"
              width={1000}
              height={1000}
              alt="Logo Only One Way"
            />
          </div>
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/LogoPNG_inTheGleam_Black.png"
              width={1000}
              height={1000}
              alt="Logo inTheGleam - Développeur Freelance"
            />
          </div>
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/Radio Campus Orleans noir.png"
              width={1000}
              height={1000}
              alt="Logo Radio Campus Orléans"
            />
          </div>
          <div className=" w-[30%]">
            <Image
              className="object-cover"
              src="/images/partenaires/Logo Helium 4 - 2022 noir.png"
              width={1000}
              height={1000}
              alt="Logo Hélium"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-wrap gap-[1rem] justify-center items-center mt-[2rem]">
        <Link href="/">
          <p className="w-[12rem] text-[1.5rem] text-center text-white font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]">
            Retour à l&apos;accueil
          </p>
        </Link>
      </div>
    </div>
  );
}
