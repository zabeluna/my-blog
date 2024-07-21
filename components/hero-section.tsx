import Image from "next/image";
import LateNightCoding from "@/public/night-gif.gif";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <div className="flex-col md:flex items-center justify-center md:py-28 py-14 pb-12">
        <div className="relative size-72 md:size-[360px] overflow-hidden md:inline-block mx-auto rounded-full mb-10">
          <Image
            fill
            objectFit="cover"
            src={LateNightCoding}
            alt="late night coding"
          />
        </div>
        <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
          <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
            Hi, I&apos;m Izabelle Luna
          </h1>
          <p className="text-lg text-gray-300 font-medium mt-2">
            A brazilian girl passionate about{" "}
            <span className="text-white">security</span> and{" "}
            <span className="text-white">technology</span>.
          </p>
        </div>
      </div>
      <ChevronDown className="mx-auto animate-bounce" />
    </>
  );
};

export default HeroSection;
