"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";
// import { useState } from "react";

export default function Artistes() {
  const artistes = [
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
    {
      name: "ARTISTE NAME",
      image: "/images/nihal-demirci-erenay-jKtQTsK0aFA-unsplash.jpg",
      link: "/",
    },
  ];

  // const [dynamicHeight, setDynamicHeight] = useState(null);
  // const [translateX, setTranslateX] = useState(0);

  return (
    <div className="">
      <section className="">
        <h2 className=" text-center font-bison text-[3rem]">Line-up & DJ</h2>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          // mousewheel={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[FreeMode, Mousewheel]}
          className=" mySwiper mt-[3rem] flex gap-[2rem] p-[2rem]"
        >
          {artistes.map((artiste) => (
            <Link href={artiste.link} key={artiste.name}>
              <SwiperSlide className="">
                <article className="w-[15rem] h-[20rem] rounded-1rem relative">
                  <Image
                    className=" object-cover w-full h-full"
                    src={artiste.image}
                    width={2000}
                    height={1000}
                    alt="Fresque logo"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-1rem flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <p className="text-white font-rubikBold">En savoir plus</p>
                  </div>
                  <button className="absolute w-full bottom-0 text-[1.5rem] gradient-bg rounded-1remartiste p-[1rem] text-center text-white font-rubikBold">
                    {artiste.name}
                  </button>
                </article>
              </SwiperSlide>
            </Link>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
