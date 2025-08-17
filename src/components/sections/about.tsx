import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              The Best Tuition Centre in Hyderabad
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              VSRFCT Tuition Centre in Hyderabad is a premier institution catering primarily to CBSE, SSC, and ICSE students. Established to meet the rising demand for quality education, our centre has become a beacon of academic excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Students from across the city, including Gachibowli, Financial District, and Hitec City, benefit from our expert coaching. Conveniently located and equipped with a state-of-the-art digital classroom setup, VSRFCT is committed to providing quality education at an affordable price for an unparalleled learning experience.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Learn More</a>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Ankuram Tuition Centre classroom"
              data-ai-hint="modern classroom"
              width={600}
              height={450}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
