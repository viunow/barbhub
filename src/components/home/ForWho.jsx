import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Store, User } from 'lucide-react';
import siteContent from '@/data/siteContent.json';

const iconMap = {
  Store,
  User
};

export default function ForWho() {
  const { forWho } = siteContent;

  return (
    <section className="py-20 bg-gradient-to-br from-barber-dark via-barber-dark-lighter to-barber-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-barber-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-barber-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-barber-light mb-4">
            {forWho.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Para Barbearias */}
          <div className="group">
            <Card className="border-2 border-barber-secondary/30 hover:border-barber-secondary/60 transition-all duration-300 backdrop-blur-md bg-barber-light/5 hover:bg-barber-light/10 hover:shadow-2xl hover:shadow-barber-secondary/20 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-barber-secondary/20 to-barber-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  {iconMap[forWho.barbershop.icon] &&
                    (() => {
                      const Icon = iconMap[forWho.barbershop.icon];
                      return <Icon className="w-8 h-8 text-barber-secondary" />;
                    })()
                  }
                </div>
                <CardTitle className="text-2xl text-barber-light">
                  {forWho.barbershop.title}
                </CardTitle>
                <CardDescription className="text-base text-barber-light/60">
                  {forWho.barbershop.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-barber-light/70">
                  {forWho.barbershop.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-barber-secondary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-barber-secondary hover:bg-barber-secondary/90 text-barber-dark shadow-lg shadow-barber-secondary/30 font-semibold">
                  <Link href={forWho.barbershop.button.link}>{forWho.barbershop.button.text}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Para Clientes */}
          <div className="group">
            <Card className="border-2 border-barber-accent/30 hover:border-barber-accent/60 transition-all duration-300 backdrop-blur-md bg-barber-light/5 hover:bg-barber-light/10 hover:shadow-2xl hover:shadow-barber-accent/20 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-barber-accent/20 to-barber-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  {iconMap[forWho.client.icon] &&
                    (() => {
                      const Icon = iconMap[forWho.client.icon];
                      return <Icon className="w-8 h-8 text-barber-accent" />;
                    })()
                  }
                </div>
                <CardTitle className="text-2xl text-barber-light">
                  {forWho.client.title}
                </CardTitle>
                <CardDescription className="text-base text-barber-light/60">
                  {forWho.client.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-barber-light/70">
                  {forWho.client.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-barber-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-barber-accent hover:bg-barber-accent/90 text-barber-light shadow-lg shadow-barber-accent/30 font-semibold">
                  <Link href={forWho.client.button.link}>{forWho.client.button.text}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
