import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  const artistes = [
    {
      id: 1,
      slug: "obafemi",
      name: "ARTISTE NAME",
      image: "/images/obafemi-moyosade-zndslHAXhAw-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/obafemi",
    },
    {
      id: 2,
      slug: "nihal",
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      youtube: "https://www.youtube.com/watch?v=9bZkp7q19f0",
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
      instagram: "https://www.instagram.com/",
      stream: "https://www.spotify.tv/",
      link: "/artistes/dj-wiloow",
    },
  ];

  const artist = artistes.find(
    (artiste) => String(artiste.slug) === String(params.slug)
  );
  console.log(artist);

  return (
    <div>
      C&apos;est la page d&apos;artistes : {params.slug}
      <div>
        {artist ? (
          <section>
            <h1>{artist.name}</h1>
            {/* <img src={artist.image} alt={artist.name} /> */}
            <p>{artist.description}</p>
            <a href={artist.youtube}>Youtube</a>
            <a href={artist.instagram}>Instagram</a>
            <a href={artist.stream}>Spotify</a>
          </section>
        ) : (
          <p>Artiste non trouvé</p>
        )}
      </div>
    </div>
  );
}
