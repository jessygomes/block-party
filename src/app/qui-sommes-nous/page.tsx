import React from "react";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

export default function QuiSommesNous() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          QUI SOMMES-NOUS ?
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
      <section className=" mt-[3rem] px-[1rem] flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-[2rem] sm:gap-[1.5rem] sm:px-[10rem] lg:px-[4rem]">
        <div className="flex flex-col gap-[2rem] justify-evenly sm:gap-[3rem] lg:gap-[1.5rem] lg:w-[65%]">
          <div className="text-center flex lg:gap-[1rem]">
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
          </div>
          <p className="text-[#231f20] font-rubikLight text-justify lg:w-full">
            Description du concept de BlockPartyFestival. Ajoutez une photo du
            lieu, des organisateurs ? etc. Parler de pourquoi cela a été créé,
            les valeurs, les objectifs, etc. etc etc.Description du concept de
            BlockPartyFestival. Ajoutez une photo du lieu, des organisateurs ?
            etc. Parler de pourquoi cela a été créé, les valeurs, les objectifs,
            etc. etc etc.Description du concept de BlockPartyFestival. Ajoutez
            une photo du lieu, des organisateurs ? etc. Parler de pourquoi cela
            a été créé, les valeurs, les objectifs, etc. etc etc. <br /> <br />{" "}
            Description du concept de BlockPartyFestival. Ajoutez une photo du
            lieu, des organisateurs ? etc. Parler de pourquoi cela a été créé,
            les valeurs, les objectifs, etc. etc etc.Description du concept de
            BlockPartyFestival. Ajoutez une photo du lieu, des organisateurs ?
            etc.
          </p>
          <div className="text-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
