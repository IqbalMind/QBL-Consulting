import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/QBLConsulting";
import AboutPage from "./pages/AboutPage";
import ServicesPage, {
  BusinessStrategyPage,
  DigitalTransformPage,
  OperationsPage,
  HumanCapitalPage,
} from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import InsightsPage from "./pages/InsightsPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Services overview */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Individual service pages */}
        <Route path="/services/business-strategy" element={<BusinessStrategyPage />} />
        <Route path="/services/digital-transformation" element={<DigitalTransformPage />} />
        <Route path="/services/operations-excellence" element={<OperationsPage />} />
        <Route path="/services/human-capital" element={<HumanCapitalPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Insights hub + article detail */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<CaseStudyDetailPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}