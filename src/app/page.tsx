import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import FounderSpotlight from '@/components/sections/founder-spotlight';
import Stats from '@/components/sections/stats';
import Features from '@/components/sections/features';
import Curriculum from '@/components/sections/curriculum';
import Testimonials from '@/components/sections/testimonials';
import Faq from '@/components/sections/faq';
import Cta from '@/components/sections/cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FounderSpotlight />
        <Stats />
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
