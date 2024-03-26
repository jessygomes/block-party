import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Footer from "@/app/Footer/Footer";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
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

  const artist = artistes.find(
    (artiste) => String(artiste.slug) === String(params.slug)
  );

  return (
    <div>
      <div className="h-[10rem] gradient-bg flex justify-center items-end">
        <h1 className="text-white pt-[2rem]  pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          {artist?.name ?? "Default Artist Name"}
        </h1>
      </div>
      <div className="mt-[2rem] px-[1rem] lg:w-[70%] mx-auto lg:px-[10rem] ">
        {artist ? (
          <section className="flex flex-col justify-center items-center gap-[1rem] sm:gap-[2rem]">
            <div className="w-[80%] h-[80%] mx-auto sm:w-[50%] lg:w-[40%] ">
              <Image
                className=" object-cover w-full h-full rounded-1rem bw-on-hover"
                src={artist.image}
                width={2000}
                height={1000}
                alt={artist.name}
              />
            </div>
            <div className="flex flex-row gap-[1rem] text-[#a3dabb]">
              <Link
                target="_blank"
                href="https://www.instagram.com/blockpartyorleans/"
                className="flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="hover:text-[#fa798f] transition-all duration-200 ease-in-out"
                />
              </Link>
              <Link
                className="flex justify-center items-center"
                target="_blank"
                href="https://www.instagram.com/blockpartyorleans/"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  className="hover:text-[#fa798f] transition-all duration-200 ease-in-out"
                />
              </Link>
              <Link
                className="flex justify-center items-center"
                target="_blank"
                href="https://www.instagram.com/blockpartyorleans/"
              >
                <FontAwesomeIcon
                  icon={faSpotify}
                  size="2x"
                  className="hover:text-[#fa798f] transition-all duration-200 ease-in-out"
                />
              </Link>
            </div>
            <p className=" font-rubikLight text-justify sm:px-[3rem] lg:px-0">
              Une description de l&apos;artiste genre d&apos;où il vient son
              numéro de sécurité sociale et de carte bleu par exemple, puis une
              description de son univers musical donc ses influences
              artistiques, son style de musique, ses inspirations, les prods
              qu&apos;il utilise et d&apos;autres fait intéressant sur sa
              carrière. Une description de l&apos;artiste genre d&apos;où il
              vient son numéro de sécurité sociale et de carte bleu par exemple,
              puis une description de son univers musical donc ses influences
              artistiques, son style de musique, ses inspirations, les prods
              qu&apos;il utilise et d&apos;autres fait intéressant sur sa
              carrière. <br /> <br />
              Une description de l&apos;artiste genre d&apos;où il vient son
              numéro de sécurité sociale et de carte bleu par exemple, puis une
              description de son univers musical donc ses influences
              artistiques, son style de musique, ses inspirations, les prods
              qu&apos;il utilise et d&apos;autres fait intéressant sur sa
              carrière.
              {artist.description}
            </p>
          </section>
        ) : (
          <p>Artiste non trouvé</p>
        )}
        <div className="relative pb-[3rem] pt-[1rem] sm:mt-[1rem]">
          <iframe
            className="w-[100%] h-[15rem] sm:w-[90%] sm:h-[30rem] lg:w-[70%] mx-auto rounded-1rem"
            width="560"
            height="315"
            src={`${artist?.clip}?modestbranding=1&rel=0&showinfo=0&controls=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
