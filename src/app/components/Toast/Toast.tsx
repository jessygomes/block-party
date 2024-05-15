"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Toast() {
  const asideRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const pathname =
        typeof window !== "undefined" ? window.location.pathname : "";
      if (pathname === "/" && window.scrollY <= 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return isVisible ? (
    <Link
      href="https://billetterie.lastrolabe.org/agenda/57-block-party-premier-battement?session=57"
      target="_blank"
    >
      <aside
        ref={asideRef}
        className={`fixed cursor-pointer flex gap-1 items-center justify-center flex-col bottom-6 right-2 sm:bottom-5 sm:right-5 w-[8rem] h-[2rem] lg:w-[8rem] lg:h-[3rem] bg-gradient-to-r from-[#a3dabb] to-[#6bb68b] rounded-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:to-[#f8637c] hover:ring-2 hover:ring-[#ff5773]  ${
          isVisible ? "slide-in" : "slide-out"
        }`}
      >
        <p className="text-white text-[1rem] sm:text-[1.3rem] text-center font-bison">
          Prends ta place
        </p>
      </aside>
    </Link>
  ) : null;
}
