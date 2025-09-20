
'use client'
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Faq from '@/components/sections/faq';

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
