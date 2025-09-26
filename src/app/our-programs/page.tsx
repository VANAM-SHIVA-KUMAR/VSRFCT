
"use client";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

const ProgramSection = ({
  id,
  title,
  description,
  images,
  reverse,
}: {
  id: string;
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className={`py-20 px-4 md:px-8`}
    >
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center justify-between ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-7/12 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl font-bold font-headline text-green-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className="md:w-5/12">
          {images.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`${title} image ${index + 1}`}
                width={600}
                height={450}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function OurPrograms() {
  const programs = [
    {
      id: "Swachh Bharat",
      title: "Swachh Bharat",
      description:
        "On 2nd October 2023, Gandhi Jayanti, Prime Minister Modi launched a big cleanliness drive under the Swachh Bharat Abhiyan. He requested every citizen to give one hour of shramdaan (voluntary cleaning work) for the country. The idea was that if everyone comes together for even a short time, India can become much cleaner. People from all walks of life — students, workers, leaders, celebrities, and common citizens — joined the campaign. This special drive showed that cleanliness is not only the government’s duty, but also the responsibility of each and every Indian.  So on the call of Prime Minister we the VSRFCT team the students and staff joined the hands and cleaned up the Telecomnagar colony.  Weekly once senior students did swach bharat program on Sunday morning for one hour in Gachibowli like cleaning up the plastic waste. After rainy season our students, cleaned up the unwanted weed and grass and big plants grown in the empty sites around the tuition campus.",
      images: [
        "/images/Hero/01.jpg",
      ],
    },
    {
      id: "Roshini Foundation",
      title: "Roshini Foundation (Mental Health)",
      description:
        "They run a helpline where trained volunteers listen to people in distress, especially those feeling suicidal or severely depressed . There is also a counselling centre with professionals (psychiatrists, psychologists, etc.) to help people recover and lead normal lives. ROSHINI conducted free workshop at our centre for students. It really helped for few students, by showing the solution for thieir problems facing at home. ",
      images: [
        "",
      ],
    },
    {
      id: " Empower Center",
      title: "Empower Center",
      description:
        "We have started Empower center in June 2019 to help underprivileged women, to impart basic Reading and Writing skills of Telugu. In June 4 members of watchman wife’s registered to learn. The program has been stopped in 2020 during pandemic.",
      images: [
        "",
      ],
    },
    {
      id: " Beyond Academics",
      title: "Beyond Academics",
      description:
        "The program is to help the children who dropped out in the middle of schooling and some students who didn’t go to school at all. Our goal is to provide the basic life skills for their daily living. If students are interested to go back to school, our teachers will help them to rejoin in school by guiding them. Students can be in different age groups. Every student situation varies. For some students we may suggest to write 10th exams privately. Currently no out of school children registered, but registrations are open. Twice a week, Monday and Friday 7pm to 8pm Spoken English classes are taken by Smt. Lakshmi from Seattle U.S. through skype. Currently 5 students enrolled.",
      images: [
        "/images/2016/IMG-20161028-WA0010.jpg",
      ],
    },
    {
      id: " During COVID 19",
      title: "During COVID 19",
      description:
        "From 16th March our tuition centre has been closed due to COVID 19.  Initially online classes were started for 10th class students of Academic year (2019-2020) from 16th May to 6th June 2020 as it was expected that Board exams will be conducted. All students have passed.  From 19th June, online classes have started for academic year (2020-2021) students.  Teachers and students are using smart phones to take classes.  Google meet is used for online classes. They are teaching all subjects chapter wise as taught in schools.  End of each chapter notes is given. Dictation, home work and chapter wise tests are conducted. Weekly once reading practice and Yoga is being done.  Whatsapp groups created for each class.  Teachers send, study material, worksheets and related links through whatsapp groups.  Teachers are motivating students to do other activities during their free time.  Students are sending their Home works and notes pictures through whatsapp.  Students are doing Gardening, Drawing, Cooking, Yoga, Essay writing etc and sending pictures.  Teachers fill attendance in excel sheets and send excel sheets through whats app.  Trust has given money for phone recharge to all students and staff after submitting their bill. Good improvement in children in terms of understanding online classes and working using technology. Students are enthusiastic in learning. Teachers are very dedicated. Attendance is 99% . ",
      images: [
        "/images/2021/20220105_170215.jpg",
      ],
    },
    {
      id: " Educational Exchange Program",
      title: "Educational Exchange Program",
      description:
        "On 12th January 2024, an Educational exchange program between Indian and United states Aviation and space Students has been taken place in our trust. The Students from both Nations greatly appreciated each of their skills and culture. We from VSRFCT provided participation certificate and a souvenir to the US space and Aviation students. They greatly appreciated our efforts.",
      images: [
        "",
      ],
    },
    {
      id: "After Covid Physical Classes",
      title: "After Covid Physical Classes",
      description:
        "Our tuition centre has reopened for physical classes on 1st September 2021for classes 7th to 10th.  We have started physical classes for preschool and Junior classes (class 1 to 6) from November 2021.  Before reopening the tuition centre we have done all the necessary repair works at centre like painting the walls, plumbing, carpeting, updating computers and clean up the centre.  According to the Covid protocol, we are followed all the safety precautions like daily sanitizing, wearing masks and distance maintenance in students seating.  Sanitizer is provided at tuition centre while entering the class. Masks are provided for physically attending students. Students attending tuition centre has got the parents willingness letter agreeing for Covid 19 rules, signed by their parents.  Note books are provided for all students. ",
      images: [
        "/images/Students/h.jpeg",
      ],
     },
     {
       id: "science-fair",
       title: "Science fair & Annual Day Celebrations",
       description:
         " A platform for our young scientists to showcase their innovative ideas and projects. The Science Fair is held along with our Annual Day celebrations (December), which include cultural performances and prize distribution. The December Science Fair and Annual Day Celebrations showcased students' creativity and innovation through exciting experiments and vibrant performances. The event fostered scientific curiosity and artistic expression, uniting the school community. Enthusiastic participation, colorful displays, and joyful celebrations made it a memorable highlight of the academic year.",
       images: [
         "/images/2024/IMG_20241202_190510.jpg",
       ],
     },
     {
       id: "Educational Field Trip",
       title: "Educational Field Trip",
       description:
         "We organize educational field trips to places of historical and scientific importance. These trips provide students with practical knowledge and a break from their regular classroom routine.",
       images: [
         "/images/2024/18f2cf62-6c49-4cf6-aa51-01448a0105be.jpg",
       ],
     },
     {
       id: "sports-day",
       title: "Sports Day",
       description:
         "Our annual Sports Day is a vibrant event that encourages physical fitness and sportsmanship. Students participate in various athletic events and team games.",
       images: [
        "/images/2017/IMG-20170416-WA0028.jpg",
       ],
     },
     {
       id: "Extracurricular Programs",
       title: "Extracurricular Programs",
       description:
         "Extra classes were conducted for 10Th standard students  from 8:00 to 9:30 pm – all subjects online classes from 5:00 to 6:00 am- Mathematics . 6:00 to 7:00 am – Hindi and Telugu . After completing their 10th final exams, our staff will help the students to prepare for the competitive exams and enterance tests like Navodaya, NMMS, Polytechnic and RJC set. Also, different proffesionals with great experience guide students on choosing a path for their further studies.  Specialized Teachers were appointed to take regular yoga, sports and music classes  ",
       images: [
        "/images/2019/IMG-20200129-WA0020.jpg",
       ],
      },
  ];

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="min-h-screen">
        <div className="bg-green-800 text-white py-20 px-4 md:px-8">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold font-headline mb-4"
            >
              Our Programs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg max-w-2xl mx-auto"
            >
              At VSRFCT, we believe in holistic development. Our programs are
              designed to provide a balanced mix of academic, co-curricular,
              and extracurricular activities.
            </motion.p>
          </div>
        </div>

        <div className="sticky top-0 bg-white z-10 shadow-md">
          <div className="container mx-auto py-4 px-4 md:px-8">
            <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
              {programs.map((program) => (
                <li key={program.id}>
                  <a
                    href={`#${program.id}`}
                    className="text-gray-700 hover:text-green-800 font-semibold transition-colors duration-300"
                  >
                    {program.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {programs.map((program, index) => (
            <ProgramSection
              key={program.id}
              id={program.id}
              title={program.title}
              description={program.description}
              images={program.images}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
