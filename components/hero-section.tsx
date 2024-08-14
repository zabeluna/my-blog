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
            Olá, sou Izabelle Luna
          </h1>
          <p className="text-lg text-gray-300 font-medium mt-2">
            Uma garota brasileira apaixonada por{" "}
            <span className="text-white">segurança</span> e{" "}
            <span className="text-white">tecnologia</span>.
          </p>
        </div>
      </div>
      <ChevronDown className="mx-auto animate-bounce" />

      <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
        <h1 className="text-blue-300 leading-tight md:leading-none text-xl font-header">INICIANDO</h1>
          <h1 className="text-5xl leading-tight md:leading-none md:text-5xl font-header font-semibold">
            Quem sou eu?
          </h1>
        </div>
        <div>
        <blockquote>
  <p>Olá! Sou uma estudante de Ciência da Computação</p>
  <p>apaixonada por segurança cibernética e desenvolvi-</p>
  <p>mento web. Minha jornada me permitiu desenvolver</p>
  <p>uma base sólida em ambas as áreas.</p>
  <div>
    {/* add img */}
  </div>
</blockquote>
       </div>
       {/* diminuir fonte */}
       <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
        <p className="text-blue-300 leading-tight md:leading-none text-lg font-header">Estou em busca de</p>
        <p className="text-blue-300 leading-tight md:leading-none text-lg font-header">desafios reais</p>
       </div>
       <div  className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
       <h1 className="text-blue-300 leading-tight md:leading-none text-xl font-header">MINHAS HABILIDADES</h1>
       <h1 className="text-5xl leading-tight md:leading-none md:text-5xl font-header font-semibold">
            Habilidades e Tecnologias
          </h1>
       </div>
       <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
       <blockquote>
  <p className="text-blue-300 leading-tight md:leading-none text-lg font-header">Sou uma estudante dedicada com</p>
  <p className="text-blue-300 leading-tight md:leading-none text-lg font-header">uma forte paixão por segurança</p>
  <p className="text-blue-300 leading-tight md:leading-none text-lg font-header">cibernética e desenvolvimento web.</p>
</blockquote>
       </div>
       
            
    </>
       
  );
};

export default HeroSection;
