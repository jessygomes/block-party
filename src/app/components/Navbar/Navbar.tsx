"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const itemNavbar = [
  {
    text: "Qui sommes-nous ?",
    link: "/qui-sommes-nous",
  },
  {
    text: "Nos Partenaires",
    link: "/nos-partenaires",
  },
  {
    text: "Infos Pratiques",
    link: "/infos-pratiques",
  },
  {
    text: "Contactez-nous",
    link: "/contactez-nous",
  },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //! Animation logo
  const scrollYLogo = useMotionValue(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const rotate = useTransform(scrollYLogo, [0, 2000], [0, 360]);

  useEffect(() => {
    const handleScroll = () => {
      scrollYLogo.set(window.scrollY);

      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, scrollYLogo]);

  const pathname = usePathname();

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <div
          className={styles.nav__menuBar}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className={`${navActive ? styles.active : ""} ${
            styles.nav__menuList
          }`}
        >
          {itemNavbar.slice(0, itemNavbar.length / 2).map((item, index) => {
            const active =
              item.link === "/"
                ? pathname === "/"
                : pathname.startsWith(item.link);
            return (
              <div
                key={index}
                onClick={() => {
                  setNavActive(false);
                }}
              >
                <Link
                  href={item.link}
                  className={`${styles.nav__item} ${
                    active ? styles.activeLink : ""
                  }`}
                >
                  {item.text}
                </Link>
              </div>
            );
          })}

          <motion.div style={{ rotate }}>
            <Link href="/">
              <Image
                className={styles.headerLogo}
                src="/images/logo/MONO_BLANC.png"
                width={300}
                height={300}
                alt="Fresque logo"
                onClick={() => setNavActive(!navActive)}
              />{" "}
            </Link>
          </motion.div>

          {itemNavbar.slice(itemNavbar.length / 2).map((item, index) => {
            const active =
              item.link === "/"
                ? pathname === "/"
                : pathname.startsWith(item.link);
            return (
              <div
                key={index}
                onClick={() => {
                  setNavActive(false);
                }}
              >
                <Link
                  href={item.link}
                  className={`${styles.nav__item} ${
                    active ? styles.activeLink : ""
                  }`}
                >
                  {item.text}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
