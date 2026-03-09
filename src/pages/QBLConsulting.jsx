import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Menu, X, ChevronDown, MessageCircle, Headphones, LogIn,
    TrendingUp, Monitor, Briefcase, Globe, CheckCircle2,
    Play, ShieldCheck, Settings, ArrowRight, Building2,
    ShieldAlert, UserCheck, RefreshCw, Lightbulb, Phone, Mail, Clock,
    ChevronRight, Linkedin, Twitter, Facebook, Instagram, Star,
    BarChart3, Users, Cpu, Globe2, Layers, Workflow,
    Landmark, Factory, HeartPulse, ShoppingBag, Plane, BookOpen,
    Newspaper, Video, FileText, Award, MapPin, Target, Handshake
} from "lucide-react";

// ─── NAV MEGA-MENU DATA ───────────────────────────────────────────────────────

const NAV_MENU = [
    {
        label: "Services",
        href: "/services",
        icon: Settings,
        featured: { title: "End-to-End Advisory", desc: "From strategy to execution, we deliver results that last." },
        columns: [
            {
                heading: "Core Services",
                items: [
                    { icon: TrendingUp, label: "Business Strategy", desc: "Market expansion & M&A", href: "/services/business-strategy" },
                    { icon: Monitor, label: "Digital Transformation", desc: "ERP, cloud & tech modernization", href: "/services/digital-transformation" },
                    { icon: Settings, label: "Operations Excellence", desc: "Supply chain & process automation", href: "/services/operations-excellence" },
                    { icon: Briefcase, label: "Human Capital", desc: "Leadership & org design", href: "/services/human-capital" },
                ],
            },
            {
                heading: "Specialized",
                items: [
                    { icon: BarChart3, label: "Data & Analytics", desc: "BI dashboards & data strategy", href: "/services" },
                    { icon: ShieldCheck, label: "Risk & Compliance", desc: "Regulatory & audit readiness", href: "/services" },
                    { icon: Cpu, label: "AI & Automation", desc: "Intelligent process automation", href: "/services" },
                    { icon: Handshake, label: "M&A Advisory", desc: "Due diligence & integration", href: "/services" },
                ],
            },
        ],
    },
    {
        label: "Industries",
        href: "/services",
        icon: Building2,
        featured: { title: "Deep Sector Expertise", desc: "Solutions built for your industry's unique dynamics." },
        columns: [
            {
                heading: "Sectors",
                items: [
                    { icon: Landmark, label: "Banking & Finance", desc: "Fintech & regulatory compliance", href: "/services" },
                    { icon: Factory, label: "Manufacturing", desc: "Lean ops & Industry 4.0", href: "/services" },
                    { icon: HeartPulse, label: "Healthcare", desc: "Digital health & ops", href: "/services" },
                    { icon: ShoppingBag, label: "Retail & FMCG", desc: "Omnichannel & supply chain", href: "/services" },
                ],
            },
            {
                heading: "More Sectors",
                items: [
                    { icon: Plane, label: "Logistics & Transport", desc: "Fleet & route optimization", href: "/services" },
                    { icon: Globe2, label: "Telecoms & Media", desc: "Digital infrastructure", href: "/services" },
                    { icon: Layers, label: "Technology", desc: "Scaling & product strategy", href: "/services" },
                    { icon: Workflow, label: "Public Sector", desc: "Government transformation", href: "/services" },
                ],
            },
        ],
    },
    {
        label: "Insights",
        href: "/insights",
        icon: TrendingUp,
        featured: { title: "Thought Leadership", desc: "Perspectives from Indonesia's leading business advisors." },
        columns: [
            {
                heading: "Resources",
                items: [
                    { icon: Newspaper, label: "Research Reports", desc: "In-depth market analysis", href: "/insights" },
                    { icon: Video, label: "Webinars", desc: "Live & on-demand sessions", href: "/insights" },
                    { icon: FileText, label: "Case Studies", desc: "Real client transformations", href: "/insights" },
                    { icon: BookOpen, label: "Blog", desc: "Expert opinions & trends", href: "/insights" },
                ],
            },
        ],
    },
    {
        label: "Company",
        href: "/about",
        icon: null,
        featured: { title: "About QBL Consulting", desc: "Trusted by 50+ enterprise clients across Southeast Asia." },
        columns: [
            {
                heading: "About Us",
                items: [
                    { icon: Target, label: "Our Mission", desc: "Vision & values", href: "/about" },
                    { icon: Users, label: "Leadership Team", desc: "Meet our advisors", href: "/about" },
                    { icon: Award, label: "Awards & Recognition", desc: "Industry accolades", href: "/about" },
                    { icon: MapPin, label: "Locations", desc: "Jakarta & beyond", href: "/contact" },
                ],
            },
        ],
    },
];

