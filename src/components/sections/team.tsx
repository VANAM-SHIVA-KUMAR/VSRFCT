import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Anusha Sharma", role: "Mathematics Lead", image: "https://placehold.co/100x100.png", hint: "smiling female teacher" },
  { name: "Ravi Kumar", role: "Science Coordinator", image: "https://placehold.co/100x100.png", hint: "professional male teacher" },
  { name: "Priya Singh", role: "English Teacher", image: "https://placehold.co/100x100.png", hint: "female teacher portrait" },
  { name: "Amit Patel", role: "Social Studies Expert", image: "https://placehold.co/100x100.png", hint: "male teacher smiling" },
  { name: "Sunita Reddy", role: "Primary Classes Teacher", image: "https://placehold.co/100x100.png", hint: "friendly female teacher" },
  { name: "Vikram Das", role: "Hindi Teacher", image: "https://placehold.co/100x100.png", hint: "male teacher glasses" },
  { name: "Deepa Krishnan", role: "Activity Coordinator", image: "https://placehold.co/100x100.png", hint: "energetic female teacher" },
  { name: "Manoj Tiwari", role: "Telugu Teacher", image: "https://placehold.co/100x100.png", hint: "traditional male teacher" },
  { name: "Geeta Desai", role: "Support Staff", image: "https://placehold.co/100x100.png", hint: "helpful female staff" },
  { name: "Suresh Gupta", role: "Administrator", image: "https://placehold.co/100x100.png", hint: "professional male administrator" },
  { name: "Neha Verma", role: "Volunteer Coordinator", image: "https://placehold.co/100x100.png", hint: "young female volunteer" },
  { name: "Rajesh Menon", role: "IT Support", image: "https://placehold.co/100x100.png", hint: "male IT professional" },
];

export default function Team() {
  return (
    <section id="team" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            The dedicated individuals who make our mission possible.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <p className="font-semibold font-headline text-lg">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
