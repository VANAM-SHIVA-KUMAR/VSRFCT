
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function KopallePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary mb-4">Kopalle Branch</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Information about the staff and history of our Kopalle branch is coming soon. Please check back later.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
