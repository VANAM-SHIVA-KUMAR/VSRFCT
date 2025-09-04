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
    image: "/images/Header/Education.jpg",
    hint: "indian government school",
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."
  },
  {
    image: "/images/Header/glass-water.jpg",
    hint: "clean water",
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water and sanitation for all"
  },
  {
    image: "/images/Header/climate.jpg",
    hint: "climate action",
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts"
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
    <section className="w-full relative bg-white">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-12">
        <Carousel className="w-full overflow-hidden rounded-xl" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[calc(100vh-128px)] w-full text-primary-foreground">
                   <Image
                    src={slide.image}
                    alt={slide.title}
                    data-ai-hint={slide.hint}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div 
                    className="absolute inset-0 bg-white/70"
                    style={{ clipPath: 'polygon(0 0, 45% 0, 35% 100%, 0 100%)' }}
                  />
                   <div 
                    className="absolute inset-0 bg-white/50"
                    style={{ clipPath: 'polygon(45% 0, 50% 0, 40% 100%, 35% 100%)' }}
                  />
                   <div 
                    className="absolute inset-0 bg-white/30"
                    style={{ clipPath: 'polygon(50% 0, 55% 0, 45% 100%, 40% 100%)' }}
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-primary p-6 md:p-12 w-full md:w-2/5 lg:w-1/3">
                    <div className="max-w-2xl" key={animationKey}>
                      <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-shadow-lg animate-text-reveal">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl max-w-xl animate-fade-in-up animation-delay-500">
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
       <div className="absolute bottom-10 left-10 flex space-x-2 p-4">
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
