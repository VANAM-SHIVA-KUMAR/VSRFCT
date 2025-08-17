import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Cta() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-16 text-center shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Ready to Give Your Child a Brighter Future?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Admissions are open for Government School children (Classes 1–10, State Syllabus). Join our non-profit initiative for free, high-quality tuition.
          </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="tel:+919866176486">Call +91 98661 76486</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/gallery">Gallery</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
