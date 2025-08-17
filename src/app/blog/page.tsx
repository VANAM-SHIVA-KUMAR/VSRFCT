import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Blog from '@/components/sections/blog';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
