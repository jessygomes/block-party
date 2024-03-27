import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AnimationEtStand() {
  return (
    <div className="">
      <section className="flex px-[1rem] sm:px-[5rem] lg:px-[15rem] flex-col justify-center items-center text-center gap-[1rem] lg:flex-row">
        <div className="px-[0.5rem] sm:px-0 flex flex-col gap-[1rem] justify-center items-center mb-[1rem]">
          <h2 className="text-center font-bison text-[3rem] text-[#231f20] pb-[1rem] ">
            NOS ANIMATIONS
          </h2>
          <p className=" text-[#231f20] font-rubikMedium">
            Petit paragraphe informatif pour introduire les animations et les
            stands qui seront disponible durant le festival, puis redirigez vers
            la page concerné si l&apos;utilisateur veut davantage
            d&apos;informations (liste des animations/stands, horaires,
            inscriptions etc.)
          </p>
          <Link
            className="w-[17rem] text-[1.5rem] font-bison py-[0.3rem] bg-[#a3dabb] rounded-1rem sm:w-[20rem] sm:text-[2rem] sm:py-[0.5rem] hover:bg-[#fa798f] transition-all duration-200 ease-in-out text-white tracking-[0.3rem]"
            href="/"
          >
            Infos & Inscription
          </Link>
          <div className="h-[5rem] w-[90%] -mt-[2.5rem] -z-10 md:h-[15rem]">
            <Image
              className=" object-cover w-full h-full"
              src="/images/thibaut-burckel-emSBEruFpH4-unsplash.jpg"
              width={2000}
              height={1000}
              alt="Fresque logo"
            />
          </div>
        </div>
        <div className="px-[0.5rem] sm:px-0 flex flex-col gap-[1rem] justify-center items-center mb-[1rem]">
          <h2 className=" text-center font-bison text-[3rem] text-[#231f20] pb-[1rem]">
            NOS STANDS & EXPOS
          </h2>
          <p className=" text-[#231f20] font-rubikMedium">
            Petit paragraphe informatif pour introduire les animations et les
            stands qui seront disponible durant le festival, puis redirigez vers
            la page concerné si l&apos;utilisateur veut davantage
            d&apos;informations (liste des animations/stands, horaires,
            inscriptions etc.)
          </p>
          <Link
            className="w-[17rem] text-[1.5rem] font-bison py-[0.3rem] bg-[#a3dabb] rounded-1rem sm:w-[17rem] sm:text-[2rem] sm:py-[0.5rem] hover:bg-[#fa798f] transition-all duration-200 ease-in-out text-white tracking-[0.3rem]"
            href="/"
          >
            Voir les stands
          </Link>
          <div className="h-[5rem] w-[90%] -mt-[2.5rem] -z-10 md:h-[15rem]">
            <Image
              className=" object-cover w-full h-full"
              src="/images/jon-tyson-U3FPDpXQjCY-unsplash.jpg"
              width={2000}
              height={1000}
              alt="Fresque logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
