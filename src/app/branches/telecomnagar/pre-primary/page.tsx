'use client';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import PrePrimaryTeam from '@/components/sections/pre-primary-team';

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

export default function PrePrimaryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline">Pre-Primary School</h1>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 h-full w-0.5 bg-gray-300" style={{left: '2rem'}}></div>

            <div className="space-y-12">
                <TimelineItem title="Our Vision">
                    <p className="leading-relaxed">To teach underprivileged children who are not able to attend the preprimary school.</p>
                </TimelineItem>

                <TimelineItem title="Our Goal">
                     <p className="leading-relaxed">Our main goal is to uplift the student’s knowledge by providing free preschool, by taking individual care of neat dressing and teaching them alphabets, Rhymes and basic knowledge of fruit names, vegetables, colour recognition etc for their age, in a homely atmosphere, So that they will get ready to go to the real school. We have provided first free medical check up to all the students in 2016. We have provided 2 computers in 2016. </p>
                </TimelineItem>

                <TimelineItem title="Our Mission">
                    <p className="leading-relaxed">To empower underprivileged children to reach their potential by 
                    <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                     <li> Providing after school assistance by teaching Rhymes, Slokas, Teaching Recognition of Alphabets, Numbers, Colours, Fruits, Vegetables, Days and Months, etc.</li>
                     <li> Access to educational Toys, Digital Classes.</li>
                     <li>	Instilling the values of Honesty, Cleanliness and Healthy habits.</li>
                     <li> Providing healthy snacks every day after class.</li>
                    </ul>
                    </p>
                </TimelineItem>

                <TimelineItem title="Intro">
                    <p className="leading-relaxed"></p>
                </TimelineItem>

                <TimelineItem title="Eligibility of Admission">
                   <p className="leading-relaxed">Admission is open to children above 3 years of age. Applicants must provide valid proof (Aadhar card and 2 passport-size photos). Only children who are not currently enrolled in any school are eligible.</p>
                </TimelineItem>

                <TimelineItem title="Teaching Method">
                   <p className="leading-relaxed"></p>
                </TimelineItem>
              </div>
          </div>
          <PrePrimaryTeam />
        </div>
      </main>
      <Footer />
    </div>
  );
}
