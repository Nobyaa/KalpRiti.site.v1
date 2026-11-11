import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Privacy Policy — KalpRiti",
  description:
    "How KalpRiti handles personal details and enquiry submissions with transparent, choice-based respect.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <Section spacing="default" className="pt-6 sm:pt-10 md:pt-12 pb-6">
        <Container size="narrow">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent-deep font-semibold font-mono block">
              Transparency
            </span>
            <Heading as="h1" size="display" className="text-ink">
              Privacy Notice
            </Heading>
            <Text size="lead" className="mx-auto text-ink/80 max-w-xl">
              We favor transparent, choice-based engagement over hidden tracking.
            </Text>
          </div>
        </Container>
      </Section>

      <Section spacing="default" className="pt-0 pb-16">
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-large border border-ink/10 bg-white/40 space-y-8 text-ink/85 leading-relaxed text-sm sm:text-base">
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-ink">
                1. What information we collect
              </h2>
              <p>
                When you submit an enquiry through our contact form, we collect the details you explicitly provide: your name, work email address, company name or product website, and any notes or challenge options you choose to share.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-ink">
                2. How we use your information
              </h2>
              <p>
                We use this information exclusively to review your product and reply directly to your campaign enquiry. We will never sell, lease, rent, or trade your contact details to third parties or use them for unsolicited promotional spam.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-ink">
                3. Interactive experiences & zero hidden tracking
              </h2>
              <p>
                Our interactive and interadaptive demonstrations respond only to explicit choices you make on screen. We do not run hidden session-recording scripts, keystroke loggers, or invasive tracking cookies to manipulate what you see.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-ink">
                4. Data storage & deletion requests
              </h2>
              <p>
                Your submitted enquiries are delivered securely to our studio inbox and inquiry dashboard. If at any point you wish for your details to be permanently deleted from our records, simply write to us at{" "}
                <a
                  href="mailto:hello@kalpriti.com"
                  className="text-accent underline font-medium hover:text-accent-deep"
                >
                  hello@kalpriti.com
                </a>
                , and we will delete your records within 48 hours.
              </p>
            </div>

            <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-ink/50">
                Last updated: November 2026 · KalpRiti Studio
              </p>
              <Button href="/" variant="outline" size="sm">
                Return to Home
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
