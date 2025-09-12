
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Team from '@/components/sections/team';
import History from '@/components/sections/history';

export default function TelecomnagarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Team />
        <History />
      </main>
      <Footer />
    </div>
  );
}
