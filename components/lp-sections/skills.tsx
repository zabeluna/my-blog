import Image from "next/image";

type Props = {}

const Skills = (props: Props) => {
    return (
        <>
            <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
                <h1 className="text-blue-300 leading-tight md:leading-none text-2xl font-header">
                    MINHAS HABILIDADES
                </h1>
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
                    />
                </div>
                <div>
                    <Image
                        src="/tsts.png"
                        width={120}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <Image
                        src="/gitgit.png"
                        width={120}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <Image
                        src="/html.png"
                        width={120}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </>
    )
}

export default Skills