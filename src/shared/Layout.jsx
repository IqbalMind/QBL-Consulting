import { useState, useEffect, useRef } from "react";
import {
    Menu, X, ChevronDown, MessageCircle, Headphones, LogIn,
    Settings, Building2, TrendingUp, ArrowRight, Phone, Mail, Clock,
    Linkedin, Twitter, Facebook, Instagram, ChevronRight,
    BarChart3, ShieldCheck, Cpu, Handshake, Landmark, Factory,
    HeartPulse, ShoppingBag, Plane, Globe2, Layers, Workflow,
    Newspaper, Video, FileText, BookOpen, Target, Users, Award,
    MapPin, Monitor, Briefcase, Globe
} from "lucide-react";

// ─── SHARED CONSTANTS ────────────────────────────────────────────────────────

export const CONTACT = {
    phone: "+62 878-1666-6086",
    phoneHref: "+6287816666086",
    email: "hello@iqbalmind.id",
    hours: "Mon–Fri  8:00 AM – 5:00 PM WIB",
    address1: "Gedung Grand Slipi Tower, Lantai 5 Unit F",
    address2: "Jakarta Barat, DKI Jakarta, Indonesia",
};

export const NAV_MENU = [
    {
        label: "Services", icon: Settings,
        featured: { title: "End-to-End Advisory", desc: "From strategy to execution, we deliver results that last." },
        columns: [
            {
                heading: "Core Services", items: [
                    { icon: TrendingUp, label: "Business Strategy", desc: "Market expansion & M&A", href: "/services/business-strategy" },
                    { icon: Monitor, label: "Digital Transformation", desc: "ERP, cloud & tech modernization", href: "/services/digital-transformation" },
                    { icon: Settings, label: "Operations Excellence", desc: "Supply chain & process automation", href: "/services/operations-excellence" },
                    { icon: Briefcase, label: "Human Capital", desc: "Leadership & org design", href: "/services/human-capital" },
                ]
            },
            {
                heading: "Specialized", items: [
                    { icon: BarChart3, label: "Data & Analytics", desc: "BI dashboards & data strategy", href: "/services" },
                    { icon: ShieldCheck, label: "Risk & Compliance", desc: "Regulatory & audit readiness", href: "/services" },
                    { icon: Cpu, label: "AI & Automation", desc: "Intelligent process automation", href: "/services" },
                    { icon: Handshake, label: "M&A Advisory", desc: "Due diligence & integration", href: "/services" },
                ]
            },
        ],
    },
    {
        label: "Industries", icon: Building2,
        featured: { title: "Deep Sector Expertise", desc: "Solutions built for your industry's unique dynamics." },
        columns: [
            {
                heading: "Sectors", items: [
                    { icon: Landmark, label: "Banking & Finance", desc: "Fintech & regulatory compliance", href: "#" },
                    { icon: Factory, label: "Manufacturing", desc: "Lean ops & Industry 4.0", href: "#" },
                    { icon: HeartPulse, label: "Healthcare", desc: "Digital health & ops", href: "#" },
                    { icon: ShoppingBag, label: "Retail & FMCG", desc: "Omnichannel & supply chain", href: "#" },
                ]
            },
            {
                heading: "More Sectors", items: [
                    { icon: Plane, label: "Logistics & Transport", desc: "Fleet & route optimization", href: "#" },
                    { icon: Globe2, label: "Telecoms & Media", desc: "Digital infrastructure", href: "#" },
                    { icon: Layers, label: "Technology", desc: "Scaling & product strategy", href: "#" },
                    { icon: Workflow, label: "Public Sector", desc: "Government transformation", href: "#" },
                ]
            },
        ],
    },
    {
        label: "Insights", icon: TrendingUp,
        featured: { title: "Thought Leadership", desc: "Perspectives from Indonesia's leading business advisors." },
        columns: [
            {
                heading: "Resources", items: [
                    { icon: Newspaper, label: "Research Reports", desc: "In-depth market analysis", href: "/insights?filter=report" },
                    { icon: Video, label: "Webinars", desc: "Live & on-demand sessions", href: "/insights?filter=webinar" },
                    { icon: FileText, label: "Case Studies", desc: "Real client transformations", href: "/insights?filter=case-study" },
                    { icon: BookOpen, label: "Blog", desc: "Expert opinions & trends", href: "/insights?filter=blog" },
                ]
            },
        ],
    },
    {
        label: "Company", icon: null,
        featured: { title: "About QBL Consulting", desc: "Trusted by 50+ enterprise clients across Southeast Asia." },
        columns: [
            {
                heading: "About Us", items: [
                    { icon: Target, label: "Our Mission", desc: "Vision & values", href: "/about" },
                    { icon: Users, label: "Leadership Team", desc: "Meet our advisors", href: "/about#team" },
                    { icon: Award, label: "Awards & Recognition", desc: "Industry accolades", href: "/about#awards" },
                    { icon: MapPin, label: "Locations", desc: "Jakarta & beyond", href: "/contact" },
                ]
            },
        ],
    },
];

