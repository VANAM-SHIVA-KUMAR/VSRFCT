'use client';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import EveningSchoolTeam from '@/components/sections/evening-school-team';

const TimelineItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="flex items-start mb-8">
        <div className="flex-shrink-0">
            <div
                className="bg-green-500 text-white font-bold py-2 px-4 relative text-center"
                style={{
                    width: '150px',
                    clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)'
                }}
            >
                {title}
            </div>
        </div>
        <div className="ml-8 text-lg">
            {children}
        </div>
    </div>
);

export default function EveningSchoolPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline">Evening School</h1>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 h-full w-0.5 bg-gray-300" style={{left: '2rem'}}></div>

            <div className="space-y-12">
                <TimelineItem title="Our Mission">
                    <p className="leading-relaxed">Our free tuition program for children from Class I to Class X is designed to enhance the quality of education for underprivileged students. We provide after-school assistance in all school subjects and strive to instill the values of honesty, cleanliness, and healthy habits. We maintain a teacher-student ratio of 1:10 to ensure every child gets the attention they deserve.</p>
                </TimelineItem>

                <TimelineItem title="The Transformation">
                     <p className="leading-relaxed">Before this program, many children would play on the streets after school, without discipline or guidance. Now, they come to our center clean, disciplined, and ready to learn. They have a safe and quiet place to study, with teachers to clear their doubts—a stark contrast to the conditions at home for many, where parents (mostly maids and casual laborers) lack the time and resources to help.</p>
                </TimelineItem>

                <TimelineItem title="Batches and Timings">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                        <div>
                            <h3 className="font-bold text-xl">Junior Batch (Class 1 to 4)</h3>
                            <p><strong>Timings:</strong> 4:30 PM to 6:30 PM</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Senior Batch (Class 5 to 10)</h3>
                            <p><strong>Timings:</strong> 6:00 PM to 8:00 PM</p>
                        </div>
                    </div>
                </TimelineItem>
                
                <TimelineItem title="Beyond Academics">
                   <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                        <li><strong>Cultural Activities & Trips:</strong> We celebrate Independence Day and hold an Annual Day in December. Senior students are taken on educational trips to places like Nehru Zoological Park, Salar Jung Museum, and Rashtrapati Bhavan.</li>
                        <li><strong>Extracurriculars:</strong> We offer classes in Yoga, Music, and Art for interested students.</li>
                        <li><strong>Empower Center:</strong> We run a program to impart basic Telugu reading and writing skills to underprivileged women. We also offer Spoken English classes via Skype with a volunteer from the U.S.</li>
                        <li><strong>Out of School Students Program:</strong> We provide basic life skills to school dropouts and guide those who are interested in rejoining the formal education system.</li>
                    </ul>
                </TimelineItem>
              </div>
          </div>
          <EveningSchoolTeam />
        </div>
      </main>
      <Footer />
    </div>
  );
}
