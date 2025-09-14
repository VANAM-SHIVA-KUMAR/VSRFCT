import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import FounderSpotlight from '@/components/sections/founder-spotlight';
import Features from '@/components/sections/features';
import Curriculum from '@/components/sections/curriculum';
import Testimonials from '@/components/sections/testimonials';
import Faq from '@/components/sections/faq';
import Cta from '@/components/sections/cta';
import OurBranches from '@/components/sections/our-branches';
import BranchDetails from '@/components/sections/branch-details';
import Footer from '@/components/sections/footer';
import VempaduTeam from '@/components/sections/vempadu-team';
import TelecomnagarTeam from '@/components/sections/team';
import KopalleTeam from '@/components/sections/kopalle-team';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FounderSpotlight />
        <OurBranches />
        <BranchDetails />
        <div className="container mx-auto px-4 pt-12 md:pt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Vempadu Branch</h2>
          </div>
        </div>
        <VempaduTeam />
        <div className="container mx-auto px-4 pt-12 md:pt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Telecomnagar Branch</h2>
          </div>
        </div>
        <TelecomnagarTeam />
        <div className="container mx-auto px-4 pt-12 md:pt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Kopalle Branch</h2>
          </div>
        </div>
        <KopalleTeam />
        <Features />
        <Curriculum />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
