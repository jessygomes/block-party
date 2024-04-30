import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Partenaires | BlockParty Festival",
  description: "Les partenaires du festival BlocParty",
};

export default function NosPartenaires() {
  // return (
  //   <div>
  //     <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
  //       <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
  //         NOS PARTENAIRES
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
  //     <section className="mt-[2rem] flex gap-[0.5rem] lg:gap-[2rem] px-[1rem] flex-wrap justify-center items-center max-w-[50rem] mx-auto">
  //       <div className="flex-1 flex flex-col gap-[2rem] justify-center mb-4 lg:mb-0">
  //         <h2 className="font-bison text-[2rem]">Une aide précieuse</h2>
  //         <p className=" font-rubikLight text-justify">
  //           Nos précieux partenaires nous ont accompagnés dans cette aventure et
  //           ont grandement contribué à la création de la Block Party.
  //         </p>
  //       </div>
  //       <div className="flex flex-wrap gap-[2rem] w-full items-center justify-center">
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link
  //             href="https://www.facebook.com/gaufrier/?locale=fr_FR"
  //             target="_blank"
  //           >
  //             <Image
  //               className="object-cover h-[7rem] lg:h-auto w-auto"
  //               src="/images/partenaires/MAG_logo-couleur.png"
  //               width={1000}
  //               height={1000}
  //               alt="Logo du Moule à Gaufres"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link href="https://cnm.fr/" target="_blank">
  //             <Image
  //               className="object-cover h-[10rem] lg:h-auto w-auto"
  //               src="/images/partenaires/CNM-logo_standard_noir_partenaire.png"
  //               width={1000}
  //               height={1000}
  //               alt="Logo du Centre National de Musique"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link
  //             href="https://crijinfo.fr/sengager-monter-un-projet/infolab/"
  //             target="_blank"
  //           >
  //             <Image
  //               className="object-cover h-[5rem] lg:h-auto w-auto"
  //               src="/images/partenaires/infolab-noir.png"
  //               width={1000}
  //               height={1000}
  //               alt="Logo de l'Infolab"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link
  //             href="https://www.instagram.com/orlinside_/?hl=fr"
  //             target="_blank"
  //           >
  //             <Image
  //               className="object-cover h-[3rem] lg:h-auto w-auto"
  //               src="/images/partenaires/Unknown.png"
  //               width={1000}
  //               height={1000}
  //               alt="Logo de la boîte de production - Orlinside"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link href="https://paradeprod.fr/" target="_blank">
  //             <Image
  //               className="object-cover h-[3rem] lg:h-auto w-auto"
  //               src="/images/partenaires/parade.png"
  //               width={1000}
  //               height={1000}
  //               alt="Logo de Parade Prod"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link
  //             href="https://www.instagram.com/nextupmusicgroup/?hl=fr"
  //             target="_blank"
  //           >
  //             <Image
  //               className="object-cover h-[5rem] lg:h-auto w-auto"
  //               src="/images/partenaires/thumbnail_frf.png"
  //               width={1000}
  //               height={1000}
  //               alt="Logo de Next Music Group"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link href="https://www.lesaloonbb.com/" target="_blank">
  //             <Image
  //               className="object-cover h-[4rem] lg:h-auto w-auto"
  //               src="/images/partenaires/logo saloon_page-0001.jpg"
  //               width={1000}
  //               height={1000}
  //               alt="Logo du Saloon"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link
  //             href="https://www.linkedin.com/company/only-one-way/"
  //             target="_blank"
  //           >
  //             <Image
  //               className="object-contain h-[5rem] lg:h-[8rem] w-auto"
  //               src="/images/partenaires/only.jpg"
  //               width={1000}
  //               height={1000}
  //               alt="Logo Only One Way"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link href="https://www.inthegleam.com/" target="_blank">
  //             <Image
  //               className="object-contain h-[6rem] lg:h-[8rem] w-auto"
  //               src="/images/partenaires/LogoPNG_inTheGleam_Black.png"
  //               width={1000}
  //               height={1000}
  //               alt="Logo inTheGleam - Développeur Freelance"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link href="https://orleans.radiocampus.org/" target="_blank">
  //             <Image
  //               className="object-cover h-[6.5rem] lg:h-auto w-auto"
  //               src="/images/partenaires/Radio Campus Orleans noir.png"
  //               width={1000}
  //               height={1000}
  //               alt="Logo Radio Campus Orléans"
  //             />
  //           </Link>
  //         </div>
  //         <div className="w-full h-[8rem] sm:w-[30%] sm:h-[10rem] flex justify-center items-center p-2 rounded-lg shadow-2xl hover:shadow-none transition-all ease-in-out">
  //           <Link href="https://helium-4.com/" target="_blank">
  //             <Image
  //               className="object-contain h-[6rem] lg:h-[8rem] w-auto"
  //               src="/images/partenaires/Logo Helium 4 - 2022 noir.png"
  //               width={300}
  //               height={300}
  //               alt="Logo Hélium"
  //             />
  //           </Link>
  //         </div>
  //       </div>
  //     </section>
  //     <div className="flex flex-wrap gap-[1rem] justify-center items-center mt-[2rem]">
  //       <Link href="/">
  //         <p className="w-[12rem] text-[1.5rem] text-center text-white font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]">
  //           Retour à l&apos;accueil
  //         </p>
  //       </Link>
  //     </div>
  //   </div>
  // );
}
