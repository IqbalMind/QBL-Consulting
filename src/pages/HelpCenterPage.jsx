import React, { useState } from "react";
import { Navbar, Footer, GlobalStyles, CtaStrip, PageHero } from "../shared/Layout";
import { Search, ChevronDown, BookOpen, MessageCircle, FileText } from "lucide-react";

const faqs = [
    { q: "How do I engage QBL Consulting for an advisory project?", a: "You can start by booking a free initial consultation via our Contact page. Our team will assess your needs and propose a customized engagement model." },
    { q: "What industries do you specialize in?", a: "We have deep expertise across Banking & Finance, Manufacturing, Healthcare, Retail & FMCG, Logistics, Technology, and the Public Sector." },
    { q: "Do you offer implementation support, or just strategy?", a: "We provide end-to-end services. Our 'End-to-End Advisory' model means we not only design the strategy but also oversee its successful execution and change management." },
    { q: "How does your pricing structure work?", a: "Our engagements are typically structured on a project basis, retainer model, or hybrid approach depending on the scope, timeline, and deliverables required. We provide transparent pricing during the proposal phase." },
    { q: "Where are your consultants located?", a: "Our headquarters is in Jakarta, Indonesia, but we serve enterprise clients across Southeast Asia and globally through both remote and on-site engagements." }
];

export default function HelpCenterPage() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-white">
            <GlobalStyles />
            <Navbar activePage="Help Center" />

            <main>
                <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950" />
                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <h1 className="disp text-4xl md:text-5xl font-black text-white mb-6">How can we help you today?</h1>
                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search our knowledge base or FAQs..."
                                className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-2xl px-6 py-4 pl-14 focus:outline-none focus:border-blue-500 focus:bg-white/15 transition-all text-lg"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: BookOpen, title: "Knowledge Base", desc: "Detailed guides on our methodologies, compliance frameworks, and industry reports.", link: "/insights" },
                                { icon: FileText, title: "Policies & Terms", desc: "Review our engagement terms, privacy policy, and client data protection guidelines.", link: "/terms-and-conditions" },
                                { icon: MessageCircle, title: "Client Support", desc: "Direct channel for active clients needing immediate operational or technical assistance.", link: "/contact" }
                            ].map((item, i) => (
                                <a key={i} href={item.link} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-slate-600 text-lg">Quick answers to common questions about engaging with QBL Consulting.</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                                    >
                                        <span className="font-semibold text-slate-900">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`px-6 bg-slate-50 transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-40 py-4 border-t border-slate-100' : 'max-h-0'}`}>
                                        <p className="text-slate-600">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center text-slate-600">
                            Still have questions? <a href="/contact" className="text-blue-600 font-semibold hover:underline">Contact our support team</a>
                        </div>
                    </div>
                </section>

                <CtaStrip heading="Need dedicated support?" sub="Active clients can reach their assigned account manager 24/7." />
            </main>

            <Footer />
        </div>
    );
}
