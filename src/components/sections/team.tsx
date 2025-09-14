"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";


const teamMembers = [
  { name: "Mr. P. Anand", role: "Higher Secondary Educator", image: "/images/Team/Anadh.jpg", hint: "female teacher portrait", description: "Mr. P. Anand has a Msc, B.Ed Degree. He is working with us since November, 2019." },
  { name: "Mr. Ch. Vishnu", role: "Higher Secondary Educator", image: "/images/Team/Vishnu.JPG", hint: "male teacher smiling", description: "Mr. CH. Vishnu has a B.Tech Degree. He is working with us since January, 2019." },
  { name: "Mr. G. Akhilesh", role: "Physical Education Teacher", image: "/images/Team/Akhilesh.JPG", hint: "friendly female teacher", description: "Mr. G. Akhilesh has a B.Tech Degree. He is working with us since December, 2021." },
  { name: "Mrs. D. Sailaja", role: "Primary Classes Teacher", image: "/images/Team/Sailaja.JPG", hint: "professional male teacher", description: "Mrs. D. Sailaja has a Degree. She is working with us since June, 2018." },
  { name: "Mrs. T. Usha Rani ", role: "Moral and Ethics Educator", image: "/images/Team/Usha.JPG", hint: "helpful female staff", description: "Mrs. T. Usha Rani  has a Degree. She is working with us since Febuary, 2024." },
  { name: "Mrs. K. Annapurna", role: "Pre-School Teacher", image: "/images/Team/Annapurna.JPG", hint: "traditional male teacher", description: "Mrs. K. Annapurna has a Intermediate Degree. She is working with us since November, 2023." },
  { name: "Mrs. V. Padma", role: "Pre-School Teacher", image: "/images/Team/Padma.jpeg", hint: "professional male administrator", description: "Mrs. V. Padma has a Degree. She is working with us since January, 2022." },
  { name: "Mr. V. Shiva Kumar", role: "Higher Secondary Educator", image: "/images/Team/Shiva.JPG", hint: "male teacher glasses", description: "Mr. V. Shiva Kumar has a B.Tech Degree. He is working with us since June, 2025." },
  { name: "Mrs. K. Jyothi", role: "Higher Secondary Educator", image: "/images/Team/Jyothi.JPG", hint: "energetic female teacher", description: "Mrs. K. Jyothi has a B.Tech Degree. She is working with us since July, 2025." },
];

export default function Team() {
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
