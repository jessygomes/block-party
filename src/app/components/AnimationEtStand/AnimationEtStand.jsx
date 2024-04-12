import Image from "next/image";
import Link from "next/link";

export default function AnimationEtStand() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex px-[1rem] sm:px-[5rem] lg:px-[15rem] flex-col justify-center items-center text-center gap-[1rem] lg:flex-row">
        <div className="flex-1 px-[0.5rem] sm:px-0 flex flex-col gap-[1rem] justify-center items-center mb-[1rem]">
          <h2 className="text-center font-bison text-[3rem] text-[#231f20] pb-[1rem] ">
            NOS ANIMATIONS
          </h2>
          <p className=" text-[#231f20] font-rubikMedium">
            Plusieurs animations viendront rythmer l&apos;événement. La Block
            Party promet une immersion totale dans la culture Hip-Hop dans un
            cadre authentique !
          </p>
          <Link
            className="text-white w-[12rem] text-[1.5rem] font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]"
            href="/nos-animations"
          >
            Infos & Inscription
          </Link>
          <div className="h-[5rem] w-[90%] -mt-[2.5rem] -z-10 md:h-[15rem]">
            <Image
              className=" object-cover w-full h-full rounded-1rem"
              src="/images/thibaut-burckel-emSBEruFpH4-unsplash.jpg"
              width={2000}
              height={1000}
              alt="Fresque logo"
            />
          </div>
        </div>
        <div className="flex-1 px-[0.5rem] sm:px-0 flex flex-col gap-[1rem] justify-center items-center mb-[1rem]">
          <h2 className=" text-center font-bison text-[3rem] text-[#231f20] pb-[1rem]">
            NOS STANDS & EXPOS
          </h2>
          <p className=" text-[#231f20] font-rubikMedium">
            Plusieurs stands seront installés au cœur du festival. Les talents
            locaux dans les domaines de la mode, la danse, le graffiti ou encore
            le sport qui seront disponible tout au long de la journée.
          </p>
          <Link
            className="text-white w-[12rem] text-[1.5rem] font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]"
            href="/stand-expos"
          >
            Voir les stands
          </Link>
          <div className="h-[5rem] w-[90%] -mt-[2.5rem] -z-10 md:h-[15rem] ">
            <Image
              className=" object-cover w-full h-full rounded-1rem"
              src="/images/jon-tyson-U3FPDpXQjCY-unsplash.jpg"
              width={2000}
              height={1000}
              alt="Fresque logo"
            />
          </div>
        </div>
      </section>
      <a
        href="/images/MONO_BLANC.png"
        download={true}
        className="text-[1rem] font-rubikMedium text-[#231f20] underline hover:text-[#fa798f] transition-all duration-200 ease-in-out mt-[2rem]"
      >
        Télécharger la plaquette d&apos;informations
      </a>
    </div>
  );
}
