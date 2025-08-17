"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    image: "https://placehold.co/1600x900.png",
    hint: "happy students studying",
    title: "Free Quality Education for a Brighter Tomorrow",
    description: "A non-profit initiative by V.S. Raju Family Charitable Trust for Government School children (Classes 1-10, State Syllabus)."
  },
  {
    image: "https://placehold.co/1600x900.png",
    hint: "children smiling classroom",
    title: "Empowering Young Minds Through Knowledge",
    description: "Our mission is to provide a nurturing environment where every child can learn, grow, and achieve their full potential."
  },
  {
    image: "https://placehold.co/1600x900.png",
    hint: "teacher with students",
    title: "Join Our Community of Happy Learners",
    description: "Become a part of the VSRFCT family and embark on a journey of academic excellence and personal development."
  }
];

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>()
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
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
       // Optional: restart interval on manual selection
    })

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="w-full">
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
                    <div className="max-w-4xl mb-10">
                      <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-shadow-lg animate-in fade-in-0 slide-in-from-bottom-10 duration-700">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-200">
                        {slide.description}
                      </p>
                      <Button size="lg" asChild className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-300">
                        <a href="https://wa.me/91987654321" target="_blank" rel="noopener noreferrer">Enroll Now</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
