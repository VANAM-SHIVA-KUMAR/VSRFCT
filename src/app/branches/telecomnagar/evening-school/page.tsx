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

export default function EveningSchoolPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center pt-12 md:pt-24 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-green-900">Evening School</h1>
          </div>

          <Section>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Our free tuition program for children from Class I to Class X is designed to enhance the quality of education for underprivileged students. We provide after-school assistance in all school subjects and strive to instill the values of honesty, cleanliness, and healthy habits. We maintain a teacher-student ratio of 1:10 to ensure every child gets the attention they deserve.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">The Transformation</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Before this program, many children would play on the streets after school, without discipline or guidance. Now, they come to our center clean, disciplined, and ready to learn. They have a safe and quiet place to study, with teachers to clear their doubts—a stark contrast to the conditions at home for many, where parents (mostly maids and casual laborers) lack the time and resources to help.</p>
            </div>
          </Section>

          <Section>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">Batches and Timings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
                    <div>
                        <h3 className="font-bold text-xl text-green-700">Junior Batch (Class 1 to 4)</h3>
                        <p><strong>Timings:</strong> 4:30 PM to 6:30 PM</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-green-700">Senior Batch (Class 5 to 10)</h3>
                        <p><strong>Timings:</strong> 6:00 PM to 8:00 PM</p>
                    </div>
                </div>
            </div>
           </Section>

          <Section>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">Beyond Academics</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
                <li><strong>Cultural Activities & Trips:</strong> We celebrate Independence Day and hold an Annual Day in December. Senior students are taken on educational trips to places like Nehru Zoological Park, Salar Jung Museum, and Rashtrapati Bhavan.</li>
                <li><strong>Extracurriculars:</strong> We offer classes in Yoga, Music, and Art for interested students.</li>
                <li><strong>Empower Center:</strong> We run a program to impart basic Telugu reading and writing skills to underprivileged women. We also offer Spoken English classes via Skype with a volunteer from the U.S.</li>
                <li><strong>Out of School Students Program:</strong> We provide basic life skills to school dropouts and guide those who are interested in rejoining the formal education system.</li>
              </ul>
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
