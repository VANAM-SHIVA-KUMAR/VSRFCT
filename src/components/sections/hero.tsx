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
    image: "/images/2025/1.jpeg",
    hint: "indian government school",
    title: "Free Quality Education for a Brighter Tomorrow",
    description: "A non-profit initiative by V.S. Raju Family Charitable Trust for Government School children (Classes 1-10, State Syllabus)."
  },
  {
    image: "/images/2019/IMG-20200129-WA0023.jpg",
    hint: "students classroom india",
    title: "Empowering Young Minds Through Knowledge",
    description: "Our mission is to provide a nurturing environment where every child can learn, grow, and achieve their full potential."
  },
  {
    image: "/images/2016/IMG-20161028-WA0010.jpg",
    hint: "rural school children",
    title: "Physical and mental wellbeing is a top priority",
    description: "We provide daily snacks like bananas and biscuits. Every Saturday is sports day, and every Friday includes moral stories and creative activities, fostering a healthy and happy learning environment."
  }
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-12">
        <Carousel className="w-full overflow-hidden rounded-xl" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[calc(100vh-128px)] w-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    data-ai-hint={slide.hint}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-6 md:p-12">
                    <div className="max-w-4xl mb-16" key={animationKey}>
                      <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-shadow-lg animate-text-reveal">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 p-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-colors',
              current === index ? 'bg-white' : 'bg-white/50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
