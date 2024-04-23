import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import type { Metadata } from "next";
import Link from "next/link";
import stands from "../../data/stands";

export const metadata: Metadata = {
  title: "Stand & Expositions | BlockParty Festival",
  description: "Les stand et les expositions du festival BlocParty",
};

export default function StandExpos() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          STANDS & EXPOSITIONS
        </h1>
        <Image
          className="absolute w-full h-auto mx-auto lg:w-full lg:h-auto opacity-30"
          src="/images/FRESQUE_LOGO.png"
          width={1000}
          height={1000}
          alt="Fresque logo"
        />
      </div>
      <div className="bg-[#231f20] h-[3rem] px-[2rem]">
        {/* <h2 className="text-[2rem] font-bison text-white">
          BlockParty Festival
        </h2> */}
      </div>
      <section className="mt-[2rem] flex gap-[0.5rem] lg:gap-[2rem] px-[1rem] flex-wrap justify-center items-center max-w-[50rem] mx-auto">
        <div className="flex-1 flex flex-col gap-[2rem] justify-center">
          <h2 className="font-bison text-[2rem]">
            Du talents & de la créativité !
          </h2>
          <p className=" text-justify">
            L&apos;occasion de découvrir ou redécouvrir les artistes locaux à
            travers des expositions tout au long de la journée.
            <br /> <br /> Pour la première édition, une mutlitude de stands et
            d&apos;expositions seront présents !
          </p>
          <Accordion type="single" collapsible>
            {stands.map((stand) => (
              <AccordionItem key={stand.id} value={`item-${stand.id}`}>
                <AccordionTrigger className=" font-rubikBold">
                  {stand.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col lg:flex-row gap-[1rem] items-center justify-between">
                  <div className="flex flex-col items-center lg:items-start gap-[1rem] font-rubikLight">
                    {stand.content}
                    <Link
                      target="_blank"
                      href={stand.insta}
                      className="flex gap-2 justify-center items-center font-rubikMedium"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="text-[#a3dabb] hover:text-[#fa798f] transition-all duration-200 ease-in-out"
                      />
                      Instagram
                    </Link>
                  </div>
                  <Image
                    className="object-cover w-[70%] lg:w-[30%] h-full rounded-1rem"
                    src={stand.image}
                    width={2000}
                    height={1000}
                    alt=""
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
