"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Playlist() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    rootMargin: "10% 0px",
  });

  return (
    <div className="">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="py-[2rem] w-[95%] lg:w-[70%] mx-auto rounded-1rem sm:px-[2rem] lg:px-[5rem] gradient-bg flex flex-col justify-center items-center text-center gap-[1rem]"
      >
        {/* <h2 className=" text-center font-bison text-[3rem] text-[#fff]">
          BLOCKPARTY PLAYLIST
        </h2> */}
        <p className=" text-white font-rubikMedium uppercase">
          Fais toi une idée et vas écouter notre playlist disponible sur toutes
          les plateformes de streaming !
        </p>
        <Link
          className="w-[12rem] text-[1.5rem] font-bison py-[0.3rem] bg-[#a3dabb] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] hover:bg-[#fa798f] transition-all duration-200 ease-in-out text-white tracking-[0.3rem]"
          href="https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd?si=8b1b1b1b1b1b1b1b"
          target="_blank"
        >
          PLAYLIST
        </Link>
      </motion.section>
    </div>
  );
}
