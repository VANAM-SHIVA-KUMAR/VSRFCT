
"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import About from '@/components/sections/about';
import VempaduTeam from '@/components/sections/vempadu-team';
import TelecomnagarTeam from '@/components/sections/team';
import KopalleTeam from '@/components/sections/kopalle-team';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <About />
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Vempadu Branch</h2>
          </div>
        </div>
        <VempaduTeam />
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Telecomnagar Branch</h2>
          </div>
        </div>
        <TelecomnagarTeam />
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Kopalle Branch</h2>
          </div>
        </div>
        <KopalleTeam />
      </main>
      <Footer />
    </div>
  );
}
