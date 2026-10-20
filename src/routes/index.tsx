import { createFileRoute } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg.asset.json";
import work2 from "@/assets/work-2-real.jpg";
import work3 from "@/assets/work-3-real.jpg";

const GITHUB = "https://github.com/";
const WA = "https://wa.me/27812448616";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dipeutech — Web Development Agency & Portfolio" },
      { name: "description", content: "Dipeutech crafts custom websites, UI/UX design and modern web applications from South Africa." },
      { property: "og:title", content: "Dipeutech — Web Development Agency" },
      { property: "og:description", content: "Custom web development, UI/UX design and modern web apps, crafted in South Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="url(#rg)" strokeWidth="1.8" strokeLinecap="round">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.82 0.06 55)" />
          <stop offset="0.5" stopColor="oklch(0.62 0.09 35)" />
          <stop offset="1" stopColor="oklch(0.8 0.05 55)" />
        </linearGradient>
      </defs>
      <path d="M24 44V20M24 30l-9-7v-6M24 30l9-7v-6M24 24l-5-4V9M24 24l5-4V9M24 20V6M12 44h24" />
      <g fill="url(#rg)" stroke="none">
        {[[15, 15], [33, 15], [19, 7], [29, 7], [24, 4]].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="2.2" />
        ))}
      </g>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /></svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" /></svg>
  );
}

const services = [
  { n: "01", t: "Custom Web Development", d: "Hand-crafted, high-performance websites built from the ground up around your brand and goals." },
  { n: "02", t: "UI/UX Design", d: "Thoughtful, elegant interfaces and journeys that feel effortless and convert beautifully." },
  { n: "03", t: "Modern Web Applications", d: "Scalable, secure web apps and dashboards powered by today's best technologies." },
];

const work = [
  { img: work2, t: "Aurora Analytics", c: "Web Application · Dashboard" },
  { img: work3, t: "Nourish Wellness", c: "UI/UX · Mobile Design" },
];

const contacts = [
  { l: "Email", v: "info@dipeutech.co.za", h: "mailto:info@dipeutech.co.za" },
  { l: "Website", v: "Dipeutech.co.za", h: "https://dipeutech.co.za" },
  { l: "Phone", v: "+27 81 244 8616", h: "tel:+27812448616" },
  { l: "Location", v: "South Africa" },
];

const nav = [["Services", "#services"], ["Work", "#work"], ["About", "#about"], ["Contact", "#contact"]];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2">
            <Logo />
            <span className="font-display text-2xl tracking-wide">Dipeu<span className="text-rose-metal">tech</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm tracking-widest uppercase text-muted-foreground md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-primary">{l}</a>)}
          </nav>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 pt-36 pb-24 md:pt-48 md:pb-36">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/60 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-primary">Web Development Agency · South Africa</p>
            <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-8xl">
              Elegant digital <em className="text-rose-metal">experiences</em>, rooted in craft.
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light text-muted-foreground">
              Dipeutech designs and builds refined websites and web applications that help ambitious brands grow.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="bg-rose-metal shadow-soft rounded-full px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5">View our work</a>
              <a href={WA} target="_blank" rel="noreferrer" className="rounded-full border border-foreground/20 px-8 py-4 text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary">Start a project</a>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-border bg-card px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">What we do</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Our services</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-border md:grid-cols-3">
              {services.map((s) => (
                <div key={s.n} className="group bg-card p-8 transition-colors hover:bg-muted md:p-10">
                  <span className="font-display text-5xl text-rose-metal">{s.n}</span>
                  <h3 className="mt-6 text-2xl">{s.t}</h3>
                  <p className="mt-3 font-light text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Portfolio</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Selected work</h2>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {work.map((w) => (
                <article key={w.t} className="group">
                  <div className="overflow-hidden rounded-md shadow-soft">
                    <img src={w.img} alt={w.t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-auto" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between">
                    <h3 className="text-2xl md:text-3xl">{w.t}</h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{w.c}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-secondary px-5 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-md border border-primary/40" />
              <img src={founder.url} alt="Founder and lead developer of Dipeutech" loading="lazy" width={1080} height={860} className="relative w-full rounded-md object-cover shadow-soft" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">About me</p>
              <h2 className="mt-3 text-4xl md:text-6xl">The woman behind <em className="text-rose-metal">the code</em></h2>
              <p className="mt-6 text-lg font-light text-muted-foreground">
                I'm a full-stack developer and designer who believes great technology should feel as beautiful as it performs. As the founder of Dipeutech, I lead every project with precision, creativity and care.
              </p>
              <p className="mt-4 font-light text-muted-foreground">
                Proudly representing women in tech, I partner with businesses across South Africa and beyond to turn bold ideas into polished digital products.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[["50+", "Projects"], ["5+", "Years"], ["100%", "Dedication"]].map(([n, l]) => (
                  <div key={l}><div className="font-display text-4xl text-rose-metal">{n}</div><div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Contact</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Let's build something <em className="text-rose-metal">beautiful</em></h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-border text-left sm:grid-cols-2 md:grid-cols-4">
              {contacts.map((c) => (
                <div key={c.l} className="bg-card p-6">
                  <div className="text-xs uppercase tracking-widest text-primary">{c.l}</div>
                  {c.h ? <a href={c.h} className="mt-2 block break-words text-lg hover:text-primary">{c.v}</a> : <div className="mt-2 text-lg">{c.v}</div>}
                </div>
              ))}
            </div>
            <a href={WA} target="_blank" rel="noreferrer" className="bg-rose-metal shadow-soft mt-12 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2"><Logo className="h-7 w-7" /><span>© {new Date().getFullYear()} Dipeutech. All rights reserved.</span></div>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><GitHubIcon /> GitHub</a>
        </div>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="bg-rose-metal shadow-soft fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground transition-transform hover:scale-110">
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
