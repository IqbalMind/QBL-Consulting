import { useState } from "react";
import {
    Newspaper, Video, FileText, BookOpen, ArrowRight,
    Clock, User, Tag, ChevronRight, Search, TrendingUp, Filter
} from "lucide-react";
import { GlobalStyles, Navbar, Footer, PageHero, CtaStrip, RevealOnScroll } from "../shared/Layout";
import useSEO from "../hooks/useSEO";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
    { label: "All", value: "all", icon: Filter },
    { label: "Research Reports", value: "report", icon: Newspaper },
    { label: "Case Studies", value: "case-study", icon: FileText },
    { label: "Webinars", value: "webinar", icon: Video },
    { label: "Blog", value: "blog", icon: BookOpen },
];

const ARTICLES = [
    {
        slug: "digital-transformation-indonesia-2025",
        category: "report",
        categoryLabel: "Research Report",
        title: "Digital Transformation in Indonesia: 2025 State of the Market",
        excerpt: "An in-depth analysis of how Indonesian enterprises are navigating digital adoption, from ERP rollouts to AI integration across key sectors.",
        author: "Dr. Rizal Fauzan",
        authorRole: "Managing Director",
        date: "Feb 28, 2025",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        featured: true,
        tags: ["Digital", "Indonesia", "2025"],
        color: "from-blue-600 to-blue-800",
    },
    {
        slug: "supply-chain-resilience-southeast-asia",
        category: "report",
        categoryLabel: "Research Report",
        title: "Building Supply Chain Resilience in Post-Pandemic Southeast Asia",
        excerpt: "How leading manufacturers in the region are redesigning their supply chains for agility, nearshoring, and digital visibility.",
        author: "Sarah Hartono",
        authorRole: "Operations Director",
        date: "Jan 15, 2025",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        tags: ["Operations", "Supply Chain"],
        color: "from-emerald-600 to-teal-700",
    },
    {
        slug: "erp-implementation-manufacturing",
        category: "case-study",
        categoryLabel: "Case Study",
        title: "How a Jakarta Manufacturer Cut Costs by 40% with ERP Modernization",
        excerpt: "A step-by-step breakdown of how QBL's team guided PT Nusantara Mfg through a full SAP S/4HANA migration in under 9 months.",
        author: "Ahmad Wirawan",
        authorRole: "Digital Practice Lead",
        date: "Dec 10, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        tags: ["ERP", "Manufacturing", "Cost Reduction"],
        color: "from-orange-500 to-amber-600",
    },
    {
        slug: "ai-automation-financial-services",
        category: "case-study",
        categoryLabel: "Case Study",
        title: "AI-Driven Compliance Automation at a Tier-1 Indonesian Bank",
        excerpt: "How we helped a leading bank reduce regulatory reporting time by 65% using intelligent process automation and ML-based anomaly detection.",
        author: "Dr. Rizal Fauzan",
        authorRole: "Managing Director",
        date: "Nov 5, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        tags: ["AI", "Banking", "Compliance"],
        color: "from-violet-600 to-purple-700",
    },
    {
        slug: "future-of-work-indonesia",
        category: "webinar",
        categoryLabel: "Webinar",
        title: "The Future of Work in Indonesia: Hybrid Models & Leadership",
        excerpt: "A recorded session with three C-suite leaders discussing how Indonesian enterprises are redefining workforce strategy for 2025 and beyond.",
        author: "Dewi Santoso",
        authorRole: "Human Capital Lead",
        date: "Oct 22, 2024",
        readTime: "45 min watch",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        tags: ["HR", "Webinar", "Leadership"],
        color: "from-rose-500 to-pink-700",
    },
    {
        slug: "ma-due-diligence-checklist",
        category: "blog",
        categoryLabel: "Blog",
        title: "The M&A Due Diligence Checklist Every Indonesian Executive Needs",
        excerpt: "Before you sign the term sheet, make sure your team has covered these 12 critical dimensions — from financial health to cultural alignment.",
        author: "Budi Prasetyo",
        authorRole: "Strategy Partner",
        date: "Sep 30, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        tags: ["M&A", "Strategy"],
        color: "from-slate-600 to-slate-800",
    },
    {
        slug: "change-management-digital-rollout",
        category: "blog",
        categoryLabel: "Blog",
        title: "Why Change Management Is the #1 Reason Digital Projects Fail",
        excerpt: "Technology is rarely the problem. We explore the human and organizational factors that derail transformation programs — and how to fix them.",
        author: "Dewi Santoso",
        authorRole: "Human Capital Lead",
        date: "Aug 18, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        tags: ["Change Management", "Digital"],
        color: "from-amber-500 to-orange-600",
    },
    {
        slug: "retail-omnichannel-case-study",
        category: "case-study",
        categoryLabel: "Case Study",
        title: "Omnichannel Transformation for Indonesia's Top 5 Retail Chain",
        excerpt: "How QBL helped a national retail group unify online and offline customer journeys, boosting NPS by 28 points in 6 months.",
        author: "Ahmad Wirawan",
        authorRole: "Digital Practice Lead",
        date: "Jul 4, 2024",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        tags: ["Retail", "Omnichannel", "CX"],
        color: "from-cyan-500 to-blue-600",
    },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

const CategoryBadge = ({ label, color }) => {
    const colorMap = {
        "Research Report": "bg-blue-100 text-blue-700",
        "Case Study": "bg-orange-100 text-orange-700",
        "Webinar": "bg-rose-100 text-rose-700",
        "Blog": "bg-slate-100 text-slate-600",
    };
    return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${colorMap[label] || "bg-blue-100 text-blue-700"}`}>
            {label}
        </span>
    );
};

const ArticleCard = ({ article, large = false }) => (
    <a href={`/insights/${article.slug}`}
        className={`group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col ${large ? "md:flex-row" : ""}`}>
        <div className={`overflow-hidden shrink-0 ${large ? "md:w-1/2 h-56 md:h-auto" : "h-48"}`}>
            <img src={article.image} alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className={`flex flex-col flex-grow p-6 ${large ? "md:p-8" : ""}`}>
            <div className="flex items-center gap-2 mb-3">
                <CategoryBadge label={article.categoryLabel} />
                <span className="text-slate-400 text-xs">·</span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />{article.readTime}
                </span>
            </div>
            <h3 className={`disp font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-3 ${large ? "text-2xl md:text-3xl" : "text-lg"}`}>
                {article.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">{article.excerpt}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${article.color} flex items-center justify-center text-white font-bold text-xs disp shrink-0`}>
                        {article.author[0]}
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-800">{article.author}</p>
                        <p className="text-[11px] text-slate-400">{article.date}</p>
                    </div>
                </div>
                <span className="flex items-center gap-1 text-blue-600 text-xs font-bold group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
            </div>
        </div>
    </a>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function InsightsPage() {
    useSEO({
        title: "Insights & Thought Leadership | QBL Consulting",
        description: "Research reports, case studies, webinars, and expert blog posts from QBL Consulting — Indonesia's premier enterprise advisory firm.",
    });

    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(6);

    const featured = ARTICLES.find(a => a.featured);
    const filtered = ARTICLES.filter(a => {
        const matchCat = activeFilter === "all" || a.category === activeFilter;
        const matchSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch && !a.featured;
    });

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            <GlobalStyles />
            <Navbar activePage="Insights" />

            <PageHero
                eyebrow="Knowledge Hub"
                title="Insights &"
                highlight="Thought Leadership"
                subtitle="In-depth research, real client stories, expert perspectives, and on-demand webinars from QBL's senior advisory team."
            />

            {/* ── FEATURED ARTICLE ── */}
            {featured && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RevealOnScroll>
                            <div className="flex items-center gap-2 mb-8">
                                <TrendingUp className="w-4 h-4 text-orange-500" />
                                <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Featured</span>
                            </div>
                            <ArticleCard article={featured} large />
                        </RevealOnScroll>
                    </div>
                </section>
            )}

            {/* ── FILTER + GRID ── */}
            <section className="py-16 lg:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Controls */}
                    <RevealOnScroll>
                        <div className="flex flex-col sm:flex-row gap-4 mb-10 items-start sm:items-center justify-between">
                            {/* Category tabs */}
                            <div className="flex flex-wrap gap-2">
                                {CATEGORIES.map(cat => (
                                    <button key={cat.value}
                                        onClick={() => { setActiveFilter(cat.value); setVisibleCount(6); }}
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === cat.value
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                                            : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"}`}>
                                        <cat.icon className="w-3.5 h-3.5" />
                                        {cat.label}
                                    </button>
                                ))}
                            </div>

                            {/* Search */}
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search articles…"
                                    value={searchQuery}
                                    onChange={e => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm transition-all"
                                />
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Grid */}
                    {filtered.length === 0 ? (
                        <RevealOnScroll>
                            <div className="text-center py-20">
                                <p className="text-slate-400 text-lg font-medium">No articles found.</p>
                                <p className="text-slate-400 text-sm mt-1">Try adjusting your filter or search query.</p>
                                <button onClick={() => { setActiveFilter("all"); setSearchQuery(""); }}
                                    className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                                    Clear filters
                                </button>
                            </div>
                        </RevealOnScroll>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filtered.slice(0, visibleCount).map((article, i) => (
                                    <RevealOnScroll key={article.slug} delay={i * 60}>
                                        <ArticleCard article={article} />
                                    </RevealOnScroll>
                                ))}
                            </div>

                            {/* Load more */}
                            {visibleCount < filtered.length && (
                                <RevealOnScroll>
                                    <div className="text-center mt-12">
                                        <button onClick={() => setVisibleCount(v => v + 6)}
                                            className="group flex items-center gap-2 mx-auto bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-lg hover:shadow-blue-600/20">
                                            Load More Articles
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-slate-400 text-xs mt-3">
                                            Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} articles
                                        </p>
                                    </div>
                                </RevealOnScroll>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* ── NEWSLETTER CTA ── */}
            <section className="py-20 bg-white">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <RevealOnScroll>
                        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-10 md:p-14 shadow-2xl">
                            <span className="text-blue-400 font-bold text-[10px] tracking-[0.25em] uppercase">Stay Updated</span>
                            <h2 className="disp text-2xl md:text-3xl font-black text-white mt-3 mb-3">
                                Get Insights Delivered
                            </h2>
                            <p className="text-slate-400 text-sm mb-8">
                                Monthly digest of our latest research, case studies, and expert perspectives — no spam, unsubscribe anytime.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="your@company.com"
                                    className="flex-grow px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                                />
                                <button type="submit"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm shrink-0">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <CtaStrip />
            <Footer />
        </div>
    );
}
