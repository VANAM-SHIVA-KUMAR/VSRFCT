"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/Hero/1.jpeg",
    hint: "indian government school",
    title: "Empowering India Through Education",
    description: ""
  },
  {
    image: "/images/Hero/2.jpeg",
    hint: "clean water",
    title: "Building a Brighter Tomorrow, Together",
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
  const [current, setCurrent] = React.useState(0)
  const [animationKey, setAnimationKey] = React.useState(0);
 
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())
 
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000);

    api.on("pointerDown", () => {
      clearInterval(interval);
    });

    api.on("select", () => {
       setCurrent(api.selectedScrollSnap());
       setAnimationKey(prevKey => prevKey + 1);
    })

    return () => clearInterval(interval)
  }, [api])

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

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
      </Carousel>
      <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 flex space-x-2 p-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              'h-2 w-8 rounded-full transition-colors',
              current === index ? 'bg-accent' : 'bg-gray-400'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
