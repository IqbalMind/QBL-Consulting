import React from "react";
import { Navbar, Footer, GlobalStyles, CtaStrip, PageHero } from "../shared/Layout";
import { Briefcase, Users, Star, ArrowRight, MapPin } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-white">
            <GlobalStyles />
            <Navbar activePage="Careers" />

            <main>
                <PageHero
                    eyebrow="Careers at QBL"
                    title="Shape the Future of Business"
                    subtitle="Join a team of elite problem-solvers, strategists, and industry experts. We are always looking for top talent to drive transformation for Southeast Asia's leading enterprises."
                />

                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Why Join Us?</h2>
                            <p className="max-w-2xl mx-auto text-lg text-slate-600">
                                At QBL Consulting, we offer more than just a job. We provide a platform for accelerated growth, impactful work, and continuous learning.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Star, title: "High-Impact Projects", desc: "Work closely with C-level executives on strategy and operations that redefine entire organizations." },
                                { icon: Users, title: "Collaborative Culture", desc: "Environment built on meritocracy, diversity of thought, and mutual respect among industry peers." },
                                { icon: Briefcase, title: "Accelerated Growth", desc: "Comprehensive training, mentorship programs, and clear pathways for rapid career advancement." }
                            ].map((perk, i) => (
                                <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl text-center">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mx-auto mb-6">
                                        <perk.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{perk.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Open Positions</h2>
                                <p className="text-slate-400 text-lg">Find your next challenge at our Jakarta headquarters or regionally.</p>
                            </div>
                            <button className="mt-6 md:mt-0 flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                                View all departments <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { role: "Senior Strategy Manager", dept: "Business Strategy", location: "Jakarta, Indonesia", type: "Full-time" },
                                { role: "Digital Transformation Consultant", dept: "Technology & Cloud", location: "Jakarta, Indonesia", type: "Full-time" },
                                { role: "Financial Risk Analyst", dept: "Risk & Compliance", location: "Remote / Hybrid", type: "Full-time" },
                                { role: "Associate Consultant", dept: "General Advisory", location: "Jakarta, Indonesia", type: "Full-time" }
                            ].map((job, i) => (
                                <div key={i} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 lg:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
                                    <div className="mb-4 sm:mb-0">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{job.role}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                            <span className="bg-white/10 px-3 py-1 rounded-full text-white">{job.dept}</span>
                                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{job.location}</span>
                                            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" />{job.type}</span>
                                        </div>
                                    </div>
                                    <button className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white group-hover:bg-blue-500 transition-colors">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CtaStrip heading="Don't see a fit?" sub="Submit your resume to our talent pool. We're always evaluating outstanding individuals." />
            </main>

            <Footer />
        </div>
    );
}
