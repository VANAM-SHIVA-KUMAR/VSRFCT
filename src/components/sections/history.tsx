"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const historyData = [
    {
        year: "2022",
        details: [
            "Implemented several new initiatives: monthly staff meetings with Professor Raju Sir, provided a smart TV with high-speed internet, installed an Aquaguard for clean drinking water, and provided a Vidya Volunteer for various Government schools.",
            "Allowed former students to study at the centre from 8 PM to 9 PM.",
            "Trained students for the NMMS eligibility exam for central government scholarships."
        ]
    },
    {
        year: "2021",
        details: [
            "Reopened for physical classes on September 1, 2021, following strict COVID-19 safety protocols including sanitizing, mask-wearing, temperature checks, and social distancing.",
            "Required letters of willingness signed by parents for students attending physical classes."
        ]
    },
    {
        year: "2020",
        details: [
            "Organized an educational trip for senior students to Rashtrapati Bhavan in Hyderabad in January.",
            "Closed on March 16 due to COVID-19 and transitioned to online classes via Google Meet for 42 students with 4 teachers.",
            "Used WhatsApp for coordination, homework, and sharing study materials. Provided mobile data to students to facilitate online learning.",
            "Kept students engaged with activities like yoga, gardening, cooking, and drawing."
        ]
    },
    {
        year: "2019",
        details: [
            "Introduced weekly classes for yoga, music, art, and moral stories.",
            "Started a program for children who don't attend school.",
            "Launched online spoken English classes via Skype, taught by Mrs. Lakshmi from Seattle, USA.",
            "Established an 'Empower Centre for women' for basic literacy, starting with four women.",
            "Took students on an educational trip to Salar Jung Museum."
        ]
    },
    {
        year: "2018",
        details: [
            "Grew to 25 preschool students and 100 students in evening classes.",
            "Enhanced teaching with materials like charts, computers, and educational toys for rhymes and colors."
        ]
    },
    {
        year: "2017",
        details: [
            "Moved to a larger three-bedroom flat.",
            "Student strength increased to 85, with 8 teachers. Preschool strength grew to 20 students with two teachers.",
            "Organized an educational trip to the zoo and continued providing daily snacks."
        ]
    },
    {
        year: "2016",
        details: [
            "Expanded to enroll students up to class 8, creating two batches for different age groups.",
            "Started a morning preschool program in June with 10 students.",
            "Grew to 45 students and five teachers by year-end and installed an internet connection."
        ]
    },
    {
        year: "2015",
        details: [
            "Started in January with 14 students (classes 1-5) and one teacher in a small room.",
            "Moved to a 1BHK house in May, began offering daily snacks, and grew to 25 students and four teachers.",
            "Added volunteers for English and computer classes and provided two computers, notebooks, and stationery.",
            "Held a parent-teacher meeting with bank officials to help students open savings accounts.",
            "Conducted the first annual day and sports day."
        ]
    }
];

function HistoryItem({ item }: { item: typeof historyData[0] }) {
    const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div ref={ref} className="relative">
            <div className="absolute left-9 top-2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Calendar className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className={cn(
                "ml-16 transition-all duration-700 ease-in-out",
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">{item.year}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            {item.details.map((detail, dIndex) => (
                                <li key={dIndex}>{detail}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default function History() {
  return (
    <section id="history" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Our History</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            VSRFCT Tuition Centre, founded in January 2015, provides educational support and various extracurricular activities for students in a disciplined and holistic environment.
          </p>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-9 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          <div className="space-y-12">
            {historyData.map((item, index) => (
              <HistoryItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
