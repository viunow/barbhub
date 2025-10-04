import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Calendar,
  Users,
  Scissors,
  BarChart3,
  Clock,
  Smartphone,
} from "lucide-react";
import siteContent from "@/data/siteContent.json";

const iconMap = {
  Calendar,
  Users,
  Scissors,
  BarChart3,
  Clock,
  Smartphone,
};

export default function Features() {
  const { features } = siteContent;

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-barber-dark-lighter to-barber-dark relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-barber-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-barber-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-barber-secondary via-neutral-50 to-barber-secondary">
              {features.title}
            </span>
          </h2>
          <p className="text-lg text-barber-light/60 max-w-2xl mx-auto">
            {features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={index} className="group h-full">
                <Card className="h-full border-barber-secondary/20 hover:border-barber-secondary/40 transition-all duration-300 backdrop-blur-md bg-barber-light/5 hover:bg-barber-light/10 hover:shadow-xl hover:shadow-barber-secondary/10 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-barber-secondary/20 to-barber-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-barber-secondary" />
                    </div>
                    <CardTitle className="text-barber-light group-hover:text-barber-secondary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-barber-light/70">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
