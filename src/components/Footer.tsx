import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">Sabor & Gestão</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Consultoria especializada em restaurantes. A arte de transformar sabor em resultados.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Início" },
                { to: "/livro", label: "O Livro" },
                { to: "/servicos", label: "Serviços" },
                { to: "/treinamentos", label: "Treinamentos" },
                { to: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/80 hover:text-warm-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Gestão Financeira</li>
              <li>Estratégias de Menu</li>
              <li>Treinamento de Equipe</li>
              <li>Marketing Gastronômico</li>
              <li>Operações e Logística</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contato@saborgestao.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Sabor & Gestão Consultoria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
