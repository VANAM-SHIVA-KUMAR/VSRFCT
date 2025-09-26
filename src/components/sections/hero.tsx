"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"

const slides = [
  {
    image: "/images/Hero/01.jpg",
    hint: "indian government school",
    title: "Empowering India Through Education",
    description: ""
  },
  {
    image: "/images/Hero/2.jpeg",
    hint: "clean water",
    title: "Building a Brighter Tomorrow",
    description: ""
  },
  {
    image: "/images/Hero/3.jpeg",
    hint: "climate action",
    title: "Unlocking Potential, One Child at a Time",
    description: ""
  },
  {
    image: "/images/Hero/4.jpeg",
    hint: "indian government school",
    title: " Everyone Deserves Quality Education",
    description: ""
  },
  {
    image: "/images/Hero/5.jpeg",
    hint: "indian government school",
    title: "Knowledge is Power: Illuminating Minds",
    description: ""
  },
  {
    image: "/images/Hero/6.jpeg",
    hint: "indian government school",
    title: "From Roots to Wings: Fostering Growth",
    description: ""
  },
];

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [animationKey, setAnimationKey] = React.useState(0);
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", () => {
       setAnimationKey(prevKey => prevKey + 1);
    })
  }, [api])

  return (
    <section className="w-full relative">
      <Carousel className="w-full h-screen overflow-hidden" setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full text-White">
                 <Image
                  src={slide.image}
                  alt={slide.title}
                  data-ai-hint={slide.hint}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 md:p-12 w-full md:w-3/5 lg:w-1/2">
                  <div className="max-w-2xl" key={animationKey}>
                    <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-shadow-lg animate-text-reveal text-white">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-xl animate-fade-in-up animation-delay-500 text-gray-200">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none text-white hover:bg-white/20 hover:text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none text-white hover:bg-white/20 hover:text-white" />
      </Carousel>
    </section>
  )
}
