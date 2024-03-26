"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Artistes() {
  const artistes = [
    {
      id: 1,
      slug: "rad-cartier",
      name: "RAD CARTIER",
      image: "/images/rad_12.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/rad-cartier",
    },
    {
      id: 2,
      slug: "nihal",
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/nihal",
    },
    {
      id: 3,
      slug: "taylor",
      name: "ARTISTE NAME",
      image: "/images/taylor-NeTf7NGXrtc-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/taylor",
    },
    {
      id: 4,
      slug: "nguyen",
      name: "ARTISTE NAME",
      image: "/images/te-nguyen-Wt7XT1R6sjU-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/nguyen",
    },
    {
      id: 5,
      slug: "corey",
      name: "ARTISTE NAME",
      image: "/images/corey-young-1cNpSv61ZDo-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/corey",
    },
    {
      id: 6,
      slug: "kamil-feczko",
      name: "ARTISTE NAME",
      image: "/images/kamil-feczko-r1UCyK3dIfI-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/kamil-feczko",
    },
    {
      id: 7,
      slug: "curtis-potvin",
      name: "ARTISTE NAME",
      image: "/images/curtis-potvin-XBqp-UxhCVs-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/curtis-potvin",
    },
    {
      id: 8,
      slug: "nate-johnston",
      name: "ARTISTE NAME",
      image: "/images/nate-johnston-mpLbR8NdVs8-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/nate-johnston",
    },
    {
      id: 9,
      slug: "dj-wiloow",
      name: "DJ WILOOW",
      image: "/images/thomas-habr-X4e8n5ncOEs-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      clip: "https://www.youtube.com/watch?v=8xh3WYZz8yM",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/dj-wiloow",
    },
  ];

  return (
    <div className="">
      <section className="">
        <h2 className=" text-center font-bison text-[3rem] text-[#231f20]">
          Line-up & DJ
        </h2>
        <div className="mt-[2rem] flex gap-[0.5rem] flex-wrap justify-center max-w-[50rem] mx-auto">
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
