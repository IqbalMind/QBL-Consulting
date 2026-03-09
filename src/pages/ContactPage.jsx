import { useState } from "react";
import {
    Phone, Mail, Clock, MapPin, MessageCircle, CheckCircle2, X,
    ArrowRight, Linkedin, Twitter, Facebook, Instagram,
    Calendar, Headphones, FileText, Users, Loader2
} from "lucide-react";
import { GlobalStyles, Navbar, Footer, RevealOnScroll, CONTACT } from "../shared/Layout";
import useSEO from "../hooks/useSEO";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const INQUIRY_TYPES = [
    { icon: MessageCircle, label: "Strategic Consulting", desc: "Business strategy & advisory" },
    { icon: FileText, label: "Digital Transformation", desc: "Tech modernization & ERP" },
    { icon: Users, label: "Human Capital", desc: "Leadership & org development" },
    { icon: Headphones, label: "General Inquiry", desc: "Other questions & information" },
];

const OFFICES = [
    {
        city: "Jakarta (HQ)",
        address: CONTACT.address1,
        address2: CONTACT.address2,
        phone: CONTACT.phone,
        email: CONTACT.email,
        hours: "Mon–Fri, 8:00 AM – 5:00 PM WIB",
        mapUrl: "https://maps.google.com/?q=Grand+Slipi+Tower+Jakarta",
        primary: true,
    },
];

