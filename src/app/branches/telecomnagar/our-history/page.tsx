'use client';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const Section = ({ children, className, side }: { children: React.ReactNode, className?: string, side: 'left' | 'right' }) => {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={cn(
        "timeline-item",
        side,
        "transition-all duration-700 ease-in-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </div>
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

          <div className="timeline">
            <Section side="left">
              <div className="timeline-content bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2015: The Beginning</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>VSRFCT started with 14 students in classes 1 to 5, with one teacher in a small room.</li>
                  <li>The tuition center moved to a three-room, 1BHK independent house. Daily healthy snacks were also introduced. The number of students increased to 25, and there were four teachers.</li>
                  <li>The center improved the quality of its teaching by increasing the number of teachers and volunteers for subjects like English and Computer. They also held a parent-teacher meeting, inviting Central Bank officials to explain about savings and open accounts for all students. The center provided two computers, notebooks, and stationery. An annual day and a sports day were also held.</li>
                </ul>
              </div>
            </Section>

            <Section side="right">
              <div className="timeline-content bg-green-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2016: Expansion and New Initiatives</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>The center started enrolling kids up to class 8 and divided them into two batches: one for classes 1 to 5 and the second for classes 6 to 8.</li>
                  <li>A preschool started in the morning from 10 am to 12 pm with one teacher, a 'yamma,' and 10 students.</li>
                  <li>The number of students reached 45, with five teachers. The center also provided an internet connection to improve teaching quality.</li>
                </ul>
              </div>
            </Section>

            <Section side="left">
              <div className="timeline-content bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2017: Growth and a New Home</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>The tuition center moved to its current location in a three-bedroom flat. The student strength increased to 85. They continued to provide daily snacks, like bananas.</li>
                  <li>The preschool strength grew to 20 students with two teachers.</li>
                  <li>Students were taken to the Zoo Park for an educational trip.</li>
                </ul>
              </div>
            </Section>

            <Section side="right">
              <div className="timeline-content bg-green-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2018: Reaching a Milestone</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>The preschool student count increased to 25 with two teachers. The center provided teaching materials like charts, computers for rhymes, plastic vegetables, and colors.</li>
                  <li>The evening classes grew to 100 students for classes 1 through 10.</li>
                </ul>
              </div>
            </Section>

            <Section side="left">
              <div className="timeline-content bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2019: Academic Achievements and New Programs</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>The center introduced weekly yoga, music, art, and moral story classes.</li>
                  <li>A program for children who don't attend school was started with four students and one teacher.</li>
                  <li>Spoken English online classes began, taught by Mrs. Lakshmi from Seattle, U.S., via Skype from 7 pm to 8 pm.</li>
                  <li>The "Empower Centre for Women" was introduced to teach basic reading and writing skills to women in the mornings, starting with four women.</li>
                  <li>Students went on an educational trip to the Salarjung Museum.</li>
                </ul>
              </div>
            </Section>

            <Section side="right">
              <div className="timeline-content bg-green-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2020: Adapting to the Pandemic</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>Senior students went on an educational trip to Rashtrapati Bhavan in Bolaram, Hyderabad.</li>
                  <li>The tuition center closed its physical location due to COVID-19.</li>
                  <li>Online classes started with 42 students and four teachers using Google Meet and WhatsApp groups for coordination.</li>
                  <li>Teachers taught all subjects, conducted dictations, chapter-wise tests, and gave homework and notes. Students dropped off their notes at the center for teachers to pick up and correct.</li>
                  <li>Students were encouraged to stay motivated by continuing yoga, gardening, cooking, drawing, and essay writing. They posted their activities in their respective groups.</li>
                  <li>Online strength and quality of work increased by providing study materials, online worksheets, and links through WhatsApp.</li>
                  <li>The trust also provided mobile data charges for students.</li>
                </ul>
              </div>
            </Section>

            <Section side="left">
              <div className="timeline-content bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2021: Return to Physical Classes</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>The tuition center reopened for physical classes.</li>
                  <li>COVID-19 safety precautions were followed, including sanitizing, wearing masks, checking temperatures, and maintaining distance.</li>
                  <li>Students attending the center were required to have a willingness letter from their parents agreeing to the COVID-19 rules, signed by their parents.</li>
                </ul>
              </div>
            </Section>

            <Section side="right">
              <div className="timeline-content bg-green-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline text-green-800 mb-4">2022: Enhancing the Learning Environment</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>Monthly staff meetings with Prof. Raju Sir were held.</li>
                  <li>A smart TV with a high-speed internet connection was provided.</li>
                  <li>An AquaGuard water purifier was provided for quality drinking water.</li>
                  <li>A "Vidya Volunteer" was provided for Gachibowli School.</li>
                  <li>The center allowed old students to study there from 8 pm to 9 pm.</li>
                </ul>
              </div>
            </Section>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
