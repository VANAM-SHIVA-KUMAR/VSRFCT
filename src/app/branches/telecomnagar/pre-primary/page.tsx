'use client';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      ref={ref}
      className={cn(
        "py-12 md:py-16 transition-all duration-700 ease-in-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </section>
  );
};

export default function PrePrimaryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center pt-12 md:pt-24 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-green-900">Pre-Primary School</h1>
          </div>

          <Section>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">To empower underprivileged children from ages 3 to 5 by providing a nurturing and stimulating pre-school environment. We focus on instilling a love for learning and preparing them for a successful transition to primary school in a friendly and homely atmosphere.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">The Transformation</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Before we started the pre-school program, many of these children would play in the mud, with little attention to hygiene or timely meals. Now, parents give them a bath, dress them neatly, and send them to our center with a tiffin box. It's a transformation that goes beyond the classroom, instilling discipline and care from a young age.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">Our Curriculum</h2>
              <p className="text-lg text-gray-700 leading-relaxed">The focus is on teaching Alphabets, Numbers, English and Telugu Rhymes, Fruit names, names of days and months, educational games, and more. We use computers to show animated rhymes, making learning a fun and interactive experience.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">History and Growth</h2>
              <p className="text-lg text-gray-700 leading-relaxed">VSRFCT Pre-school started on June 5th, 2016 with 10 students and one teacher. By 2020, the program had grown to 22 children. We continue to provide foundational education to a growing number of children each year, with a dedicated nanny helper to assist in their care.</p>
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
