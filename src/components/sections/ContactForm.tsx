"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function openMailto(url: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.rel = "noopener noreferrer";
  anchor.click();
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as {
        success: boolean;
        mailto?: boolean;
        message?: string;
      };

      if (result.mailto) {
        const mailtoUrl = `mailto:hello@zainraza.dev?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
        openMailto(mailtoUrl);
        setSubmitted(true);
        reset();
        return;
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Failed to send message");
      }

      setSubmitted(true);
      reset();
    } catch {
      const mailtoUrl = `mailto:hello@zainraza.dev?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
      openMailto(mailtoUrl);
      setSubmitted(true);
      reset();
    }
  };

  const inputClass = cn(
    "w-full border border-border bg-bg-primary px-4 py-3 font-mono text-sm text-text-primary",
    "placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary",
  );

  if (submitted) {
    return (
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-success/30 bg-bg-tertiary p-6 font-mono text-sm"
      >
        <p className="text-success">
          <span className="text-accent-secondary">$</span> message sent successfully
        </p>
        <p className="mt-2 text-text-secondary">
          {"> Thank you for reaching out. I'll get back to you soon."}
        </p>
        <p className="mt-4 text-terminal-green cursor-blink">_</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs text-accent-secondary hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block font-mono text-xs text-text-muted">
          {"// your name"}
        </label>
        <input id="name" type="text" className={inputClass} {...register("name")} />
        {errors.name && (
          <p className="mt-1 font-mono text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-xs text-text-muted">
          {"// your email"}
        </label>
        <input id="email" type="email" className={inputClass} {...register("email")} />
        {errors.email && (
          <p className="mt-1 font-mono text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-mono text-xs text-text-muted">
          {"// subject"}
        </label>
        <input id="subject" type="text" className={inputClass} {...register("subject")} />
        {errors.subject && (
          <p className="mt-1 font-mono text-xs text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs text-text-muted">
          {"// message"}
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClass, "resize-none")}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 font-mono text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {error && <p className="font-mono text-xs text-red-400">{error}</p>}

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message _"}
      </Button>
    </form>
  );
}
