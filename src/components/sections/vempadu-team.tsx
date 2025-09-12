
"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const teamMembers = [
  { name: "M.v Naga lakshmi", role: "Tuition Teacher (9th & 10th)", image: "/images/placeholder.png", hint: "female teacher portrait", description: "Working with us since November, 2013." },
  { name: "Ch.v. lakshmi", role: "Pre-School Teacher", image: "/images/placeholder.png", hint: "female teacher portrait", description: "She has been a dedicated teacher since May, 2005." },
  { name: "Ch. Parameswari", role: "Tuition Teacher (7th)", image: "/images/placeholder.png", hint: "female teacher portrait", description: "Joined our team in July, 2024." },
  { name: "K. Sarada", role: "Tuition Teacher (5th & 6th)", image: "/images/placeholder.png", hint: "female teacher portrait", description: "She will be joining us in July, 2025." },
  { name: "S. Chandu", role: "Tuition Teacher (8th)", image: "/images/placeholder.png", hint: "male teacher portrait", description: "He has been with VSRFCT since June, 2022." },
];

export default function VempaduTeam() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section id="team" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            The dedicated individuals who make our mission possible.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 ease-in-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Card className="text-center p-2 md:p-4 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="flex flex-col items-center p-2 md:p-6">
                  <Avatar className="h-20 w-20 md:h-24 md:w-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <p className="font-semibold font-headline text-md md:text-lg text-primary">{member.name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">{member.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
