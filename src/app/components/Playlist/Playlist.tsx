import Link from "next/link";

export default function Playlist() {
  return (
    <div className="">
      <section className="py-[2rem] w-[100%] mx-auto sm:px-[2rem] lg:px-[5rem] gradient-bg flex flex-col justify-center items-center text-center gap-[1rem]">
        {/* <h2 className=" text-center font-bison text-[3rem] text-[#fff]">
          BLOCKPARTY PLAYLIST
        </h2> */}
        <p className=" text-white font-rubikMedium uppercase">
          Fais toi une idée et vas écouter notre playlist disponible sur toutes
          les plateformes de streaming !
        </p>
        <Link
          className="text-white w-[12rem] text-[1.5rem] font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]"
          href="https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd?si=8b1b1b1b1b1b1b1b"
          target="_blank"
        >
          PLAYLIST
        </Link>
      </section>
    </div>
  );
}
