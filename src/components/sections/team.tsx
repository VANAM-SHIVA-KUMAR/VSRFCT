"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";


const teamMembers = [
  { name: "Valli", role: "Staff Lead", image: "https://placehold.co/100x100.png", hint: "smiling female teacher" },
  { name: "Sailaja", role: "Primary Classes Teacher", image: "https://placehold.co/100x100.png", hint: "professional male teacher" },
  { name: "Anand", role: "Maths Teacher", image: "https://placehold.co/100x100.png", hint: "female teacher portrait" },
  { name: "Vishnu", role: "Social Studies Expert", image: "https://placehold.co/100x100.png", hint: "male teacher smiling" },
  { name: "Akhilesh", role: "Science Coordinator", image: "https://placehold.co/100x100.png", hint: "friendly female teacher" },
  { name: "Shiva Kumar", role: "English Teacher", image: "https://placehold.co/100x100.png", hint: "male teacher glasses" },
  { name: "Jyothi", role: "Activity Coordinator", image: "https://placehold.co/100x100.png", hint: "energetic female teacher" },
  { name: "Annapurna", role: "Telugu Teacher", image: "https://placehold.co/100x100.png", hint: "traditional male teacher" },
  { name: "Geeta ", role: "Support Staff", image: "https://placehold.co/100x100.png", hint: "helpful female staff" },
  { name: "Suresh ", role: "Administrator", image: "https://placehold.co/100x100.png", hint: "professional male administrator" },
  { name: "Neha", role: "Volunteer Coordinator", image: "https://placehold.co/100x100.png", hint: "young female volunteer" },
  { name: "Rajesh ", role: "IT Support", image: "https://placehold.co/100x100.png", hint: "male IT professional" },
];

export default function Team() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section id="team" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            The dedicated individuals who make our mission possible.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 ease-in-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <p className="font-semibold font-headline text-lg">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
