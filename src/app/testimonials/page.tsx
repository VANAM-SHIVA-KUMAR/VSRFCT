
'use client'
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Testimonials from '@/components/sections/testimonials';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