// ─── PAGE DATA ────────────────────────────────────────────────────────────────

const SERVICES = [
    { icon: TrendingUp, title: "Business Strategy", href: "/services/business-strategy", desc: "Navigate market complexities with data-driven strategic planning and execution frameworks.", items: ["Market Expansion", "M&A Advisory", "Financial Restructuring"], color: "from-blue-500 to-blue-700", accent: "#3b82f6" },
    { icon: Monitor, title: "Digital Transformation", href: "/services/digital-transformation", desc: "Modernize legacy systems and integrate cutting-edge enterprise software solutions.", items: ["Tech Stack Audits", "ERP Implementation", "Cloud Migration"], color: "from-violet-500 to-violet-700", accent: "#8b5cf6" },
    { icon: Settings, title: "Operations Excellence", href: "/services/operations-excellence", desc: "Streamline workflows, reduce operational costs, and maximize resource efficiency.", items: ["Supply Chain Opt.", "Process Automation", "Quality Assurance"], color: "from-amber-500 to-orange-600", accent: "#f59e0b" },
    { icon: Briefcase, title: "Human Capital", href: "/services/human-capital", desc: "Build agile, high-performing teams adapted to the modern business landscape.", items: ["Change Management", "Leadership Training", "Org. Design"], color: "from-emerald-500 to-teal-600", accent: "#10b981" },
];

const FEATURES = [
    { icon: ShieldAlert, title: "Risk Mitigation", desc: "Detects and prevents suspicious business activities in real-time with AI-driven monitoring." },
    { icon: UserCheck, title: "Anti Human Error", desc: "Minimizes mistakes through intelligent automation and accurate data handling pipelines." },
    { icon: RefreshCw, title: "Workflow Optimization", desc: "Reduces manual tasks, increases accuracy, and dramatically speeds up operations." },
    { icon: Lightbulb, title: "Custom Smart Solutions", desc: "Tailored strategic systems built for your unique business needs and industry context." },
];

const FAQS = [
    { q: "What services does QBL Consulting provide?", a: "We provide comprehensive business advisory services including Business Strategy, Digital Transformation, Operations Excellence, and Human Capital management tailored to your specific industry needs." },
    { q: "How can QBL Consulting help accelerate digital transformation?", a: "We conduct thorough tech stack audits, streamline your operations through ERP implementations, and guide cloud migrations to ensure your business is agile and future-ready." },
    { q: "Does QBL Consulting offer customized solutions for specific industries?", a: "Yes. We understand that every industry faces unique challenges. Our experts develop highly customized, data-driven frameworks designed specifically for your sector." },
    { q: "What makes QBL Consulting different from other consulting firms?", a: "We combine deep technical expertise with innovative thinking and a highly data-driven approach, acting as an integrated partner rather than just an external advisor." },
    { q: "How can I get started with QBL Consulting?", a: "You can reach out to us via our Contact Form below, or click 'Consult Now' to schedule an initial discovery call with one of our senior advisors." },
];

const PARTNERS = ["TechCorp", "GlobalSys", "InnoVate", "Nexus", "Synergy", "OmniData", "AeroSpace", "FinTrust", "DataLink", "CloudBase"];
const STATS = [
    { value: "95", suffix: "%", label: "Efficiency Uplift" },
    { value: "24", suffix: "/7", label: "Technical Support" },
    { value: "50", suffix: "+", label: "Industry Partners" },
    { value: "12", suffix: "+", label: "Years Experience" },
];
const FLOAT_CARDS = [
    { label: "Client Satisfaction", value: "98%", color: "from-emerald-500 to-teal-600", pos: "top-8 left-2", anim: "anim-float-1" },
    { label: "Projects Delivered", value: "200+", color: "from-blue-500 to-blue-700", pos: "top-20 right-2", anim: "anim-float-2" },
    { label: "Cost Reduction", value: "40%", color: "from-orange-500 to-amber-600", pos: "bottom-20 left-2", anim: "anim-float-3" },
    { label: "ROI Delivered", value: "3.2×", color: "from-violet-500 to-purple-700", pos: "bottom-8 right-2", anim: "anim-float-1" },
];
const TESTIMONIALS = [
    { name: "Sarah Chen", role: "CTO, TechCorp Asia", text: "QBL transformed our entire digital infrastructure in just 6 months. Exceptional team and results.", rating: 5 },
    { name: "Ahmad Rizal", role: "CEO, Nexus Group", text: "Their strategic advisory helped us expand into 3 new markets with minimal risk exposure.", rating: 5 },
    { name: "Maria Santos", role: "COO, GlobalSys", text: "The operations optimization alone saved us 40% in annual costs. Highly recommended.", rating: 5 },
];

