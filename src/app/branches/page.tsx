
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import OurBranches from '@/components/sections/our-branches';

export default function BranchesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <OurBranches />
      </main>
      <Footer />
    </div>
  );
}

