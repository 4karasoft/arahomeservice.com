import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Tv,
  Users,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the small, dependable crew behind ARA Home Services in Houston, Texas.",
};

const values = [
  {
    title: "Personal service",
    description:
      "You work directly with the people responsible for completing your project.",
    icon: HeartHandshake,
  },
  {
    title: "Clear communication",
    description:
      "We listen first, explain the plan, and keep the scope straightforward.",
    icon: Handshake,
  },
  {
    title: "Careful workmanship",
    description:
      "We respect your home and focus on clean, dependable, quality-minded work.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(23,60,95,0.9),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(223,119,62,0.2),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold tracking-widest text-brand-orange uppercase">
            About ARA Home Services
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            A small crew that treats your home and your project with care
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            We are a local Houston-area team built around practical skills,
            honest communication, and the belief that the small jobs deserve
            to be done right too.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-3xl bg-brand-blue p-8 text-white shadow-xl sm:p-10">
            <span className="grid size-16 place-items-center rounded-2xl bg-white text-brand-blue">
              <Users className="size-8" />
            </span>
            <p className="mt-8 text-sm font-extrabold tracking-widest text-brand-orange uppercase">
              Local and hands-on
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              The people behind the work
            </h2>
            <p className="mt-4 leading-7 text-blue-100">
              Our compact team means personal accountability, fewer handoffs,
              and a direct connection from the first conversation through the
              finished project.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Built on friendship, practical experience, and dependable help
            </h2>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                ARA Home Services is led by its owner, who manages day-to-day
                business operations and works directly with customers. He also
                brings hands-on experience in basic appliance repair,
                troubleshooting, and professional TV mounting.
              </p>
              <p>
                He is joined by a trusted friend who also specializes in TV
                mounting. Together, they provide the focused attention and
                flexibility of a small crew while keeping quality and
                communication at the center of every job.
              </p>
              <p>
                Whether the task is mounting a television, assembling
                furniture, patching drywall, or handling an everyday home
                repair, our goal is to leave you with a result that feels
                finished and a service experience you would recommend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold tracking-widest text-brand-orange uppercase">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Simple values that guide every project
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-orange-100 text-brand-orange">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-7">
            <Tv className="size-8 text-brand-blue" />
            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
              Focused expertise
            </h2>
            <ul className="mt-5 grid gap-3 text-slate-600">
              {[
                "TV mounting and setup",
                "Basic appliance troubleshooting",
                "Minor repairs and aesthetic upgrades",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-orange-50 p-7">
            <Wrench className="size-8 text-brand-orange" />
            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
              Ready to help
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Tell us what is on your home to-do list. We will discuss the
              scope and help you determine whether we are the right crew for
              the job.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-14 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-2 text-blue-100">
              Friendly, practical help is one call away.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:+13464485245"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 font-extrabold text-white transition hover:brightness-95"
            >
              <Phone className="size-5" />
              Call now
            </a>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 px-6 font-extrabold transition hover:bg-white hover:text-brand-blue"
            >
              View services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