// ─── GLOBAL STYLES (inject once per page) ───────────────────────────────────

export const GlobalStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
    *, body { font-family: 'Figtree', sans-serif; }
    h1,h2,h3,.disp { font-family: 'Outfit', sans-serif !important; }
    ::-webkit-scrollbar { width:5px }
    ::-webkit-scrollbar-track { background:#f1f5f9 }
    ::-webkit-scrollbar-thumb { background:#93c5fd; border-radius:3px }
    ::-webkit-scrollbar-thumb:hover { background:#2563eb }
    :focus-visible { outline:2px solid #3b82f6; outline-offset:2px; border-radius:6px }
    .grad-blue { background:linear-gradient(135deg,#93c5fd,#60a5fa,#3b82f6,#1d4ed8); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text }
    @keyframes slideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    .hero-grid {
      background-image: linear-gradient(rgba(59,130,246,0.08) 1px,transparent 1px), linear-gradient(90deg,rgba(59,130,246,0.08) 1px,transparent 1px);
      background-size: 56px 56px;
    }
  `}</style>
);

// ─── REVEAL ON SCROLL ────────────────────────────────────────────────────────

export const RevealOnScroll = ({ children, className = "", delay = 0, direction = "up" }) => {
    const [vis, setVis] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } },
            { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
        );
        obs.observe(el); return () => obs.disconnect();
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

// ─── MEGA MENU ───────────────────────────────────────────────────────────────

const MegaMenu = ({ menu, isOpen }) => (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 transition-all duration-200 origin-top z-50 ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
        style={{ width: menu.columns.length > 1 ? 640 : 380 }}>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-slate-100 z-10" />
        <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-300/40 border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    {menu.icon ? <menu.icon className="w-5 h-5 text-white" /> : <Settings className="w-5 h-5 text-white" />}
                </div>
                <div>
                    <p className="text-white font-bold text-sm">{menu.featured.title}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{menu.featured.desc}</p>
                </div>
            </div>
            <div className={`grid divide-x divide-slate-100 ${menu.columns.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                {menu.columns.map((col, ci) => (
                    <div key={ci} className="p-5">
                        <p className="text-[10px] font-black tracking-[0.15em] uppercase text-slate-400 mb-3 px-2">{col.heading}</p>
                        <div className="space-y-0.5">
                            {col.items.map((item, ii) => (
                                <a key={ii} href={item.href || "#"}
                                    className="flex items-start gap-3 px-2 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors mt-0.5">
                                        <item.icon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors leading-none mb-0.5">{item.label}</p>
                                        <p className="text-xs text-slate-400">{item.desc}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t border-slate-100 px-6 py-3 flex justify-between items-center bg-slate-50/60">
                <span className="text-xs text-slate-400">Need help choosing?</span>
                <a href="/contact" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all group">
                    Talk to an expert <ArrowRight className="w-3 h-3" />
                </a>
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
                                <a key={ii} href={item.href || "#"}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm">
                                    <item.icon className="w-4 h-4 text-blue-500 shrink-0" />{item.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

export const Navbar = ({ activePage = "" }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const navRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const fn = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null); };
        document.addEventListener("mousedown", fn);
        return () => document.removeEventListener("mousedown", fn);
    }, []);

    return (
        <header role="banner">
            {/* Top bar */}
            <div className="bg-blue-700 hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
                    <div className="flex items-center gap-6 text-xs text-blue-100">
                        <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-1.5 hover:text-white transition-colors"><Phone className="w-3 h-3" />{CONTACT.phone}</a>
                        <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors"><Mail className="w-3 h-3" />{CONTACT.email}</a>
                        <span className="flex items-center gap-1.5 text-blue-200"><Clock className="w-3 h-3" />{CONTACT.hours}</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-300">
                        {[{ Icon: Linkedin, l: "LinkedIn" }, { Icon: Twitter, l: "Twitter" }, { Icon: Instagram, l: "Instagram" }].map(({ Icon, l }) => (
                            <a key={l} href="#" aria-label={l} className="hover:text-white transition-colors"><Icon className="w-3.5 h-3.5" /></a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <nav ref={navRef} aria-label="Main navigation"
                className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/96 backdrop-blur-lg shadow-lg shadow-slate-200/50" : "bg-white shadow-sm"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="/" aria-label="QBL Consulting home" className="flex items-center gap-3 shrink-0 z-50 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-shadow">
                            <span className="text-white font-black text-xs tracking-tighter disp">QBL</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="disp font-black text-[17px] tracking-wide text-slate-900 leading-none">CONSULTING</span>
                            <span className="text-[9px] font-bold tracking-[0.25em] text-orange-500 uppercase mt-0.5">Enterprise Solutions</span>
                        </div>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center h-full">
                        {NAV_MENU.map((menu, i) => (
                            <div key={i} className="relative h-full flex items-center">
                                <button
                                    onMouseEnter={() => setOpenMenu(i)}
                                    onMouseLeave={() => setOpenMenu(null)}
                                    onClick={() => setOpenMenu(p => p === i ? null : i)}
                                    aria-expanded={openMenu === i}
                                    className={`flex items-center gap-1.5 px-4 h-full text-sm font-semibold transition-colors relative ${openMenu === i || activePage === menu.label ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}>
                                    {menu.icon && <menu.icon className="w-3.5 h-3.5" />}
                                    {menu.label}
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === i ? "rotate-180" : ""}`} />
                                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full transition-all duration-200 ${openMenu === i || activePage === menu.label ? "opacity-100" : "opacity-0"}`} />
                                </button>
                                <div onMouseEnter={() => setOpenMenu(i)} onMouseLeave={() => setOpenMenu(null)} className="absolute top-full left-0">
                                    <MegaMenu menu={menu} isOpen={openMenu === i} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="hidden lg:flex items-center gap-2 shrink-0">
                        <a href="/contact" className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-emerald-500/25">
                            <MessageCircle className="w-4 h-4" /> Consult Now
                        </a>
                        <button className="flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all">
                            <Headphones className="w-4 h-4" /> Support
                        </button>
                        <button className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium transition-all">
                            <LogIn className="w-4 h-4" /> Login
                        </button>
                    </div>

                    {/* Mobile toggle */}
                    <button onClick={() => setMobileOpen(o => !o)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors z-50">
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile drawer */}
                <div aria-hidden={!mobileOpen}
                    className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"}`}>
                    <div className="px-4 py-4 space-y-1">
                        {NAV_MENU.map((menu, i) => <MobileMenuItem key={i} menu={menu} />)}
                        <div className="pt-4 border-t border-slate-100 space-y-2 mt-2">
                            <a href="/contact" className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-bold text-center transition-colors">Consult Now</a>
                            <button className="w-full bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm font-medium">Client Support</button>
                        </div>
                        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
                            <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-1.5 py-2"><Phone className="w-3 h-3" />{CONTACT.phone}</a>
                            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 py-2"><Mail className="w-3 h-3" />Email us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────

export const Footer = () => (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
                <div className="sm:col-span-2">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-800 rounded-xl flex items-center justify-center text-white font-black text-xs shadow-md shadow-blue-500/30 disp">QBL</div>
                        <div className="flex flex-col leading-none">
                            <span className="disp font-black text-[17px] tracking-wide text-slate-900">CONSULTING</span>
                            <span className="text-[9px] font-bold tracking-[0.25em] text-orange-500 uppercase mt-0.5">Enterprise Solutions</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 max-w-xs leading-relaxed">
                        <span className="font-semibold text-slate-700">PT QBL Consulting Indonesia</span><br /><br />
                        {CONTACT.address1}<br />{CONTACT.address2}
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
                        {[{ l: "About Us", h: "/about" }, { l: "Contact Us", h: "/contact" }, { l: "Portfolio", h: "#" }, { l: "Careers", h: "#" }].map(({ l, h }) => (
                            <li key={l}><a href={h} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors"><ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0" />{l}</a></li>
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
);

// ─── PAGE HERO BANNER (reusable for inner pages) ─────────────────────────────

export const PageHero = ({ eyebrow, title, highlight, subtitle, gradient = "from-slate-950 via-blue-950 to-slate-900" }) => (
    <section className={`relative pt-20 pb-24 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {eyebrow}
            </div>
            <h1 className="disp text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                {title}{highlight && <><br /><span className="grad-blue">{highlight}</span></>}
            </h1>
            {subtitle && <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed">{subtitle}</p>}
        </div>
    </section>
);

// ─── CTA STRIP ───────────────────────────────────────────────────────────────

export const CtaStrip = ({ heading = "Ready to transform your business?", sub = "Talk to one of our senior advisors today — no obligation." }) => (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950" aria-hidden="true" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="disp text-3xl md:text-4xl font-black text-white mb-4">{heading}</h2>
            <p className="text-slate-400 mb-8">{sub}</p>
            <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/30">
                    Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services" className="flex items-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 text-white px-8 py-3.5 rounded-xl font-bold transition-all">
                    Explore Services
                </a>
            </div>
        </div>
    </section>
);