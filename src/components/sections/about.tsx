import Image from 'next/image';

const founders = [
  {
    name: "Prof. V. S. Raju",
    title: "Former Director, IIT Delhi (1995-2000)",
    image: "/image.png",
    hint: "professional portrait",
    bio: [
      "Prof. V. S. Raju, a distinguished academician and visionary leader, has dedicated his life to the advancement of education and research in India. His illustrious career is marked by significant contributions to nation-building and shaping the future of engineering education.",
      "He began his academic journey at IIT Kharagpur, where he also served as Head of the Ocean Engineering Centre and Dean of Sponsored Research. As the Director of IIT Delhi, he spearheaded numerous initiatives that enhanced the institution's global standing.",
      "His leadership extended to various national committees and boards, reflecting his commitment to societal development. The VSRFCT Tuition Centre is a testament to his enduring vision of providing quality education to all, especially the underprivileged. Through the V.S. Raju Family Charitable Trust, he continues to inspire and empower the next generation."
    ]
  },
  {
    name: "Dr. V.R. Raju",
    title: "Professor of Practice, IIT Madras",
    image: "https://placehold.co/400x500.png",
    hint: "professional male portrait",
    bio: [
      "Dr. Raju studied Civil Engineering at the IIT Madras. He completed his Masters and Ph.D. in structural engineering in the US (Rice and Duke universities) and a doctorate in geotechnical engineering from Karlsruhe University in Germany.",
      "He has over 30 years of experience in the design and construction of foundations for major civil engineering projects worldwide. He was responsible for engineering, operations, equipment and sustainability at Keller and was a member of the Board.",
      "He is currently in the role of senior advisor, Sustainability, at Keller and is a Professor of Practice at IIT Madras in the department of civil engineering."
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline">About Our Founders</h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
              The driving forces behind our initiative.
            </p>
        </div>
        <div className="space-y-16">
          {founders.map((founder, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className={`md:col-span-4 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Image
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  data-ai-hint={founder.hint}
                  width={400}
                  height={500}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="md:col-span-8">
                <h3 className="text-3xl font-bold font-headline mb-4 text-primary">
                  {founder.name}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  <span className="font-semibold">{founder.title}</span>
                </p>
                {founder.bio.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
