import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ARA Home Services | Houston Home Repair & Mounting",
    template: "%s | ARA Home Services",
  },
  description:
    "Reliable TV mounting, appliance troubleshooting, drywall repair, furniture assembly, and minor home repairs in Houston, Texas.",
  icons: {
    icon: "/ara-home-services-logo.png",
    apple: "/ara-home-services-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2.5"
              aria-label="ARA Home Services home"
            >
              <Image
                src="/ara-home-services-logo.png"
                alt=""
                width={52}
                height={52}
                priority
                className="size-13 object-contain"
              />
              <span className="leading-tight">
                <span className="block text-lg font-extrabold tracking-tight text-slate-900">
                  ARA
                </span>
                <span className="block text-xs font-bold tracking-[0.14em] text-brand-orange uppercase">
                  Home Services
                </span>
              </span>
            </Link>

            <nav
              className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex"
              aria-label="Main navigation"
            >
              <Link className="transition hover:text-brand-blue" href="/">
                Home
              </Link>
              <Link
                className="transition hover:text-brand-blue"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="transition hover:text-brand-blue"
                href="/about"
              >
                About
              </Link>
              <Link
                className="transition hover:text-brand-blue"
                href="/contact"
              >
                Contact
              </Link>
            </nav>

            <a
              href="tel:+13464485245"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-blue px-4 text-sm font-bold text-white shadow-sm transition hover:bg-brand-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              aria-label="Call ARA Home Services at 346-448-5245"
            >
              <Phone className="size-4" />
              <span className="hidden sm:inline">(346) 448-5245</span>
              <span className="sm:hidden">Call now</span>
            </a>
          </div>

          <nav
            className="flex items-center justify-center gap-6 border-t border-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 md:hidden"
            aria-label="Mobile navigation"
          >
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-slate-950 text-slate-300">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <Link href="/" className="flex items-center gap-2.5 text-white">
                <Image
                  src="/ara-home-services-logo.png"
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
                <span className="font-extrabold">ARA Home Services</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                Dependable help for mounting, repairs, assembly, and the small
                home projects that make a big difference.
              </p>
            </div>

            <div>
              <p className="font-bold text-white">Quick links</p>
              <div className="mt-4 grid gap-2 text-sm">
                <Link className="hover:text-white" href="/services">
                  Services
                </Link>
                <Link className="hover:text-white" href="/about">
                  About us
                </Link>
                <Link className="hover:text-white" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="font-bold text-white">Get in touch</p>
              <div className="mt-4 grid gap-3 text-sm">
                <a
                  className="flex items-center gap-2 hover:text-white"
                  href="tel:+13464485245"
                >
                  <Phone className="size-4 text-brand-orange" />
                  (346) 448-5245
                </a>
                <a
                  className="flex items-center gap-2 break-all hover:text-white"
                  href="mailto:4karallc@gmail.com"
                >
                  <Mail className="size-4 shrink-0 text-brand-orange" />
                  4karallc@gmail.com
                </a>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                  Houston, Texas and surrounding communities
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} ARA Home Services. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
