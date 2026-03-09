import { useState } from "react";
import {
    TrendingUp, Monitor, Settings, Briefcase, CheckCircle2, ArrowRight,
    BarChart3, LineChart, Globe, Layers, Users, RefreshCw, Cpu,
    ShieldCheck, Lightbulb, Zap, Target, Clock, Star, ChevronRight
} from "lucide-react";
import { GlobalStyles, Navbar, Footer, PageHero, CtaStrip, RevealOnScroll } from "../shared/Layout";
import useSEO from "../hooks/useSEO";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SERVICES_DETAIL = [
    {
        id: "business-strategy",
        icon: TrendingUp,
        title: "Business Strategy",
        tagline: "Navigate complexity. Seize opportunity. Lead markets.",
        color: "from-blue-500 to-blue-700",
        accent: "#3b82f6",
        heroImg: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
        overview: "In an increasingly volatile business environment, strategy is the difference between leading the market and following it. Our Business Strategy practice helps leadership teams cut through noise, identify true sources of competitive advantage, and build executable roadmaps that deliver measurable outcomes.",
        offerings: [
            { icon: TrendingUp, title: "Market Expansion", desc: "Identify and validate new markets, geographies, and customer segments with rigorous demand analysis." },
            { icon: BarChart3, title: "M&A Advisory", desc: "End-to-end support across target identification, due diligence, valuation, and post-merger integration." },
            { icon: LineChart, title: "Financial Restructuring", desc: "Stabilize and optimize capital structure, cash flow, and financial performance under pressure." },
            { icon: Globe, title: "Go-to-Market Strategy", desc: "Define your positioning, channel mix, pricing, and launch sequencing to maximize market penetration." },
            { icon: Target, title: "Corporate Portfolio Mgmt", desc: "Optimize your business unit portfolio for long-term value creation and strategic coherence." },
            { icon: Layers, title: "Competitive Intelligence", desc: "Deep competitor mapping, benchmarking, and strategic positioning to sharpen your edge." },
        ],
        process: [
            { step: "01", title: "Discovery & Diagnosis", desc: "We immerse ourselves in your business — financials, operations, market position, culture — to build a complete picture." },
            { step: "02", title: "Strategic Options", desc: "We develop and stress-test multiple strategic scenarios, assessing risk, return, and fit with your capabilities." },
            { step: "03", title: "Roadmap Development", desc: "We co-create a clear, prioritized 12–36 month roadmap with milestones, owners, and success metrics." },
            { step: "04", title: "Execution Support", desc: "We stay alongside your team through implementation, adapting the plan as conditions evolve." },
        ],
        outcomes: ["Average 28% revenue growth within 18 months", "3× faster decision-making at the C-suite level", "40% improvement in strategic alignment across business units"],
        testimonial: { name: "Ahmad Rizal", role: "CEO, Nexus Group", text: "Their strategic advisory helped us expand into 3 new markets with minimal risk exposure. The roadmap was clear, actionable, and actually delivered." },
    },
    {
        id: "digital-transformation",
        icon: Monitor,
        title: "Digital Transformation",
        tagline: "Modernize. Integrate. Accelerate.",
        color: "from-violet-500 to-violet-700",
        accent: "#8b5cf6",
        heroImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        overview: "Digital transformation is not just about technology — it's about reimagining how your business creates value. We guide enterprises through the full transformation lifecycle: from technology assessment and architecture design through to ERP implementation, cloud migration, and building the digital culture to sustain it all.",
        offerings: [
            { icon: Cpu, title: "Tech Stack Audits", desc: "Comprehensive assessment of your current technology landscape with actionable modernization recommendations." },
            { icon: Layers, title: "ERP Implementation", desc: "End-to-end SAP, Oracle, and Microsoft Dynamics implementations tailored to your industry requirements." },
            { icon: Globe, title: "Cloud Migration", desc: "Phased migration to AWS, Azure, or GCP with zero-downtime strategy and security-first architecture." },
            { icon: Zap, title: "API & Integration", desc: "Build seamless data flows between legacy systems, SaaS tools, and new digital platforms." },
            { icon: BarChart3, title: "Data & BI Platforms", desc: "Implement real-time analytics dashboards and enterprise data warehouses to drive informed decisions." },
            { icon: ShieldCheck, title: "Cybersecurity Advisory", desc: "Harden your digital infrastructure against threats while maintaining operational agility." },
        ],
        process: [
            { step: "01", title: "Tech Audit & Roadmap", desc: "We assess your current state — systems, data, talent, culture — and design a transformation roadmap with clear ROI." },
            { step: "02", title: "Architecture Design", desc: "We define your target technology architecture: scalable, secure, and aligned with your business model." },
            { step: "03", title: "Phased Implementation", desc: "We execute in value-delivering sprints, ensuring every phase generates measurable business benefit." },
            { step: "04", title: "Capability Building", desc: "We train your people, embed new ways of working, and hand off fully with ongoing support options." },
        ],
        outcomes: ["60% reduction in manual processing time", "35% lower IT infrastructure costs post-migration", "Real-time visibility across all business operations"],
        testimonial: { name: "Sarah Chen", role: "CTO, TechCorp Asia", text: "QBL transformed our entire digital infrastructure in just 6 months. What set them apart was their ability to bring the business and IT teams together around a shared vision." },
    },
    {
        id: "operations-excellence",
        icon: Settings,
        title: "Operations Excellence",
        tagline: "Eliminate waste. Accelerate flow. Maximize output.",
        color: "from-amber-500 to-orange-600",
        accent: "#f59e0b",
        heroImg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        overview: "Operational excellence is the relentless pursuit of efficiency, quality, and speed across every part of your organization. Our Operations practice applies Lean, Six Sigma, and agile methodologies to eliminate bottlenecks, reduce costs, and build the operational muscle to sustain performance improvements long after we've left.",
        offerings: [
            { icon: RefreshCw, title: "Supply Chain Optimization", desc: "End-to-end supply chain redesign — from demand forecasting through to last-mile delivery efficiency." },
            { icon: Cpu, title: "Process Automation", desc: "Identify and automate high-volume, repetitive processes using RPA, AI, and workflow tools." },
            { icon: ShieldCheck, title: "Quality Assurance", desc: "Implement ISO-aligned quality management systems and continuous improvement frameworks." },
            { icon: BarChart3, title: "Cost Reduction Programs", desc: "Structured cost takeout initiatives targeting overhead, procurement, and operational waste." },
            { icon: Zap, title: "Lean Transformation", desc: "Build a lean operating culture with value stream mapping, 5S, kaizen, and visual management." },
            { icon: Target, title: "KPI & Performance Mgmt", desc: "Design and implement OKR and KPI frameworks that align team performance with strategic goals." },
        ],
        process: [
            { step: "01", title: "Current State Analysis", desc: "We map your processes, measure performance baselines, and identify the biggest value-capture opportunities." },
            { step: "02", title: "Future State Design", desc: "We co-design the optimized operating model with your team — process maps, technology requirements, org changes." },
            { step: "03", title: "Rapid Improvement Pilots", desc: "We run targeted pilots to prove the improvement thesis before scaling, reducing risk and building momentum." },
            { step: "04", title: "Scale & Sustain", desc: "We roll out improvements across the organization and embed governance to sustain the gains." },
        ],
        outcomes: ["Average 40% reduction in operational costs", "50% faster end-to-end process cycle times", "Quality defect rates reduced by up to 70%"],
        testimonial: { name: "Maria Santos", role: "COO, GlobalSys", text: "The operations optimization alone saved us 40% in annual costs. The team was thorough, pragmatic, and never lost sight of the practical realities of our operations." },
    },
    {
        id: "human-capital",
        icon: Briefcase,
        title: "Human Capital",
        tagline: "Build leaders. Shape culture. Unlock potential.",
        color: "from-emerald-500 to-teal-600",
        accent: "#10b981",
        heroImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        overview: "Your people are your most valuable and most complex asset. Our Human Capital practice helps organizations build the leadership pipelines, organizational structures, and cultural foundations required to attract, develop, and retain the talent needed to execute strategy in the modern era.",
        offerings: [
            { icon: Users, title: "Change Management", desc: "Structured change programs that build employee buy-in, reduce resistance, and accelerate adoption." },
            { icon: Star, title: "Leadership Development", desc: "Custom leadership academies, executive coaching, and succession planning for senior and mid-level leaders." },
            { icon: Layers, title: "Organizational Design", desc: "Restructure your org for clarity, agility, and strategic alignment — from spans of control to role design." },
            { icon: Target, title: "Talent Strategy", desc: "Build a future-ready talent pipeline with workforce planning, skills mapping, and acquisition strategies." },
            { icon: BarChart3, title: "HR Analytics", desc: "Deploy people analytics to drive evidence-based decisions on talent, retention, and performance." },
            { icon: Lightbulb, title: "Culture Transformation", desc: "Define, measure, and shape organizational culture to support your strategic priorities." },
        ],
        process: [
            { step: "01", title: "Org & Culture Diagnosis", desc: "We assess your organization's design, leadership capability, culture, and talent landscape against strategic needs." },
            { step: "02", title: "Strategy & Design", desc: "We develop the target org model, leadership framework, and change management plan with your HR and leadership team." },
            { step: "03", title: "Program Delivery", desc: "We design and facilitate leadership programs, change initiatives, and capability-building interventions." },
            { step: "04", title: "Embed & Measure", desc: "We track people metrics, adjust programs based on data, and transfer capability to your internal HR team." },
        ],
        outcomes: ["45% improvement in employee engagement scores", "60% faster leadership bench strength development", "30% reduction in high-performer attrition"],
        testimonial: { name: "Dewi Rahayu", role: "CHRO, AeroSpace Indonesia", text: "The change management program was the difference between our digital transformation succeeding or failing. QBL's human capital team understood that technology alone doesn't transform organizations — people do." },
    },
];

