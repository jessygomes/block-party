import { BackgroundGradientAnimation } from "../UI/background-gradient-animation";
import Image from "next/image";
import Link from "next/link";
import Artistes from "../Artistes/Artistes";
import Playlist from "../Playlist/Playlist";
import AnimationEtStand from "../AnimationEtStand/AnimationEtStand";
import CountTimer from "../CountTimer/CountTimer";

export default function Homepage() {
  return (
    <div className="w-full overflow-hidden">
      <section className="">
        <div className="">
          <BackgroundGradientAnimation>
            <div className="absolute z-10 mt-[2rem] w-full max-h-[100vh] flex flex-col justify-center items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white gap-[0.5rem]">
              <Image
                className="w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem]"
                src="/images/logo/LOGO_BLANC.png"
                width={300}
                height={300}
                alt="Fresque logo"
              />
              <p className="text-[2rem] font-bison w-[12rem] tracking-[0.31rem] font-bold sm:text-[2.5rem] sm:w-[15rem] sm:tracking-[0.39rem]">
                22 JUIN 2024
              </p>
              <Link
                className="w-[12rem] text-[1.5rem] font-bison py-[0.3rem] bg-[#a3dabb] rounded-1rem sm:w-[15rem] sm:text-[2rem] sm:py-[0.5rem] hover:bg-[#fa798f] transition-all duration-200 ease-in-out"
                href="https://www.lastrolabe.org/agenda/"
                target="_blank"
              >
                PREND TA PLACE !
              </Link>
            </div>
          </BackgroundGradientAnimation>
          <div className="py-[2rem] flex flex-col justify-center items-center text-center bg-[#231f20] text-white">
            <h1 className="text-[1.2rem] sm:text-[1.8rem] font-rubikBold">
              BLOCKPARTY - PREMIER BATTEMENT
            </h1>
            <CountTimer />
          </div>
        </div>
      </section>
      <div className="mt-[2rem]">
        <Artistes />
      </div>
      <div className="mt-[3.5rem]">
        <Playlist />
      </div>
      <div className="mt-[2rem]">
        <AnimationEtStand />
      </div>
    </div>
  );
}
