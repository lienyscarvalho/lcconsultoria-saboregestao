import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Users, GraduationCap, MessageSquare, ShieldCheck, Clock, Award, ArrowRight, CheckCircle2 } from "lucide-react";

const programs = [
  {
    icon: MessageSquare,
    title: "Atendimento ao Cliente de Excelência",
    desc: "Capacitamos a equipe de salão para oferecer um atendimento memorável, que fideliza clientes e gera recomendações espontâneas.",
    topics: [
      "Técnicas de comunicação verbal e não-verbal com o cliente",
      "Resolução de conflitos e gestão de reclamações com empatia",
      "Protocolos de atendimento: da recepção à despedida do cliente",
      "Personalização do serviço e leitura das necessidades do cliente",
      "Simulações práticas com cenários reais do dia a dia",
    ],
  },
  {
    icon: GraduationCap,
    title: "Vendas e Upselling no Salão",
    desc: "Treinamento em técnicas de venda consultiva que aumentam o ticket médio sem pressionar o cliente, com foco em recomendações genuínas.",
    topics: [
      "Conhecimento profundo do cardápio: ingredientes, preparos e harmonizações",
      "Técnicas de sugestão natural de entradas, acompanhamentos e sobremesas",
      "Venda de bebidas especiais: vinhos, coquetéis e drinks autorais",
      "Gatilhos de urgência e exclusividade (pratos do dia, edições limitadas)",
      "Role-playing e prática com feedback imediato",
    ],
  },
  {
    icon: Users,
    title: "Liderança e Gestão de Equipe",
    desc: "Programa voltado para gerentes, chefs e supervisores que precisam liderar, motivar e desenvolver equipes de alta performance.",
    topics: [
      "Estilos de liderança adaptados ao contexto de food service",
      "Delegação eficaz de tarefas e empowerment da equipe",
      "Condução de reuniões produtivas (briefings e debriefings)",
      "Gestão de conflitos internos e mediação entre equipe",
      "Técnicas de feedback construtivo e avaliação de desempenho",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Higiene e Segurança Alimentar",
    desc: "Treinamento obrigatório e contínuo sobre boas práticas de manipulação, armazenamento e preparação de alimentos seguros.",
    topics: [
      "Normas da ANVISA e legislação vigente para food service",
      "Procedimentos Operacionais Padronizados (POPs) de higiene",
      "Controle de temperatura: recebimento, armazenamento e cocção",
      "Prevenção de contaminação cruzada e alergênicos",
      "Auditoria interna e check-lists de conformidade",
    ],
  },
  {
    icon: Clock,
    title: "Gestão de Tempo e Produtividade",
    desc: "Otimização do fluxo de trabalho para que a equipe entregue mais com menos estresse, tanto na cozinha quanto no salão.",
    topics: [
      "Organização de mise en place eficiente e padronizada",
      "Priorização de tarefas durante serviço de alta demanda",
      "Técnicas de setup e breakdown rápido entre turnos",
      "Coordenação entre cozinha e salão para reduzir tempo de espera",
      "Uso de checklists operacionais por turno e por função",
    ],
  },
  {
    icon: Award,
    title: "Cultura e Diversidade",
    desc: "Construção de um ambiente de trabalho inclusivo, respeitoso e colaborativo que retém talentos e melhora o clima organizacional.",
    topics: [
      "Sensibilização sobre diversidade e inclusão no ambiente de trabalho",
      "Comunicação não-violenta e respeito às diferenças",
      "Construção de cultura organizacional forte e valores compartilhados",
      "Programas de integração para novos colaboradores (onboarding)",
      "Estratégias de retenção de talentos e redução de turnover",
    ],
  },
];

const methodology = [
  { step: "01", title: "Diagnóstico de Competências", desc: "Avaliamos o nível atual da equipe através de observação in loco, entrevistas e análise de indicadores de desempenho." },
  { step: "02", title: "Programa Personalizado", desc: "Desenvolvemos um programa de treinamento sob medida, com módulos teóricos e práticos adaptados à realidade do restaurante." },
  { step: "03", title: "Execução e Prática", desc: "Workshops presenciais com simulações, role-playing e exercícios práticos que consolidam o aprendizado." },
  { step: "04", title: "Avaliação e Continuidade", desc: "Medição de resultados com KPIs de desempenho, feedback contínuo e plano de reciclagem periódica." },
];

const TreinamentoEquipesPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Consultoria Especializada</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Treinamento e Desenvolvimento de Equipes
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Equipes bem treinadas são o maior diferencial competitivo de um restaurante. Desenvolvemos programas completos que transformam colaboradores em profissionais de excelência.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">Nossa Metodologia</h2>
            <p className="text-primary-foreground/80 text-sm">Processo estruturado para resultados mensuráveis</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {methodology.map((m) => (
              <div key={m.step} className="border border-primary-foreground/20 rounded-lg p-6">
                <span className="text-warm-gold font-display text-2xl font-bold">{m.step}</span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-2">{m.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Programas</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Módulos de Treinamento</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <p.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={14} />
                      <span>{topic}</span>
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
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Invista no Maior Ativo do seu Restaurante</h2>
          <p className="text-accent-foreground/80 mb-8 text-base sm:text-lg">
            Capacite sua equipe e veja os resultados refletidos na satisfação dos clientes e no crescimento do negócio.
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

export default TreinamentoEquipesPage;
