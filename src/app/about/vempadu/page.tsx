
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import VempaduTeam from '@/components/sections/vempadu-team';

export default function VempaduPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-12 md:pt-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary mb-12">Vempadu Branch</h1>
        </div>
        <VempaduTeam />
        <div className="container mx-auto px-4 py-12 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary mb-4">Our History</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Information about the history of our Vempadu branch is coming soon. Please check back later.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
