import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ChefHat, Utensils, Leaf, Star, Palette, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const areas = [
  {
    icon: Utensils,
    title: "Engenharia de Cardápio",
    desc: "Aplicamos a metodologia de engenharia de cardápio para classificar cada item pela sua popularidade e margem de contribuição, otimizando o mix de produtos.",
    items: [
      "Classificação de pratos: Estrelas, Cavalos de Batalha, Quebra-Cabeças e Cães",
      "Análise de margem de contribuição por item e por categoria",
      "Redesign visual do cardápio para direcionar a atenção do cliente",
      "Testes A/B de posicionamento e descrição de pratos",
    ],
  },
  {
    icon: Palette,
    title: "Design e Apresentação do Cardápio",
    desc: "O cardápio é a principal ferramenta de vendas de um restaurante. Trabalhamos na sua estrutura visual, linguagem e organização para maximizar conversões.",
    items: [
      "Layout estratégico com hierarquia visual clara e pontos focais",
      "Descrições gastronômicas que despertam desejo e justificam o preço",
      "Fotografia profissional de pratos que aumenta pedidos em até 30%",
      "Tipografia, cores e materiais alinhados à identidade do restaurante",
    ],
  },
  {
    icon: Leaf,
    title: "Tendências e Inovação Gastronômica",
    desc: "Mantemos seu cardápio atualizado com as tendências do mercado, sem perder a identidade e o DNA culinário do seu restaurante.",
    items: [
      "Incorporação de ingredientes sazonais e produção local",
      "Opções plant-based, sem glúten e para restrições alimentares",
      "Menus degustação e experiências gastronômicas temáticas",
      "Harmonização de pratos e bebidas para aumentar ticket médio",
    ],
  },
  {
    icon: TrendingUp,
    title: "Rentabilidade do Menu",
    desc: "Cada prato precisa ser um centro de lucro. Otimizamos fichas técnicas, porções e custos para garantir que cada item contribua para a rentabilidade.",
    items: [
      "Fichas técnicas padronizadas com custos precisos por porção",
      "Otimização de porções para equilíbrio entre satisfação e custo",
      "Redução de desperdício com aproveitamento integral de insumos",
      "Precificação baseada em valor percebido, não apenas em custo",
    ],
  },
];

const benefits = [
  { icon: Star, title: "Aumento do Ticket Médio", desc: "Estratégias de composição e sugestão de acompanhamentos elevam o valor médio de cada mesa." },
  { icon: ChefHat, title: "Identidade Culinária Forte", desc: "Menu coeso que reflete a proposta gastronômica e diferencia o restaurante no mercado." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Redução de desperdício com aproveitamento inteligente de insumos e sazonalidade." },
];

const EstrategiasMenuPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Consultoria Especializada</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Estratégias de Menu e Gastronomia
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            O cardápio é o coração do restaurante. Desenvolvemos menus estratégicos que encantam clientes, otimizam custos e maximizam a lucratividade de cada prato servido.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-warm-gold/20 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="text-warm-gold" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Áreas de Atuação</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Como Transformamos seu Cardápio</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {areas.map((a) => (
              <div key={a.title} className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <a.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{a.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.desc}</p>
                <ul className="space-y-2">
                  {a.items.map((item, i) => (
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
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Pronto para Reinventar seu Cardápio?</h2>
          <p className="text-accent-foreground/80 mb-8 text-base sm:text-lg">
            Descubra como um cardápio estratégico pode elevar a experiência do cliente e a lucratividade do seu restaurante.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Fale com um Especialista <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default EstrategiasMenuPage;
