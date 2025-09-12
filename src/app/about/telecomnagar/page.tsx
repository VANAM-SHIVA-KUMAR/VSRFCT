
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Team from '@/components/sections/team';
import History from '@/components/sections/history';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TelecomnagarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-12 md:pt-24 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <Button asChild variant="outline" size="icon">
              <Link href="/about/vempadu">
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Previous Branch</span>
              </Link>
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">Telecomnagar Branch</h1>
            <Button asChild variant="outline" size="icon">
              <Link href="/about/kopalle">
                <ArrowRight className="h-6 w-6" />
                <span className="sr-only">Next Branch</span>
              </Link>
            </Button>
          </div>
        </div>
        <Team />
        <History />
      </main>
      <Footer />
    </div>
  );
}
