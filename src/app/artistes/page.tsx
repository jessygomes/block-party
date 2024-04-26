import Image from "next/image";
import Link from "next/link";
import React from "react";
import artistes from "../../data/artistes";

export default function page() {
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
              <article className="w-[10.5rem] h-[15rem] sm:w-[11.5rem] sm:h-[15rem] relative rounded-1rem">
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
                <p className="absolute w-full bottom-0 text-[1.2rem] sm:text-[1.5rem] rounded-1remartiste p-[rem] text-center mx-auto text-white font-rubikBold">
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
