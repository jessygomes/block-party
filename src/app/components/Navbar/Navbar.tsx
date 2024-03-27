"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

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

          <Link href="/">
            <Image
              className={styles.headerLogo}
              src="/images/MONO_BLANC.png"
              width={300}
              height={300}
              alt="Fresque logo"
              onClick={() => setNavActive(!navActive)}
            />{" "}
          </Link>

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
