import React from "react";
import { Navbar, Footer, GlobalStyles, CtaStrip, PageHero } from "../shared/Layout";
import { ArrowRight, BarChart3, Globe2, ShieldCheck, Factory } from "lucide-react";

const projects = [
    {
        client: "Regional Banking Group",
        industry: "Banking & Finance",
        title: "Digital Core Transformation & RPA Implementation",
        metrics: ["40% reduction in processing time", "Zero compliance breaches post-launch", "$2.5M annual savings"],
        icon: ShieldCheck,
        color: "from-blue-500 to-indigo-600",
        image: "finance"
    },
    {
        client: "Southeast Asian FMCG Leader",
        industry: "Retail & FMCG",
        title: "Supply Chain Optimization & Demand Forecasting",
        metrics: ["25% reduction in stockouts", "15% lower logistics costs", "AI-driven inventory model"],
        icon: Globe2,
        color: "from-emerald-500 to-teal-600",
        image: "supply-chain"
    },
    {
        client: "National Manufacturing Corp",
        industry: "Manufacturing",
        title: "Industry 4.0 Factory Upgrade & Lean Operations",
        metrics: ["30% increase in yield", "Predictive maintenance deployment", "ISO 9001 advanced compliance"],
        icon: Factory,
        color: "from-orange-500 to-red-600",
        image: "factory"
    },
    {
        client: "Healthcare Provider Network",
        industry: "Healthcare",
        title: "Post-Merger Integration & Shared Services Design",
        metrics: ["Harmonized 12 legacy systems", "Standardized patient experience", "18% operational cost reduction"],
        icon: BarChart3,
        color: "from-violet-500 to-purple-600",
        image: "healthcare"
    }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-white">
            <GlobalStyles />
            <Navbar activePage="Portfolio" />

            <main>
                <PageHero
                    eyebrow="Our Track Record"
                    title="Proven Results, Quantifiable Impact"
                    subtitle="Explore how QBL Consulting partners with enterprise clients to solve complex challenges, drive innovation, and deliver sustainable growth across various sectors."
                />

                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {projects.map((proj, i) => (
                                <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                    <div className={`h-48 bg-gradient-to-br ${proj.color} p-8 flex items-end relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                                        <proj.icon className="absolute top-8 right-8 w-24 h-24 text-white/20 -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-500" />
                                        <div className="relative z-10 w-full">
                                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest uppercase mb-3">
                                                {proj.industry}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white leading-tight pr-12">{proj.title}</h3>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="mb-6">
                                            <p className="text-sm font-semibold text-slate-500 mb-1">Client Profile</p>
                                            <p className="text-lg text-slate-900 font-bold">{proj.client}</p>
                                        </div>

                                        <div className="mb-8 flex-grow">
                                            <p className="text-sm font-semibold text-slate-500 mb-3">Key Outcomes</p>
                                            <ul className="space-y-2">
                                                {proj.metrics.map((metric, ix) => (
                                                    <li key={ix} className="flex items-start gap-2 text-slate-700">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                                        <span>{metric}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button className="flex items-center gap-2 text-blue-600 font-bold group-hover:text-blue-700 transition-colors w-max">
                                            Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12">Trusted by 50+ Enterprises</h2>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder company logos */}
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-slate-400 rounded-lg skew-x-12" />
                                    <span className="font-black text-2xl text-slate-400 uppercase tracking-widest">Client {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CtaStrip heading="Ready for your transformation?" sub="Let's add your success story to our portfolio." />
            </main>

            <Footer />
        </div>
    );
}
