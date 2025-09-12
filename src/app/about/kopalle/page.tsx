
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import KopalleTeam from '@/components/sections/kopalle-team';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function KopallePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-12 md:pt-24 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <Button asChild variant="outline" size="icon">
              <Link href="/about/telecomnagar">
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Previous Branch</span>
              </Link>
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">Kopalle Branch</h1>
          </div>
        </div>
        <KopalleTeam />
        <div className="container mx-auto px-4 py-12 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary mb-4">Our History</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Information about the history of our Kopalle branch is coming soon. Please check back later.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
