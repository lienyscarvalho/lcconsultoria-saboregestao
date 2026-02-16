import Layout from "@/components/Layout";
import { ChefHat, Users, ClipboardList, Wine, DoorOpen, Sparkles, UserCog, Briefcase } from "lucide-react";

const roles = [
  {
    icon: Briefcase,
    title: "Gerente Geral",
    consultoria: "Orientação estratégica para gestão financeira, operações, marketing e atendimento ao cliente.",
    pratica: "Implementação de sistema de gestão de inventário para monitorar e controlar estoque, reduzindo custos de alimentos e bebidas.",
  },
  {
    icon: ChefHat,
    title: "Chef de Cozinha",
    consultoria: "Aprimorar técnicas de preparação, otimizar fluxo de trabalho, desenvolver novos menus e melhorar o controle de custos dos ingredientes.",
    pratica: "Treinamento da equipe em técnicas avançadas de culinária para aprimorar a qualidade e apresentação dos pratos.",
  },
  {
    icon: UserCog,
    title: "Sous Chef",
    consultoria: "Treinamento em liderança, supervisão, comunicação e coordenação entre a equipe de cozinha.",
    pratica: "Implementação de reuniões diárias para discutir cardápio do dia e garantir comunicação clara entre a equipe.",
  },
  {
    icon: ClipboardList,
    title: "Gerente de Operações",
    consultoria: "Implementação de sistemas eficientes de gestão operacional, otimização de processos e treinamento de equipe.",
    pratica: "Revisão do layout da cozinha e reorganização das estações de trabalho para melhorar a eficiência.",
  },
  {
    icon: Users,
    title: "Garçom / Garçonete",
    consultoria: "Treinamento em atendimento ao cliente, técnicas de venda sugestiva e gerenciamento de situações difíceis.",
    pratica: "Treinamento em técnicas de upselling para promover pratos especiais, aumentando o ticket médio.",
  },
  {
    icon: Sparkles,
    title: "Maître",
    consultoria: "Treinamento em liderança, gestão de equipe, organização e coordenação do serviço.",
    pratica: "Desenvolvimento de diretrizes para resolver problemas comuns e fornecer um serviço ao cliente mais coeso.",
  },
  {
    icon: Wine,
    title: "Bartender",
    consultoria: "Técnicas de mixologia avançadas, gestão de estoque de bebidas e criação de cardápio de bebidas atraente.",
    pratica: "Programa de degustação de bebidas para oferecer recomendações informadas aos clientes.",
  },
  {
    icon: DoorOpen,
    title: "Host / Hostess",
    consultoria: "Gerenciamento de reservas, filas e técnicas de recepção para uma experiência positiva desde a entrada.",
    pratica: "Implementação de sistema informatizado de reservas para gerenciar de forma mais eficiente.",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2">Nossos Serviços</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Consultoria por Função
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Soluções personalizadas para cada função do restaurante, visando eficiência operacional, satisfação do cliente e sucesso financeiro.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {roles.map((role) => (
              <div key={role.title} className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <role.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{role.title}</h3>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-1">Consultoria</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{role.consultoria}</p>
                </div>
                <div className="bg-secondary/60 rounded-md p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-1">Exemplo de Prática</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{role.pratica}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
