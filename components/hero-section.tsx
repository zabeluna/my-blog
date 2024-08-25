import Image from "next/image";
import LateNightCoding from "@/public/night-gif.gif";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

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

      <div className="flex-col gap-3 py-8 px-12 md:mb-16 order-last text-center">
        <h1 className="text-blue-300 leading-tight md:leading-none text-3xl font-header">INICIANDO</h1>
          <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
            Quem sou eu?
          </h1>
        </div>
        <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-3 px-72 py-20 md:mb-16 pb-10 order-last">
        <blockquote className="text-xl">
          <p className="text-justify-left">Olá! Sou uma estudante de Ciência da Computação
          apaixonada por segurança cibernética e desenvolvimento
          web. Minha jornada me permitiu desenvolver uma base sólida
          em ambas as áreas.</p>
        </blockquote>
       <div>
    <div className="px-32">
     <Image
      src="/foto.png"
      width={250}
      height={500}
      alt="Picture of the author"
    /></div>
    <div className="flex justify-normal px-32 py-8">
        <blockquote className="text-sm">
        <p>Follow me on Linkedin</p>
        <p>Follow me on Github</p>
        <p>Follow me on TryHackMe</p>
        <p>izabellelunadev@gmail.com</p>
        </blockquote>
       </div>
  </div>
       </div>
       </div>


       {/* diminuir fonte */}
       <div className="flex-col gap-3 px-12 py-32 md:mb-16 order-last text-center">
        <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">Estou em busca de</p>
        <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">desafios reais</p>
       </div>
       <div>
        {/* add link pro blog */}
       </div>
       <div  className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
       <h1 className="text-blue-300 leading-tight md:leading-none text-2xl font-header">MINHAS HABILIDADES</h1>
       <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
            Habilidades e Tecnologias
          </h1>
       </div>

       
       <div className="flex flex-row items-center justify-center scroll-px-3.5 py-14 pb-40 gap-20">
       <div>
     <Image
      src="/javascript.png"
      width={119}
      height={500}
      alt="Picture of the author"
    /></div>
     <div>
     <Image
      src="/tsts.png"
      width={120}
      height={500}
      alt="Picture of the author"
    /></div>
    <div>
     <Image
      src="/gitgit.png"
      width={120}
      height={500}
      alt="Picture of the author"
    /></div>
    <div>
     <Image
      src="/html.png"
      width={120}
      height={500}
      alt="Picture of the author"
    /></div>
       </div>

       <div  className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
       <h1 className="text-blue-300 leading-tight md:leading-none text-2xl font-header">FEITOS</h1>
       <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
          Projetos
          </h1>
       </div>
      
       <div className="flex-col gap-3 px-12 py-1 md:mb-16 order-last text-center">
       <blockquote>
  <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">Sou uma estudante dedicada com</p>
  <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">uma forte paixão por segurança</p>
  <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">cibernética e desenvolvimento web.</p>
</blockquote>
       </div>
       <div  className="flex-col gap-3 px-12 py-28 md:mb-16 order-last text-center">
       <h1 className="text-blue-300 leading-tight md:leading-none text-2xl font-header">CONQUISTAS</h1>
       <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
            Badges e Certificados
          </h1>
       </div>
       <div className="flex flex-row items-center justify-center scroll-px-3.5 py-14 pb-40 gap-20">
       <button><ChevronLeft className="mx-auto"/></button>
       <div className="carousel"> 
        <div className="carousel-inner">

        </div>
       </div>
       <button><ChevronRight className="mx-auto" /></button>
       </div>
       <div className="flex justify-center items-center gap-3 px-72 py-20 md:mb-16 pb-10 order-last text-xl">
        {/*rever escritores*/}
       <blockquote>
  <p>Quando não estou no computador, amo explorar</p>
  <p>a natureza, cozinhar, dançar, ler e sentir músicas.</p>
       </blockquote>
       </div>
       
            
    </>
       
  );
};

export default HeroSection;
