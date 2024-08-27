import Image from "next/image";

const WhoAmI = () => {
    return (
        <>
        <div></div>
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
            <div className="flex justify-start items-start gap-3 py-20 md:mb-16 pb-10 order-last">
                <p className="text-justify-left text-lg mt-3">
                    Olá! Sou uma estudante de Ciência da Computação apaixonada por
                    segurança cibernética e desenvolvimento web. Minha jornada me
                    permitiu desenvolver uma base sólida em ambas as áreas.
                    

                    <p className="text-justify-left text-lg mt-3">Quando não estou no computador, amo explorar a
                    natureza, cozinhar, dançar, ler e sentir músicas.</p>
          
                </p>
                <div>
                    <div className="px-32">
                        <Image
                            src="/foto.png"
                            width={250}
                            height={500}
                            alt="Picture of the author"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex justify-normal px-32 py-8 pb-16">
                        <blockquote className="text-sm">
                             <div className="text-sm">
        <a href="https://www.linkedin.com/in/izabelle-luna-248b33196/" target="_blank" rel="noopener noreferrer">
            Follow me on Linkedin
        </a>
        <br />
        <a href="https://github.com/zabeluna" target="_blank" rel="noopener noreferrer">
            Follow me on Github
        </a>
        <br />
        <a href="https://tryhackme.com/p/rabbitnuna" target="_blank" rel="noopener noreferrer">
            Follow me on TryHackMe
        </a>
        <br />
        <a href="mailto:izabellelunadev@gmail.com">
            izabellelunadev@gmail.com
        </a>
    </div>
                        </blockquote>
                    </div>
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
    )
}

export default WhoAmI