import Image from "next/image";
import SectionHeader from "./section-header";
import Link from "next/link";

const WhoAmI = () => {
  const socialMediaLinks: { href: string; text: string }[] = [
    {
      href: "https://www.linkedin.com/in/izabelle-luna-248b33196/",
      text: "Follow me on Linkedin",
    },
    {
      href: "https://github.com/zabeluna",
      text: "Follow me on Github",
    },
    {
      href: "https://tryhackme.com/p/rabbitnuna",
      text: "Follow me on TryHackMe",
    },
    {
      href: "mailto:izabellelunadev@gmail.com",
      text: "izabellelunadev@gmail.com",
    },
  ];
  return (
    <>
      <SectionHeader
        title={"Quem sou eu?"}
        className="pt-32"
        subtitle={"iniciando"}
        image={{
          src: "/cinenino.png",
          alt: "cinna",
          width: 130,
          height: 500,
        }}
      />

      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="mt-16 sm:mt-32 sm:px-8 ml-32 md:pr-1">
          <Image
            src="/foto.png"
            width={250}
            height={500}
            alt="Picture of the author"
            className="rounded-lg"
          />
        </div>

        <p className="text-justify-left text-lg mt-3">
          Olá! Sou uma estudante de Ciência da Computação apaixonada por
          segurança cibernética e desenvolvimento web. Minha jornada me permitiu
          desenvolver uma base sólida em ambas as áreas.
          <p className="text-justify-left text-lg mt-3">
            Quando não estou no computador, amo explorar a natureza, cozinhar,
            dançar, ler e sentir músicas.
          </p>
        </p>
        <div className="lg:pl-40 pb-24 text-sm flex flex-col">
          {socialMediaLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-80 transition-opacity"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-col gap-3 px-12 pb-24 md:mb-16 order-last text-center">
        <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">
          Estou em busca de
        </p>
        <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">
          desafios reais
        </p>
      </div>
    </>
  );
};

export default WhoAmI;

