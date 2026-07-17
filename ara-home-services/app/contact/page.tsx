import type { Metadata } from "next";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call or email ARA Home Services for home repair, mounting, and assembly help in the Houston area.",
};

const platforms = [
  {
    name: "Thumbtack",
    href: "https://www.thumbtack.com/tx/houston/appliance-repair/ara-home-services/service/549109325284057093",
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/ara-home-services-houston?osq=ara+home+services&override_cta=Get+a+quote",
  },
  {
    name: "Nextdoor",
    href: "https://nextdoor.com/page/4kara-llc",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-blue py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold tracking-widest text-brand-orange uppercase">
            Contact us
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s get your next home project moving
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Call for the fastest response, or email the project details for a
            non-urgent estimate or question.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl sm:p-10">
            <span className="grid size-14 place-items-center rounded-2xl bg-brand-orange">
              <Phone className="size-7" />
            </span>
            <p className="mt-7 text-sm font-extrabold tracking-widest text-brand-orange uppercase">
              Fastest way to reach us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Call ARA Home Services
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Tell us what you need, where you are located, and your preferred
              timing. Photos can be shared after we connect.
            </p>
            <a
              href="tel:+13464485245"
              className="mt-8 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-brand-orange px-6 text-xl font-extrabold text-white shadow-lg transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              <Phone className="size-6" />
              (346) 448-5245
            </a>
          </div>

          <div className="grid gap-5">
            <a
              href="mailto:4karallc@gmail.com"
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:border-brand-blue/30 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-blue text-white">
                  <Mail className="size-6" />
                </span>
                <ArrowUpRight className="size-5 text-slate-400 transition group-hover:text-brand-orange" />
              </div>
              <h2 className="mt-5 text-xl font-extrabold text-slate-900">
                Email for estimates and questions
              </h2>
              <p className="mt-2 break-all font-bold text-brand-blue">
                4karallc@gmail.com
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Best for non-urgent requests. Include a short description,
                location, and photos when possible.
              </p>
            </a>

            <div className="rounded-3xl border border-slate-200 p-7">
              <h2 className="font-extrabold text-slate-900">
                Serving Houston-area homeowners
              </h2>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-orange" />
                  Houston, Texas and surrounding communities
                </p>
                <p className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 size-5 shrink-0 text-brand-orange" />
                  Contact us to discuss availability and scheduling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-brand-blue p-7 text-white shadow-xl sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-white text-brand-blue">
                  <Store className="size-6" />
                </span>
                <p className="text-sm font-extrabold tracking-widest text-brand-orange uppercase">
                  Our primary lead source
                </p>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight">
                Connect with us on Facebook
              </h2>
              <p className="mt-3 leading-7 text-blue-100">
                See our latest updates and start a conversation on the platform
                you already use.
              </p>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61584521350224"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 font-extrabold text-white transition hover:brightness-95 sm:w-auto lg:mt-0"
            >
              Visit our Facebook page
              <ArrowUpRight className="size-5" />
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-20 items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-brand-blue transition hover:border-brand-blue/30 hover:shadow-md"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="size-5 text-brand-orange" />
                  {platform.name}
                </span>
                <ArrowUpRight className="size-5 text-slate-400 transition group-hover:text-brand-orange" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-brand-orange/25 bg-orange-50 p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              What to include in your request
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                "A short description of the project",
                "Your neighborhood or ZIP code",
                "Helpful measurements or photos",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-orange" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
