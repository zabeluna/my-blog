import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import Image from "next/image";

const Images = [
    { src: "/cisco.png", alt: "cisco" },
    { src: "/osint.png", alt: "osint" },
    { src: "/udemy.png", alt: "udemy" },
];

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '../ui/card'

type Props = {}

const Achievements = (props: Props) => {
    return (
        <>
            

            <div className="flex-col gap-3 px-12 py-1 pb-20 md:mb-16 order-last text-center">
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
            <div>
                <div className="flex-col md:flex items-center justify-center">
                        <Image
                            src="/cinnaa.png"
                            width={140}
                            height={500}
                            alt="cinna"
                            className="rounded-lg"
                        />
                        </div>
            </div>
            <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
                <h1 className="text-blue-300 leading-tight md:leading-none text-2xl font-header">
                    CONQUISTAS
                </h1>
                <h1 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
                    Badges e Certificados
                </h1>
            </div>
            <div className="flex flex-row items-center justify-center scroll-px-3.5 py-14 pb-40 gap-20 text-black">
                <Carousel className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                    <CarouselContent className="-ml-1">
                        {Images.map(({ src, alt }, index) => (
                            <CarouselItem key={index} 
                            className="pl-1 md:basis-1/2 lg:basis-1/2">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-6">
                                        <Image 
                                            src={src} 
                                            alt={alt} 
                                            layout="responsive" 
                                            width={500} 
                                            height={500} 
                                            objectFit="cover" 
                                            className="w-full h-full"
                                        />
                                        </CardContent>
                                    </Card>
                    
                                </div>
                            </CarouselItem> 
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
                        
              <div className="flex flex-row items-center justify-center scroll-px-3.5 py-14 pb-40 gap-20">
                <div>
                    <Image
                        src="/owasp.png"
                        width={140}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                
                <div>
                    <Image
                        src="/pentest.png"
                        width={220}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
               
            </div>
        </>
    )
}

export default Achievements