"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Tag, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const fields = [
    { key: "name", label: "Full Name", icon: User, type: "text", placeholder: "John Doe" },
    { key: "email", label: "Email Address", icon: Mail, type: "email", placeholder: "john@example.com" },
    { key: "subject", label: "Subject", icon: Tag, type: "text", placeholder: "I'd like to join CBNCC" },
  ];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8"
      >
        <div className="w-20 h-20 bg-[#34A853]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#34A853]" />
        </div>
        <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          Thanks for reaching out! We'll get back to you within 24–48 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="px-7 py-3 bg-[#4285F4] text-white rounded-full text-sm font-semibold hover:bg-[#3b78e7] transition-colors"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {fields.map(({ key, label, icon: Icon, type, placeholder }) => (
        <div key={key}>
          <label
            htmlFor={`contact-${key}`}
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            {label}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon className="w-4 h-4 text-gray-400" />
            </div>
            <input
              id={`contact-${key}`}
              type={type}
              value={form[key as keyof typeof form]}
              onChange={(e) =>
                setForm((f) => ({ ...f, [key]: e.target.value }))
              }
              placeholder={placeholder}
              className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm transition-all duration-200 outline-none ${
                errors[key]
                  ? "border-[#EA4335] bg-red-50 focus:ring-2 focus:ring-[#EA4335]/20"
                  : "border-gray-200 bg-gray-50 focus:border-[#4285F4] focus:bg-white focus:ring-2 focus:ring-[#4285F4]/15"
              }`}
            />
          </div>
          {errors[key] && (
            <p className="mt-1.5 text-xs text-[#EA4335] font-medium">{errors[key]}</p>
          )}
        </div>
      ))}

      {/* Message textarea */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3.5 left-4 pointer-events-none">
            <MessageSquare className="w-4 h-4 text-gray-400" />
          </div>
          <textarea
            id="contact-message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="Tell us about yourself or your query..."
            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm transition-all duration-200 outline-none resize-none ${
              errors.message
                ? "border-[#EA4335] bg-red-50 focus:ring-2 focus:ring-[#EA4335]/20"
                : "border-gray-200 bg-gray-50 focus:border-[#4285F4] focus:bg-white focus:ring-2 focus:ring-[#4285F4]/15"
            }`}
          />
        </div>
        {errors.message && (
          <p className="mt-1.5 text-xs text-[#EA4335] font-medium">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        id="contact-submit"
        className="group w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-[#4285F4] hover:bg-[#3b78e7] text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-[0_8px_24px_rgba(66,133,244,0.35)] text-sm"
      >
        <Send className="w-4 h-4" />
        Send Message
        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </form>
  );
}
