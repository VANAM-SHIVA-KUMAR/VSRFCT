import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import FounderSpotlight from '@/components/sections/founder-spotlight';
import Features from '@/components/sections/features';
import Programmes from '@/components/sections/programmes';
import Curriculum from '@/components/sections/curriculum';
import OurBranches from '@/components/sections/our-branches';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FounderSpotlight />
        <OurBranches />
        <Programmes />
        <Features />
        <Curriculum />
      </main>
      <Footer />
    </div>
  );
}
