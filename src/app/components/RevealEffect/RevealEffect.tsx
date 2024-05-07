"use client";
import React, { useState, useEffect } from "react";
// import "../App.css";

const RevealEffect = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".reveal-element");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(elementTop < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`reveal-element ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
};

export default RevealEffect;
