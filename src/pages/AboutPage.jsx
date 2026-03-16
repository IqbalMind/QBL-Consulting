import { useState } from "react";
import {
    Target, Users, Award, Heart, Zap, Globe, Shield, TrendingUp,
    ArrowRight, CheckCircle2, Star, MapPin, Linkedin, Twitter, Mail,
    Lightbulb, Handshake, BarChart3
} from "lucide-react";
import { GlobalStyles, Navbar, Footer, PageHero, CtaStrip, RevealOnScroll } from "../shared/Layout";
import useSEO from "../hooks/useSEO";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const VALUES = [
    { icon: Target, title: "Mission-Driven", desc: "Every engagement is guided by a clear purpose: delivering measurable business outcomes that outlast our involvement.", color: "from-blue-500 to-blue-700" },
    { icon: Lightbulb, title: "Innovation First", desc: "We challenge conventional thinking and apply cutting-edge frameworks to solve complex business problems creatively.", color: "from-amber-500 to-orange-500" },
    { icon: Handshake, title: "True Partnership", desc: "We embed alongside your team, not above it — sharing accountability for every result we commit to.", color: "from-emerald-500 to-teal-600" },
    { icon: Shield, title: "Integrity Always", desc: "Honest counsel, transparent pricing, and ethical practice form the bedrock of every client relationship.", color: "from-violet-500 to-purple-600" },
    { icon: Globe, title: "Global Mindset", desc: "Southeast Asian roots with international standards — we bring global best practices to local business realities.", color: "from-rose-500 to-pink-600" },
    { icon: Zap, title: "Speed & Precision", desc: "We move fast without sacrificing quality, delivering insights and solutions at the pace modern business demands.", color: "from-cyan-500 to-blue-500" },
];

const MILESTONES = [
    { year: "2012", title: "Founded in Jakarta", desc: "QBL Consulting established with a focus on business strategy for mid-market enterprises." },
    { year: "2015", title: "Digital Practice Launch", desc: "Launched our Digital Transformation division as enterprise demand for tech advisory surged." },
    { year: "2018", title: "50 Clients Milestone", desc: "Reached 50 active enterprise clients across Indonesia, Malaysia, and Singapore." },
    { year: "2020", title: "Remote Delivery Excellence", desc: "Pivoted to hybrid delivery model, maintaining 100% project continuity through the pandemic." },
    { year: "2022", title: "AI & Automation Division", desc: "Launched dedicated AI practice, helping clients implement intelligent process automation." },
    { year: "2024", title: "Grand Slipi Tower HQ", desc: "Moved to flagship Jakarta office — Gedung Grand Slipi Tower, Jakarta Barat." },
];

const TEAM = [
    { name: "Muhamad Iqbal Nurmanditya", role: "Founder & CEO, Business Analyst & IT Consultant", bio: "Simplifying complex systems through smart integrations to deliver enduring enterprise transformations.", initial: "MI", color: "from-blue-500 to-blue-700" },
    { name: "Dewi Rahayu", role: "Managing Director", bio: "Specialist in digital transformation and ERP implementations for manufacturing sector.", initial: "DR", color: "from-emerald-500 to-teal-600" },
    { name: "Budi Santoso", role: "Head of Business Strategy", bio: "Ex-BCG consultant with deep expertise in M&A advisory and market expansion.", initial: "BS", color: "from-violet-500 to-purple-600" },
    { name: "Ayu Permata", role: "Head of Human Capital", bio: "Organizational psychologist and leadership coach with 12 years of change management.", initial: "AP", color: "from-amber-500 to-orange-500" },
    { name: "Rizki Pratama", role: "Head of Operations", bio: "Lean Six Sigma Black Belt. Led supply chain optimization for 30+ manufacturing clients.", initial: "RP", color: "from-rose-500 to-pink-600" },
    { name: "Sari Wijayanti", role: "Head of AI & Automation", bio: "Computer scientist turned business consultant, bridging the gap between tech and strategy.", initial: "SW", color: "from-cyan-500 to-blue-500" },
];

