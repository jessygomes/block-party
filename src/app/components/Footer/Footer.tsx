import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <div className="">
      <section className="py-[2rem] px-[2rem] lg:px-[5rem] lg:py-[5rem] bg-[#231f20] flex flex-col lg:flex-row justify-center items-center text-center gap-[2rem] lg:gap-[8rem] text-white">
        <div className="w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem]">
          <Image
            className="w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem] object-contain"
            src="/images/logo/LOGO_BLANC.png"
            width={300}
            height={300}
            alt="Fresque logo"
          />
        </div>

        <div>
          <h2 className=" font-bison text-[1.5rem] mb-[1rem]">
            Suivez-Nous sur Instagram
          </h2>
          <div className="flex flex-wrap flex-row justify-center items-center gap-[1rem]">
            <Link href="https://www.instagram.com/blockparty.festival?igsh=d3cwbmxhODBpOG04">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="hover:text-[#a3dabb] transition-all duration-200 ease-in-out"
              />
            </Link>
            {/* <Link href="https://www.instagram.com/blockpartyorleans/">
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className="hover:text-[#a3dabb] transition-all duration-200 ease-in-out"
              />
            </Link>
            <Link href="https://www.instagram.com/blockpartyorleans/">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="2x"
                className="hover:text-[#a3dabb] transition-all duration-200 ease-in-out"
              />
            </Link>
            <Link href="https://www.instagram.com/blockpartyorleans/">
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className="hover:text-[#a3dabb] transition-all duration-200 ease-in-out"
              />
            </Link> */}
          </div>
        </div>

        <div>
          <h2 className=" font-bison text-[1.5rem] mb-[1rem]  block lg:hidden">
            Liens utiles
          </h2>
          <div className="flex flex-col gap-[1rem]">
            <Link href="/nos-animations">
              <h3 className="font-rubikLight text-[1rem] hover:text-[#a3dabb] transition-all duration-200 ease-in-out">
                Nos Animations
              </h3>
            </Link>
            <Link href="/stand-expos">
              <h3 className="font-rubikLight text-[1rem] hover:text-[#a3dabb] transition-all duration-200 ease-in-out">
                Stands & Expositions
              </h3>
            </Link>
            <Link href="/infos-pratiques">
              <h3 className="font-rubikLight text-[1rem] hover:text-[#a3dabb] transition-all duration-200 ease-in-out">
                Infos Pratique
              </h3>
            </Link>
            <Link href="/qui-sommes-nous">
              <h3 className="font-rubikLight text-[1rem] hover:text-[#a3dabb] transition-all duration-200 ease-in-out">
                Qui sommes-nous ?
              </h3>
            </Link>
            <Link href="/contactez-nous">
              <h3 className="font-rubikLight text-[1rem] hover:text-[#a3dabb] transition-all duration-200 ease-in-out">
                Contactez-nous
              </h3>
            </Link>
          </div>
        </div>

        <div className="my-[1rem] lg:my-[0rem]">
          <div className="flex flex-col gap-[1rem]">
            <Link href="/mentions-legales">
              <h3 className=" font-rubikLight text-[1rem] hover:text-[#a3dabb] transition-all duration-200 ease-in-out">
                Mentions Légales
              </h3>
            </Link>
            <Link href="/politique-de-confidentialite">
              <h3 className="font-rubikLight text-[1rem] hover:text-[#a3dabb] transition-all duration-200 ease-in-out">
                Politique de confidentitalité
              </h3>
            </Link>
            <h3 className=" font-rubikLight text-[1rem] ">
              Website by :{" "}
              <Link
                href="https://inthegleam.com/"
                className="hover:text-[#a3dabb] transition-all duration-200 ease-in-out"
              >
                InTheGleam
              </Link>
            </h3>
          </div>
        </div>
      </section>
      <p className="text-[0.8rem] p-[1rem] font-rubikLight text-white text-center bg-[#231f20]">
        Copyright © 2024 - BlockParty, Orléans - All Rights Reserved
      </p>
    </div>
  );
}
