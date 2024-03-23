import React from "react";
import styles from "./Homepage.module.css";
// import NextVideo from "next-video";
import shadergradient3 from "../../../../videos/shadergradient3.webm";
import { BackgroundGradientAnimation } from "../UI/background-gradient-animation";
import Image from "next/image";
import Link from "next/link";
import Artistes from "../Artistes/Artistes";
import Playlist from "../Playlist/Playlist";

export default function Homepage() {
  return (
    <div className="w-full overflow-hidden">
      <section className={styles.homepageContainer}>
        <div className="">
          <BackgroundGradientAnimation>
            <div className="absolute z-10 mt-[2rem] w-full max-h-[100vh] flex flex-col justify-center items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white gap-[0.5rem]">
              <Image
                className={styles.logo}
                src="/images/LOGO_BLANC.png"
                width={300}
                height={300}
                alt="Fresque logo"
              />
              <p className={styles.date}>22 JUIN 2024</p>
              <Link className={styles.btn} href="/">
                PREND TA PLACE !
              </Link>
            </div>
          </BackgroundGradientAnimation>
          <div className={styles.description}>
            <h1 className={styles.titlepage}>BLOCKPARTY - PREMIER BATTEMENT</h1>
            {/* <p className={styles.text}>
              Blockparty est un festival qui se déroule à 5min Orléans ! <br />{" "}
              Petit paragraphe d&apos;introduction pour faire savoir ce
              qu&apos;est Block Party, l&apos;endroit, les horaires, le lieu
              etc. + si nécessaire
            </p> */}
            <Link href="/" className={styles.download}>
              Télécharger la plaquette d&apos;informations
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.artistes}>
        <Artistes />
      </div>
      <div className={styles.artistes}>
        <Playlist />
      </div>
    </div>
  );
}
