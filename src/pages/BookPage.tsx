import Layout from "@/components/Layout";
import bookCover from "@/assets/book-cover.jpg";
import { BookOpen } from "lucide-react";

const chapters = [
  { num: 1, title: "Introdução ao Mundo da Consultoria em Restaurantes", desc: "O que é consultoria em restaurantes, sua importância e as diferentes áreas que engloba." },
  { num: 2, title: "Preparando o Terreno para a Consultoria", desc: "Passos iniciais para iniciar um projeto de consultoria, incluindo análise do mercado e identificação das necessidades do cliente." },
  { num: 3, title: "Avaliação e Diagnóstico", desc: "Técnicas de avaliação e diagnóstico para identificar pontos fortes e fracos do restaurante, além de oportunidades de melhoria." },
  { num: 4, title: "Estratégias de Menu e Gastronomia", desc: "A importância do menu e das estratégias gastronômicas para atrair e manter os clientes, garantindo a rentabilidade." },
  { num: 5, title: "Gestão de Pessoas e Treinamento", desc: "Gestão de equipe, treinamento e desenvolvimento de habilidades para garantir um serviço de alta qualidade." },
  { num: 6, title: "Operações e Logística", desc: "Eficiência operacional, logística e fluxo de trabalho, otimizando processos para uma operação suave." },
  { num: 7, title: "Gestão Financeira e Controle de Custos", desc: "Controle financeiro, gestão de orçamento e estratégias para minimizar custos e maximizar lucros." },
  { num: 8, title: "Marketing e Estratégias de Promoção", desc: "Estratégias de marketing, presença online, branding, promoções e parcerias para aumentar a visibilidade." },
  { num: 9, title: "Gestão da Experiência do Cliente", desc: "Excelência na experiência do cliente, incluindo atendimento, feedback e fidelização." },
  { num: 10, title: "Sucesso Contínuo e Futuro da Consultoria", desc: "Insights sobre manter o sucesso a longo prazo e uma visão do futuro da consultoria em restaurantes." },
];

const BookPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">O Livro</p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Consultoria em Restaurantes — A Arte de Sabor e Gestão
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Um guia completo em 10 capítulos que cobre todas as áreas fundamentais da consultoria em restaurantes: do diagnóstico inicial ao sucesso contínuo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Voltado para profissionais que desejam dominar a arte de transformar restaurantes em negócios rentáveis e eficientes.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={bookCover} alt="Capa do livro Consultoria em Restaurantes" className="w-64 sm:w-72 rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Conteúdo</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">10 Capítulos Essenciais</h2>
          </div>
          <div className="space-y-4">
            {chapters.map((ch) => (
              <div key={ch.num} className="bg-card border border-border rounded-lg p-5 sm:p-6 flex gap-4 sm:gap-6 items-start hover:border-accent/40 transition-colors">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-display font-bold text-sm sm:text-base">{ch.num}</span>
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">{ch.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Metodologia</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Processo de Consultoria</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { step: "01", title: "Entendimento e Diagnóstico", desc: "Reuniões com proprietários e análise aprofundada da situação atual do restaurante." },
              { step: "02", title: "Planejamento e Estratégia", desc: "Plano de ação detalhado com KPIs e metas claras." },
              { step: "03", title: "Execução das Estratégias", desc: "Implementação colaborativa com treinamentos e workshops." },
              { step: "04", title: "Monitoramento e Ajustes", desc: "Acompanhamento contínuo com feedback e otimizações." },
            ].map((item) => (
              <div key={item.step} className="bg-card border border-border rounded-lg p-6">
                <span className="text-accent font-display text-2xl font-bold">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookPage;
