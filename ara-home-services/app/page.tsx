import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Drill,
  Hammer,
  MapPin,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sofa,
  Star,
  Store,
  Tv,
  Wrench,
} from "lucide-react";

const services = [
  {
    name: "TV Mounting & Setup",
    description: "Clean, secure installation for a polished viewing space.",
    icon: Tv,
  },
  {
    name: "Appliance Troubleshooting",
    description: "Practical help diagnosing common household appliance issues.",
    icon: Wrench,
  },
  {
    name: "Drywall Patching & Painting",
    description: "Careful touch-ups that help walls look finished again.",
    icon: PaintRoller,
  },
  {
    name: "Hanging & General Mounting",
    description: "Pictures, shelves, mirrors, and more—level and secure.",
    icon: Drill,
  },
  {
    name: "Assembly & Minor Repairs",
    description: "Furniture assembly and everyday fixes around your home.",
    icon: Sofa,
  },
];

const futurePlatforms = ["Thumbtack", "Yelp", "Nextdoor", "Google Business"];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(21,86,163,0.55),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(244,123,32,0.18),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <MapPin className="size-4 text-brand-orange" />
              Local help for Houston homeowners
            </div>
            <h1 className="max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Your home to-do list,{" "}
              <span className="text-brand-orange">handled right.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              From mounting your new TV to patching drywall and assembling
              furniture, ARA Home Services delivers careful, dependable help
              for the projects that keep your home working well.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+13464485245"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-brand-orange px-6 text-lg font-extrabold text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone className="size-5" />
                Call (346) 448-5245
              </a>
              <Link
                href="/services"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 font-bold text-white transition hover:bg-white/10"
              >
                Explore our services
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm font-medium text-slate-300">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              Proudly serving Houston, Texas and surrounding communities.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] bg-brand-orange/20 blur-sm" />
            <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white p-3 text-slate-900 shadow-2xl">
              <div className="rounded-2xl bg-slate-100 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-blue text-white">
                    <Hammer className="size-7" />
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700 uppercase">
                    Local & dependable
                  </span>
                </div>
                <h2 className="mt-8 text-2xl font-extrabold tracking-tight">
                  One call. More jobs done.
                </h2>
                <div className="mt-6 grid gap-3">
                  {[
                    "Clear communication",
                    "Careful work in your home",
                    "Convenient local service",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-sm"
                    >
                      <CheckCircle2 className="size-5 text-brand-blue" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold tracking-widest text-brand-orange uppercase">
              How we can help
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Skilled help for everyday home projects
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We focus on high-quality minor repairs, mounting, setup, and
              assembly—so you can spend less time on the list and more time
              enjoying your home.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.name}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-blue-100 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-extrabold leading-snug text-slate-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-blue-dark"
            >
              View all services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="grid size-14 place-items-center rounded-2xl bg-orange-100 text-brand-orange">
              <ShieldCheck className="size-7" />
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Straightforward service you can feel good about
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We show up ready to listen, understand the task, and treat your
              space with care. Our goal is simple: quality work, clear
              communication, and a result you are happy to live with.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Local service", "Based in and serving the Houston area."],
              ["Versatile expertise", "One team for many household tasks."],
              ["Homeowner focused", "Friendly, practical, and attentive."],
              ["Quality minded", "Careful work from setup through cleanup."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <Star className="size-5 fill-brand-orange text-brand-orange" />
                <h3 className="mt-3 font-extrabold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-brand-blue p-7 text-white shadow-xl sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-white text-brand-blue">
                  <Store className="size-6" />
                </span>
                <p className="text-sm font-extrabold tracking-widest text-blue-100 uppercase">
                  See our latest work
                </p>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight">
                Find ARA Home Services on Facebook Marketplace
              </h2>
              <p className="mt-3 leading-7 text-blue-100">
                Browse our current service listings and connect with us through
                the platform you already use.
              </p>
            </div>
            <a
              href="https://www.facebook.com/marketplace/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 font-extrabold text-brand-blue transition hover:bg-blue-50 lg:mt-0"
            >
              Visit Facebook Marketplace
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {futurePlatforms.map((platform) => (
              <div
                key={platform}
                className="flex min-h-16 items-center justify-between rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 text-sm font-semibold text-slate-500"
                aria-label={`${platform} profile coming soon`}
              >
                {platform}
                <span className="rounded-full bg-slate-200 px-2 py-1 text-[10px] font-bold tracking-wide uppercase">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ready to get that project off your list?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us what you need help with. Call now for the fastest response
            or visit our contact page to request an estimate.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+13464485245"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-brand-blue px-7 font-extrabold text-white transition hover:bg-brand-blue-dark"
            >
              <Phone className="size-5" />
              (346) 448-5245
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-brand-blue px-7 font-extrabold text-brand-blue transition hover:bg-blue-100"
            >
              Request an estimate
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
