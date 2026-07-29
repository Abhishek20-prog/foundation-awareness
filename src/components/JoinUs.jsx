import React, { useState } from "react";
import { Mail, Phone, Send, HelpCircle, ChevronDown, CheckCircle, Gift } from "lucide-react";
import { contactDetails, faqs } from "../data/ngoData";
import { useTheme } from "../context/ThemeContext";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "volunteer", message: ""
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
      setFormData({ name: "", email: "", subject: "volunteer", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const sectionBg  = "var(--bg-main)";
  const altBg      = "var(--bg-secondary)";
  const titleColor = "var(--text-title)";
  const bodyColor  = "var(--text-body)";
  const mutedColor = "var(--text-muted)";
  const borderClr  = "var(--border-color)";
  const cardBg     = "var(--bg-card)";

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: sectionBg, borderTop: `1px solid ${borderClr}` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Volunteer info + FAQ */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="section-eyebrow mb-4" style={{ color: "var(--grass)" }}>
              Get Involved
            </span>
            <h2
              className="mb-5 tracking-tight"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: titleColor,
                lineHeight: 1.2
              }}
            >
              Support Our{" "}
              <em style={{ color: "var(--grass)", fontStyle: "italic" }}>Mission</em>
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: bodyColor }}
            >
              Whether you want to gain professional experience through{" "}
              <strong style={{ color: titleColor }}>Project Vikas virtual internships</strong>,
              lead local drives in Bilaspur, or financially sponsor a community drive,
              there is a place for you here.
            </p>

            {/* Donation card — fresh green border */}
            <div
              className="mb-10 p-5 flex gap-4 items-start"
              style={{
                backgroundColor: altBg,
                borderLeft: "3px solid var(--grass)",
                borderRadius: "4px"
              }}
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(21,128,61,0.12)" }}
              >
                <Gift className="w-5 h-5" style={{ color: "var(--grass)" }} />
              </div>
              <div>
                <h4
                  className="font-bold mb-1"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9375rem", color: titleColor }}
                >
                  Make a Tax-Exempt Contribution
                </h4>
                <p
                  className="mb-3 leading-relaxed"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", color: bodyColor }}
                >
                  All donations qualify for tax deductions under Section 80G.
                  Help fund clothing kits, street animal food drives, and educational booklets.
                </p>
                <a
                  href="mailto:support@inamigosfoundation.org.in?subject=Donation%20Enquiry"
                  className="inline-flex items-center gap-1 font-bold uppercase hover:underline focus:outline-none"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    color: "var(--grass)"
                  }}
                >
                  Request Donation Details →
                </a>
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="flex flex-col gap-3">
              <h3
                className="flex items-center gap-2 mb-1 font-bold"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontSize: "1.125rem",
                  color: titleColor
                }}
              >
                <HelpCircle className="w-5 h-5 shrink-0" style={{ color: "var(--grass)" }} />
                Frequently Asked Questions
              </h3>

              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      border: `1px solid ${borderClr}`,
                      borderRadius: "4px",
                      backgroundColor: cardBg
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span
                        className="font-semibold pr-4"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: "0.9375rem",
                          color: titleColor
                        }}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        className="w-4 h-4 shrink-0 transition-transform duration-300"
                        style={{
                          color: isOpen ? "var(--grass)" : mutedColor,
                          transform: isOpen ? "rotate(180deg)" : "rotate(0)"
                        }}
                      />
                    </button>
                    <div
                      className={`px-5 overflow-hidden transition-all duration-300 ${
                        isOpen ? "pb-5 max-h-[200px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: "0.875rem",
                          color: bodyColor,
                          lineHeight: 1.7
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div
              className="relative"
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderClr}`,
                borderRadius: "4px",
                padding: "2rem"
              }}
            >
              {/* Success state */}
              {formSubmitted && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                  style={{ backgroundColor: cardBg, borderRadius: "4px", zIndex: 20 }}
                >
                  <CheckCircle className="w-10 h-10 mb-4" style={{ color: "var(--grass)" }} />
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.25rem", color: titleColor }}
                  >
                    Message Sent Successfully!
                  </h3>
                  <p
                    className="mb-4 max-w-sm leading-relaxed"
                    style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.875rem", color: bodyColor }}
                  >
                    Thank you for reaching out to InAmigos Foundation.
                    Our support desk will review your details and contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-bold uppercase hover:underline focus:outline-none"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      color: "var(--grass)"
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <h3
                className="mb-1 font-bold"
                style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.25rem", color: titleColor }}
              >
                Write to Us
              </h3>
              <p
                className="mb-6"
                style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.875rem", color: mutedColor }}
              >
                Questions about our certificates, internships, or how to get involved?
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: mutedColor
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="form-input-custom" required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: mutedColor
                    }}
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-input-custom" required
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: mutedColor
                    }}
                  >
                    Nature of Inquiry
                  </label>
                  <select
                    id="subject" name="subject"
                    value={formData.subject} onChange={handleInputChange}
                    className="form-input-custom"
                  >
                    <option value="volunteer">Apply as Volunteer / Intern</option>
                    <option value="corporate">CSR Collaboration / Partnerships</option>
                    <option value="donation">Donation Enquiries (80G Exemption)</option>
                    <option value="general">General Support Desk</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: mutedColor
                    }}
                  >
                    Inquiry Details
                  </label>
                  <textarea
                    id="message" name="message" rows="4"
                    value={formData.message} onChange={handleInputChange}
                    placeholder="Describe how you would like to collaborate..."
                    className="form-input-custom resize-none" required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-white rounded-sm transition-opacity hover:opacity-85 focus:outline-none"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    backgroundColor: "var(--grass)"
                  }}
                >
                  Send Inquiry <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Quick contact */}
              <div
                className="mt-7 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                style={{ borderTop: `1px solid ${borderClr}` }}
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--grass)" }} />
                  <div className="flex flex-col">
                    <span
                      style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: mutedColor }}
                    >
                      Phone
                    </span>
                    <span
                      style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: bodyColor }}
                    >
                      {contactDetails.phone}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--grass)" }} />
                  <div className="flex flex-col">
                    <span
                      style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: mutedColor }}
                    >
                      Email
                    </span>
                    <span
                      className="truncate"
                      style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: bodyColor }}
                    >
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
