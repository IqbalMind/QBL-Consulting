import { ArrowRight, Home, Search, FileText, Phone } from "lucide-react";
import { GlobalStyles, Navbar, Footer } from "../shared/Layout";
import useSEO from "../hooks/useSEO";

export default function NotFoundPage() {
    useSEO({
        title: "Page Not Found | QBL Consulting",
        description: "The page you are looking for does not exist.",
        noindex: true,
    });

    return (
        <div className="min-h-screen bg-slate-950 overflow-x-hidden flex flex-col">
            <GlobalStyles />
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-4 py-20">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    {/* 404 display */}
                    <div className="mb-6">
                        <p className="disp text-[120px] md:text-[180px] font-black leading-none"
                            style={{
                                background: "linear-gradient(135deg, #93c5fd 0%, #60a5fa 40%, #3b82f6 80%, #1d4ed8 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>
                            404
                        </p>
                    </div>

                    <h1 className="disp text-2xl md:text-3xl font-black text-white mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-md mx-auto">
                        The page you're looking for has moved, been deleted, or never existed. Let's get you back on track.
                    </p>

                    {/* Quick links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-xl mx-auto">
                        {[
                            { icon: Home, label: "Home", href: "/" },
                            { icon: FileText, label: "Services", href: "/services" },
                            { icon: Search, label: "Insights", href: "/insights" },
                            { icon: Phone, label: "Contact", href: "/contact" },
                        ].map(({ icon: Icon, label, href }) => (
                            <a key={label} href={href}
                                className="flex flex-col items-center gap-2 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-2xl text-white transition-all group">
                                <div className="w-9 h-9 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <Icon className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">{label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Primary CTA */}
                    <a href="/"
                        className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-blue-600/30">
                        <Home className="w-4 h-4" />
                        Back to Home
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
