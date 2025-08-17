import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline">About Our Founder</h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
              The driving force behind our initiative, Prof. V.S. Raju.
            </p>
        </div>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-4">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Prof. V. S. Raju"
              data-ai-hint="professional portrait"
              width={400}
              height={500}
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="md:col-span-8">
            <h3 className="text-3xl font-bold font-headline mb-4 text-primary">
              Prof. V. S. Raju
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-semibold">Former Director, IIT Delhi (1995-2000)</span>
            </p>
            <p className="text-muted-foreground mb-4">
              Prof. V. S. Raju, a distinguished academician and visionary leader, has dedicated his life to the advancement of education and research in India. His illustrious career is marked by significant contributions to nation-building and shaping the future of engineering education.
            </p>
            <p className="text-muted-foreground mb-4">
              He began his academic journey at IIT Kharagpur, where he also served as Head of the Ocean Engineering Centre and Dean of Sponsored Research. As the Director of IIT Delhi, he spearheaded numerous initiatives that enhanced the institution's global standing.
            </p>
            <p className="text-muted-foreground">
              His leadership extended to various national committees and boards, reflecting his commitment to societal development. The VSRFCT Tuition Centre is a testament to his enduring vision of providing quality education to all, especially the underprivileged. Through the V.S. Raju Family Charitable Trust, he continues to inspire and empower the next generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
