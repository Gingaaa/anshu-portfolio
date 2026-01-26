// app/contact/page.tsx
// import { ContactForm } from '@/components/contact-form';
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center text-center">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-4">
          <h1 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl md:text-5xl">
            Get in Touch
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            Have a question or want to work together? You can reach out to me
            via <Link href={siteConfig.links.email.url}>email</Link>,{" "}
            <Link href={siteConfig.links.linkedin.url}>LinkedIn</Link>,{" "}
            <Link href={`tel:${siteConfig.phone}`} target="_parent">
              {siteConfig.phone}
            </Link>
            , or <Link href={siteConfig.links.x.url}>X</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
