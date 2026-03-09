import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, ArrowRight, Share2, Bookmark, ChevronRight } from "lucide-react";
import { GlobalStyles, Navbar, Footer, CtaStrip, RevealOnScroll } from "../shared/Layout";
import useSEO from "../hooks/useSEO";

// ─── ARTICLE DATA ─────────────────────────────────────────────────────────────
// In a real app this would come from an API/CMS. Keyed by slug.

const ARTICLES = {
    "digital-transformation-indonesia-2025": {
        title: "Digital Transformation in Indonesia: 2025 State of the Market",
        category: "Research Report",
        author: "Dr. Rizal Fauzan",
        authorRole: "Managing Director, QBL Consulting",
        date: "February 28, 2025",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        color: "from-blue-600 to-blue-800",
        tags: ["Digital", "Indonesia", "2025", "Strategy"],
        excerpt: "An in-depth analysis of how Indonesian enterprises are navigating digital adoption across key sectors.",
        body: [
            { type: "lead", text: "Indonesia's digital economy is projected to hit USD 210 billion by 2030. Yet our research shows that fewer than 30% of mid-market enterprises have a coherent digital strategy in place. The gap between ambition and execution has never been wider — or more consequential." },
            { type: "h2", text: "Key Findings: Where Indonesia Stands" },
            { type: "p", text: "Across 180 enterprises surveyed in Q4 2024, we found three consistent patterns: technology adoption is rapid but uncoordinated, change management is chronically underinvested, and the talent gap is widening faster than training programs can close it." },
            { type: "stat", stats: [{ value: "68%", label: "Have begun ERP modernization" }, { value: "31%", label: "Have a formal digital roadmap" }, { value: "2.4×", label: "ROI for coordinated programs vs. ad-hoc" }] },
            { type: "h2", text: "Sector Spotlight: Manufacturing" },
            { type: "p", text: "Manufacturing leads the pack in digital investment, driven by Industry 4.0 pressure from global OEM partners. Smart factory pilots are proliferating in West Java and East Java, with early adopters reporting 18–25% efficiency gains from IoT-connected production lines." },
            { type: "quote", text: "\"The technology is not the hard part. Getting 3,000 operators to change how they work every day — that's where transformation programs win or lose.\"", attribution: "COO, Top-10 Indonesian Manufacturing Group" },
            { type: "h2", text: "Sector Spotlight: Banking & Financial Services" },
            { type: "p", text: "The OJK's regulatory push toward open banking API standards is accelerating fintech integration among incumbent banks. However, legacy core banking platforms — many dating to the late 2000s — remain a critical constraint on innovation velocity." },
            { type: "h2", text: "What High-Performers Do Differently" },
            { type: "p", text: "The top quartile of digital performers in our study share three practices: executive sponsorship from the C-suite (not delegated to IT), dedicated transformation offices with P&L accountability, and a systematic approach to capability building alongside technology deployment." },
            { type: "h2", text: "Outlook for 2025 and Beyond" },
            { type: "p", text: "We expect AI and automation to be the dominant investment theme in 2025, with intelligent process automation (IPA) adoption rising sharply in finance, HR, and customer operations. Companies that build strong data foundations now will be positioned to capture disproportionate value from these investments." },
        ],
        related: [
            { slug: "erp-implementation-manufacturing", title: "How a Jakarta Manufacturer Cut Costs by 40% with ERP Modernization", category: "Case Study" },
            { slug: "change-management-digital-rollout", title: "Why Change Management Is the #1 Reason Digital Projects Fail", category: "Blog" },
            { slug: "ai-automation-financial-services", title: "AI-Driven Compliance Automation at a Tier-1 Indonesian Bank", category: "Case Study" },
        ],
    },
    "erp-implementation-manufacturing": {
        title: "How a Jakarta Manufacturer Cut Costs by 40% with ERP Modernization",
        category: "Case Study",
        author: "Ahmad Wirawan",
        authorRole: "Digital Practice Lead, QBL Consulting",
        date: "December 10, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        color: "from-orange-500 to-amber-600",
        tags: ["ERP", "Manufacturing", "Cost Reduction"],
        excerpt: "A step-by-step breakdown of how QBL guided PT Nusantara Mfg through a full SAP S/4HANA migration.",
        body: [
            { type: "lead", text: "PT Nusantara Manufacturing, a mid-sized automotive components maker with 2,400 employees across three plants, approached QBL in early 2024 with a clear mandate: modernize a fragmented ERP landscape — four disconnected systems from three vendors — into a single source of truth." },
            { type: "stat", stats: [{ value: "40%", label: "Cost reduction achieved" }, { value: "9 months", label: "Implementation timeline" }, { value: "IDR 48B", label: "Annual savings run rate" }] },
            { type: "h2", text: "The Challenge" },
            { type: "p", text: "Legacy systems meant finance, production, and procurement teams worked from different versions of the truth. Month-end close took 18 days. Inventory accuracy was 71%. Customer order fulfillment rate sat at 84%, well below the industry benchmark of 96%." },
            { type: "h2", text: "QBL's Approach" },
            { type: "p", text: "We deployed a phased SAP S/4HANA implementation, beginning with finance and procurement (Months 1–4), followed by manufacturing and supply chain (Months 5–8), and a final stabilization and optimization phase (Month 9). A dedicated change management track ran in parallel throughout." },
            { type: "quote", text: "\"QBL didn't just implement software — they redesigned how we run our business. The results speak for themselves.\"", attribution: "CEO, PT Nusantara Manufacturing" },
            { type: "h2", text: "Results at 12 Months" },
            { type: "p", text: "Month-end close reduced to 4 days. Inventory accuracy improved to 97%. Order fulfillment rate climbed to 98.2%. Total cost savings (procurement, inventory, and process efficiency) exceed IDR 48 billion annually against an implementation investment of IDR 12 billion — a 4× ROI in year one." },
        ],
        related: [
            { slug: "digital-transformation-indonesia-2025", title: "Digital Transformation in Indonesia: 2025 State of the Market", category: "Research Report" },
            { slug: "supply-chain-resilience-southeast-asia", title: "Building Supply Chain Resilience in Southeast Asia", category: "Research Report" },
            { slug: "retail-omnichannel-case-study", title: "Omnichannel Transformation for Indonesia's Top 5 Retail Chain", category: "Case Study" },
        ],
    },
};

