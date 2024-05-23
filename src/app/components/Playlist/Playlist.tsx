import Link from "next/link";
import RevealEffect from "../RevealEffect/RevealEffect";

export default function Playlist() {
  return (
    <div className="">
      <div className="p-[1rem] text-center bg-gradient-to-r from-[#a3dabb] to-[#6bb68b]">
        <Link
          href="/contactez-nous"
          download={true}
          className="text-[1rem] font-rubikMedium text-[#FFFFFF] underline hover:text-[#231f20] transition-all duration-200 ease-in-out mt-[2rem]"
        >
          Vous souhaitez devenir bénévole ? Cliquez ici !
        </Link>
      </div>
      <RevealEffect>
        <section className="py-[2rem] w-[100%] mx-auto sm:px-[2rem] lg:px-[5rem] gradient-bg flex flex-col justify-center items-center text-center gap-[1rem]">
          {/* <h2 className=" text-center font-bison text-[3rem] text-[#fff]">
          BLOCKPARTY PLAYLIST
        </h2> */}
          <p className=" text-white font-rubikMedium uppercase">
            Fais toi une idée et vas écouter notre playlist disponible sur
            toutes les plateformes de streaming !
          </p>
          <Link
            className="text-white w-[12rem] text-[1.5rem] font-bison py-[0.3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]"
            href="https://bit.ly/m/Playlist-Block-Party"
            target="_blank"
          >
            PLAYLIST
          </Link>
        </section>
      </RevealEffect>
    </div>
  );
}
