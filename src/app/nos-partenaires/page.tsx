import Image from "next/image";

export default function NosPartenaires() {
  return (
    <div>
      <div className="h-[10rem] w-full gradient-bg  flex justify-center items-end">
        <h1 className="text-white pt-[2rem] pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          NOS PARTENAIRES
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
    </div>
  );
}
