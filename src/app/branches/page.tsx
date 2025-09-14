
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import OurBranches from '@/components/sections/our-branches';
import BranchDetails from '@/components/sections/branch-details';
import VempaduTeam from '@/components/sections/vempadu-team';
import TelecomnagarTeam from '@/components/sections/team';
import KopalleTeam from '@/components/sections/kopalle-team';

export default function BranchesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <OurBranches />
        <BranchDetails />
        <div className="container mx-auto px-4 pt-12 md:pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Vempadu Branch</h2>
          </div>
        </div>
        <VempaduTeam />
        <div className="container mx-auto px-4 pt-12 md:pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Telecomnagar Branch</h2>
          </div>
        </div>
        <TelecomnagarTeam />
        <div className="container mx-auto px-4 pt-12 md:pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Kopalle Branch</h2>
          </div>
        </div>
        <KopalleTeam />
      </main>
      <Footer />
    </div>
  );
}
