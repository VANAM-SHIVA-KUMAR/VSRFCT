'use client';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import EveningSchoolTeam from '@/components/sections/evening-school-team';

export default function EveningSchoolPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center pt-12 md:pt-24 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold font-headline">Evening School</h1>
          </div>

          <section className="py-12 md:py-16">
            <div className="p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline mb-4">Our Goal</h2>
              <p className="text-lg leading-relaxed"></p>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">Our free tuition program for children from Class I to Class X is designed to enhance the quality of education for underprivileged students. We provide after-school assistance in all school subjects and strive to instill the values of honesty, cleanliness, and healthy habits. We maintain a teacher-student ratio of 1:10 to ensure every child gets the attention they deserve.</p>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed"></p>
            </div>
          </section>


          <section className="py-12 md:py-16">
            <div className="p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline mb-4">Eligibility of Admission</h2>
              <p className="text-lg leading-relaxed"></p>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline mb-4">Teaching Method</h2>
              <p className="text-lg leading-relaxed"></p>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline mb-4">Batches and Timings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                    <div>
                        <h3 className="font-bold text-xl">Junior Batch (Class 1 to 5)</h3>
                        <p><strong>Timings:</strong> 4:30 PM to 6:30 PM</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Senior Batch (Class 6 to 10)</h3>
                        <p><strong>Timings:</strong> 6:00 PM to 8:00 PM</p>
                    </div>
                </div>
            </div>
           </section>

          <section className="py-12 md:py-16">
            <div className="p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline mb-4">Beyond Academics</h2>
              <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                <li><strong>Cultural Activities & Trips:</strong> We celebrate Independence Day and hold an Annual Day in December. Senior students are taken on educational trips to places like Nehru Zoological Park, Salar Jung Museum, and Rashtrapati Bhavan.</li>
                <li><strong>Extracurriculars:</strong> We offer classes in Yoga, Music, and Art for interested students.</li>
                <li><strong>Empower Center:</strong> We run a program to impart basic Telugu reading and writing skills to underprivileged women. We also offer Spoken English classes via Skype with a volunteer from the U.S.</li>
                <li><strong>Out of School Students Program:</strong> We provide basic life skills to school dropouts and guide those who are interested in rejoining the formal education system.</li>
              </ul>
            </div>
          </section>
          <EveningSchoolTeam />
        </div>
      </main>
      <Footer />
    </div>
  );
}
