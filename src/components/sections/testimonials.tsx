"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Mrs. Lakshmi",
    title: "Parent of a 5th Grader",
    quote: "VSRFCT has been a blessing for my daughter. The teachers are so caring and dedicated. Her confidence and grades have improved so much. Thank you for this wonderful free service!",
  },
  {
    name: "Siri",
    title: "Class 8 Student",
    quote: "I used to find Maths very difficult, but the teachers here make it so easy and fun to learn. I enjoy coming to the tuition centre every day after school. My friends and I learn a lot.",
  },
  {
    name: "Mr. Srinivas",
    title: "Well-wisher",
    quote: "The work being done by the V.S. Raju Family Charitable Trust is truly commendable. Providing free, quality education is the greatest gift one can give to society. Keep up the noble work!",
  }
];

export default function Testimonials() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-background">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-opacity duration-700 ease-in",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">What People Are Saying</h2>
          <p className="text-lg italic md:text-xl text-White-700 mt-4 max-w-3xl mx-auto">
            Feedback from parents, students, and well-wishers of our community.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className={cn(
            "w-full transition-all duration-700 ease-in-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-center text-center">
                    <CardContent className="p-6 flex flex-col items-center">
                      <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
                      <blockquote className="text-lg italic text-White mb-4 flex-grow">
                        “{testimonial.quote}”
                      </blockquote>
                      <div>
                        <p className="font-semibold font-headline text-primary">{testimonial.name}</p>
                        <p className="text-sm text-White">{testimonial.title}</p>
                      </div>
                      <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
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
    </section>
  );
}
