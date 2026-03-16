import React from 'react';
import { Navbar, Footer, PageHero, CtaStrip, GlobalStyles } from "../shared/Layout";

export default function GenericPage({ title, eyebrow = "Information", subtitle = "Learn more about our services and expertise." }) {
    return (
        <div className="min-h-screen bg-white">
            <GlobalStyles />
            <Navbar activePage={title} />

            <main>
                <PageHero
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                />

                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    Comprehensive Solutions for {title}
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Our extensive experience in {title.toLowerCase()} allows us to provide tailored insights
                                    and actionable strategies that drive real business value. We understand the unique challenges
                                    and opportunities within this domain.
                                </p>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Partner with our team of experts to navigate complexities, optimize operations, and achieve sustainable growth.
                                    We bring a data-driven approach and industry best practices to every engagement.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {['Strategic Alignment', 'Operational Excellence', 'Innovative Approaches'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-blue-600" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30">
                                    Discuss Your Needs
                                </a>
                            </div>

                            <div className="relative">
                                {/* Decorative elements for a professional look instead of an image */}
                                <div className="aspect-square rounded-3xl bg-slate-50 border border-slate-100 p-8 relative overflow-hidden flex flex-col justify-center shadow-xl shadow-slate-200/50">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -ml-20 -mb-20" />

                                    <div className="relative z-10 space-y-6">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center shrink-0 border border-blue-100 mt-1">
                                                    <div className="w-5 h-5 rounded bg-blue-600 opacity-80" />
                                                </div>
                                                <div>
                                                    <div className="h-5 w-32 bg-slate-200 rounded mb-3" />
                                                    <div className="h-3 w-full bg-slate-100 rounded mb-2" />
                                                    <div className="h-3 w-4/5 bg-slate-100 rounded" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaStrip />
            </main>

            <Footer />
        </div>
    );
}
