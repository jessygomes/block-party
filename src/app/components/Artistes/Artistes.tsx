import Image from "next/image";
import Link from "next/link";

export default function Artistes() {
  const artistes = [
    {
      id: 1,
      slug: "rad-cartier",
      name: "RAD CARTIER",
      image: "/images/rad_12.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/@radcartier7267",
      clip: "8xh3WYZz8yM",
      instagram: "https://www.instagram.com/rad.cartier?igsh=dmQ1d3locDF6Mmdz",
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
      slug: "partymore",
      name: "PARTYMORE",
      image: "/images/taylor-NeTf7NGXrtc-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/@Partymore",
      clip: "9B7G6TglS18",
      instagram:
        "https://www.instagram.com/jesuispartymore?igsh=MWdlNmF3c3Fpc3c2MQ==",
      stream: "https://www.spotify.tv/",
      link: "/artistes/partymore",
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
      slug: "soma-exe",
      name: "SOMA EXE",
      image: "/images/curtis-potvin-XBqp-UxhCVs-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/@Somaexe",
      clip: "sVkWR44VCb0",
      instagram: "https://www.instagram.com/soma_exe?igsh=MTVvMGQ0NDl0OGFpdg==",
      stream: "https://www.spotify.tv/",
      link: "/artistes/soma-exe",
    },
    {
      id: 8,
      slug: "anagramms",
      name: "ANAGRAMMS",
      image: "/images/nate-johnston-mpLbR8NdVs8-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/channel/UCDQ0V1t3hFle1t5RckM8NWA",
      clip: "Q_bmMOKdgvM",
      instagram:
        "https://www.instagram.com/anagramms?igsh=MTRmeWZ4c2dpYmRjYw==",
      stream: "https://www.spotify.tv/",
      link: "/artistes/anagramms",
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
                  className=" object-cover w-full h-full"
                  src={artiste.image}
                  width={2000}
                  height={1000}
                  alt="Fresque logo"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <p className="text-white font-rubikBold">En savoir plus</p>
                </div>
                <button className="absolute w-full bottom-0 text-[1.2rem] sm:text-[1.5rem] rounded-1remartiste p-[1rem] text-center mx-auto text-white font-rubikBold">
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
