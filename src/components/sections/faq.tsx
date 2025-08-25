"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is the tuition really free?",
    answer: "Yes, the tuition is completely free for all students from Government schools studying the State Syllabus from Classes 1 to 10. This is a non-profit initiative by the V.S. Raju Family Charitable Trust."
  },
  {
    question: "Which students are eligible for admission?",
    answer: "Admissions are exclusively for students currently enrolled in Government schools, following the State Syllabus, from Class 1 to Class 10."
  },
  {
    question: "What subjects are taught at the centre?",
    answer: "We cover all major subjects as per the State Syllabus, including languages (Telugu, Hindi, English), Mathematics, Sciences (Physical and Biological), and Social Studies."
  },
  {
    question: "What are the timings of the tuition centre?",
    answer: "Our classes are typically held in the evenings on weekdays and on weekends. For specific batch timings, please visit our centre."
  },
  {
    question: "How can I enroll my child?",
    answer: "You can enroll your child by visiting our centre to get more information about the admission process. You will need to provide proof of enrollment in a Government school."
  }
]

export default function Faq() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="faq" className="py-12 md:py-24 bg-card">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-opacity duration-700 ease-in",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div
            className={cn(
              "transition-all duration-700 ease-in-out",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our free tuition programme.
            </p>
          </div>
          <div
            className={cn(
              "transition-all duration-700 ease-in-out delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-headline text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
