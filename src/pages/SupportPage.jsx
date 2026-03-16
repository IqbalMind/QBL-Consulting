import React from "react";
import { Navbar, Footer, GlobalStyles, CtaStrip, PageHero } from "../shared/Layout";
import { Headphones, Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "../shared/Layout";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white">
            <GlobalStyles />
            <Navbar activePage="Support" />

            <main>
                <PageHero
                    eyebrow="Client Support"
                    title="Dedicated Support for Our Partners"
                    subtitle="We are committed to the continuous success of your operations. Reach out to our dedicated support teams for immediate assistance."
                />

                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Phone, title: "Phone Support", desc: `Call us at ${CONTACT.phone} during business hours.`, link: `tel:${CONTACT.phoneHref}`, action: "Call Now" },
                                { icon: Mail, title: "Email Support", desc: `Send detailed queries to ${CONTACT.email} for 24h turnaround.`, link: `mailto:${CONTACT.email}`, action: "Email Us" },
                                { icon: MessageCircle, title: "Live Chat", desc: "Connect with your account manager instantly via our client portal.", link: "/contact", action: "Go to Portal" }
                            ].map((channel, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                        <channel.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{channel.title}</h3>
                                    <p className="text-slate-600 mb-6 flex-grow">{channel.desc}</p>
                                    <a href={channel.link} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                                        {channel.action}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CtaStrip heading="Not an active client?" sub="Visit our Help Center for general inquiries or contact sales." />
            </main>

            <Footer />
        </div>
    );
}
