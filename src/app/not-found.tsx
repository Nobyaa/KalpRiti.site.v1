import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/siteContent";

export default function NotFound() {
  const { notFound } = siteContent;

  return (
    <div className="w-full flex-1 flex items-center justify-center py-24 sm:py-32">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10">
            404 — Not Found
          </span>
          <Heading as="h1" size="display" className="text-ink">
            {notFound.heading}
          </Heading>
          <Text size="lead" className="mx-auto text-ink/75 max-w-md">
            {notFound.text}
          </Text>
          <div className="pt-4">
            <Button href={notFound.button.href} size="lg">
              {notFound.button.label}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