// ─── HOOKS ────────────────────────────────────────────────────────────────────

const useScrollY = () => {
    const [y, setY] = useState(0);
    useEffect(() => {
        const fn = () => setY(window.scrollY);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);
    return y;
};

// ─── UTILITY COMPONENTS ───────────────────────────────────────────────────────

const RevealOnScroll = ({ children, className = "", delay = 0, direction = "up" }) => {
    const [vis, setVis] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } },
            { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    const map = {
        up: vis ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        left: vis ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
        right: vis ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
    };
    return (
        <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${map[direction]} ${className}`}>
            {children}
        </div>
    );
};

// CountUp stat
const CountUp = ({ target, suffix }) => {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const done = useRef(false);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !done.current) {
                done.current = true;
                const num = Number(target); let start = 0; const dur = 1600;
                const step = (ts) => {
                    if (!start) start = ts;
                    const p = Math.min((ts - start) / dur, 1);
                    setVal(Math.floor(p * num));
                    if (p < 1) requestAnimationFrame(step); else setVal(num);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [target]);
    return <span ref={ref}>{val}{suffix}</span>;
};

// Marquee row
const MarqueeRow = ({ items, reverse = false, speed = 30, dark = false }) => {
    const tripled = [...items, ...items, ...items];
    return (
        <div className="marquee-row overflow-hidden w-full">
            <div className="marquee-track flex gap-5 w-max"
                style={{ animation: `${reverse ? "mRight" : "mLeft"} ${speed}s linear infinite` }}>
                {tripled.map((item, i) => (
                    <div key={i} className={`shrink-0 px-8 h-20 rounded-2xl flex items-center gap-4 cursor-pointer transition-all duration-300 border text-base font-bold hover:scale-105 hover:-translate-y-1 ${dark
                        ? "bg-blue-800/80 border-blue-700 text-white hover:bg-blue-600 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/40"
                        : "bg-white border-slate-200 text-slate-700 shadow-md hover:shadow-xl hover:shadow-blue-200/60 hover:border-blue-300 hover:text-blue-700"
                        }`}>
                        {dark
                            ? <ShieldCheck className="w-6 h-6 text-blue-300 shrink-0" />
                            : <Globe className="w-6 h-6 text-blue-400 shrink-0" />}
                        <span className="text-base">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ─── NAV COMPONENTS ───────────────────────────────────────────────────────────

const MegaMenu = ({ menu, isOpen }) => (
    <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 transition-all duration-200 origin-top z-50 ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}
        style={{ width: menu.columns.length > 1 ? 640 : 380 }}
    >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-slate-100 z-10" />
        <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-300/40 border border-slate-100 overflow-hidden">
            {/* Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    {menu.icon ? <menu.icon className="w-5 h-5 text-white" /> : <Settings className="w-5 h-5 text-white" />}
                </div>
                <div>
                    <p className="text-white font-bold text-sm">{menu.featured.title}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{menu.featured.desc}</p>
                </div>
            </div>
            {/* Columns */}
            <div className={`grid divide-x divide-slate-100 ${menu.columns.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                {menu.columns.map((col, ci) => (
                    <div key={ci} className="p-5">
                        <p className="text-[10px] font-black tracking-[0.15em] uppercase text-slate-400 mb-3 px-2">{col.heading}</p>
                        <div className="space-y-0.5">
                            {col.items.map((item, ii) => (
                                <Link key={ii} to={item.href || "/"}
                                    className="flex items-start gap-3 px-2 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors mt-0.5">
                                        <item.icon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors leading-none mb-0.5">{item.label}</p>
                                        <p className="text-xs text-slate-400">{item.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* Footer */}
            <div className="border-t border-slate-100 px-6 py-3 flex justify-between items-center bg-slate-50/60">
                <span className="text-xs text-slate-400">Need help choosing?</span>
                <Link to="/contact" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all group">
                    Talk to an expert <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
        </div>
    </div>
);

const MobileMenuItem = ({ menu }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setOpen(o => !o)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 transition-colors text-sm">
                <span className="flex items-center gap-2">
                    {menu.icon && <menu.icon className="w-4 h-4 text-slate-400" />}
                    {menu.label}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}>
                <div className="pb-2 pl-4">
                    {menu.columns.map((col, ci) => (
                        <div key={ci} className="mb-3">
                            <p className="text-[10px] font-black tracking-widest uppercase text-slate-400 px-3 mb-1 mt-2">{col.heading}</p>
                            {col.items.map((item, ii) => (
                                <Link key={ii} to={item.href || "/"}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm">
                                    <item.icon className="w-4 h-4 text-blue-500 shrink-0" />
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// FAQ item
const FaqItem = ({ faq, isOpen, onToggle, index }) => (
    <RevealOnScroll delay={index * 60}>
        <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-blue-500 shadow-lg shadow-blue-500/10 bg-white" : "border-slate-200 bg-white hover:border-blue-200"}`}>
            <button onClick={onToggle} aria-expanded={isOpen}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset">
                <span className="font-semibold text-slate-900 text-sm md:text-base">{faq.q}</span>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-500"}`}>
                    <ChevronDown className="w-4 h-4" />
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 pb-6" : "max-h-0"}`}>
                <p className="px-6 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
        </div>
    </RevealOnScroll>
);

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
    const navigate = useNavigate();
    const scrollY = useScrollY();
    const isScrolled = scrollY > 20;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "", subject: "Strategic Consulting", message: "" });
    const [formStatus, setFormStatus] = useState(null);
    const navRef = useRef(null);

    useEffect(() => {
        const fn = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null); };
        document.addEventListener("mousedown", fn);
        return () => document.removeEventListener("mousedown", fn);
    }, []);

    useEffect(() => {
        const fn = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
        window.addEventListener("resize", fn);
        return () => window.removeEventListener("resize", fn);
    }, []);

    const handleFaq = useCallback((i) => setActiveFaq(p => p === i ? null : i), []);
    const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
    const handleSubmit = () => {
        if (!formData.firstName || !formData.email || !formData.message) { setFormStatus("error"); return; }
        setFormStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", company: "", subject: "Strategic Consulting", message: "" });
        setTimeout(() => setFormStatus(null), 4000);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">

            {/* ── GLOBAL STYLES ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
        *, body { font-family: 'Figtree', sans-serif; }
        h1,h2,h3,.disp { font-family: 'Outfit', sans-serif !important; }

        /* Hero animated grid */
        .hero-grid {
          background-image:
            linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        /* Marquee */
        @keyframes mLeft  { 0%{transform:translateX(0)}        100%{transform:translateX(-33.33%)} }
        @keyframes mRight { 0%{transform:translateX(-33.33%)}  100%{transform:translateX(0)} }
        .marquee-row:hover .marquee-track { animation-play-state: paused; }

        /* Scrollbar */
        ::-webkit-scrollbar { width:5px }
        ::-webkit-scrollbar-track { background:#f1f5f9 }
        ::-webkit-scrollbar-thumb { background:#93c5fd; border-radius:3px }
        ::-webkit-scrollbar-thumb:hover { background:#2563eb }

        /* Hero staggered entrance */
        @keyframes slideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .h1 { animation: slideUp 0.65s ease forwards 0.05s; opacity:0 }
        .h2 { animation: slideUp 0.65s ease forwards 0.18s; opacity:0 }
        .h3 { animation: slideUp 0.65s ease forwards 0.31s; opacity:0 }
        .h4 { animation: slideUp 0.65s ease forwards 0.44s; opacity:0 }
        .h5 { animation: slideUp 0.65s ease forwards 0.57s; opacity:0 }
        .h6 { animation: slideUp 0.65s ease forwards 0.70s; opacity:0 }

        /* Floating cards */
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .anim-float-1 { animation: float 4.0s ease-in-out infinite }
        .anim-float-2 { animation: float 4.0s ease-in-out infinite 1.0s }
        .anim-float-3 { animation: float 4.0s ease-in-out infinite 2.0s }

        /* Gradient text */
        .grad-blue { background:linear-gradient(135deg,#93c5fd 0%,#60a5fa 40%,#3b82f6 80%,#1d4ed8 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text }
        .grad-warm { background:linear-gradient(135deg,#fbbf24,#f97316); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text }

        /* Glow badge */
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,.5)} 50%{box-shadow:0 0 0 6px rgba(52,211,153,0)} }
        .glow { animation: glowPulse 2s ease-in-out infinite }

        /* Focus ring */
        :focus-visible { outline:2px solid #3b82f6; outline-offset:2px; border-radius:6px }
      `}</style>

            {/* ══════════════════════════════════════════════════════
          TOP BAR
      ══════════════════════════════════════════════════════ */}
            <div className="bg-blue-700 hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
                    <div className="flex items-center gap-6 text-xs text-blue-100">
                        <a href="tel:+6287816666086" className="flex items-center gap-1.5 hover:text-white transition-colors">
                            <Phone className="w-3 h-3" /> +62 878-1666-6086
                        </a>
                        <a href="mailto:hello@iqbalmind.id" className="flex items-center gap-1.5 hover:text-white transition-colors">
                            <Mail className="w-3 h-3" /> hello@iqbalmind.id
                        </a>
                        <span className="flex items-center gap-1.5 text-blue-200">
                            <Clock className="w-3 h-3" /> Mon–Fri  8:00 AM – 5:00 PM WIB
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-300">
                        {[{ Icon: Linkedin, l: "LinkedIn" }, { Icon: Twitter, l: "Twitter" }, { Icon: Instagram, l: "Instagram" }].map(({ Icon, l }) => (
                            <a key={l} href="#" aria-label={l} className="hover:text-white transition-colors"><Icon className="w-3.5 h-3.5" /></a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════════════════ */}
            <header role="banner">
                <nav ref={navRef} aria-label="Main navigation"
                    className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/96 backdrop-blur-lg shadow-lg shadow-slate-200/50" : "bg-white shadow-sm"}`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                        {/* Logo */}
                        <Link to="/" aria-label="QBL Consulting — home" className="flex items-center gap-3 shrink-0 z-50 group">
                            <img src="/assets/qbl-logo.png" alt="QBL Logo" className="w-10 h-10 object-contain" />
                            <div className="flex flex-col leading-none">
                                <span className="disp font-black text-[17px] tracking-wide text-slate-900 leading-none">CONSULTING</span>
                                <span className="text-[9px] font-bold tracking-[0.25em] text-orange-500 uppercase mt-0.5">Enterprise Solutions</span>
                            </div>
                        </Link>

                        {/* Desktop mega menu links */}
                        <div className="hidden lg:flex items-center h-full">
                            {NAV_MENU.map((menu, i) => (
                                <div key={i} className="relative h-full flex items-center">
                                    <button
                                        onMouseEnter={() => setOpenMenu(i)}
                                        onMouseLeave={() => setOpenMenu(null)}
                                        onClick={() => { navigate(menu.href || "/"); setOpenMenu(null); }}
                                        aria-expanded={openMenu === i}
                                        aria-haspopup="true"
                                        className={`flex items-center gap-1.5 px-4 h-full text-sm font-semibold transition-colors relative group ${openMenu === i ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
                                    >
                                        {menu.icon && <menu.icon className="w-3.5 h-3.5" />}
                                        {menu.label}
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === i ? "rotate-180 text-blue-600" : ""}`} />
                                        <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full transition-all duration-200 ${openMenu === i ? "opacity-100" : "opacity-0"}`} />
                                    </button>
                                    {/* Dropdown panel: keep open while hovering either trigger or panel */}
                                    <div
                                        onMouseEnter={() => setOpenMenu(i)}
                                        onMouseLeave={() => setOpenMenu(null)}
                                        className="absolute top-full left-0"
                                    >
                                        <MegaMenu menu={menu} isOpen={openMenu === i} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop CTAs */}
                        <div className="hidden lg:flex items-center gap-2 shrink-0">
                            <Link to="/contact" className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-emerald-500/25">
                                <MessageCircle className="w-4 h-4" /> Consult Now
                            </Link>
                            <Link to="/contact" className="flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all">
                                <Headphones className="w-4 h-4" /> Support
                            </Link>
                            <button className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium transition-all">
                                <LogIn className="w-4 h-4" /> Login
                            </button>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(o => !o)}
                            aria-expanded={mobileOpen}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors z-50"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile drawer */}
                    <div aria-hidden={!mobileOpen}
                        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"}`}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {NAV_MENU.map((menu, i) => <MobileMenuItem key={i} menu={menu} />)}
                            <div className="pt-4 border-t border-slate-100 space-y-2 mt-2">
                                <Link to="/contact" onClick={() => setMobileOpen(false)} className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-bold text-center transition-colors">Consult Now</Link>
                                <Link to="/contact" onClick={() => setMobileOpen(false)} className="block w-full bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm font-medium text-center transition-colors">Client Support</Link>
                                <button className="w-full bg-slate-100 text-slate-700 px-4 py-3 rounded-xl text-sm font-medium transition-colors">Login</button>
                            </div>
                            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
                                <a href="tel:+6287816666086" className="flex items-center gap-1.5 py-2"><Phone className="w-3 h-3" />+62 878-1666-6086</a>
                                <a href="mailto:hello@iqbalmind.id" className="flex items-center gap-1.5 py-2"><Mail className="w-3 h-3" />Email us</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
            <section aria-label="Hero" className="relative min-h-[calc(100vh-64px)] flex items-center bg-slate-950 overflow-hidden">
                {/* Backgrounds */}
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="" className="w-full h-full object-cover opacity-20" loading="eager" />
                    <div className="absolute inset-0 hero-grid" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
                    <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px]" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* ── Left: Copy ── */}
                        <div>
                            {/* Badge */}
                            <div className="h1 inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md text-blue-300 px-4 py-2 rounded-full text-xs font-bold mb-8">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 glow" />
                                Indonesia's Premier Enterprise Advisory
                            </div>

                            {/* Headline */}
                            <h1 className="disp font-black text-white leading-[0.95] tracking-tight mb-6">
                                <span className="h2 block text-5xl md:text-6xl lg:text-7xl">ENTERPRISE</span>
                                <span className="h3 block text-5xl md:text-6xl lg:text-7xl grad-blue">BUSINESS</span>
                                <span className="h4 block text-5xl md:text-6xl lg:text-7xl text-white/50">SOLUTIONS</span>
                            </h1>

                            <p className="h5 max-w-lg text-slate-400 text-base md:text-lg leading-relaxed mb-10">
                                Our team of experienced professionals delivers proven strategic consulting and digital transformation solutions—built to boost growth and drive long-term success.
                            </p>

                            {/* CTAs */}
                            <div className="h6 flex flex-wrap gap-3">
                                <Link to="/about" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5">
                                    Download Profile
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contact" className="flex items-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 backdrop-blur-sm text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5">
                                    <MessageCircle className="w-4 h-4" /> Consult Now
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="h6 mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {STATS.map((s, i) => (
                                    <div key={i}>
                                        <p className="disp text-3xl font-black text-white tabular-nums">
                                            <CountUp target={s.value} suffix={s.suffix} />
                                        </p>
                                        <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Right: Floating cards ── */}
                        <div className="hidden lg:flex items-center justify-center relative h-[480px]">
                            {/* Concentric rings */}
                            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-600/15 to-blue-900/5 border border-blue-500/15 flex items-center justify-center">
                                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-600/25 to-indigo-600/15 border border-blue-400/25 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center shadow-2xl shadow-blue-600/50">
                                            <img src="/assets/qbl-logo.png" alt="QBL" className="w-12 h-12 object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Cards */}
                            {FLOAT_CARDS.map((card, i) => (
                                <div key={i} className={`absolute ${card.pos} ${card.anim}`}>
                                    <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 shadow-2xl min-w-[140px]">
                                        <p className={`disp text-2xl font-black bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>{card.value}</p>
                                        <p className="text-white/60 text-xs mt-0.5 font-medium">{card.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Scroll cue */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" aria-hidden="true">
                    <span className="text-slate-600 text-[10px] tracking-widest uppercase">Scroll</span>
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════ */}
            <section aria-labelledby="services-heading" className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">What We Do</span>
                        <h2 id="services-heading" className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4">
                            Globally Certified Consulting Firm
                        </h2>
                        <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICES.map((s, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col overflow-hidden">
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 rounded-bl-[80px] transition-opacity duration-500 pointer-events-none`} />
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <s.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="disp text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                                    <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">{s.desc}</p>
                                    <ul className="space-y-2.5 mb-6">
                                        {s.items.map((item, j) => (
                                            <li key={j} className="flex items-center text-sm text-slate-700">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0" />{item}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={s.href} className="flex items-center text-sm font-bold group/btn" style={{ color: s.accent }}>
                                        Learn more <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════ */}
            <section aria-labelledby="about-heading" className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <h2 id="about-heading" className="disp text-3xl md:text-4xl font-black text-slate-900">
                            Innovative Digital Transformation<br className="hidden md:block" /> for a Sustainable Future
                        </h2>
                    </RevealOnScroll>
                    <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
                        <RevealOnScroll direction="left" delay={100}>
                            <div className="space-y-5">
                                <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                                    <strong className="text-blue-600 font-bold">QBL Consulting</strong> is a leading advisory firm specializing in the development of innovative, sustainable, and industry-specific digital solutions to{" "}
                                    <span className="font-semibold text-slate-900">accelerate business transformation</span>. Since our founding, we have been committed to becoming a trusted technology partner.
                                </p>
                                <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                                    We understand that every business faces unique challenges, which is why{" "}
                                    <span className="font-semibold text-orange-500">we provide customized solutions</span> tailored to your specific goals. By combining deep technical expertise, innovative thinking, and a data-driven strategy, we consistently deliver high-impact results.
                                </p>
                                <div className="flex gap-3 pt-2 flex-wrap">
                                    <Link to="/about" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20">
                                        Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link to="/services" className="flex items-center gap-2 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm transition-all">
                                        View Services
                                    </Link>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" delay={200}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                    alt="QBL Consulting team strategy session"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-slate-900/35 group-hover:bg-slate-900/20 transition-colors" />
                                <button aria-label="Play company overview video" className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-900/50 group-hover:scale-110 transition-all duration-300">
                                        <Play className="w-7 h-7 text-white ml-1 fill-current" />
                                    </div>
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                                    <span className="bg-white text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.15em] mb-3 inline-block">Case Study</span>
                                    <h3 className="disp text-xl font-bold text-white leading-snug">Smart Professional Services Solution</h3>
                                    <p className="text-white/70 text-xs mt-1">Real-time analytics · Workflow simplification</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Feature cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {FEATURES.map((f, i) => (
                            <RevealOnScroll key={i} delay={i * 80}>
                                <div className="group bg-slate-50 hover:bg-blue-600 rounded-2xl p-6 transition-all duration-300 border border-slate-100 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-1 cursor-pointer">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-blue-500 flex items-center justify-center shadow-sm transition-colors">
                                            <f.icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <h4 className="disp font-bold text-slate-900 group-hover:text-white text-sm transition-colors">{f.title}</h4>
                                    </div>
                                    <p className="text-xs text-slate-500 group-hover:text-blue-100 leading-relaxed transition-colors">{f.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
            <section aria-labelledby="testimonials-heading" className="py-20 lg:py-28 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-14">
                        <span className="text-orange-400 font-bold text-[10px] tracking-[0.25em] uppercase">Client Stories</span>
                        <h2 id="testimonials-heading" className="disp text-3xl md:text-4xl font-black text-white mt-2">Trusted by Industry Leaders</h2>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((t, i) => (
                            <RevealOnScroll key={i} delay={i * 120}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex mb-5">
                                        {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />)}
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-7 italic">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm disp">{t.name[0]}</div>
                                        <div>
                                            <p className="font-bold text-white text-sm">{t.name}</p>
                                            <p className="text-xs text-slate-500">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          PARTNERS
      ══════════════════════════════════════════════════════ */}
            <section aria-labelledby="partners-heading" className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <RevealOnScroll>
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Network</span>
                        <h2 id="partners-heading" className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4">Clients & Partners</h2>
                        <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full" />
                    </RevealOnScroll>
                </div>
                <div className="marquee-wrap flex flex-col gap-4">
                    <MarqueeRow items={PARTNERS} reverse={false} speed={30} dark={false} />
                    <MarqueeRow items={PARTNERS} reverse={true} speed={35} dark={true} />
                    <MarqueeRow items={PARTNERS} reverse={false} speed={25} dark={false} />
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════ */}
            <section aria-labelledby="faq-heading" className="py-20 lg:py-28 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-12">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">FAQ</span>
                        <h2 id="faq-heading" className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4">Frequently Asked Questions</h2>
                        <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full" />
                    </RevealOnScroll>
                    <div className="space-y-3">
                        {FAQS.map((faq, i) => (
                            <FaqItem key={i} faq={faq} index={i} isOpen={activeFaq === i} onToggle={() => handleFaq(i)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════ */}
            <section aria-labelledby="contact-heading" className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-12">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Contact</span>
                        <h2 id="contact-heading" className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4">Get In Touch</h2>
                        <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full" />
                        <p className="text-slate-500 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
                            Have a project in mind? Our expert team is ready to help transform your business with innovative solutions.
                        </p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={150}>
                        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/80 overflow-hidden flex flex-col lg:flex-row">
                            {/* Info panel */}
                            <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-8 lg:p-12 text-white lg:w-2/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 bg-white/5 rounded-full blur-2xl" aria-hidden="true" />
                                <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 bg-blue-950/30 rounded-full blur-2xl" aria-hidden="true" />
                                <h3 className="disp text-2xl font-bold mb-1 relative z-10">Contact Information</h3>
                                <p className="text-blue-200 text-sm mb-10 relative z-10">We'd love to hear from you. Let's build something great.</p>
                                <div className="space-y-7 relative z-10">
                                    {[
                                        { icon: UserCheck, label: "Consultation", value: "Book Appointment Here", link: true },
                                        { icon: Phone, label: "Call Us", value: "+62 878-1666-6086" },
                                        { icon: Mail, label: "Email Us", value: "hello@iqbalmind.id" },
                                        { icon: Clock, label: "Working Hours", value: "Mon–Fri, 8:00 AM – 5:00 PM" },
                                    ].map((info, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                                                <info.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm mb-0.5">{info.label}</p>
                                                <p className={`text-sm text-blue-200 ${info.link ? "underline underline-offset-2 cursor-pointer hover:text-white" : ""}`}>{info.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative z-10 flex gap-2 mt-12">
                                    {[{ I: Linkedin, l: "LinkedIn" }, { I: Twitter, l: "Twitter" }, { I: Facebook, l: "Facebook" }, { I: Instagram, l: "Instagram" }].map(({ I, l }) => (
                                        <button key={l} aria-label={l} className="w-9 h-9 bg-white/10 hover:bg-white/25 rounded-xl flex items-center justify-center transition-colors">
                                            <I className="w-4 h-4 text-white" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Form */}
                            <div className="p-8 lg:p-12 lg:w-3/5">
                                <h3 className="disp text-2xl font-bold text-slate-900 mb-7">Send us a Message</h3>
                                {formStatus === "success" && (
                                    <div role="alert" className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 shrink-0" /> Message sent! We'll be in touch shortly.
                                    </div>
                                )}
                                {formStatus === "error" && (
                                    <div role="alert" className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
                                        <X className="w-5 h-5 shrink-0" /> Please fill in all required fields.
                                    </div>
                                )}
                                <div className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {[{ n: "firstName", l: "First Name", p: "John", r: true }, { n: "lastName", l: "Last Name", p: "Doe", r: false }].map(f => (
                                            <div key={f.n}>
                                                <label htmlFor={f.n} className="block text-sm font-semibold text-slate-700 mb-1.5">{f.l} {f.r && <span className="text-red-500">*</span>}</label>
                                                <input id={f.n} name={f.n} type="text" placeholder={f.p} value={formData[f.n]} onChange={handleChange}
                                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                                        <input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
                                            <input id="company" name="company" type="text" placeholder="Acme Corp" value={formData.company} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                                            <select id="subject" name="subject" value={formData.subject} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white text-slate-700">
                                                <option>Strategic Consulting</option>
                                                <option>Digital Transformation</option>
                                                <option>Operations Excellence</option>
                                                <option>Human Capital</option>
                                                <option>General Inquiry</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                                        <textarea id="message" name="message" rows={4} placeholder="Tell us about your project or challenge…" value={formData.message} onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white resize-none" />
                                    </div>
                                    <button onClick={handleSubmit}
                                        className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-600/25">
                                        Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════ */}
            <section className="relative py-28 bg-slate-950 overflow-hidden" aria-label="Call to action">
                <div className="absolute inset-0" aria-hidden="true">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                        alt="" className="w-full h-full object-cover opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950" />
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <RevealOnScroll>
                        <span className="text-blue-400 font-bold text-[10px] tracking-[0.25em] uppercase mb-5 block">Ready to Grow?</span>
                        <h2 className="disp text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                            Have a project in mind<br className="hidden md:block" /> or a challenge to solve?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/about" className="group bg-white text-blue-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-black text-base transition-all shadow-2xl shadow-blue-950/50 flex items-center gap-2">
                                Learn About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-black text-base transition-all border border-blue-500 shadow-xl shadow-blue-600/30">
                                <MessageCircle className="w-5 h-5" /> Book a Call
                            </Link>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
            <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
                        <div className="sm:col-span-2">
                            <div className="flex items-center gap-3 mb-5">
                                <img src="/assets/qbl-logo.png" alt="QBL Logo" className="w-10 h-10 object-contain" />
                                <div className="flex flex-col leading-none">
                                    <span className="disp font-black text-[17px] tracking-wide text-slate-900">CONSULTING</span>
                                    <span className="text-[9px] font-bold tracking-[0.25em] text-orange-500 uppercase mt-0.5">Enterprise Solutions</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mb-6 max-w-xs leading-relaxed">
                                <span className="font-semibold text-slate-700">PT QBL Consulting Indonesia</span><br /><br />
                                Gedung Grand Slipi Tower, Lantai 5 Unit F<br />
                                Jakarta Barat, DKI Jakarta
                            </p>
                            <div className="flex gap-2">
                                {[{ I: Linkedin, l: "LinkedIn" }, { I: Twitter, l: "Twitter" }, { I: Facebook, l: "Facebook" }, { I: Instagram, l: "Instagram" }].map(({ I, l }) => (
                                    <button key={l} aria-label={l} className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                                        <I className="w-4 h-4" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="disp font-bold text-slate-900 mb-5">Company</h4>
                            <ul className="space-y-3">
                                {[
                                    { l: "About Us", h: "/about" },
                                    { l: "Contact Us", h: "/contact" },
                                    { l: "Services", h: "/services" },
                                    { l: "Careers", h: "#" },
                                ].map(({ l, h }) => (
                                    <li key={l}>
                                        <Link to={h} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                            <ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0" />{l}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="disp font-bold text-slate-900 mb-5">Support</h4>
                            <ul className="space-y-3">
                                {["Help Center", "Terms & Conditions", "Privacy Policy", "Cookie Policy"].map(l => (
                                    <li key={l}><a href="#" className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors"><ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0" />{l}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
                        <p className="text-xs text-slate-400">© {new Date().getFullYear()} PT QBL Consulting Indonesia. All rights reserved.</p>
                        <p className="text-xs text-slate-400">Jakarta, Indonesia · Built with precision</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}