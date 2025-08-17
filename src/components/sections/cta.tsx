import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-16 text-center shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Ready to Unlock Your Potential?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Join VSRFCT Tuition Centre today and take the first step towards academic excellence. Our expert tutors are ready to guide you on your journey to success.
          </p>
          <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
}
