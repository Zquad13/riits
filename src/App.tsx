import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import StepSchool from "./pages/StepSchool";
import Services from "./pages/Services";
import SpeechTherapy from "./pages/services/SpeechTherapy";
import OccupationalTherapy from "./pages/services/OccupationalTherapy";
import BehaviourTherapy from "./pages/services/BehaviourTherapy";
import ABATherapy from "./pages/services/ABATherapy";
import ClinicalPsychology from "./pages/services/ClinicalPsychology";
import SpecialEducation from "./pages/services/SpecialEducation";
import GroupTherapy from "./pages/services/GroupTherapy";
import Counselling from "./pages/services/Counselling";
import OnlineTherapy from "./pages/services/OnlineTherapy";
import AutismADHDSupport from "./pages/services/AutismADHDSupport";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/step-school" element={<StepSchool />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/speech-therapy" element={<SpeechTherapy />} />
          <Route path="/services/occupational-therapy" element={<OccupationalTherapy />} />
          <Route path="/services/behaviour-therapy" element={<BehaviourTherapy />} />
          <Route path="/services/aba-therapy" element={<ABATherapy />} />
          <Route path="/services/clinical-psychology" element={<ClinicalPsychology />} />
          <Route path="/services/special-education" element={<SpecialEducation />} />
          <Route path="/services/group-therapy" element={<GroupTherapy />} />
          <Route path="/services/counselling" element={<Counselling />} />
          <Route path="/services/online-therapy" element={<OnlineTherapy />} />
          <Route path="/services/autism-adhd-support" element={<AutismADHDSupport />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
