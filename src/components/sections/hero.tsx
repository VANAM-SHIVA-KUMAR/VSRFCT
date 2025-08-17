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
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    image: "https://placehold.co/1600x900.png",
    hint: "classroom students learning",
    title: "Learn and Excel with Excellent Grades",
    description: "At VSRFCT, we empower students to achieve academic excellence through personalized coaching and expert guidance."
  },
  {
    image: "https://placehold.co/1600x900.png",
    hint: "teacher explaining chalkboard",
    title: "The Best Education For Your Bright Future",
    description: "Our dedicated tutors are committed to nurturing your potential and paving the way for a successful future."
  },
  {
    image: "https://placehold.co/1600x900.png",
    hint: "student writing notes",
    title: "Unlock Your Full Potential with VSRFCT",
    description: "Join our community of learners and embark on a journey of knowledge, growth, and achievement."
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
      // resart interval
    })

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <Carousel className="w-full overflow-hidden rounded-xl" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[75vh] w-full">
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
                    <div className="max-w-4xl">
                      <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-shadow-lg animate-in fade-in-0 slide-in-from-bottom-10 duration-700">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-200">
                        {slide.description}
                      </p>
                      <Button size="lg" asChild className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-300">
                        <a href="#contact">Enroll Now</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:inline-flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:inline-flex" />
        </Carousel>
      </div>
    </section>
  )
}
