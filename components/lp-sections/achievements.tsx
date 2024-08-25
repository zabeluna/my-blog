import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {}

const Achievements = (props: Props) => {
    return (
        <>
            <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
                <h1 className="text-blue-300 leading-tight md:leading-none text-2xl font-header">
                    FEITOS
                </h1>
                <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
                    Projetos
                </h1>
            </div>

            <div className="flex-col gap-3 px-12 py-1 md:mb-16 order-last text-center">
                <blockquote>
                    <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">
                        Sou uma estudante dedicada com
                    </p>
                    <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">
                        uma forte paixão por segurança
                    </p>
                    <p className="text-blue-300 leading-tight md:leading-none text-xl font-header">
                        cibernética e desenvolvimento web.
                    </p>
                </blockquote>
            </div>
            <div className="flex-col gap-3 px-12 py-28 md:mb-16 order-last text-center">
                <h1 className="text-blue-300 leading-tight md:leading-none text-2xl font-header">
                    CONQUISTAS
                </h1>
                <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
                    Badges e Certificados
                </h1>
            </div>
            <div className="flex flex-row items-center justify-center scroll-px-3.5 py-14 pb-40 gap-20">
                <button>
                    <ChevronLeft className="mx-auto" />
                </button>
                <div className="carousel">
                    <div className="carousel-inner"></div>
                </div>
                <button>
                    <ChevronRight className="mx-auto" />
                </button>
            </div>
            <div className="flex justify-center items-center gap-3 px-72 py-20 md:mb-16 pb-10 order-last text-xl">
                {/*rever escritores*/}
                <blockquote>
                    <p>Quando não estou no computador, amo explorar</p>
                    <p>a natureza, cozinhar, dançar, ler e sentir músicas.</p>
                </blockquote>
            </div>
        </>
    )
}

export default Achievements