import Image from "next/image";

const WhoAmI = () => {
  return (
    <>
    <section id="whoami"></section>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Image
          src="/cinenino.png"
          width={130}
          height={500}
          alt="cinna"
          className="rounded-lg"
        />
      </div>

      <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
        <h1 className="text-blue-300 leading-tight md:leading-none text-3xl font-header">
          INICIANDO
        </h1>
        <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
          Quem sou eu?
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center max-w-xl lg:max-w-full mx-auto mt-12 md:items-start">
        <div className="order-1 lg:order-2 flex-grow-0 lg:max-w-2xl px-6">
          <p className="text-justify-left text-lg mt-3">
            Olá! Sou uma estudante de Ciência da Computação apaixonada por
            segurança cibernética e desenvolvimento web. Minha jornada me
            permitiu desenvolver uma base sólida em ambas as áreas.
          </p>

          <p className="text-justify-left text-lg mt-3">
            Quando não estou no computador, amo explorar a natureza, cozinhar,
            dançar, ler e sentir músicas.
          </p>

          <div className="text-sm mt-6 lg:hidden">
            <ul className="text-left flex flex-col">
              <li className="mt-4 flex">
                <a
                  href="https://www.linkedin.com/in/izabelle-luna-248b33196/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on Linkedin
                </a>
              </li>

              <li className="mt-2 flex">
                <a
                  href="https://github.com/zabeluna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on Github
                </a>
              </li>

              <li className="mt-2 flex">
                <a
                  href="https://tryhackme.com/p/rabbitnuna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on TryHackMe
                </a>
              </li>

              <li className="mt-2 flex">
                <a href="mailto:izabellelunadev@gmail.com">
                  izabellelunadev@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center lg:order-2">
          <Image
            src="/foto.png"
            width={0}
            height={0}
            alt="Picture of the author"
            sizes="md:80vw lg:50vw xl:30vw 5vw"
            className="w-full h-auto rounded-lg max-w-[250px] mb-3"
          />

          <div className="text-sm mt-6 hidden lg:block">
            <ul className="text-left flex flex-col">
              <li className="mt-4 flex">
                <a
                  href="https://www.linkedin.com/in/izabelle-luna-248b33196/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on Linkedin
                </a>
              </li>

              <li className="mt-2 flex">
                <a
                  href="https://github.com/zabeluna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on Github
                </a>
              </li>

              <li className="mt-2 flex">
                <a
                  href="https://tryhackme.com/p/rabbitnuna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on TryHackMe
                </a>
              </li>

              <li className="mt-2 flex">
                <a href="mailto:izabellelunadev@gmail.com">
                  izabellelunadev@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-col gap-3 px-12 pb-24 md:mb-16 order-last text-center mt-12">
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