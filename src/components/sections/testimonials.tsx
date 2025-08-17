import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Veda Chalavadi",
    title: "Student",
    quote: "Swastik sir is a good teacher. He has been teaching me since 9th grade, and my scores have improved. I am able to understand IB physics, math and chemistry better now.",
    avatar: "VC",
    image: "https://placehold.co/100x100.png",
    hint: "smiling female student"
  },
  {
    name: "P Naresh",
    title: "Student's Sibling",
    quote: "Very good tuition center. My brother is in 7th class and was poor in maths. I asked Swastik sir to please give him special attention. He told me not to worry. My brother's improvement in maths is great. Thank you, Swastik sir.",
    avatar: "PN",
    image: "https://placehold.co/100x100.png",
    hint: "happy male student"
  },
  {
    name: "P Mena",
    title: "Student",
    quote: "Swastik is a great teacher and good mentor. A professional teacher with good technical background and have great experience in teaching. Thank you, Swastik sir.",
    avatar: "PM",
    image: "https://placehold.co/100x100.png",
    hint: "confident female student"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Loved by Students and Parents</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            See what our community has to say about their experience at VSRFCT.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="p-6">
                      <blockquote className="text-lg italic border-l-4 border-primary pl-4 mb-6">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex items-center">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-semibold font-headline">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
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
