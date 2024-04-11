import Image from "next/image";
import ContactForm from "../components/Contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | BlockParty Festival",
  description: "Prenez contact avec l'équipe du festival BlocParty",
};

export default function Contact() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          CONTACTEZ-NOUS
        </h1>
        <Image
          className="absolute w-full h-auto mx-auto lg:w-full lg:h-auto opacity-30"
          src="/images/FRESQUE_LOGO.png"
          width={1000}
          height={1000}
          alt="Fresque logo"
        />
      </div>
      <div className="bg-[#231f20] h-[3rem]"></div>
      <section className=" mt-[3rem] px-[1rem] flex flex-col sm:flex-wrap justify-center items-center gap-[2rem] sm:gap-[1.5rem] sm:px-[10rem] lg:px-[15rem]">
        <p className=" font-rubikLight text-center">
          Vous avez des questions ou vous souhaitez devenir bénévole ?
          Contactez-nous !
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
