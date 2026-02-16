import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Contato</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fale Conosco
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Pronto para transformar seu restaurante? Entre em contato e descubra como podemos ajudar.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Informações</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-accent mt-1 shrink-0" size={18} />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">contato@saborgestao.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-accent mt-1 shrink-0" size={18} />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Telefone</p>
                      <p className="text-muted-foreground text-sm">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent mt-1 shrink-0" size={18} />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Endereço</p>
                      <p className="text-muted-foreground text-sm">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Redes Sociais</h3>
                <div className="flex items-center gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
                    <Instagram size={22} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
                    <Facebook size={22} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                    <Linkedin size={22} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="YouTube">
                    <Youtube size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1">Nome</label>
                  <input
                    id="name" type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background border border-input rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">Email</label>
                    <input
                      id="email" type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-background border border-input rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1">Telefone</label>
                    <input
                      id="phone" type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-background border border-input rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1">Mensagem</label>
                  <textarea
                    id="message" rows={5} required value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-background border border-input rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
                >
                  Enviar Mensagem <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
