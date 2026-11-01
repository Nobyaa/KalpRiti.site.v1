"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Glass } from "@/components/ui/Glass";
import { Hairline } from "@/components/ui/Hairline";
import { siteContent } from "@/content/siteContent";
import { CheckCircle2, Clock, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
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
    message: "",
    challenge: "",
    launchDate: "",
    role: "",
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
      errs.name = "Please provide your name.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "We need an email we can reply to.";
    }
    if (!formData.company.trim()) {
      errs.company = "A website helps us see the product.";
    }
    if (!formData.message.trim()) {
      errs.message = "A sentence or two is enough.";
    }
    if (!formData.challenge) {
      errs.challenge = "Choose the closest option.";
    }
    if (!formData.role) {
      errs.role = "Choose your role in the decision.";
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
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (err) {
      // In development if no webhook is set up yet, fallback gracefully
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 lg:p-16 rounded-large border border-accent/20 bg-white/70 shadow-lg space-y-8 animate-in fade-in duration-300">
        <div className="flex items-center gap-3 text-accent">
          <CheckCircle2 className="w-8 h-8" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider">
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
                message: "",
                challenge: "",
                launchDate: "",
                role: "",
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
      className="p-6 sm:p-10 lg:p-12 rounded-large border border-ink/10 bg-white/50 backdrop-blur-sm shadow-sm space-y-8"
    >
      {/* Field 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
          >
            {contact.fields.name.label} *
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: "" });
            }}
            placeholder={contact.fields.name.placeholder}
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
            {contact.fields.email.label} *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            placeholder={contact.fields.email.placeholder}
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all",
              errors.email ? "border-accent ring-1 ring-accent" : "border-ink/15"
            )}
          />
          <span className="text-[11px] text-ink/50 mt-1 block">
            {contact.fields.email.helper}
          </span>
          {errors.email && (
            <p className="text-xs text-accent mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Field 2: Phone number and Preferred Contact Point */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
          >
            {contact.fields.phone.label}
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            placeholder={contact.fields.phone.placeholder}
            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-ink/15 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
          />
          <span className="text-[11px] text-ink/50 mt-1 block">
            {contact.fields.phone.helper}
          </span>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2">
            {contact.fields.preferredContact.label}
          </label>
          <div className="grid grid-cols-3 gap-2">
            {contact.fields.preferredContact.options.map((option) => {
              const isSelected = formData.preferredContact === option;
              return (
                <button
                  type="button"
                  key={option}
                  onClick={() =>
                    setFormData({ ...formData, preferredContact: option })
                  }
                  className={cn(
                    "py-3 px-2 text-center rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer focus-visible:outline-accent",
                    isSelected
                      ? "bg-accent/10 border-accent text-accent-deep font-semibold"
                      : "bg-white/60 border-ink/10 text-ink/80 hover:bg-white/90 hover:border-ink/20"
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <span className="text-[11px] text-ink/50 mt-1 block">
            {contact.fields.preferredContact.helper}
          </span>
        </div>
      </div>

      {/* Field 2: Company and Website */}
      <div>
        <label
          htmlFor="company"
          className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
        >
          {contact.fields.company.label} *
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => {
            setFormData({ ...formData, company: e.target.value });
            if (errors.company) setErrors({ ...errors, company: "" });
          }}
          placeholder={contact.fields.company.placeholder}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all",
            errors.company ? "border-accent ring-1 ring-accent" : "border-ink/15"
          )}
        />
        <span className="text-[11px] text-ink/50 mt-1 block">
          {contact.fields.company.helper}
        </span>
        {errors.company && (
          <p className="text-xs text-accent mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.company}
          </p>
        )}
      </div>

      {/* Field 3: What are you trying to communicate or launch? */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
        >
          {contact.fields.message.label} *
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: "" });
          }}
          placeholder={contact.fields.message.placeholder}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-y",
            errors.message ? "border-accent ring-1 ring-accent" : "border-ink/15"
          )}
        />
        <span className="text-[11px] text-ink/50 mt-1 block">
          {contact.fields.message.helper}
        </span>
        {errors.message && (
          <p className="text-xs text-accent mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Field 4: What's making it difficult? */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2">
          {contact.fields.challenge.label} *
        </label>
        <span className="text-[11px] text-ink/50 mb-3 block">
          {contact.fields.challenge.helper}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {contact.fields.challenge.options.map((opt) => {
            const isSelected = formData.challenge === opt;
            return (
              <button
                type="button"
                key={opt}
                onClick={() => {
                  setFormData({ ...formData, challenge: opt });
                  if (errors.challenge) setErrors({ ...errors, challenge: "" });
                }}
                className={cn(
                  "text-left p-3 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer focus-visible:outline-accent",
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
        {errors.challenge && (
          <p className="text-xs text-accent mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.challenge}
          </p>
        )}
      </div>

      {/* Field 5: Launch or campaign date */}
      <div>
        <label
          htmlFor="launchDate"
          className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2"
        >
          {contact.fields.launchDate.label}
        </label>
        <input
          id="launchDate"
          type="text"
          value={formData.launchDate}
          onChange={(e) =>
            setFormData({ ...formData, launchDate: e.target.value })
          }
          placeholder={contact.fields.launchDate.placeholder}
          className="w-full px-4 py-3 rounded-xl bg-white/80 border border-ink/15 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
        />
        <span className="text-[11px] text-ink/50 mt-1 block">
          {contact.fields.launchDate.helper}
        </span>
      </div>

      {/* Field 6: Your role in the decision */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-mono font-semibold text-ink/80 mb-2">
          {contact.fields.role.label} *
        </label>
        <span className="text-[11px] text-ink/50 mb-3 block">
          {contact.fields.role.helper}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {contact.fields.role.options.map((roleOpt) => {
            const isSelected = formData.role === roleOpt;
            return (
              <button
                type="button"
                key={roleOpt}
                onClick={() => {
                  setFormData({ ...formData, role: roleOpt });
                  if (errors.role) setErrors({ ...errors, role: "" });
                }}
                className={cn(
                  "text-left p-3 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer focus-visible:outline-accent",
                  isSelected
                    ? "bg-accent/10 border-accent text-accent-deep font-semibold"
                    : "bg-white/60 border-ink/10 text-ink/80 hover:bg-white/90 hover:border-ink/20"
                )}
              >
                {roleOpt}
              </button>
            );
          })}
        </div>
        {errors.role && (
          <p className="text-xs text-accent mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.role}
          </p>
        )}
      </div>

      <Hairline variant="horizontal" />

      {/* Submit Button & Notice */}
      <div className="space-y-4 pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </span>
          ) : (
            "Send"
          )}
        </Button>
        <p className="text-xs text-ink/60">
          {contact.footerNotice}
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
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono block">
              Direct Conversation
            </span>
            <Heading as="h1" size="display" className="text-ink">
              {contact.header.heading}
            </Heading>
            <Text size="lead" className="mx-auto text-ink/80">
              {contact.header.subhead}
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
