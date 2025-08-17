import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, BookUser } from 'lucide-react';

const subjectsByClass = [
  {
    classes: "Classes 1-5",
    subjects: ["Telugu", "Hindi", "English", "Mathematics", "Environmental Science"],
    icon: <BookUser className="h-8 w-8 text-primary" />
  },
  {
    classes: "Classes 6-10",
    subjects: ["Telugu", "Hindi", "English", "Mathematics", "Physical Science", "Biological Science", "Social Studies"],
    icon: <BookUser className="h-8 w-8 text-primary" />
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Our Curriculum</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            We provide free, comprehensive tuition for the State Syllabus, empowering students from Government schools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subjectsByClass.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                {item.icon}
                <div >
                    <CardTitle className="font-headline text-2xl text-primary">{item.classes}</CardTitle>
                    <CardDescription>State Syllabus</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {item.subjects.map((subject, pIndex) => (
                    <li key={pIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                      <span>{subject}</span>
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
