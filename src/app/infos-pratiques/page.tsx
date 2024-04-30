import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Infos Pratique | BlockParty Festival",
  description: "Festival de musique",
};

export default function InfosPratque() {
  // return (
  //   <div>
  //     <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
  //       <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
  //         INFOS PRATIQUES
  //       </h1>
  //       <Image
  //         className="absolute w-full h-auto mx-auto lg:w-full lg:h-auto opacity-30"
  //         src="/images/FRESQUE_LOGO.png"
  //         width={1000}
  //         height={1000}
  //         alt="Fresque logo"
  //       />
  //     </div>
  //     <div className="bg-[#231f20] h-[3rem] px-[2rem]"></div>
  //     <section className="mt-[2rem] flex gap-[2rem] sm:gap-[2rem] px-[1rem] flex-wrap max-w-[50rem] mx-auto">
  //       <div className="flex flex-wrap justify-center sm:justify-normal gap-[1.5rem] sm:gap-[2rem] w-full">
  //         <div className="sm:flex-1 font-rubikLight text-center sm:text-left">
  //           <h2 className="font-bison text-[2rem]">
  //             Horaires le 22 juin 2024 :
  //           </h2>
  //           <p>
  //             Ouverture du festival :{" "}
  //             <span className=" font-rubikMedium">14h00</span>{" "}
  //           </p>
  //           <p>
  //             Fermeture du festival :{" "}
  //             <span className=" font-rubikMedium">1h00</span>{" "}
  //           </p>
  //           <p className="pt-[1rem]">
  //             Parking : <span className=" font-rubikMedium">Adresse</span>{" "}
  //           </p>
  //           <p className="">
  //             Transport : <span className=" font-rubikMedium">Adresse</span>
  //           </p>
  //           <p className="">Parking à vélo</p>
  //           <p className="pt-[1rem] mb-3 font-rubikMedium">
  //             Toilette et point d&apos;eau sur place.
  //           </p>
  //           <a
  //             href="/images/MONO_BLANC.png"
  //             download={true}
  //             className="text-[1rem] font-rubikMedium text-[#fa798f] underline hover:text-[#6bb68b] transition-all duration-200 ease-in-out mt-[2rem]"
  //           >
  //             Télécharger la plaquette d&apos;informations
  //           </a>
  //         </div>
  //         <div className="sm:flex-1 font-rubikLight text-center sm:text-left">
  //           <h2 className="font-bison text-[2rem]">Tarifs :</h2>
  //           <p>
  //             Moins de 15 ans :{" "}
  //             <span className=" font-rubikMedium">Gratuit</span>
  //           </p>
  //           <p>
  //             Tarif réduit : <span className=" font-rubikMedium">10€</span>
  //           </p>
  //           <p>
  //             Prévente ou sur place avant 18h :{" "}
  //             <span className=" font-rubikMedium">14€</span>{" "}
  //           </p>
  //           <p>
  //             Sur place après 18h :{" "}
  //             <span className=" font-rubikMedium">18€</span>
  //           </p>
  //           <p className="pt-[1rem] font-rubikMedium">
  //             Bar et restauration sur place
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col gap-[1rem] justify-start sm:gap-[1rem] h-full">
  //         <div className=" font-rubikLight text-center sm:text-left">
  //           <h2 className="font-bison text-[2rem] mb-3">Le Moule à Gaufre :</h2>
  //           <p className="text-justify font-rubikLight">
  //             Le site choisi pour accueillir le festival, le Moule à Gaufres,
  //             ancienne usine à tabac, représente désormais un lieu emblématique
  //             au cœur de l&apos;agglomération orléanaise. Passer ses portes,
  //             c&apos;est s&apos;immerger dans une expérience sans limite,
  //             suscitant la curiosité et encourageant la découverte.
  //           </p>
  //         </div>
  //         <div className="flex flex-col sm:flex-row gap-[1rem] h-full w-full">
  //           <div className="h-[30%] lg:w-[50%] lg:h-[30%]">
  //             <Image
  //               className="object-cover w-full h-full rounded-1rem"
  //               src="/images/image00002.jpg"
  //               width={2000}
  //               height={1000}
  //               alt="Photo du moule à gaufres"
  //             />
  //           </div>
  //           <div className="h-[35%] w-full lg:w-[50%] lg:h-[70%]">
  //             <Image
  //               className="object-cover w-full h-full rounded-1rem"
  //               src="/images/image00005.jpg"
  //               width={2000}
  //               height={1000}
  //               alt="Photo du moule à gaufres"
  //             />
  //           </div>
  //           <div className="h-[35%] w-full lg:w-[50%] lg:h-[70%]">
  //             <Image
  //               className="object-cover w-full h-full rounded-1rem"
  //               src="/images/image00003.jpg"
  //               width={2000}
  //               height={1000}
  //               alt="Photo du moule à gaufres"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex flex-wrap gap-[1rem] justify-center items-center mt-[2rem] mx-auto">
  //         <Link href="/">
  //           <p className="w-[12rem] text-[1.5rem] text-center text-white font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]">
  //             Retour à l&apos;accueil
  //           </p>
  //         </Link>
  //       </div>
  //     </section>
  //   </div>
  // );
}
