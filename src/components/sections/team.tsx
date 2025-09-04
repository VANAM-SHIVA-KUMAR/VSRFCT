"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";


const teamMembers = [
  { name: "Valli", role: "Staff Lead", image: "/images/Team/Valli.jpg", hint: "smiling female teacher" },
  { name: "Sailaja", role: "Primary Classes Teacher", image: "/images/Team/Sailaja.JPG", hint: "professional male teacher" },
  { name: "Anand", role: "Higher Secondary Educator", image: "/images/Team/Anadh.jpg", hint: "female teacher portrait" },
  { name: "Vishnu", role: "Higher Secondary Educator", image: "/images/Team/Vishnu.JPG", hint: "male teacher smiling" },
  { name: "Akhilesh", role: "Physical Education Teacher", image: "/images/Team/Akhilesh.JPG", hint: "friendly female teacher" },
  { name: "Usha Rani ", role: "Moral and Ethics Educator", image: "/images/Team/Usha.JPG", hint: "helpful female staff" },
  { name: "Annapurna", role: "Pre-School Teacher", image: "/images/Team/Annapurna.JPG", hint: "traditional male teacher" },
  { name: "Padma", role: "Pre-School Teacher", image: "/images/Team/Padma.jpeg", hint: "professional male administrator" },
  { name: "Shiva Kumar", role: "Higher Secondary Educator", image: "/images/Team/Shiva.JPG", hint: "male teacher glasses" },
  { name: "Jyothi", role: "Higher Secondary Educator", image: "/images/Team/Jyothi.JPG", hint: "energetic female teacher" },
];

export default function Team() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section id="team" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-green-700 mt-4 max-w-3xl mx-auto">
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
