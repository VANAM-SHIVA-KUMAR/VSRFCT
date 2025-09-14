
"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import About from '@/components/sections/about';
import VempaduTeam from '@/components/sections/vempadu-team';
import TelecomnagarTeam from '@/components/sections/team';
import KopalleTeam from '@/components/sections/kopalle-team';
import BranchDetails from '@/components/sections/branch-details';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <About />
        <BranchDetails />
        <TelecomnagarTeam />
        <VempaduTeam />
        <KopalleTeam />
      </main>
      <Footer />
    </div>
  );
}
