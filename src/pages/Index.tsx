import { Link } from "react-router-dom";
import { BookOpen, Users, TrendingUp, ChefHat, Target, Award, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-restaurant.jpg";
import kitchenImage from "@/assets/kitchen-team.jpg";

const services = [
  { icon: ChefHat, title: "Estratégias de Menu", desc: "Desenvolvimento de cardápios rentáveis e alinhados às tendências gastronômicas." },
  { icon: Users, title: "Gestão de Equipe", desc: "Treinamento e desenvolvimento de equipes de alta performance." },
  { icon: TrendingUp, title: "Gestão Financeira", desc: "Controle de custos e estratégias para maximizar a lucratividade." },
  { icon: Target, title: "Marketing", desc: "Estratégias de promoção e presença digital para atrair clientes." },
  { icon: BookOpen, title: "Operações", desc: "Otimização de processos e logística para uma operação eficiente." },
  { icon: Award, title: "Experiência do Cliente", desc: "Fidelização e excelência no atendimento ao cliente." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Restaurante sofisticado" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep-brown/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-warm-gold font-body text-sm sm:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Consultoria Especializada
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-cream leading-tight mb-6 animate-fade-in-up">
            A Arte de Sabor<br />
            <span className="italic font-medium">& Gestão</span>
          </h1>
          <p className="text-warm-cream/80 max-w-2xl mx-auto text-base sm:text-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Transformamos restaurantes em negócios de sucesso com estratégias personalizadas de gestão, operação e gastronomia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Nossos Serviços <ArrowRight size={16} />
            </Link>
            <Link
              to="/livro"
              className="inline-flex items-center justify-center gap-2 border border-warm-cream/40 text-warm-cream px-8 py-3 rounded-md font-semibold text-sm hover:bg-warm-cream/10 transition-colors"
            >
              Conheça o Livro
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">O que fazemos</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Áreas de Consultoria</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s) => (
              <div key={s.title} className="group bg-card rounded-lg p-6 sm:p-8 border border-border hover:border-accent/40 transition-colors">
                <s.icon className="text-accent mb-4" size={28} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/servicos" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline">
              Ver todos os serviços <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Sobre o livro</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Consultoria em Restaurantes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Um guia completo em 10 capítulos que aborda desde a introdução ao mundo da consultoria até estratégias avançadas de gestão financeira, marketing e experiência do cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ideal para consultores, gerentes e proprietários de restaurantes que buscam transformar seus negócios.
              </p>
              <Link
                to="/livro"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Explorar Capítulos <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={kitchenImage}
                alt="Equipe de cozinha profissional"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Pronto para Transformar seu Restaurante?</h2>
          <p className="text-primary-foreground/80 mb-8 text-base sm:text-lg">
            Entre em contato e descubra como podemos ajudar seu negócio a alcançar o próximo nível.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Fale Conosco <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
