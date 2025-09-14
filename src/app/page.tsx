import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import FounderSpotlight from '@/components/sections/founder-spotlight';
import Features from '@/components/sections/features';
import Curriculum from '@/components/sections/curriculum';
import Testimonials from '@/components/sections/testimonials';
import Faq from '@/components/sections/faq';
import Cta from '@/components/sections/cta';
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
