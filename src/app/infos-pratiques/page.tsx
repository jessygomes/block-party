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
      <section className="mt-[2rem] flex gap-[2rem] sm:gap-[2rem] px-[1rem] flex-wrap max-w-[50rem] mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-normal gap-[1.5rem] sm:gap-[2rem] w-full">
          <div className="sm:flex-1 font-rubikLight text-center sm:text-left">
            <h2 className="font-bison text-[2rem]">
              Horaires le 22 juin 2024 :
            </h2>
            <p>
              Ouverture du festival :{" "}
              <span className=" font-rubikMedium">14h00</span>{" "}
            </p>
            <p>
              Fermeture du festival :{" "}
              <span className=" font-rubikMedium">1h00</span>{" "}
            </p>
            <p className="pt-[1rem]">
              Parking : <span className=" font-rubikMedium">Adresse</span>{" "}
            </p>
            <p className="">
              Transport : <span className=" font-rubikMedium">Adresse</span>
            </p>
            <p className="">Parking à vélo</p>
            <p className="pt-[1rem] font-rubikMedium">
              Toilette et point d&apos;eau sur place.
            </p>
          </div>
          <div className="sm:flex-1 font-rubikLight text-center sm:text-left">
            <h2 className="font-bison text-[2rem]">Tarifs :</h2>
            <p>
              Moins de 15 ans :{" "}
              <span className=" font-rubikMedium">Gratuit</span>
            </p>
            <p>
              Tarif réduit : <span className=" font-rubikMedium">10€</span>
            </p>
            <p>
              Prévente ou sur place avant 18h :{" "}
              <span className=" font-rubikMedium">14€</span>{" "}
            </p>
            <p>
              Sur place après 18h :{" "}
              <span className=" font-rubikMedium">18€</span>
            </p>
            <p className="pt-[1rem] font-rubikMedium">
              Bar et restauration sur place
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] justify-center sm:gap-[1rem]">
          <div className="sm:flex-1 font-rubikLight text-center sm:text-left">
            <h2 className="font-bison text-[2rem] mb-3">Le Moule à Gaufre :</h2>
            <p className="text-justify font-rubikLight">
              Le site choisi pour accueillir le festival, le Moule à Gaufres,
              ancienne usine à tabac, représente désormais un lieu emblématique
              au cœur de l&apos;agglomération orléanaise. Passer ses portes,
              c&apos;est s&apos;immerger dans une expérience sans limite,
              suscitant la curiosité et encourageant la découverte.
            </p>
          </div>
          <div className="h-[30%] w-full sm:flex-1 lg:h-[50%] bg-black">
            <Image
              className=" object-cover w-full h-full rounded-1rem"
              src="/images/image00002.png"
              width={2000}
              height={1000}
              alt="Photo du moule à gaufres"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