const AWARDS = [
    { year: "2024", title: "Best Consulting Firm SEA", org: "Asia Business Awards" },
    { year: "2023", title: "Top Digital Transformation Partner", org: "IDC Indonesia" },
    { year: "2023", title: "Excellence in Leadership Advisory", org: "HR Excellence Awards" },
    { year: "2022", title: "Fastest Growing Consultancy", org: "Bisnis Indonesia" },
];

const STATS = [
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "12+", label: "Years Experience" },
    { value: "98%", label: "Client Retention" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("values");

    useSEO({
        title: "About QBL Consulting | Indonesia's Premier Advisory Firm",
        description: "Learn about QBL Consulting — founded in 2012, serving 50+ enterprise clients across Southeast Asia. Meet our leadership team and discover our mission, vision, and values.",
    });
    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            <GlobalStyles />
            <Navbar activePage="Company" />

            {/* Hero */}
            <PageHero
                eyebrow="About QBL Consulting"
                title="Built to Transform"
                highlight="Built to Last"
                subtitle="We are Indonesia's premier enterprise advisory firm — combining strategic depth, technical mastery, and genuine partnership to drive transformations that endure."
            />

            {/* Stats */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {STATS.map((s, i) => (
                            <RevealOnScroll key={i} delay={i * 80}>
                                <div>
                                    <p className="disp text-4xl font-black text-blue-600 mb-1">{s.value}</p>
                                    <p className="text-sm text-slate-500">{s.label}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <RevealOnScroll direction="left">
                            <div>
                                <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Our Story</span>
                                <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-6">
                                    From a Bold Idea to Indonesia's Most Trusted Advisory Firm
                                </h2>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>QBL Consulting was founded in 2012 with a singular belief: that Indonesian enterprises deserved world-class strategic advisory without having to rely entirely on global firms that didn't truly understand local context.</p>
                                    <p>Starting with a small team of ex-Big Four and MBB consultants, we built our practice from the ground up — earning client trust project by project, result by result. Today we serve 50+ enterprise clients across Indonesia and Southeast Asia.</p>
                                    <p>Our edge has always been the same: <strong className="text-slate-900">we act as an integrated extension of your leadership team</strong>, not an external vendor handing over a report. We stay until the transformation is real.</p>
                                </div>
                                <div className="mt-8 flex gap-3 flex-wrap">
                                    <a href="/contact" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20">
                                        Work with Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a href="/services" className="flex items-center gap-2 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm transition-all">
                                        Our Services
                                    </a>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll direction="right" delay={150}>
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                        alt="QBL Consulting team" className="w-full h-80 object-cover" />
                                </div>
                                {/* Floating badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="disp font-black text-slate-900 text-sm">Best Consulting Firm SEA</p>
                                            <p className="text-xs text-slate-500">Asia Business Awards 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-6 -right-6 bg-blue-600 rounded-2xl shadow-2xl p-5">
                                    <p className="disp text-3xl font-black text-white">12+</p>
                                    <p className="text-blue-200 text-xs">Years of Excellence</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Values / Mission / Vision Tabs */}
            <section id="values" className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-12">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">What We Stand For</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2">Our Values, Mission & Vision</h2>
                    </RevealOnScroll>

                    {/* Tabs */}
                    <div className="flex justify-center mb-10">
                        <div className="flex bg-white border border-slate-200 rounded-2xl p-1.5 gap-1 shadow-sm">
                            {["values", "mission", "vision"].map(tab => (
                                <button key={tab} onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${activeTab === tab ? "bg-blue-600 text-white shadow-md shadow-blue-600/25" : "text-slate-500 hover:text-slate-800"}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {activeTab === "values" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {VALUES.map((v, i) => (
                                <RevealOnScroll key={i} delay={i * 80}>
                                    <div className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <v.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="disp text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    )}

                    {activeTab === "mission" && (
                        <RevealOnScroll>
                            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 lg:p-14 border border-slate-100 shadow-lg text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/30">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="disp text-2xl md:text-3xl font-black text-slate-900 mb-6">Our Mission</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    To empower Indonesian and Southeast Asian enterprises with world-class strategic advisory, digital transformation, and operational excellence — delivering measurable, lasting results that strengthen competitiveness on a global stage.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                                    {[
                                        { label: "Client-Centric", desc: "Your goals drive every decision we make." },
                                        { label: "Results-Focused", desc: "We measure success in outcomes, not outputs." },
                                        { label: "Long-Term Impact", desc: "We build capability, not dependency." },
                                    ].map((item, i) => (
                                        <div key={i} className="text-center">
                                            <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                                            <p className="disp font-bold text-slate-900 mb-1">{item.label}</p>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    )}

                    {activeTab === "vision" && (
                        <RevealOnScroll>
                            <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-950 to-blue-950 rounded-3xl p-10 lg:p-14 border border-white/10 shadow-2xl text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/50">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="disp text-2xl md:text-3xl font-black text-white mb-6">Our Vision</h3>
                                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                    To be Southeast Asia's most trusted and impactful business advisory partner — recognized not just for the quality of our thinking, but for the depth of transformation we enable across industries, geographies, and generations of business leaders.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {["SEA's #1 Advisory", "100+ Enterprise Clients by 2027", "Regional Offices in 5 Countries"].map((item, i) => (
                                        <div key={i} className="bg-white/8 border border-white/10 rounded-xl px-5 py-4">
                                            <Star className="w-5 h-5 text-amber-400 fill-current mb-2 mx-auto" />
                                            <p className="text-white text-sm font-semibold text-center">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    )}
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Our Journey</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2">12 Years of Milestones</h2>
                    </RevealOnScroll>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" aria-hidden="true" />
                        <div className="space-y-10">
                            {MILESTONES.map((m, i) => (
                                <RevealOnScroll key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                                    <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                        {/* Content */}
                                        <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-14 md:pl-0`}>
                                            <div className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow inline-block w-full ${i % 2 === 0 ? "" : ""}`}>
                                                <span className="text-blue-600 font-black text-sm disp">{m.year}</span>
                                                <h3 className="disp font-bold text-slate-900 mt-1 mb-2">{m.title}</h3>
                                                <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                                            </div>
                                        </div>
                                        {/* Dot */}
                                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10 mt-6" aria-hidden="true" />
                                        <div className="hidden md:block flex-1" />
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Leadership</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2">Meet Our Team</h2>
                        <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">Ex-McKinsey, BCG, and Big Four professionals who chose to build something local and lasting.</p>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TEAM.map((member, i) => (
                            <RevealOnScroll key={i} delay={i * 80}>
                                <div className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-black text-xl disp mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                        {member.initial}
                                    </div>
                                    <h3 className="disp font-bold text-slate-900 text-lg">{member.name}</h3>
                                    <p className="text-blue-600 text-sm font-semibold mb-3">{member.role}</p>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{member.bio}</p>
                                    <div className="flex gap-2">
                                        {[Linkedin, Twitter, Mail].map((Icon, j) => (
                                            <button key={j} className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                                                <Icon className="w-3.5 h-3.5" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-12">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Recognition</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2">Awards & Recognition</h2>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {AWARDS.map((award, i) => (
                            <RevealOnScroll key={i} delay={i * 80}>
                                <div className="flex items-center gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25">
                                        <Award className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="disp font-black text-blue-600 text-sm">{award.year}</p>
                                        <h3 className="disp font-bold text-slate-900">{award.title}</h3>
                                        <p className="text-xs text-slate-500">{award.org}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <CtaStrip heading="Want to work with our team?" sub="Let's discuss how QBL Consulting can accelerate your business goals." />
            <Footer />
        </div>
    );
}