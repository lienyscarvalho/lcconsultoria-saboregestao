import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { DollarSign, TrendingUp, PieChart, BarChart3, Calculator, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: PieChart,
    title: "Análise de Custos",
    desc: "Mapeamento completo da estrutura de custos do restaurante, identificando custos fixos, variáveis e ocultos que impactam diretamente a margem de lucro.",
    items: [
      "Custo de Mercadoria Vendida (CMV) — análise detalhada por prato e categoria",
      "Custos de mão de obra direta e indireta com percentuais ideais",
      "Custos operacionais: energia, água, gás, manutenção e suprimentos",
      "Identificação de desperdícios e perdas em cada etapa da operação",
    ],
  },
  {
    icon: Calculator,
    title: "Precificação Estratégica",
    desc: "Desenvolvimento de uma política de preços que equilibre competitividade no mercado com rentabilidade sustentável para o negócio.",
    items: [
      "Cálculo de markup ideal considerando todos os custos envolvidos",
      "Análise de elasticidade de preço por categoria do cardápio",
      "Estratégias de ancoragem de preço para maximizar ticket médio",
      "Engenharia de cardápio: classificação de pratos por popularidade e lucratividade",
    ],
  },
  {
    icon: BarChart3,
    title: "Controle Orçamentário",
    desc: "Implementação de sistemas de orçamento e projeção financeira para garantir previsibilidade e saúde financeira do restaurante.",
    items: [
      "Elaboração de orçamento mensal e anual com metas realistas",
      "DRE (Demonstrativo de Resultados) gerencial adaptado para restaurantes",
      "Fluxo de caixa projetado com cenários otimista, realista e pessimista",
      "Indicadores-chave: ponto de equilíbrio, margem de contribuição, EBITDA",
    ],
  },
  {
    icon: TrendingUp,
    title: "Maximização de Receita",
    desc: "Estratégias comprovadas para aumentar o faturamento sem necessariamente aumentar o número de clientes.",
    items: [
      "Técnicas de upselling e cross-selling para equipe de salão",
      "Otimização do mix de vendas com foco em itens de alta margem",
      "Estratégias de precificação dinâmica para horários de pico e vale",
      "Programas de fidelidade e recorrência que aumentam o LTV do cliente",
    ],
  },
];

const kpis = [
  { label: "CMV Ideal", value: "28-35%", desc: "do faturamento bruto" },
  { label: "Custo de Mão de Obra", value: "25-30%", desc: "do faturamento bruto" },
  { label: "Margem Líquida", value: "10-15%", desc: "meta saudável para o setor" },
  { label: "Ticket Médio", value: "+15-25%", desc: "aumento potencial com consultoria" },
];

const process = [
  { step: "01", title: "Diagnóstico Financeiro", desc: "Análise completa das finanças atuais do restaurante: receitas, custos, margens, fluxo de caixa e indicadores de performance financeira." },
  { step: "02", title: "Mapeamento de Custos", desc: "Identificação detalhada de todos os custos diretos e indiretos, com classificação por natureza e análise de variações sazonais." },
  { step: "03", title: "Plano de Ação", desc: "Desenvolvimento de estratégias específicas para redução de custos, otimização de preços e aumento de receita com metas mensuráveis." },
  { step: "04", title: "Implementação e KPIs", desc: "Acompanhamento da execução com dashboards de indicadores financeiros, reuniões periódicas e ajustes contínuos baseados em dados." },
];

const GestaoFinanceiraPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Consultoria Especializada</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Gestão Financeira e Controle de Custos
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Transformamos a saúde financeira do seu restaurante com análises aprofundadas, controle rigoroso de custos e estratégias para maximizar a lucratividade de forma sustentável.
          </p>
        </div>
      </section>

      {/* KPIs */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">Indicadores-Chave do Setor</h2>
            <p className="text-primary-foreground/80 text-sm">Benchmarks financeiros para restaurantes bem gerenciados</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-warm-gold mb-1">{kpi.value}</p>
                <p className="font-semibold text-sm mb-0.5">{kpi.label}</p>
                <p className="text-primary-foreground/60 text-xs">{kpi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Nosso Método</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Pilares da Gestão Financeira</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <p.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.items.map((item, i) => (
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

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Etapas</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Como Trabalhamos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {process.map((item) => (
              <div key={item.step} className="bg-card border border-border rounded-lg p-6">
                <span className="text-accent font-display text-2xl font-bold">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Quer Melhorar a Rentabilidade do seu Restaurante?</h2>
          <p className="text-accent-foreground/80 mb-8 text-base sm:text-lg">
            Agende uma análise financeira e descubra oportunidades de economia e crescimento.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Solicitar Diagnóstico <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GestaoFinanceiraPage;
