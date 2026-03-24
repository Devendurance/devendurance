import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SERVICE_OPTIONS = [
  "Pre-Launch Positioning Audit",
  "Growth Architecture Review",
  "Go-To-Market Architecture",
  "Advisory & Consultancy Retainers",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    service: "",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.service || !form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        service: form.service,
        message: form.message.trim(),
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("Message sent! I'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-semibold" style={{ color: "hsl(0 0% 98%)" }}>
          Thanks for reaching out! 🎉
        </p>
        <p className="text-sm mt-2" style={{ color: "hsl(0 0% 70%)" }}>
          I'll review your message and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label htmlFor="service" className="block text-xs font-medium mb-1.5" style={{ color: "hsl(0 0% 70%)" }}>
          What brought you here?
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full rounded-md px-3 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/50"
          style={{
            background: "hsl(0 0% 12%)",
            color: "hsl(0 0% 90%)",
            border: "1px solid hsl(0 0% 20%)",
          }}
        >
          <option value="" disabled>Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium mb-1.5" style={{ color: "hsl(0 0% 70%)" }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            maxLength={100}
            className="w-full rounded-md px-3 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/50"
            style={{
              background: "hsl(0 0% 12%)",
              color: "hsl(0 0% 90%)",
              border: "1px solid hsl(0 0% 20%)",
            }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium mb-1.5" style={{ color: "hsl(0 0% 70%)" }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            maxLength={255}
            className="w-full rounded-md px-3 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/50"
            style={{
              background: "hsl(0 0% 12%)",
              color: "hsl(0 0% 90%)",
              border: "1px solid hsl(0 0% 20%)",
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium mb-1.5" style={{ color: "hsl(0 0% 70%)" }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, goals, or challenges..."
          value={form.message}
          onChange={handleChange}
          required
          maxLength={1000}
          rows={4}
          className="w-full rounded-md px-3 py-2.5 text-sm outline-none transition-colors resize-none focus:ring-2 focus:ring-primary/50"
          style={{
            background: "hsl(0 0% 12%)",
            color: "hsl(0 0% 90%)",
            border: "1px solid hsl(0 0% 20%)",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground font-medium text-sm px-6 py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
