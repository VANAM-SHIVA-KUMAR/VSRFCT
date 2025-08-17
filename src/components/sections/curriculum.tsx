import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const curricula = [
  {
    title: "CBSE Curriculum",
    description: "Our expert tutors provide comprehensive support for the CBSE board, focusing on building a strong conceptual foundation for success in board exams and beyond.",
    points: [
      "In-depth subject knowledge",
      "Regular mock tests & assessments",
      "Focus on problem-solving skills"
    ]
  },
  {
    title: "ICSE Curriculum",
    description: "We offer specialized coaching for the ICSE curriculum, known for its detailed and practical approach, preparing students for academic excellence.",
    points: [
      "Emphasis on practical application",
      "Project work assistance",
      "Tailored study materials"
    ]
  },
  {
    title: "IGCSE & IB Curriculum",
    description: "Catering to international standards, our IGCSE and IB (MYP) programs are designed to foster critical thinking and a global perspective in students.",
    points: [
      "Holistic development approach",
      "Preparation for international universities",
      "Focus on Approaches to Learning (ATL) skills"
    ]
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Covering All Major Curriculums</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            We provide expert guidance and tailored learning plans for students across various academic boards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curricula.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
