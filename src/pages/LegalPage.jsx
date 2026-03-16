import React from "react";
import { Navbar, Footer, GlobalStyles } from "../shared/Layout";

export default function LegalPage({ title, lastUpdated, sections }) {
    return (
        <div className="min-h-screen bg-white">
            <GlobalStyles />
            <Navbar activePage={title} />

            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 border-b border-slate-100 pb-8">
                        <h1 className="disp text-4xl font-black text-slate-900 mb-4">{title}</h1>
                        <p className="text-slate-500">Last updated: {lastUpdated}</p>
                    </div>

                    <div className="space-y-12 text-slate-700 leading-relaxed">
                        {sections.map((section, idx) => (
                            <section key={idx}>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                                <div className="space-y-4">
                                    {section.content.map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                    {section.list && (
                                        <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-600">
                                            {section.list.map((item, iIdx) => (
                                                <li key={iIdx}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Questions about our {title}?</h3>
                            <p className="text-slate-600">Our legal and support teams are here to help.</p>
                        </div>
                        <a href="/contact" className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md">
                            Contact Us
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
