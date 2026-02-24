import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Settings, Truck, LayoutGrid, Timer, ClipboardCheck, Workflow, ArrowRight, CheckCircle2 } from "lucide-react";

const areas = [
  {
    icon: LayoutGrid,
    title: "Layout e Fluxo de Trabalho",
    desc: "Redesenhamos o layout da cozinha e do salão para otimizar o fluxo de trabalho, reduzir deslocamentos e aumentar a produtividade da equipe.",
    items: [
      "Análise ergonômica das estações de trabalho na cozinha",
      "Redesign do layout para fluxo unidirecional (recebimento → preparo → expedição)",
      "Otimização do salão: disposição de mesas para maximizar capacidade sem sacrificar conforto",
      "Mapeamento de pontos de congestionamento e propostas de solução",
    ],
  },
  {
    icon: Truck,
    title: "Gestão de Compras e Fornecedores",
    desc: "Estruturamos o processo de compras para garantir qualidade, preço competitivo e regularidade no abastecimento de insumos.",
    items: [
      "Cadastro e avaliação periódica de fornecedores (qualidade, preço, prazo)",
      "Negociação de contratos e condições comerciais vantajosas",
      "Planejamento de compras baseado em ficha técnica e previsão de demanda",
      "Sistema de cotação e aprovação de pedidos para controle financeiro",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Estoque e Inventário",
    desc: "Implementamos controles rigorosos de estoque para minimizar perdas, evitar rupturas e otimizar o capital de giro investido em insumos.",
    items: [
      "Inventário rotativo com contagens periódicas e reconciliação",
      "Sistema PVPS (Primeiro que Vence, Primeiro que Sai) para perecíveis",
      "Definição de estoque mínimo, máximo e ponto de reposição por item",
      "Relatórios de perdas, vencimentos e variações para tomada de decisão",
    ],
  },
  {
    icon: Timer,
    title: "Otimização de Processos",
    desc: "Mapeamos e otimizamos todos os processos operacionais para reduzir tempo, custo e retrabalho em cada etapa da operação.",
    items: [
      "Mapeamento de processos críticos: recebimento, preparo, serviço e fechamento",
      "Padronização com Procedimentos Operacionais Padrão (POPs) documentados",
      "Implementação de checklists por turno, função e área",
      "Indicadores de eficiência: tempo médio de preparo, tempo de mesa, giro de mesas",
    ],
  },
  {
    icon: Workflow,
    title: "Coordenação Cozinha-Salão",
    desc: "Melhoramos a comunicação e sincronização entre cozinha e salão para garantir um serviço fluido e tempos de espera adequados.",
    items: [
      "Sistema de comandas eficiente (digital ou otimizado)",
      "Protocolos de comunicação entre praça, expedição e garçons",
      "Gestão de picos de demanda com estratégias de escalonamento",
      "Briefings e debriefings diários para alinhamento da equipe",
    ],
  },
  {
    icon: Settings,
    title: "Manutenção e Equipamentos",
    desc: "Implementamos programas de manutenção preventiva para garantir o funcionamento contínuo dos equipamentos e reduzir custos com reparos.",
    items: [
      "Inventário de equipamentos com ficha técnica e histórico de manutenção",
      "Cronograma de manutenção preventiva para equipamentos críticos",
      "Treinamento da equipe sobre uso correto e conservação de equipamentos",
      "Planejamento de investimento em renovação e atualização tecnológica",
    ],
  },
];

const OperacoesLogisticaPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Consultoria Especializada</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Operações e Logística
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Uma operação eficiente é a base de um restaurante lucrativo. Otimizamos cada processo — do recebimento de insumos à entrega do prato na mesa — para uma operação suave e rentável.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "-30%", label: "Desperdício", desc: "redução média com gestão de estoque eficiente" },
              { value: "-25%", label: "Tempo de Espera", desc: "redução com otimização de fluxo de trabalho" },
              { value: "+20%", label: "Produtividade", desc: "aumento com layout e processos otimizados" },
              { value: "+15%", label: "Capacidade", desc: "aumento no giro de mesas com operação eficiente" },
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

      {/* Areas */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Áreas de Atuação</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Otimização Completa da Operação</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {areas.map((a) => (
              <div key={a.title} className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <a.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{a.title}</h3>
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
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Quer uma Operação mais Eficiente?</h2>
          <p className="text-accent-foreground/80 mb-8 text-base sm:text-lg">
            Deixe-nos analisar sua operação e identificar oportunidades de melhoria que impactam diretamente no resultado.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Agendar Diagnóstico <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default OperacoesLogisticaPage;
