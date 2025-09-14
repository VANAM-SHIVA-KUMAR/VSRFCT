"use client"

import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const programmes = [
  {
    title: "Prof. V. S. Raju Family Charitable Trust (VSRFCT)",
    subtitle: "Encourage and support talented children to",
    mainLine: "Educate Evolve & Prosper",
    image: "/images/programmes/educate.jpg",
    imageHint: "student graduation",
    believeTitle: "WE BELIEVE",
    believeText_highlight: "IF WE HELP ONE PERSON GET EDUCATED, THEIR FAMILY AND THE FUTURE GENERATIONS OF THEIR FAMILIES WILL HAVE THE ABILITY AND DESIRE TO BECOME EDUCATED.",
    believeText_rest: "Every year hundreds of students drop out of schools and colleges due to lack of proper support system - financial and guidance. We know that most students can succeed in any area that they have passion for. Over the years we've given hope of a better future to most students among the most needy. With great opportunities to excel and a dedicated team to hold their hand, they have built their lives with their own efforts and are leading a prosperous life.",
    knowMoreText: "Changed over 700 lives through education scholarships",
    imageClass: "object-contain",
  },
  {
    title: "Prof. V. S. Raju Family Charitable Trust (VSRFCT)",
    subtitle: "Create opportunity for youth to",
    mainLine: "Upskill Employ & Sustain",
    image: "/images/programmes/employ.png",
    imageHint: "youth employment skills",
    believeTitle: "WE BELIEVE",
    believeText_highlight: "NO YOUNG TALENT SHOULD GO WASTE DUE TO LACK OF RESOURCES.",
    believeText_rest: "Every year many youngsters struggle to pull themselves out of poverty due to lack of technical expertise and advancement opportunities. We know that creating the right space and scope for them to enhance their technical knowledge can transform their lives. Over the years we've collaborated with the best technical institutions that provide complete placement support. With an opportunity to advance their skills and manufacturing industry's readiness to employ, these candidates took the first step in self development and built sustainable lives.",
    knowMoreText: "Changed over 400 lives through skill training scholarships and job opportunities",
    imageClass: "object-contain",
  },
  {
    title: "Prof. V. S. Raju Family Charitable Trust (VSRFCT)",
    subtitle: "Provide resources to students from government colleges to",
    mainLine: "Outperform Progress & Succeed",
    image: "/images/programmes/succeed.png",
    imageHint: "student progress",
    believeTitle: "WE BELIEVE",
    believeText_highlight: "WE HAVE TO WORK AT THE GRASS ROOT LEVEL TO INCREASE THE LITERACY LEVEL IN INDIA.",
    believeText_rest: "Every year thousands of students studying in government colleges fail to perform well academically due to lack of availability of educational resources at their arm's length. We know that providing the required resources to these students could lead them to gain quality education and grow confidence to achieve their goals. We've collaborated with government college lecturers to create study material. Over the years we provided text books and study material to students which helped improve their performance drastically and were able to complete their education successfully.",
    knowMoreText: "Changed over 22 lakh lives by donating books",
    imageClass: "object-contain",
  },
];

const ProgrammeSection = ({ programme, index }) => {
    const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

    return (
        <div ref={targetRef} className={cn("grid md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-24 overflow-hidden", index % 2 !== 0 ? "md:grid-flow-col-dense" : "")}>
            <div ref={ref} className={cn("relative h-96 md:h-[600px] w-full", index % 2 !== 0 ? "md:order-last" : "")}>
                <motion.div style={{ y }} className="absolute inset-0">
                    <Image 
                        src={programme.image} 
                        alt={programme.mainLine}
                        data-ai-hint={programme.imageHint}
                        fill
                        className={cn("rounded-2xl shadow-2xl", programme.imageClass || "object-cover")}
                    />
                </motion.div>
                 <div className={cn(
                    "absolute -bottom-8 w-64 p-4 rounded-lg shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-700 ease-in-out",
                    index % 2 === 0 ? "-right-8" : "-left-8",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}>
                    <h4 className="font-bold text-primary mb-2">KNOW MORE...</h4>
                    <p className="text-sm text-muted-foreground">{programme.knowMoreText}</p>
                </div>
            </div>
            <div className={cn("space-y-6", isInView ? "animate-fade-in-up" : "opacity-0")}>
                <h3 className="text-xl font-semibold text-muted-foreground text-center md:text-left">{programme.title}</h3>
                <div className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl text-primary font-light">{programme.subtitle}</p>
                    <h2 className="text-4xl md:text-6xl font-bold font-headline text-green-900">{programme.mainLine}</h2>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-inner space-y-4">
                    <h4 className="text-2xl font-bold font-headline text-primary">{programme.believeTitle}</h4>
                    <p className="text-muted-foreground">
                        <strong className="text-primary font-light">{programme.believeText_highlight}</strong>
                        <br />
                        {programme.believeText_rest}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FooterCard = () => {
    const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <div ref={ref} className={cn("bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center mt-12 md:mt-24 transition-all duration-1000 ease-in-out", isInView ? "animate-fade-in-up" : "opacity-0")}>
             <p className="text-lg md:text-xl max-w-4xl mx-auto">
             Prof. V. S. Raju Family Charitable Trust (VSRFCT) was founded in 2015 with an aim to improve quality of education in India. We believe that an educated person can lead a self-sustainable and respectful life and that it is our responsibility to support and uplift the people of our nation. We are making an essential and long-term investment for the future of our country. All our initiatives are sponsored by Prof. V. S. Raju Family.
            </p>
        </div>
    )
}

export default function Programmes() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="programmes" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("text-center mb-12 transition-opacity duration-1000", isInView ? "opacity-100" : "opacity-0")}>
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">
            OUR PROGRAMMES BUILD SELF-SUSTAINABLE LIVES
          </h2>
        </div>
        <div className="space-y-12 md:space-y-24">
            {programmes.map((prog, index) => (
                <ProgrammeSection key={index} programme={prog} index={index} />
            ))}
        </div>
        <FooterCard />
      </div>
    </section>
  );
}
