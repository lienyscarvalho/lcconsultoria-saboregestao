import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Megaphone, Globe, Camera, Star, Heart, Share2, ArrowRight, CheckCircle2 } from "lucide-react";

const strategies = [
  {
    icon: Globe,
    title: "Presença Digital e Redes Sociais",
    desc: "Construímos uma presença online sólida e estratégica que transforma seguidores em clientes fiéis do seu restaurante.",
    items: [
      "Estratégia de conteúdo para Instagram, Facebook, TikTok e Google Meu Negócio",
      "Calendário editorial com temas sazonais, bastidores e storytelling",
      "Gestão de comunidade: respostas a comentários, DMs e avaliações",
      "Análise de métricas (alcance, engajamento, conversão) com relatórios mensais",
    ],
  },
  {
    icon: Camera,
    title: "Branding e Identidade Visual",
    desc: "Definimos e fortalecemos a identidade da marca do restaurante, criando uma imagem coesa que se destaca no mercado.",
    items: [
      "Desenvolvimento de identidade visual: logo, paleta de cores e tipografia",
      "Design de materiais: cardápio, embalagens, uniformes e ambientação",
      "Tom de voz e narrativa da marca alinhados ao público-alvo",
      "Posicionamento de marca: proposta de valor clara e diferenciada",
    ],
  },
  {
    icon: Megaphone,
    title: "Campanhas e Promoções",
    desc: "Planejamos e executamos campanhas promocionais que geram movimento, buzz e retorno financeiro mensurável.",
    items: [
      "Promoções estratégicas: happy hour, menus executivos, combos e festivais",
      "Lançamento de novos pratos e menus sazonais com eventos especiais",
      "Parcerias com influenciadores gastronômicos e food bloggers",
      "Campanhas de e-mail marketing e SMS para base de clientes",
    ],
  },
  {
    icon: Star,
    title: "Gestão de Reputação Online",
    desc: "Monitoramos e gerenciamos a reputação do restaurante nas principais plataformas de avaliação e redes sociais.",
    items: [
      "Monitoramento de avaliações no Google, TripAdvisor e iFood",
      "Protocolo de resposta para avaliações positivas e negativas",
      "Estratégias para aumentar o volume de avaliações positivas",
      "Gestão de crises de imagem e comunicação institucional",
    ],
  },
  {
    icon: Heart,
    title: "Fidelização e CRM",
    desc: "Implementamos programas de fidelidade e relacionamento que aumentam a recorrência e o valor vitalício do cliente.",
    items: [
      "Programas de pontos, cashback e benefícios para clientes frequentes",
      "Segmentação de clientes por frequência, ticket médio e preferências",
      "Comunicação personalizada em datas especiais (aniversários, datas comemorativas)",
      "Pesquisas de satisfação e NPS (Net Promoter Score) contínuos",
    ],
  },
  {
    icon: Share2,
    title: "Parcerias e Eventos",
    desc: "Desenvolvemos parcerias estratégicas e eventos que ampliam a visibilidade e atraem novos públicos para o restaurante.",
    items: [
      "Parcerias com empresas locais, hotéis e operadoras de turismo",
      "Organização de eventos temáticos: jantares harmonizados, cooking classes",
      "Participação em festivais gastronômicos e feiras do setor",
      "Co-branding com marcas complementares (bebidas, ingredientes premium)",
    ],
  },
];

const MarketingGastronomicoPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Consultoria Especializada</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Marketing Gastronômico
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Estratégias de marketing sob medida para restaurantes, desde a construção da marca até campanhas digitais que convertem seguidores em clientes recorrentes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "72%", label: "dos clientes", desc: "pesquisam online antes de escolher um restaurante" },
              { value: "90%", label: "dos millennials", desc: "experimentam restaurantes baseados em redes sociais" },
              { value: "3x", label: "mais retorno", desc: "clientes fidelizados gastam vs. novos clientes" },
              { value: "45%", label: "de aumento", desc: "no faturamento com marketing digital estruturado" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl sm:text-4xl font-bold text-warm-gold mb-1">{stat.value}</p>
                <p className="font-semibold text-sm mb-0.5">{stat.label}</p>
                <p className="text-primary-foreground/60 text-xs">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Estratégias</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Nossas Soluções de Marketing</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategies.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <s.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Quer Lotar seu Restaurante?</h2>
          <p className="text-accent-foreground/80 mb-8 text-base sm:text-lg">
            Descubra como uma estratégia de marketing bem estruturada pode transformar a visibilidade e o faturamento do seu restaurante.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Solicitar Proposta <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingGastronomicoPage;
