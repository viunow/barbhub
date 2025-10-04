import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ForWho from '@/components/home/ForWho';
import CTA from '@/components/home/CTA';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ForWho />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
