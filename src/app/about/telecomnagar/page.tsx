
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Team from '@/components/sections/team';
import History from '@/components/sections/history';

export default function TelecomnagarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-12 md:pt-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary mb-12">Telecomnagar Branch</h1>
        </div>
        <Team />
        <History />
      </main>
      <Footer />
    </div>
  );
}
