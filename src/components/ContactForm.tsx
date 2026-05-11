import { useState } from "react";
import { toast } from "sonner";

const SERVICE_OPTIONS = [
  "Pre-Launch Positioning Audit",
  "Growth Architecture Review",
  "Go-To-Market Architecture",
  "Advisory & Consultancy Retainers",
  "Just Saying Hi",
];

const WEB3FORMS_ACCESS_KEY = "b42c34a3-58d0-4fb7-be5b-8e95e5b4b672";

const ContactForm = () => {
  const [form, setForm] = useState({ service: "", name: "", email: "", message: "", botcheck: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return; // honeypot
    if (!form.service || !form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.service,
          message: form.message.trim(),
          botcheck: form.botcheck,
          subject: `New inquiry from ${form.name.trim()} — ${form.service}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");
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
      <div
        className="text-center py-10 px-6 rounded-2xl border"
        style={{
          background:
            "linear-gradient(135deg, hsl(0 0% 100% / 0.04), hsl(0 0% 100% / 0.01))",
          borderColor: "hsl(0 0% 100% / 0.12)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:
            "inset 0 1px 0 0 hsl(0 0% 100% / 0.06), 0 0 24px 2px hsl(172 80% 40% / 0.18)",
        }}
      >
        <p
          className="text-foreground text-2xl font-bold"
          style={{ fontFamily: "'Herotenn', 'Manrope', sans-serif" }}
        >
          Strategy Received.
        </p>
        <p className="text-muted-foreground text-sm mt-3">
          I'll reach out within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-card text-foreground border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <input
        type="checkbox"
        name="botcheck"
        checked={!!form.botcheck}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, botcheck: e.target.checked ? "1" : "" }))
        }
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
        aria-hidden="true"
      />
      <div>
        <label htmlFor="service" className="block text-xs font-medium mb-2 text-muted-foreground">
          What brought you here?
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className={inputClasses}
        >
          <option value="" disabled>Select a service…</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium mb-2 text-muted-foreground">
            Name
          </label>
          <input
            id="name" name="name" type="text" placeholder="Your name"
            value={form.name} onChange={handleChange} required maxLength={100}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium mb-2 text-muted-foreground">
            Email
          </label>
          <input
            id="email" name="email" type="email" placeholder="you@example.com"
            value={form.email} onChange={handleChange} required maxLength={255}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium mb-2 text-muted-foreground">
          Message
        </label>
        <textarea
          id="message" name="message" rows={4}
          placeholder="Tell me about your project, goals, or challenges…"
          value={form.message} onChange={handleChange} required maxLength={1000}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground font-semibold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? "Sending Strategy..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
