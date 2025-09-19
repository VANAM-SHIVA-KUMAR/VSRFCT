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

export default function OurHistoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center pt-12 md:pt-24 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-green-900">Our History</h1>
          </div>

          <Section>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2015: The Beginning</h2>
              <p className="text-lg text-gray-700 leading-relaxed">On January 1st, 2015, we started in a small room with 14 students and one teacher. By the end of the year, we had moved to a larger 1BHK space, grown to 20 students with 4 teachers, and introduced health camps, festival celebrations, and sports days. We also distributed new dresses for Ugadi, marking a year of significant growth and community building.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2016: Expansion and New Initiatives</h2>
              <p className="text-lg text-gray-700 leading-relaxed">In 2016, our student strength grew to 45. We launched our Pre-School program in June, providing foundational education to children aged 3 to 4.5. We also equipped the center with computers for interactive learning and distributed sweaters to students for Diwali, ensuring they were cared for during the colder months.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2017: Growth and a New Home</h2>
              <p className="text-lg text-gray-700 leading-relaxed">By 2017, we had 85 students and moved into a spacious 3BHK flat to accommodate our growing family. The evening tuition was split into junior and senior batches to provide more focused attention. We also organized a picnic to the Zoo, and launched the Empower Center to support underprivileged women.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2018: Reaching a Milestone</h2>
              <p className="text-lg text-gray-700 leading-relaxed">2018 was a landmark year as our student numbers reached 100. The team grew to 10 teachers, and the pre-school expanded to 25 children. This year solidified our presence in the community as a fast-growing and impactful educational trust.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2019: Academic Achievements and New Programs</h2>
              <p className="text-lg text-gray-700 leading-relaxed">In 2019, we celebrated our first batch of 10th-grade students graduating from our tuition center. We also saw two of our students qualify for the prestigious NMMS scholarship. We expanded our curriculum to include Yoga, Music, and Art classes, and launched the "Out of School Students Program" to help children who had dropped out of formal education.</p>
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
