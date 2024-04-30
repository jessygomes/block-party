import Image from "next/image";
import Link from "next/link";
import artistes from "../../../data/artistes";

export default function Artistes() {
  // return (
  //   <div className="">
  //     <section className="">
  //       <h2 className=" text-center font-bison text-[3rem] text-[#231f20]">
  //         Line-up & DJ
  //       </h2>
  //       <div className="mt-[2rem] flex gap-[0.5rem] flex-wrap justify-center max-w-[50rem] mx-auto">
  //         {artistes.map((artiste) => (
  //           <Link href={artiste.link} key={artiste.name}>
  //             <article className="w-[10.5rem] h-[15rem] sm:w-[11.5rem] sm:h-[15rem] relative rounded-1rem">
  //               <Image
  //                 className=" object-cover w-full h-full rounded-1rem"
  //                 src={artiste.image}
  //                 width={2000}
  //                 height={1000}
  //                 alt={artiste.name}
  //               />
  //               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-1rem">
  //                 <p className="text-white font-rubikBold">En savoir plus</p>
  //               </div>
  //               <p className="absolute w-full bottom-0 text-[1.2rem] sm:text-[1.5rem] rounded-1remartiste p-[0.5rem] text-center mx-auto text-white font-rubikBold">
  //                 {artiste.name}
  //               </p>
  //             </article>
  //           </Link>
  //         ))}
  //       </div>
  //     </section>
  //   </div>
  // );
}
