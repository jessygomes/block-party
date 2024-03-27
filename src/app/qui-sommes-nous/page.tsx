import React from "react";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

export default function QuiSommesNous() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end shadow-3xl">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          QUI SOMMES-NOUS ?
        </h1>
      </div>
      <div className="bg-[#231f20] h-[3rem]"></div>
      <section className=" mt-[3rem] px-[1rem] flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-[2rem] sm:gap-[1.5rem] sm:px-[10rem] lg:px-[15rem]">
        {/* <h2 className="text-[2rem] font-bison text-[#231f20]">
          BlockParty Festival
        </h2> */}
        <div className="flex flex-col gap-[2rem] lg:flex-row justify-evenly sm:gap-[3rem] lg:gap-[5em]">
          <div className="text-center">
            <Image
              className="w-[10rem] h-[10rem] mx-auto lg:w-[15rem] lg:h-full"
              src="/images/LOGO_ORANGE.png"
              width={300}
              height={300}
              alt="Fresque logo"
            />
          </div>
          <p className="text-[#231f20] text-justify lg:w-[29rem]">
            Description du concept de BlockPartyFestival. Ajoutez une photo du
            lieu, des organisateurs ? etc. Parler de pourquoi cela a été créé,
            les valeurs, les objectifs, etc. etc etc.Description du concept de
            BlockPartyFestival. Ajoutez une photo du lieu, des organisateurs ?
            etc. Parler de pourquoi cela a été créé, les valeurs, les objectifs,
            etc. etc etc.Description du concept de BlockPartyFestival. Ajoutez
            une photo du lieu, des organisateurs ? etc. Parler de pourquoi cela
            a été créé, les valeurs, les objectifs, etc. etc etc.
          </p>
        </div>
        <div className="text-center">
          <Image
            className="w-[100%] block lg:hidden h-auto mx-auto rounded-1rem sm:w-[100%] lg:w-[50rem]"
            src="/images/maxime-bhm-9ZnGWdsqNZ4-unsplash.jpg"
            width={300}
            height={300}
            alt="Fresque logo"
          />
        </div>
        <p className="text-[#231f20] text-justify lg:mb-[1.5rem]">
          Description du concept de BlockPartyFestival. Ajoutez une photo du
          lieu, des organisateurs ? etc. Parler de pourquoi cela a été créé, les
          valeurs, les objectifs, etc. etc etc.Description du concept de
          BlockPartyFestival. Ajoutez une photo du lieu, des organisateurs ?
          etc.
        </p>
        <div className="text-center">
          <Image
            className="w-[100%] hidden lg:block h-auto mx-auto rounded-1rem lg:w-[50rem]"
            src="/images/maxime-bhm-9ZnGWdsqNZ4-unsplash.jpg"
            width={300}
            height={300}
            alt="Fresque logo"
          />
        </div>
      </section>
    </div>
  );
}