// Generic fallback for slugs not yet in the data
const FALLBACK = (slug) => ({
    title: "Article Not Found",
    category: "Blog",
    author: "QBL Consulting",
    authorRole: "Editorial Team",
    date: "2025",
    readTime: "—",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-600 to-blue-800",
    tags: [],
    excerpt: "",
    body: [{ type: "lead", text: "This article is coming soon. Please check back later or browse our other insights." }],
    related: [],
});

// ─── BODY RENDERERS ──────────────────────────────────────────────────────────

const BodyBlock = ({ block }) => {
    switch (block.type) {
        case "h2":
            return <h2 className="disp text-2xl font-bold text-slate-900 mt-10 mb-4">{block.text}</h2>;
        case "lead":
            return <p className="text-lg text-slate-700 font-medium leading-relaxed border-l-4 border-blue-500 pl-5 my-6">{block.text}</p>;
        case "p":
            return <p className="text-slate-600 leading-relaxed my-4">{block.text}</p>;
        case "quote":
            return (
                <blockquote className="my-8 bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                    <p className="text-slate-800 text-lg italic font-medium leading-relaxed">{block.text}</p>
                    {block.attribution && <p className="text-slate-500 text-sm mt-3 font-semibold">— {block.attribution}</p>}
                </blockquote>
            );
        case "stat":
            return (
                <div className="my-8 grid grid-cols-3 gap-4">
                    {block.stats.map((s, i) => (
                        <div key={i} className="bg-slate-900 rounded-2xl p-5 text-center">
                            <p className="disp text-3xl font-black text-white mb-1">{s.value}</p>
                            <p className="text-slate-400 text-xs font-medium leading-tight">{s.label}</p>
                        </div>
                    ))}
                </div>
            );
        default:
            return null;
    }
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CaseStudyDetailPage() {
    const { slug } = useParams();
    const article = ARTICLES[slug] || FALLBACK(slug);

    useSEO({
        title: `${article.title} | QBL Consulting`,
        description: article.excerpt || `Read the ${article.category} by QBL Consulting.`,
    });

    const catColor = {
        "Research Report": "bg-blue-100 text-blue-700",
        "Case Study": "bg-orange-100 text-orange-700",
        "Webinar": "bg-rose-100 text-rose-700",
        "Blog": "bg-slate-100 text-slate-600",
    }[article.category] || "bg-blue-100 text-blue-700";

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <GlobalStyles />
            <Navbar activePage="Insights" />

            {/* Hero image */}
            <div className="relative h-64 md:h-96 overflow-hidden bg-slate-900">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto">
                    <Link to="/insights" className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white text-xs font-bold mb-4 transition-colors">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights
                    </Link>
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide mb-3 ${catColor}`}>
                        {article.category}
                    </span>
                    <h1 className="disp text-2xl md:text-4xl font-black text-white leading-tight">{article.title}</h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Article body */}
                    <div className="lg:col-span-2">
                        {/* Meta bar */}
                        <div className="flex flex-wrap items-center gap-4 pb-6 mb-6 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${article.color} flex items-center justify-center text-white font-bold text-sm`}>
                                    {article.author[0]}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">{article.author}</p>
                                    <p className="text-xs text-slate-400">{article.authorRole}</p>
                                </div>
                            </div>
                            <span className="text-slate-300">·</span>
                            <span className="flex items-center gap-1 text-xs text-slate-500"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                            <span className="text-slate-300">·</span>
                            <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                            <div className="ml-auto flex gap-2">
                                <button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors">
                                    <Bookmark className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Body blocks */}
                        <div className="prose-base max-w-none">
                            {article.body.map((block, i) => <BodyBlock key={i} block={block} />)}
                        </div>

                        {/* Tags */}
                        {article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
                                {article.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Author card */}
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">About the Author</p>
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${article.color} flex items-center justify-center text-white font-black text-lg`}>
                                    {article.author[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">{article.author}</p>
                                    <p className="text-xs text-slate-500">{article.authorRole}</p>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed">Senior advisor with 15+ years experience in enterprise transformation across Southeast Asia.</p>
                        </div>

                        {/* CTA card */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                            <p className="font-bold text-sm mb-2">Ready to achieve similar results?</p>
                            <p className="text-blue-200 text-xs mb-5 leading-relaxed">Book a complimentary 60-minute discovery call with one of our senior advisors.</p>
                            <a href="/contact" className="flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors w-fit">
                                Book a Call <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>

                        {/* Related articles */}
                        {article.related.length > 0 && (
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Related Insights</p>
                                <div className="space-y-3">
                                    {article.related.map(rel => (
                                        <a key={rel.slug} href={`/insights/${rel.slug}`}
                                            className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group">
                                            <ChevronRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 mb-1">{rel.category}</p>
                                                <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug">{rel.title}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <CtaStrip />
            <Footer />
        </div>
    );
}
