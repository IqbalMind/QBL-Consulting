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
import GenericPage from "./pages/GenericPage";

import PortfolioPage from "./pages/PortfolioPage";
import CareersPage from "./pages/CareersPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import SupportPage from "./pages/SupportPage";
import LegalPage from "./pages/LegalPage";

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

        {/* Industries generic pages */}
        <Route path="/industries/banking-and-finance" element={<GenericPage eyebrow="Industries" title="Banking & Finance" />} />
        <Route path="/industries/manufacturing" element={<GenericPage eyebrow="Industries" title="Manufacturing" />} />
        <Route path="/industries/healthcare" element={<GenericPage eyebrow="Industries" title="Healthcare" />} />
        <Route path="/industries/retail-and-fmcg" element={<GenericPage eyebrow="Industries" title="Retail & FMCG" />} />
        <Route path="/industries/logistics-and-transport" element={<GenericPage eyebrow="Industries" title="Logistics & Transport" />} />
        <Route path="/industries/telecoms-and-media" element={<GenericPage eyebrow="Industries" title="Telecoms & Media" />} />
        <Route path="/industries/technology" element={<GenericPage eyebrow="Industries" title="Technology" />} />
        <Route path="/industries/public-sector" element={<GenericPage eyebrow="Industries" title="Public Sector" />} />

        {/* Company & Support dedicated pages */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* Legal pages using the LegalPage template */}
        <Route path="/terms-and-conditions" element={
          <LegalPage
            title="Terms & Conditions"
            lastUpdated="October 1, 2023"
            sections={[
              { heading: "1. Agreement to Terms", content: ["By accessing our services, you agree to be bound by these terms."] },
              { heading: "2. Intellectual Property", content: ["All content, methodology, and collateral are intellectual property of QBL Consulting."] },
              { heading: "3. User Responsibilities", content: ["Clients must provide accurate data for our advisory services to be effective."] }
            ]}
          />
        } />
        <Route path="/privacy-policy" element={
          <LegalPage
            title="Privacy Policy"
            lastUpdated="November 15, 2023"
            sections={[
              { heading: "1. Data Collection", content: ["We collect information necessary to provide consulting services and improve our digital platforms."] },
              { heading: "2. Use of Information", content: ["Your information is used solely for the engagement and securely stored."] },
              { heading: "3. Data Sharing", content: ["We do not sell your personal data. We may share data with vetted third-party service providers essential to our operations."] }
            ]}
          />
        } />
        <Route path="/cookie-policy" element={
          <LegalPage
            title="Cookie Policy"
            lastUpdated="September 10, 2023"
            sections={[
              { heading: "1. What Are Cookies", content: ["Cookies are small text files placed on your device to help the site provide a better user experience."] },
              { heading: "2. How We Use Them", content: ["We use cookies to retain user preferences and provide anonymized tracking data to third-party applications like Google Analytics."] },
              { heading: "3. Managing Cookies", content: ["You can disable cookies in your browser settings, though this may affect site functionality."] }
            ]}
          />
        } />

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