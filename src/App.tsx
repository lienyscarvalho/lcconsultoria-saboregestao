import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookPage from "./pages/BookPage";
import ServicesPage from "./pages/ServicesPage";
import TrainingsPage from "./pages/TrainingsPage";
import ContactPage from "./pages/ContactPage";
import GestaoFinanceiraPage from "./pages/GestaoFinanceiraPage";
import EstrategiasMenuPage from "./pages/EstrategiasMenuPage";
import TreinamentoEquipesPage from "./pages/TreinamentoEquipesPage";
import MarketingGastronomicoPage from "./pages/MarketingGastronomicoPage";
import OperacoesLogisticaPage from "./pages/OperacoesLogisticaPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/livro" element={<BookPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/treinamentos" element={<TrainingsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/gestao-financeira" element={<GestaoFinanceiraPage />} />
          <Route path="/estrategias-menu" element={<EstrategiasMenuPage />} />
          <Route path="/treinamento-equipes" element={<TreinamentoEquipesPage />} />
          <Route path="/marketing-gastronomico" element={<MarketingGastronomicoPage />} />
          <Route path="/operacoes-logistica" element={<OperacoesLogisticaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