// ─── OVERVIEW PAGE ────────────────────────────────────────────────────────────

function ServicesOverview({ onSelect }) {
    return (
        <>
            <PageHero
                eyebrow="Our Services"
                title="Advisory Built for"
                highlight="Real Business Results"
                subtitle="Four integrated practice areas designed to address the most complex challenges facing enterprise leaders in Indonesia and Southeast Asia."
            />

            {/* Services grid */}
            <section className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900">Our Practice Areas</h2>
                        <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SERVICES_DETAIL.map((s, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-pointer"
                                    onClick={() => onSelect(s.id)}>
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={s.heroImg} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                        <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-xl`}>
                                            <s.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="disp text-2xl font-black text-slate-900 mb-2">{s.title}</h3>
                                        <p className="text-sm font-semibold mb-4" style={{ color: s.accent }}>{s.tagline}</p>
                                        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">{s.overview}</p>
                                        <div className="grid grid-cols-2 gap-2 mb-6">
                                            {s.offerings.slice(0, 4).map((o, j) => (
                                                <div key={j} className="flex items-center gap-2 text-xs text-slate-600">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />{o.title}
                                                </div>
                                            ))}
                                        </div>
                                        <button className="flex items-center gap-2 font-bold text-sm group/btn" style={{ color: s.accent }}
                                            onClick={(e) => { e.stopPropagation(); onSelect(s.id); }}>
                                            Explore {s.title} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why QBL */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Why QBL</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2">What Sets Us Apart</h2>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: "Integrated Approach", desc: "Our four practice areas work in concert — strategy informs digital, operations underpins human capital." },
                            { icon: Users, title: "Embedded Partnership", desc: "We work alongside your team, not above it. Shared accountability for every outcome we commit to." },
                            { icon: BarChart3, title: "Data-Driven Execution", desc: "Every recommendation is grounded in data — qualitative and quantitative — not gut feel or generic frameworks." },
                        ].map((item, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-5">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="disp font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <CtaStrip />
        </>
    );
}

// ─── SERVICE DETAIL PAGE ──────────────────────────────────────────────────────

function ServiceDetail({ service, onBack }) {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-20 pb-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0" aria-hidden="true">
                    <img src={service.heroImg} alt="" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button onClick={onBack}
                        className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors group">
                        <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> All Services
                    </button>
                    <div className="max-w-3xl">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-2xl`}>
                            <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> QBL Practice Area
                        </div>
                        <h1 className="disp text-5xl md:text-6xl font-black text-white leading-tight mb-4">{service.title}</h1>
                        <p className="text-xl font-semibold mb-6" style={{ color: service.accent }}>{service.tagline}</p>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{service.overview}</p>
                        <div className="flex gap-3 mt-8 flex-wrap">
                            <a href="/contact" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/30">
                                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button onClick={onBack} className="flex items-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 text-white px-7 py-3.5 rounded-xl font-bold transition-all">
                                View All Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offerings */}
            <section className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">What We Offer</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2">Service Offerings</h2>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.offerings.map((o, i) => (
                            <RevealOnScroll key={i} delay={i * 80}>
                                <div className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <o.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="disp font-bold text-slate-900 mb-2">{o.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{o.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">How We Work</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2">Our Engagement Process</h2>
                    </RevealOnScroll>
                    <div className="space-y-6">
                        {service.process.map((p, i) => (
                            <RevealOnScroll key={i} delay={i * 80}>
                                <div className="flex gap-6 items-start bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white font-black text-lg disp shrink-0 shadow-lg`}>
                                        {p.step}
                                    </div>
                                    <div>
                                        <h3 className="disp font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-sm">{p.desc}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes + Testimonial */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <RevealOnScroll direction="left">
                            <div>
                                <span className="text-orange-400 font-bold text-[10px] tracking-[0.25em] uppercase">Results</span>
                                <h2 className="disp text-3xl font-black text-white mt-2 mb-8">Typical Outcomes</h2>
                                <div className="space-y-4">
                                    {service.outcomes.map((o, i) => (
                                        <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                            <p className="text-white font-medium">{o}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" delay={150}>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                                <div className="flex mb-5">
                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-amber-400 fill-current" />)}
                                </div>
                                <p className="text-slate-200 text-lg leading-relaxed italic mb-8">"{service.testimonial.text}"</p>
                                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white font-bold disp`}>
                                        {service.testimonial.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{service.testimonial.name}</p>
                                        <p className="text-slate-400 text-sm">{service.testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Related services */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-10">
                        <h2 className="disp text-2xl font-black text-slate-900">Explore Related Services</h2>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {SERVICES_DETAIL.filter(s => s.id !== service.id).slice(0, 3).map((s, i) => (
                            <RevealOnScroll key={i} delay={i * 80}>
                                <button onClick={() => onBack(s.id)}
                                    className="group flex items-center gap-4 bg-slate-50 hover:bg-blue-50 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 transition-all w-full text-left">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <s.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="disp font-bold text-slate-900 text-sm">{s.title}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{s.tagline}</p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-300 ml-auto group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                                </button>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <CtaStrip heading={`Ready to explore ${service.title}?`} sub="Book a free discovery call with our senior advisor today." />
        </>
    );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function ServicesPage({ initialService = null }) {
    const [activeService, setActiveService] = useState(initialService);

    useSEO({
        title: "Consulting Services | QBL Consulting Indonesia",
        description: "Explore QBL Consulting's four practice areas: Business Strategy, Digital Transformation, Operations Excellence, and Human Capital. Enterprise-grade advisory for Indonesia and Southeast Asia.",
    });
    const handleSelect = (id) => setActiveService(id);
    const handleBack = (id) => { if (id && typeof id === "string") setActiveService(id); else setActiveService(null); };

    const current = SERVICES_DETAIL.find(s => s.id === activeService);

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            <GlobalStyles />
            <Navbar activePage="Services" />
            {current ? (
                <ServiceDetail service={current} onBack={handleBack} />
            ) : (
                <ServicesOverview onSelect={handleSelect} />
            )}
            <Footer />
        </div>
    );
}

// Named exports for direct deep-linking per service
export const BusinessStrategyPage = () => <ServicesPage initialService="business-strategy" />;
export const DigitalTransformPage = () => <ServicesPage initialService="digital-transformation" />;
export const OperationsPage = () => <ServicesPage initialService="operations-excellence" />;
export const HumanCapitalPage = () => <ServicesPage initialService="human-capital" />;