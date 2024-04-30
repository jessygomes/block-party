import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import type { Metadata } from "next";
import artistes from "@/data/artistes";

export const metadata: Metadata = {
  title: "Line Up | BlockParty Festival",
  description: "Les artistes du festival BlocParty",
};

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  const artist = artistes.find(
    (artiste) => String(artiste.slug) === String(params.slug)
  );

  const artistWithParagraphs = {
    ...artist,
    descriptionParagraphs: artist?.description
      .split("\n\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>),
  };

  // return (
  //   <div>
  //     <div className="h-[10rem] gradient-bg flex justify-center items-end">
  //       <h1 className="text-white pt-[2rem]  pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
  //         {artist?.name ?? "Default Artist Name"}
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
  //     <div className="mt-[2rem] px-[1rem] lg:w-[70%] mx-auto lg:px-[8rem] ">
  //       {artist ? (
  //         <section className="flex flex-col justify-center items-center gap-[1rem] sm:gap-[2rem]">
  //           <div className="flex w-[80%] h-[80%] mx-auto sm:w-[60%] lg:w-[50%] mb-4 sm:mb-0 ">
  //             <Image
  //               className=" object-cover w-full h-full shadow-3xs rounded-1rem bw-on-hover"
  //               src={artist.image}
  //               width={2000}
  //               height={1000}
  //               alt={artist.name}
  //             />
  //             <Image
  //               className="hidden lg:block object-cover ml-[-50%] z-[-1] opacity-60 h-[15rem] my-auto rounded-1rem filter blur-[10px] contrast-150"
  //               src={artist.image}
  //               width={2000}
  //               height={1000}
  //               alt={artist.name}
  //             />
  //             <Image
  //               className="hidden lg:block object-cover ml-[-200%] z-[-1] opacity-60 w-[10rem] my-auto h-full  rounded-1rem filter blur-[10px] contrast-150"
  //               src={artist.image}
  //               width={2000}
  //               height={1000}
  //               alt={artist.name}
  //             />
  //           </div>
  //           {artist.image2 ? (
  //             <Image
  //               className=" object-cover h-[8rem] w-auto"
  //               src={artist.image2}
  //               width={1000}
  //               height={1000}
  //               alt={artist.image2}
  //             />
  //           ) : null}
  //           <div className="flex flex-1 flex-col gap-[1rem] font-rubikLight text-justify sm:px-[3rem] lg:px-0">
  //             {artistWithParagraphs.descriptionParagraphs}
  //           </div>
  //           <div className="flex flex-row gap-[1rem] text-[#a3dabb]">
  //             <Link
  //               target="_blank"
  //               href={artist.instagram}
  //               className="flex justify-center items-center"
  //             >
  //               <FontAwesomeIcon
  //                 icon={faInstagram}
  //                 size="2x"
  //                 className="hover:text-[#fa798f] transition-all duration-200 ease-in-out"
  //               />
  //             </Link>
  //             <Link
  //               className="flex justify-center items-center"
  //               target="_blank"
  //               href={artist.youtube}
  //             >
  //               <FontAwesomeIcon
  //                 icon={faYoutube}
  //                 size="2x"
  //                 className="hover:text-[#fa798f] transition-all duration-200 ease-in-out"
  //               />
  //             </Link>
  //             <Link
  //               className="flex justify-center items-center"
  //               target="_blank"
  //               href={artist.stream}
  //             >
  //               <FontAwesomeIcon
  //                 icon={faMusic as any}
  //                 size="2x"
  //                 className="hover:text-[#fa798f] transition-all duration-200 ease-in-out"
  //               />
  //             </Link>
  //           </div>
  //         </section>
  //       ) : (
  //         <p>Artiste non trouvé</p>
  //       )}
  //       <div className="relative pb-[3rem] pt-[1rem] sm:mt-[1rem]">
  //         <iframe
  //           className="w-[100%] h-[15rem] sm:w-[90%] sm:h-[25rem] lg:w-[100%] mx-auto rounded-1rem"
  //           width="560"
  //           height="315"
  //           src={`https://www.youtube.com/embed/${artist?.clip}`}
  //           title="YouTube video player"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
  //           allowFullScreen
  //         ></iframe>
  //       </div>
  //       <h2 className="font-bison text-center uppercase text-[2rem] mb-3">
  //         Line Up
  //       </h2>
  //       <div className="flex flex-wrap gap-[1rem] justify-center items-center">
  //         {artistes.map((artiste) => (
  //           <Link href={artiste.link} key={artiste.id}>
  //             <p className=" font-rubikMedium hover:text-[#fa798f] hover:font-rubikBold transition-all ease-in-out">
  //               {artiste.name}
  //             </p>
  //           </Link>
  //         ))}
  //       </div>
  //       <div className="flex flex-wrap gap-[1rem] justify-center items-center mt-[2rem]">
  //         <Link href="/">
  //           <p className="w-[12rem] text-[1.5rem] text-center text-white font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]">
  //             Retour à l&apos;accueil
  //           </p>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
}
