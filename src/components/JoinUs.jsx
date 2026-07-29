import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle, Gift } from "lucide-react";
import { contactDetails, faqs } from "../data/ngoData";
import { useTheme } from "../context/ThemeContext";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "volunteer",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const { isDark } = useTheme();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      // Reset form fields
      setFormData({ name: "", email: "", subject: "volunteer", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="contact"
      className={`relative py-24 sm:py-32 px-6 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#090d16] border-t border-white/5" : "bg-slate-100/70 border-t border-slate-200"
      }`}
    >
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] rounded-full glow-orb-emerald opacity-30 pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[30vw] h-[30vw] rounded-full glow-orb-blue opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column: Volunteer Details & FAQ Accordions */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Get Involved
            </span>
            <h2 className={`text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Support Our Mission
            </h2>
            <p className={`font-medium text-base mb-8 leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              Whether you want to gain professional experience through <strong className={isDark ? "text-slate-200" : "text-slate-800"}>Project Vikas virtual internships</strong>, lead local drives in Bilaspur, or financially sponsor a community drive, there is a place for you here.
            </p>

            {/* Donation Promotion Card */}
            <div className={`mb-10 p-5 rounded-2xl border backdrop-blur-md flex gap-4 items-start ${
              isDark
                ? "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
                : "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 shadow-sm"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h4 className={`text-sm font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>Make a Tax-Exempt Contribution</h4>
                <p className={`text-xs font-medium leading-relaxed mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  All donations qualify for tax deductions under Section 80G. Help fund clothing kits, street animal food drives, and educational booklets for children.
                </p>
                <a
                  href="mailto:support@inamigosfoundation.org.in?subject=Donation%20Enquiry"
                  className="text-xs font-extrabold text-emerald-500 hover:text-emerald-600 transition-colors uppercase tracking-wider flex items-center gap-1 focus:outline-none"
                >
                  Request Donation details &rarr;
                </a>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="flex flex-col gap-4">
              <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                <HelpCircle className="w-5 h-5 text-emerald-500" /> Frequently Asked Questions
              </h3>
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isDark ? "border-white/5 bg-slate-900/20" : "border-slate-200/80 bg-white shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className={`text-sm font-bold transition-colors ${
                        isDark ? "text-slate-200 group-hover:text-white" : "text-slate-800 group-hover:text-slate-900"
                      }`}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? "rotate-180 text-emerald-500" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 transition-all duration-300 ease-in-out ${
                        isOpen ? "pb-5 max-h-[200px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                      } overflow-hidden`}
                    >
                      <p className={`text-xs font-semibold leading-relaxed ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Details & Quick Contact Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className={`p-8 rounded-3xl backdrop-blur-md shadow-2xl relative transition-all ${
              isDark
                ? "bg-slate-950/40 border border-white/5"
                : "bg-white border border-slate-200/80 shadow-slate-200/50"
            }`}>
              
              {/* Form Submission Success Overlay */}
              {formSubmitted && (
                <div className={`absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-6 z-20 text-center animate-fade-in ${
                  isDark ? "bg-slate-950/95" : "bg-white/95"
                }`}>
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>Message Sent Successfully!</h3>
                  <p className={`text-xs font-medium max-w-sm leading-relaxed mb-4 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Thank you for reaching out to InAmigos Foundation. Our support desk will review your details and contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-extrabold text-emerald-500 hover:text-emerald-600 uppercase tracking-widest focus:outline-none"
                  >
                    Send another message
                  </button>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 text-left ${isDark ? "text-white" : "text-slate-900"}`}>Write to Us</h3>
              <p className={`text-xs font-semibold text-left mb-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Have questions about our project sites, certificates, or remote internship certifications? Send a brief message below.
              </p>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div className="flex flex-col">
                  <label htmlFor="name" className={`text-[10px] font-extrabold uppercase tracking-wider mb-1.5 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="form-input-custom"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className={`text-[10px] font-extrabold uppercase tracking-wider mb-1.5 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-input-custom"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject" className={`text-[10px] font-extrabold uppercase tracking-wider mb-1.5 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Nature of Inquiry
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input-custom"
                  >
                    <option value="volunteer">Apply as Volunteer / Intern</option>
                    <option value="corporate">CSR Collaboration / Partnerships</option>
                    <option value="donation">Donation Enquiries (80G Exemption)</option>
                    <option value="general">General Support Desk</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className={`text-[10px] font-extrabold uppercase tracking-wider mb-1.5 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Inquiry Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe how you would like to collaborate..."
                    className="form-input-custom resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 transition-opacity text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 focus:outline-none shadow-md"
                >
                  Send Inquiry <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Bottom Quick Contacts */}
              <div className={`mt-8 pt-6 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 text-left ${
                isDark ? "border-white/5" : "border-slate-200"
              }`}>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-500 font-extrabold uppercase">Phone Support</span>
                    <span className={`text-[11px] font-bold truncate ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {contactDetails.phone}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-500 font-extrabold uppercase">Email Support</span>
                    <span className={`text-[11px] font-bold truncate ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {contactDetails.email}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
