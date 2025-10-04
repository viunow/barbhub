"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-barber-light/10 bg-barber-dark/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-barber-light font-bold text-xl"
          >
            <Scissors className="w-6 h-6 text-barber-secondary" />
            BarbHub
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-barber-light/60 hover:text-barber-secondary transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#pricing"
              className="text-barber-light/60 hover:text-barber-secondary transition-colors"
            >
              Preços
            </Link>
            <Link
              href="#contact"
              className="text-barber-light/60 hover:text-barber-secondary transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="text-barber-light hover:text-barber-secondary hover:bg-barber-light/10"
            >
              <Link href="/auth/login">Entrar</Link>
            </Button>
            <Button
              asChild
              className="bg-barber-secondary hover:bg-barber-secondary/90 text-barber-dark font-semibold"
            >
              <Link href="/auth/register">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
