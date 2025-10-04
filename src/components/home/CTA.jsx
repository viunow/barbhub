import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import siteContent from "@/data/siteContent.json";

export default function CTA() {
  const { cta } = siteContent;

  return (
    <section className="py-20 bg-gradient-to-br from-barber-dark via-barber-dark-lighter to-barber-dark-card relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-barber-secondary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-barber-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Glassmorphism container */}
          <div className="backdrop-blur-xl bg-barber-light/5 rounded-3xl p-10 md:p-14 border border-barber-light/10 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-barber-light via-barber-secondary to-barber-light">
                {cta.title}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-barber-light/70 mb-8">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-barber-secondary to-yellow-500 hover:from-barber-secondary/90 hover:to-yellow-500/90 text-barber-dark font-semibold shadow-2xl shadow-barber-secondary/30 hover:scale-105 transition-transform duration-300"
              >
                <Link href={cta.button.link}>
                  {cta.button.text}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-barber-light/60 mt-6 backdrop-blur-sm bg-barber-light/5 rounded-full py-2 px-4 inline-block">
              {cta.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
