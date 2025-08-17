import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, BookOpen, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: "Quality Education",
    description: "With a decade of experience, we provide top-tier education across varied curriculums, ensuring academic excellence."
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Expert Tutors",
    description: "Our team of dedicated and experienced tutors provides personalized attention to help every student succeed."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-accent" />,
    title: "Digital Classroom",
    description: "We leverage state-of-the-art digital tools and interactive panels to create a visually compelling and effective learning environment."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: "Doubt Clearance",
    description: "We offer unlimited access to doubt clearance sessions, ensuring no question goes unanswered and concepts are crystal clear."
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Why Choose VSRFCT?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Discover the advantages that make us the premier choice for tuition in Hyderabad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-6">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
