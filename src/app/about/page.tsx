import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import About from '@/components/sections/about';
import Team from '@/components/sections/team';
import History from '@/components/sections/history';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <About />
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="telecomnagar" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vempadu">Vempadu</TabsTrigger>
                <TabsTrigger value="telecomnagar">Telecomnagar</TabsTrigger>
                <TabsTrigger value="kopalle">Kopalle</TabsTrigger>
              </TabsList>
              <TabsContent value="vempadu">
                <div className="py-8 text-center">
                  <h3 className="text-2xl font-bold">Vempadu</h3>
                  <p className="text-muted-foreground">
                    Staff details and history for Vempadu will be added soon.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="telecomnagar">
                <Team />
                <History />
              </TabsContent>
              <TabsContent value="kopalle">
                <div className="py-8 text-center">
                  <h3 className="text-2xl font-bold">Kopalle</h3>
                  <p className="text-muted-foreground">
                    Staff details and history for Kopalle will be added soon.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
