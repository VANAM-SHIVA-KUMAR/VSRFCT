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

const OurBranchActivities = () => (
    <div className="py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-center mb-12">Our Branch Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-4">Yoga</h3>
                    <img src="" alt="Yoga instructor" className="w-64 h-64 object-cover rounded-lg mb-4" />
                    <p className="text-lg text-center">Our students practice yoga to improve their physical and mental well-being, guided by our experienced yoga sir.</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-4">Physical Education</h3>
                    <img src="" alt="PT instructor" className="w-64 h-64 object-cover rounded-lg mb-4" />
                    <p className="text-lg text-center">Physical education is a key part of our curriculum, with our dedicated PT sir leading various exercises and sports.</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-4">Indoor Games</h3>
                    <img src="" alt="Indoor games" className="w-64 h-64 object-cover rounded-lg mb-4" />
                    <p className="text-lg text-center">We encourage indoor games like chess and puzzle-making to develop critical thinking and problem-solving skills.</p>
                </div>
            </div>
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
            <TimelineItem title="Intro">
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
                     <p className="leading-relaxed">Admission is open to students from 1st class to 10th class. Applicants must provide valid proof (Aadhar card and 2 passport-size photos).</p>
                </TimelineItem>

                <TimelineItem title="Teaching Method">
                     <p className="leading-relaxed"> Junior students are taught with activity-based methods to build strong fundamentals, while Senior students receive subject-wise, exam-focused coaching as per the State Syllabus Focused.</p>
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
                
                <TimelineItem title="Beyond Academics">
                   <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                        <li><strong>Cultural Activities & Trips:</strong> We celebrate Independence Day and hold an Annual Day in December. Senior students are taken on educational trips to places like Nehru Zoological Park, Salar Jung Museum, and Rashtrapati Bhavan.</li>
                        <li><strong>Extracurriculars:</strong> We offer classes in Yoga, Music, and Art for interested students.</li>
                        <li><strong>Empower Center:</strong> We run a program to impart basic Telugu reading and writing skills to underprivileged women. We also offer Spoken English classes via Skype with a volunteer from the U.S.</li>
                        <li><strong>Out of School Students Program:</strong> We provide basic life skills to school dropouts and guide those who are interested in rejoining the formal education system.</li>
                    </ul>
                </TimelineItem>

                <TimelineItem title="Occupation of Students Parents">
                   <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                   <li><strong>Mothers:</strong> 99% Maids.</li>
                   <li><strong>Fathers:</strong> 75% Casual Labours, 25% Watchmens.</li>
                   </ul>
                </TimelineItem>

              </div>
          </div>
          <OurBranchActivities />
          <EveningSchoolTeam />
        </div>
      </main>
      <Footer />
    </div>
  );
}
