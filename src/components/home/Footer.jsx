import Link from "next/link";
import { Scissors } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-barber-dark text-barber-light/60 py-12 border-t border-barber-light/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-barber-light font-bold text-xl mb-4"
            >
              <Scissors className="w-6 h-6 text-barber-secondary" />
              BarbHub
            </Link>
            <p className="text-sm text-barber-light/50">
              Plataforma completa de gestão para barbearias modernas.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="font-semibold text-barber-light mb-4">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Preços
                </Link>
              </li>
              <li>
                <Link
                  href="#demo"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-barber-light mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-barber-light mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#help"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="hover:text-barber-secondary transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-barber-light/10 mt-8 pt-8 text-center text-sm text-barber-light/50">
          <p>
            &copy; {new Date().getFullYear()} BarbHub. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
