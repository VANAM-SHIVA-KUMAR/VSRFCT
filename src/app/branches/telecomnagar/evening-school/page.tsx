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
            <TimelineItem title="Introduction">
                    <p className="leading-relaxed">VSRFCT Evening School has started free tuitions on January 1st 2015 with 14 students in Telecom Nagar. Currently there are 100 Students and 10 Teachers.</p>
                </TimelineItem>
                
                <TimelineItem title="Our Goal">
                    <p className="leading-relaxed">Our main goal is to uplift the student’s knowledge by providing free evening tuitions, by taking individual care, teach them all their school subjects, General knowledge, Honesty, sharing and other activities liker music, art and craft, Yoga, moral stories etc . Provide for student needs like books and stationary.</p>
                </TimelineItem>

                <TimelineItem title="Our Mission ">
                     <p className="leading-relaxed">To empower underprivileged children to reach their potential by 
                     <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                     <li> Providing after school assistance by teaching English, Telugu, Science, Maths and General knowledge.</li>
                     <li> Access to books, Computers and other educational material.</li>
                     <li>Instilling the values of Honesty, Cleanliness and Healthy habits.</li>
                     <li>Providing healthy snacks every day after class.</li>
                     </ul>
                     </p>
                </TimelineItem>

                <TimelineItem title="Our Vision ">
                     <p className="leading-relaxed">To teach underprivileged children who are studying in government school, years of up to 10th standard. </p>
                </TimelineItem>

                <TimelineItem title="Eligibility of Admission ">
                     <p className="leading-relaxed">Admissions are open to Government School going students from 1st class to 10th class . Applicants must provide valid proof (Aadhar card and 2 passport-size photos).</p>
                </TimelineItem>

                <TimelineItem title="Batches and Timings">
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
                </TimelineItem>

                <TimelineItem title="Daily Routine">
                     <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                        <li>Biscuits are provided to the Junior batch at 4:30 PM.</li>
                        <li>A snack is provided for both batches between 6:15 PM and 6:30 PM.</li>
                        <li>We conduct tests, dictation of new words, and reading practice twice a week to ensure continuous improvement.</li>
                     </ul>
                </TimelineItem>

                <TimelineItem title="Weekly Activities">
                     <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                        <li>Yoga classes are held once a week for both junior and senior batches.</li>
                        <li>Music classes are held once a week, with 17 children participating.</li>
                     </ul>
                </TimelineItem>
                <TimelineItem title="Occupation of Students Parents">
                   <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                   <li><strong>Mothers:</strong> 99% Maids.</li>
                   <li><strong>Fathers:</strong> 75% Casual Labours, 25% Watchmens.</li>
                   </ul>
                </TimelineItem>
                
                <TimelineItem title="Monthly & Annual Events">
                   <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                        <li>Art classes are held once a month for interested students (currently 20).</li>
                        <li>A medical checkup for all students is conducted in August.</li>
                        <li>We celebrate Independence Day on August 15th and present gifts to merit students who have scored above 75% in their final school exams.</li>
                    </ul>
                </TimelineItem>
                
                <TimelineItem title="Beyond Academics">
                   <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                        <li><strong>Cultural Activities & Trips:</strong> We celebrate Independence Day and hold an Annual Day in December. Senior students are taken on educational trips to places like Nehru Zoological Park, Salar Jung Museum, and Rashtrapati Bhavan.</li>
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
