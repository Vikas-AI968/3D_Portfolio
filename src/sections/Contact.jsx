import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailServiceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
  const contactEmail = import.meta.env.VITE_APP_CONTACT_EMAIL || "iamabelieber9407@gmail.com";

  const serviceReady = Boolean(emailServiceId && emailTemplateId && emailPublicKey);
  const contactDetails = [
    {
      title: "Contact method",
      value: serviceReady
        ? "Send a message directly through this form."
        : "Service not configured yet. Copy the email below to reach out.",
    },
    {
      title: "Email",
      value: contactEmail,
      copyable: true,
    },
    {
      title: "Service status",
      value: serviceReady ? "Enabled" : "Not configured",
    },
  ];

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus({ type: "success", message: "Email copied to your clipboard." });
    } catch (error) {
      setStatus({ type: "error", message: "Unable to copy automatically. Please copy it manually." });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Contact service is not configured yet. Please use the email below to reach out directly.",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setForm({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        message: "Message sent successfully! I’ll get back to you shortly.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Oops! There was a problem sending your message. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div className="space-y-6">
                  <p className="text-white-50">
                    Send a message to me directly from this form — no external redirect.
                    If the contact service is not set up, you can still copy my email and reach out instantly.
                  </p>

                  {!serviceReady && (
                    <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-200">
                      Contact service is not configured. Add EmailJS credentials to <code className="text-white">.env</code> and restart the site.
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    {contactDetails.map((detail) => (
                      <div
                        key={detail.title}
                        className="rounded-2xl border border-white/10 bg-black-200 p-4"
                      >
                        <p className="text-sm uppercase tracking-[0.28em] text-blue-50 mb-2">
                          {detail.title}
                        </p>
                        <div className="flex flex-col gap-3">
                          <p className="text-white break-words">{detail.value}</p>
                          {detail.copyable && (
                            <button
                              type="button"
                              onClick={() => handleCopy(detail.value)}
                              className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white"
                            >
                              Copy email
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {status.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-2xl border ${
                      status.type === "success"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
                        : "border-rose-500/20 bg-rose-500/10 text-rose-200"
                    } p-4 text-sm`}
                  >
                    {status.message}
                  </div>
                )}

                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !serviceReady}
                  className="w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
