import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Scissors, CalendarClock } from 'lucide-react';
import siteContent from '@/data/siteContent.json';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative bg-gradient-to-br from-barber-dark via-barber-dark-lighter to-barber-dark-card py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-barber-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-barber-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-barber-light mb-6">
            {hero.title} <span className="text-barber-secondary">{hero.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-barber-light/70 mb-8 max-w-2xl mx-auto">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-barber-secondary hover:bg-barber-secondary/90 text-barber-dark font-semibold shadow-xl shadow-barber-secondary/20">
              <Link href={hero.buttons.primary.link}>{hero.buttons.primary.text}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-barber-accent/50 text-barber-light hover:bg-barber-accent/10 backdrop-blur-sm">
              <Link href={hero.buttons.secondary.link}>{hero.buttons.secondary.text}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements - Barber themed */}
      <div className="absolute top-10 left-10 opacity-20">
        <Scissors className="w-24 h-24 text-barber-secondary rotate-45" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-15">
        <CalendarClock className="w-32 h-32 text-barber-secondary" />
      </div>
      <div className="absolute top-1/2 right-20 opacity-10">
        <Scissors className="w-16 h-16 text-barber-accent -rotate-12" />
      </div>
    </section>
  );
}
