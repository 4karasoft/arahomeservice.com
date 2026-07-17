import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Drill,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sofa,
  Tv,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Home Services",
  description:
    "Explore TV mounting, appliance troubleshooting, drywall repair, picture hanging, furniture assembly, and minor home repair services in Houston.",
};

const services = [
  {
    name: "Professional TV Mounting & Setup",
    description:
      "Secure, level TV mounting with careful placement and a clean, finished look.",
    details: [
      "Wall-mount installation",
      "TV positioning and leveling",
      "Basic device and cable setup",
    ],
    icon: Tv,
  },
  {
    name: "Appliance Repair & Troubleshooting",
    description:
      "Practical diagnosis and basic repair help for common household appliance issues.",
    details: [
      "Problem assessment",
      "Basic parts and function checks",
      "Straightforward repair guidance",
    ],
    icon: Wrench,
  },
  {
    name: "Drywall Patching & Painting",
    description:
      "Careful patches and touch-ups that help damaged walls look clean and complete again.",
    details: [
      "Small-hole and anchor repair",
      "Surface preparation",
      "Paint touch-ups and blending",
    ],
    icon: PaintRoller,
  },
  {
    name: "Picture Hanging & General Mounting",
    description:
      "Level, secure installation for the details that make your space feel finished.",
    details: [
      "Pictures, mirrors, and artwork",
      "Shelves and wall décor",
      "Curtain rods and similar fixtures",
    ],
    icon: Drill,
  },
  {
    name: "Furniture Assembly & Minor Home Repairs",
    description:
      "Dependable help assembling furniture and completing everyday fixes around your home.",
    details: [
      "Flat-pack furniture assembly",
      "Hardware adjustments",
      "Small household repairs",
    ],
    icon: Sofa,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-blue py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold tracking-widest text-brand-orange uppercase">
            Our services
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Practical help for the projects that make a house feel like home
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            From mounting and setup to small repairs and finishing touches, we
            bring care, clear communication, and attention to detail.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.name}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white hover:shadow-xl sm:p-8"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-blue text-white">
                    <Icon className="size-7" />
                  </span>
                  <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
                    {service.name}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-orange" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-orange/25 bg-orange-50 py-12 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-start lg:px-8">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-orange text-white">
            <ShieldCheck className="size-7" />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Clear scope. Quality-focused service.
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              ARA Home Services specializes in high-quality minor home repairs,
              mounting, assembly, and aesthetic upgrades that do not require a
              specialized trade license under Texas regulations. We do not
              perform work that requires a licensed electrician, plumber,
              HVAC contractor, or other licensed trade professional. If a
              project falls outside our scope, we will let you know before work
              begins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Call us to discuss the job, or send the details for a non-urgent
            estimate.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+13464485245"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 font-extrabold text-white transition hover:brightness-95"
            >
              <Phone className="size-5" />
              (346) 448-5245
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-brand-blue px-7 font-extrabold text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              Contact us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
