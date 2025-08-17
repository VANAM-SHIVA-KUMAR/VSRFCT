import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Stats from '@/components/sections/stats';
import Features from '@/components/sections/features';
import About from '@/components/sections/about';
import Team from '@/components/sections/team';
import Gallery from '@/components/sections/gallery';
import Curriculum from '@/components/sections/curriculum';
import Testimonials from '@/components/sections/testimonials';
import Faq from '@/components/sections/faq';
import Blog from '@/components/sections/blog';
import Cta from '@/components/sections/cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Features />
        <About />
        <Team />
        <Curriculum />
        <Gallery />
        <Testimonials />
        <Faq />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
