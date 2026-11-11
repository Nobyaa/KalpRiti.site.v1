"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { siteContent } from "@/content/siteContent";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const intentParam = searchParams.get("intent");

  const { contact } = siteContent;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "Email",
    company: "",
    challenge: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Pre-select challenge based on intent parameter from Home demo
  useEffect(() => {
    if (intentParam === "launch") {
      setFormData((prev) => ({
        ...prev,
        challenge: "We're launching and don't have the narrative yet",
      }));
    } else if (intentParam === "communication-challenge") {
      setFormData((prev) => ({
        ...prev,
        challenge: "Customers don't understand the product",
      }));
    } else if (intentParam === "price-comparison") {
      setFormData((prev) => ({
        ...prev,
        challenge: "People compare us mainly on price",
      }));
    } else if (intentParam === "scaling") {
      setFormData((prev) => ({
        ...prev,
        challenge: "We can't explain what makes us different",
      }));
    }
  }, [intentParam]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please provide your name and role.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid work email so we can reply.";
    }
    if (!formData.company.trim()) {
      errs.company = "A product link or company name helps us review the product.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || "Unable to send inquiry right now. Please email hello@kalpriti.com directly."
        );
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(
        err.message ||
          "We could not reach the server. Please email Vaibhav directly at hello@kalpriti.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 lg:p-16 rounded-large border border-accent/20 bg-white/70 shadow-lg space-y-8 animate-in fade-in duration-300">
        <div className="flex items-center gap-3 text-accent">
          <CheckCircle2 className="w-8 h-8 text-accent" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-deep">
            Inquiry Received
          </span>
        </div>

        <div>
          <Heading as="h2" size="h1" className="text-ink mb-3">
            {contact.thankYou.heading}
          </Heading>
          <p className="font-sans text-base sm:text-lg text-ink/85 leading-relaxed max-w-xl">
            {contact.thankYou.subhead}
          </p>
        </div>

        <Hairline variant="horizontal" />

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-ink/60">
            {contact.thankYou.nextStepsHeading}
          </h4>
          <ol className="space-y-3">
            {contact.thankYou.steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-mono font-bold mt-0.5 flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base text-ink/80 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href={contact.thankYou.altAction.href}
            className="text-sm font-semibold text-accent hover:text-accent-deep transition-colors inline-flex items-center gap-1"
          >
            {contact.thankYou.altAction.label}
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                preferredContact: "Email",
                company: "",
                challenge: "",
                message: "",
              });
            }}
            className="text-xs text-ink/50 hover:text-ink underline cursor-pointer"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-10 lg:p-12 rounded-large border border-ink/10 bg-white/50 backdrop-blur-sm shadow-sm space-y-7"
    >
      {/* Error Banner if API submission fails */}
      {submitError && (
        <div className="p-4 sm:p-5 rounded-xl bg-accent/10 border border-accent/30 text-accent-deep space-y-1 animate-in fade-in">
          <div className="flex items-center gap-2 font-semibold text-sm">
            <AlertCircle className="w-4 h-4 text-accent flex-shrink-0" />
            <span>Submission Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-ink/85">{submitError}</p>
        </div>
      )}

      {/* Field 1: Name and Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
          >
            Your Name & Role *
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: "" });
            }}
            placeholder="e.g. Vaibhav, Founder"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all",
              errors.name ? "border-accent ring-1 ring-accent" : "border-ink/15"
            )}
          />
          {errors.name && (
            <p className="text-xs text-accent mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
          >
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            placeholder="name@company.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all",
              errors.email ? "border-accent ring-1 ring-accent" : "border-ink/15"
            )}
          />
          <span className="text-[11px] text-ink/50 mt-1 block">
            We will reply personally within 24 hours.
          </span>
          {errors.email && (
            <p className="text-xs text-accent mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Field 2: Company / Product Link and Phone / WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
          >
            Product Link or Company *
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => {
              setFormData({ ...formData, company: e.target.value });
              if (errors.company) setErrors({ ...errors, company: "" });
            }}
            placeholder="e.g. yourproduct.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all",
              errors.company ? "border-accent ring-1 ring-accent" : "border-ink/15"
            )}
          />
          <span className="text-[11px] text-ink/50 mt-1 block">
            So we can review what you make before we talk.
          </span>
          {errors.company && (
            <p className="text-xs text-accent mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
          >
            Phone / WhatsApp <span className="text-ink/40 font-normal lowercase">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-ink/15 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
          />
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[11px] text-ink/50">Preferred method:</span>
            {["Email", "WhatsApp", "Call"].map((m) => (
              <button
                type="button"
                key={m}
                onClick={() => setFormData({ ...formData, preferredContact: m })}
                className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full border transition-all cursor-pointer",
                  formData.preferredContact === m
                    ? "bg-accent/10 border-accent text-accent-deep font-semibold"
                    : "bg-white/60 border-ink/10 text-ink/60 hover:text-ink"
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Field 3: What is making it hard to explain? (Optional quick pills) */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-1.5">
          Primary Communication Challenge <span className="text-ink/40 font-normal lowercase">(optional)</span>
        </label>
        <span className="text-[11px] text-ink/50 mb-3 block">
          Select what sounds closest, or describe below.
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Customers don't understand what the product does",
            "We're preparing for a major product launch",
            "Buyers compare us mainly on price",
            "Our ads get clicks but visitors don't inquire",
          ].map((opt) => {
            const isSelected = formData.challenge === opt;
            return (
              <button
                type="button"
                key={opt}
                onClick={() => {
                  setFormData({
                    ...formData,
                    challenge: isSelected ? "" : opt,
                  });
                }}
                className={cn(
                  "text-left p-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer focus-visible:outline-accent",
                  isSelected
                    ? "bg-accent/10 border-accent text-accent-deep font-semibold"
                    : "bg-white/60 border-ink/10 text-ink/80 hover:bg-white/90 hover:border-ink/20"
                )}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Field 4: Optional note on what you're trying to launch */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
        >
          What are you trying to launch or communicate? <span className="text-ink/40 font-normal lowercase">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
          placeholder="A sentence or two about your product or launch timeline is plenty."
          className="w-full px-4 py-3 rounded-xl bg-white/80 border border-ink/15 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-y"
        />
      </div>

      <Hairline variant="horizontal" />

      {/* Submit Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[220px]"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending Inquiry...
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              Request Discovery Call <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
        <p className="text-xs text-ink/60">
          No hard sales pitch. If we aren&apos;t the right fit, we will tell you straight away.
        </p>
      </div>
    </form>
  );
}

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <div className="w-full">
      {/* Header */}
      <Section spacing="default" className="pt-6 sm:pt-10 md:pt-12 pb-6">
        <Container size="narrow">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent-deep font-semibold font-mono block">
              Direct Conversation
            </span>
            <Heading as="h1" size="display" className="text-ink">
              Discuss a Campaign.
            </Heading>
            <Text size="lead" className="mx-auto text-ink/80 max-w-xl">
              Tell us what you make and what you are trying to communicate. Vaibhav will review it and reply personally within 24 hours to schedule a 30-minute discovery call.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section spacing="default" className="pt-0">
        <Container size="narrow">
          <Suspense
            fallback={
              <div className="p-12 text-center text-sm text-ink/60">
                Loading form...
              </div>
            }
          >
            <ContactFormInner />
          </Suspense>
        </Container>
      </Section>
    </div>
  );
}
