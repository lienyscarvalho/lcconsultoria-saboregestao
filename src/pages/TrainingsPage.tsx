import Layout from "@/components/Layout";
import { GraduationCap } from "lucide-react";

const trainings = [
  { title: "Atendimento ao Cliente", desc: "Qualidade do serviço, etiqueta, comunicação eficaz, resolução de conflitos e abordagem positiva.", pratica: "Simulações de situações de atendimento com clientes exigentes." },
  { title: "Vendas e Upselling", desc: "Técnicas para aumentar receita oferecendo produtos adicionais ou upgrades.", pratica: "Sugestões de venda com pratos do dia, sobremesas especiais ou bebidas exclusivas." },
  { title: "Higiene e Segurança Alimentar", desc: "Práticas seguras de manipulação de alimentos, controle de temperatura e prevenção de contaminação.", pratica: "Procedimentos de lavagem das mãos, uso de luvas e limpeza de áreas de preparação." },
  { title: "Técnicas de Cozinha", desc: "Aprimoramento das habilidades culinárias, novas técnicas e inovações no cardápio.", pratica: "Workshops práticos para aperfeiçoar técnicas de corte, cozimento e apresentação." },
  { title: "Gerenciamento de Inventário", desc: "Controle eficiente de estoque, minimizando desperdício e garantindo disponibilidade.", pratica: "Introdução de ferramentas de gestão de inventário em tempo real." },
  { title: "Liderança e Gestão de Equipe", desc: "Habilidades de liderança, motivação da equipe, delegação e resolução de conflitos.", pratica: "Workshops de feedback e técnicas de motivação para a equipe." },
  { title: "Gestão Financeira", desc: "Análise de custos, orçamento, lucratividade e otimização financeira.", pratica: "Simulações de ciclo de caixa e cálculo de margem de lucro em diferentes pratos." },
  { title: "Sistemas e Tecnologia", desc: "Uso eficaz de PDV, ferramentas de reserva, aplicativos de delivery e outras tecnologias.", pratica: "Treinamento hands-on nos sistemas utilizados pelo restaurante." },
  { title: "Gerenciamento de Tempo", desc: "Habilidades para gerenciar tempo, priorizar tarefas e manter ambiente organizado.", pratica: "Exercícios de priorização e organização do fluxo de trabalho." },
  { title: "Marketing e Relações Públicas", desc: "Promoção do restaurante, presença online, atração e retenção de clientes.", pratica: "Estratégias práticas de redes sociais e resposta a avaliações online." },
  { title: "Resolução de Problemas", desc: "Identificar problemas, analisar causas e implementar soluções colaborativas.", pratica: "Dinâmicas de grupo para análise de cenários e propostas de soluções." },
  { title: "Diversidade e Inclusão", desc: "Importância da diversidade, promovendo um ambiente inclusivo e respeitoso.", pratica: "Workshops de sensibilização e educação sobre diversidade no trabalho." },
];

const TrainingsPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Capacitação</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Treinamentos Especializados
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Programas personalizados para aprimorar habilidades, melhorar processos e garantir excelência em todas as áreas do restaurante.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((t) => (
              <div key={t.title} className="bg-card border border-border rounded-lg p-6 hover:border-accent/40 transition-colors flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="text-accent shrink-0" size={20} />
                  <h3 className="font-display text-base font-semibold text-foreground">{t.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{t.desc}</p>
                <div className="bg-secondary/60 rounded-md p-3">
                  <p className="text-xs font-semibold text-foreground mb-1">Exemplo Prático</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{t.pratica}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrainingsPage;
