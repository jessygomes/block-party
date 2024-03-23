"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
// import { useState } from "react";

export default function Artistes() {
  const artistes = [
    {
      name: "ARTISTE NAME",
      image: "/images/obafemi-moyosade-zndslHAXhAw-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/taylor-NeTf7NGXrtc-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/te-nguyen-Wt7XT1R6sjU-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/corey-young-1cNpSv61ZDo-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/kamil-feczko-r1UCyK3dIfI-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/curtis-potvin-XBqp-UxhCVs-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nate-johnston-mpLbR8NdVs8-unsplash.jpg",
      link: "/",
    },
    {
      name: "DJ WILOOW",
      image: "/images/thomas-habr-X4e8n5ncOEs-unsplash.jpg",
      link: "/",
    },
  ];

  // const [dynamicHeight, setDynamicHeight] = useState(null);
  // const [translateX, setTranslateX] = useState(0);

  return (
    <div className="">
      <section className="">
        <h2 className=" text-center font-bison text-[3rem] text-[#231f20]">
          Line-up & DJ
        </h2>
        <div className="mt-[2rem] flex gap-[0.5rem] px-[0.1rem] md:px-[2rem] lg:px-[25rem] flex-wrap justify-center">
          {artistes.map((artiste) => (
            <Link href={artiste.link} key={artiste.name}>
              <article className="w-[10.5rem] h-[15rem] sm:w-[15rem] sm:h-[20rem] relative">
                <Image
                  className=" object-cover w-full h-full rounded-1rem"
                  src={artiste.image}
                  width={2000}
                  height={1000}
                  alt="Fresque logo"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-1rem flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <p className="text-white font-rubikBold">En savoir plus</p>
                </div>
                <button className="absolute w-full bottom-0 text-[1.5rem] rounded-1remartiste p-[1rem] text-center text-white font-rubikBold">
                  {artiste.name}
                </button>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