const FAQS = [
    { q: "How quickly do you respond to inquiries?", a: "We aim to respond to all inquiries within 1 business day. For urgent matters, please call us directly." },
    { q: "Is the initial consultation free?", a: "Yes. We offer a complimentary 60-minute discovery call to understand your needs and assess fit — no obligation." },
    { q: "Do you work with companies outside Indonesia?", a: "Absolutely. We serve clients across Southeast Asia, with active engagements in Malaysia, Singapore, and the Philippines." },
    { q: "What size of companies do you typically work with?", a: "We primarily serve mid-market and enterprise companies with 200+ employees, though we occasionally work with high-growth startups." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "", company: "", role: "",
        inquiryType: "", message: "", budget: "", timeline: "",
    });
    const [formStatus, setFormStatus] = useState(null); // null | 'loading' | 'success' | 'error' | 'network-error'
    const [activeFaq, setActiveFaq] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    useSEO({
        title: "Contact QBL Consulting | Jakarta Advisory Firm",
        description: "Get in touch with QBL Consulting's senior advisors. Book a free 60-minute discovery call or send us a message about your business transformation needs.",
    });

    const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
    const handleTypeSelect = (label) => {
        setSelectedType(label);
        setFormData(p => ({ ...p, inquiryType: label }));
    };
    const handleSubmit = async () => {
        if (!formData.firstName || !formData.email || !formData.message) {
            setFormStatus("error"); return;
        }
        setFormStatus("loading");
        try {
            // Replace YOUR_FORM_ID with your actual Formspree form ID
            const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`.trim(),
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    role: formData.role,
                    inquiryType: formData.inquiryType,
                    budget: formData.budget,
                    timeline: formData.timeline,
                    message: formData.message,
                }),
            });
            if (res.ok) {
                setFormStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", role: "", inquiryType: "", message: "", budget: "", timeline: "" });
                setSelectedType(null);
                setTimeout(() => setFormStatus(null), 6000);
            } else {
                setFormStatus("network-error");
            }
        } catch {
            setFormStatus("network-error");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            <GlobalStyles />
            <Navbar activePage="Company" />

            {/* ── HERO ── */}
            <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" aria-hidden="true" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Let's Talk
                            </div>
                            <h1 className="disp text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                                Start Your<br /><span className="grad-blue">Transformation</span>
                            </h1>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                                Whether you have a clear project in mind or a vague sense that something needs to change — our team is here to listen, assess, and propose a path forward.
                            </p>
                            {/* Quick contact cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    { icon: Phone, label: "Call Us", value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
                                    { icon: Mail, label: "Email Us", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                                    { icon: Calendar, label: "Book a Call", value: "Schedule online", href: "#form" },
                                ].map((item, i) => (
                                    <a key={i} href={item.href}
                                        className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all group">
                                        <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">{item.label}</p>
                                        <p className="text-white text-xs font-semibold mt-0.5 truncate">{item.value}</p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right: Office hours card */}
                        <div className="hidden lg:block">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                                <h3 className="disp font-bold text-white text-xl mb-6">Office Information</h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: MapPin, label: "Location", value: `${CONTACT.address1}, ${CONTACT.address2}` },
                                        { icon: Phone, label: "Phone", value: CONTACT.phone },
                                        { icon: Mail, label: "Email", value: CONTACT.email },
                                        { icon: Clock, label: "Office Hours", value: CONTACT.hours },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center shrink-0">
                                                <item.icon className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                                                <p className="text-white text-sm">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-slate-400 text-xs mb-3">Follow us</p>
                                    <div className="flex gap-2">
                                        {[{ I: Linkedin, l: "LinkedIn" }, { I: Twitter, l: "Twitter" }, { I: Facebook, l: "Facebook" }, { I: Instagram, l: "Instagram" }].map(({ I, l }) => (
                                            <a key={l} href="#" aria-label={l}
                                                className="w-9 h-9 bg-white/8 hover:bg-blue-600 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all">
                                                <I className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT FORM ── */}
            <section id="form" className="py-20 lg:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-12">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Get In Touch</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4">Send Us a Message</h2>
                        <p className="text-slate-500 max-w-lg mx-auto text-sm">Fill out the form below and one of our senior advisors will reach out within 1 business day.</p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={100}>
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60 overflow-hidden">

                            {/* Inquiry type selector */}
                            <div className="bg-slate-50 border-b border-slate-100 p-8">
                                <p className="text-sm font-bold text-slate-700 mb-4">What can we help you with? <span className="text-red-500">*</span></p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {INQUIRY_TYPES.map((type, i) => (
                                        <button key={i} onClick={() => handleTypeSelect(type.label)}
                                            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all text-center ${selectedType === type.label
                                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                                : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50/50"
                                                }`}>
                                            <type.icon className={`w-5 h-5 ${selectedType === type.label ? "text-blue-600" : "text-slate-400"}`} />
                                            <div>
                                                <p className="text-xs font-bold leading-tight">{type.label}</p>
                                                <p className="text-[10px] text-slate-400 mt-0.5">{type.desc}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Form fields */}
                            <div className="p-8">
                                {formStatus === "success" && (
                                    <div role="alert" className="mb-6 flex items-start gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-2xl text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-bold">Message sent successfully!</p>
                                            <p className="font-normal text-emerald-600 mt-0.5">One of our senior advisors will reach out within 1 business day.</p>
                                        </div>
                                    </div>
                                )}
                                {formStatus === "error" && (
                                    <div role="alert" className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl text-sm font-medium">
                                        <X className="w-5 h-5 shrink-0" /> Please complete all required fields before submitting.
                                    </div>
                                )}
                                {formStatus === "network-error" && (
                                    <div role="alert" className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl text-sm font-medium">
                                        <X className="w-5 h-5 shrink-0" /> Network error — please try again or email us directly.
                                    </div>
                                )}

                                <div className="space-y-5">
                                    {/* Name row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {[
                                            { n: "firstName", l: "First Name", p: "John", r: true },
                                            { n: "lastName", l: "Last Name", p: "Doe", r: false },
                                        ].map(f => (
                                            <div key={f.n}>
                                                <label htmlFor={f.n} className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    {f.l} {f.r && <span className="text-red-500">*</span>}
                                                </label>
                                                <input id={f.n} name={f.n} type="text" placeholder={f.p}
                                                    value={formData[f.n]} onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Email + Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                                            <input id="email" name="email" type="email" placeholder="you@company.com"
                                                value={formData.email} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                                            <input id="phone" name="phone" type="tel" placeholder="+62 ..."
                                                value={formData.phone} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                                        </div>
                                    </div>

                                    {/* Company + Role */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
                                            <input id="company" name="company" type="text" placeholder="PT Acme Indonesia"
                                                value={formData.company} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                                        </div>
                                        <div>
                                            <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Role</label>
                                            <input id="role" name="role" type="text" placeholder="CEO, CTO, Director..."
                                                value={formData.role} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                                        </div>
                                    </div>

                                    {/* Budget + Timeline */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated Budget</label>
                                            <select id="budget" name="budget" value={formData.budget} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white text-slate-600">
                                                <option value="">Select range</option>
                                                <option>Under IDR 500 million</option>
                                                <option>IDR 500M – 2 billion</option>
                                                <option>IDR 2B – 10 billion</option>
                                                <option>Above IDR 10 billion</option>
                                                <option>Prefer not to say</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-1.5">Project Timeline</label>
                                            <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white text-slate-600">
                                                <option value="">Select timeline</option>
                                                <option>Immediately / ASAP</option>
                                                <option>Within 1–3 months</option>
                                                <option>Within 3–6 months</option>
                                                <option>6+ months from now</option>
                                                <option>Just exploring options</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                                            Tell Us About Your Project <span className="text-red-500">*</span>
                                        </label>
                                        <textarea id="message" name="message" rows={5}
                                            placeholder="Describe your challenge, goals, or questions. The more detail you share, the better we can prepare for our first conversation…"
                                            value={formData.message} onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-slate-50 focus:bg-white resize-none" />
                                    </div>

                                    <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
                                        <p className="text-xs text-slate-400">By submitting, you agree to our Privacy Policy. We never share your information.</p>
                                        <button onClick={handleSubmit}
                                            disabled={formStatus === "loading"}
                                            className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-blue-600/25 shrink-0">
                                            {formStatus === "loading"
                                                ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                                                : <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ── MAP + OFFICE ── */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-12">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">Location</span>
                        <h2 className="disp text-3xl md:text-4xl font-black text-slate-900 mt-2">Find Our Office</h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={100}>
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden flex flex-col lg:flex-row">
                            {/* Map placeholder */}
                            <div className="lg:w-3/5 h-72 lg:h-auto relative bg-slate-200 overflow-hidden">
                                <iframe
                                    title="QBL Consulting Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2909607655!2d106.79345!3d-6.20196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71f14c5a2b5%3A0x1!2sGedung+Grand+Slipi+Tower%2C+Jl.+S.+Parman+Kav+22-24%2C+Jakarta+Barat!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    allowFullScreen
                                />
                            </div>

                            {/* Office details */}
                            <div className="lg:w-2/5 p-8 lg:p-12">
                                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Headquarters
                                </div>
                                <h3 className="disp text-2xl font-black text-slate-900 mb-6">Jakarta Office</h3>
                                <div className="space-y-5">
                                    {[
                                        { icon: MapPin, label: "Address", value: `${CONTACT.address1}\n${CONTACT.address2}` },
                                        { icon: Phone, label: "Phone", value: CONTACT.phone },
                                        { icon: Mail, label: "Email", value: CONTACT.email },
                                        { icon: Clock, label: "Office Hours", value: CONTACT.hours },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                                <item.icon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                                                <p className="text-slate-700 text-sm whitespace-pre-line">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address1 + " " + CONTACT.address2)}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="group mt-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 w-fit">
                                    Get Directions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll className="text-center mb-12">
                        <span className="text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase">FAQ</span>
                        <h2 className="disp text-3xl font-black text-slate-900 mt-2 mb-4">Common Questions</h2>
                    </RevealOnScroll>
                    <div className="space-y-3">
                        {FAQS.map((faq, i) => (
                            <RevealOnScroll key={i} delay={i * 60}>
                                <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeFaq === i ? "border-blue-500 shadow-lg shadow-blue-500/10 bg-white" : "border-slate-200 bg-white hover:border-blue-200"}`}>
                                    <button onClick={() => setActiveFaq(p => p === i ? null : i)} aria-expanded={activeFaq === i}
                                        className="w-full text-left px-6 py-5 flex justify-between items-center gap-4">
                                        <span className="font-semibold text-slate-900 text-sm md:text-base">{faq.q}</span>
                                        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === i ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-500"}`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-48 pb-6" : "max-h-0"}`}>
                                        <p className="px-6 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}