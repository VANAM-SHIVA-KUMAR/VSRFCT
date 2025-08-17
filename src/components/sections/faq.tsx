import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Curriculum: IB MYP vs. IGCSE",
    answer: "IB MYP is a holistic program focusing on overall student development across eight subject groups. In contrast, IGCSE is a subject-specific program that emphasizes in-depth knowledge and understanding of chosen subjects."
  },
  {
    question: "Assessment Methods",
    answer: "IB MYP uses criterion-referenced assessment, evaluating students against specific criteria through coursework, projects, and exams. IGCSE is primarily exam-based and uses norm-referenced assessment, comparing a student's performance to their peers."
  },
  {
    question: "Approaches to Learning (ATL)",
    answer: "IB MYP places a strong emphasis on developing ATL skills like critical thinking, research, and self-management to foster independent learning. IGCSE does not have a specific, separate emphasis on these skills."
  },
  {
    question: "What is the Personal Project?",
    answer: "In IB MYP, students must complete a personal project, allowing them to explore their interests and demonstrate their acquired skills. IGCSE does not have a similar personal project requirement."
  }
]

export default function Faq() {
  return (
    <section id="faq" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about the different curriculums we support.
            </p>
          </div>
          <div>
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
