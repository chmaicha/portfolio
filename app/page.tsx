"use client";

export default function Home() {
  const profile = {
    name: "Chaimae Aboulouafa",
    title: "AI Engineer · LLM Infrastructure · Generative AI",
    tagline:
      "I build LLM agents, RAG systems, and reliable CI/CD for AI at scale.",
    location: "Île-de-France, Europe",
    email: "abl.chaimaie.2000@gmail.com",
    phone: "06 52 41 93 66",
    github: "https://github.com/chmaicha",
    linkedin: "https://www.linkedin.com/in/chaimae-aboulouafa-3bb",
    cvUrl: "/cv.pdf", // put your PDF in /public/cv.pdf
  } as const;

  const skills = [
    "Python",
    "LLMs (Mistral, fine‑tuning)",
    "RAG / Ragas",
    "LangChain",
    "Docker",
    "Linux",
    "Pytest & testing",
    "GCP (Vertex AI, BigQuery, Cloud Run, Cloud Functions, Storage, Pub/Sub)",
    "AWS (S3, Lambda, EC2)",
    "CI/CD (GitHub Actions, Jenkins)",
    "NLP (BERT, TF‑IDF, clustering)",
    "PostgreSQL",
    "Regex",
  ];

  const experience = [
    {
      role: "Machine Learning Engineer",
      company: "Fingreen AI",
      location: "Paris, France",
      dates: "Oct 2024 — Jul 2025",
      bullets: [
        "Built a RAG evaluation pipeline with Ragas for agent scoring & benchmarking.",
        "Deployed Mistral models on Vertex AI with Docker & GitHub Actions.",
        "Developed multi‑agent systems for data extraction & automated analysis.",
        "Fine‑tuned Mistral for ESG domain; deployed via Ollama.",
        "Automated workflows and CI/CD for reproducible agent testing.",
      ],
    },
    {
      role: "Data Scientist",
      company: "VALEO CDA",
      location: "Créteil, France",
      dates: "Feb 2024 — Aug 2024",
      bullets: [
        "Improved CI/CD test quality via automated log analysis & ML error classification.",
        "Pipelined Jenkins CI logs from AWS to GCP; dashboards in Looker Studio.",
        "Advanced regex & NLP for error detection; unit tests & workflows.",
      ],
    },
    {
      role: "Backend Developer",
      company: "Ringob",
      location: "Tangier, Morocco",
      dates: "Jul 2022 — Oct 2023",
      bullets: [
        "Built social gaming platform: profiles, posts, tournament join/track.",
        "Stack: Node.js, GraphQL, MongoDB.",
      ],
    },
  ];

  const projects = [
    {
      title: "LLM Agent RAG Evaluator",
      desc: "Evaluation pipeline for RAG systems using Ragas + Pytest for regression testing.",
      tech: ["Python", "LangChain", "Ragas", "Pytest"],
      link: "#",
    },
    {
      title: "Multi‑Agent Data Extractor",
      desc: "Agents orchestrated for document extraction & analytics on GCP.",
      tech: ["Mistral", "LangChain", "Docker", "GCP"],
      link: "#",
    },
    {
      title: "CI Log Intelligence",
      desc: "ML‑powered CI log triage & error classification (BERT + Regex).",
      tech: ["BERT", "Regex", "GCP", "AWS"],
      link: "#",
    },
  ];

  const partners = [
    { name: "VALEO", src: "/logos/valeo.png" },
    { name: "Fingreen AI", src: "/logos/fingreenai.png" },
    { name: "Capgemini", src: "/logos/capgemini.png" },
    { name: "Wafa Assurance", src: "/logos/wafaassurance.png" },
  ];

  

  return (
    <main className="min-h-screen text-zinc-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-violet-700/30 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-tight text-zinc-100">{profile.name}</a>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="text-zinc-300 hover:text-white transition">About</a>
            <a href="#skills" className="text-zinc-300 hover:text-white transition">Skills</a>
            <a href="#projects" className="text-zinc-300 hover:text-white transition">Projects</a>
            <a href="#experience" className="text-zinc-300 hover:text-white transition">Experience</a>
            <a href="#companies" className="text-zinc-300 hover:text-white transition">Companies</a>
            <a href="#contact" className="text-zinc-300 hover:text-white transition">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              className="inline-flex items-center rounded-xl border border-violet-700/40 bg-violet-700/10 px-3 py-1.5 text-sm text-violet-200 hover:bg-violet-700/20 transition"
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
            <a
              className="hidden md:inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1.5 text-sm text-white shadow hover:opacity-90 transition"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="grid gap-6 md:grid-cols-5 md:gap-8">
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                {profile.title}
              </span>
            </h1>
            <p className="mt-4 max-w-prose text-lg text-zinc-300">
              {profile.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.linkedin}
                className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-sm text-violet-200 hover:bg-violet-700/20 transition"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-sm text-violet-200 hover:bg-violet-700/20 transition"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-sm text-violet-200 hover:bg-violet-700/20 transition"
              >
                Email
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-400">
              {profile.location} · {profile.phone}
            </p>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            {/* Optional avatar: place /public/avatar.jpg */}
            <div className="h-40 w-40 overflow-hidden rounded-2xl border border-violet-700/40 bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 md:h-56 md:w-56">
  <img
    src="/avatar.jpg"
    alt="Chaimae Aboulouafa"
    className="h-full w-full object-cover"
  />
</div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold tracking-tight">About</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">
          I’m an AI engineer experienced in building infrastructure, tools, and environments
          for LLM‑based agents. I deploy and fine‑tune Mistral models on GCP, design
          RAG pipelines and multi‑agent systems, and ship robust CI/CD workflows so research
          prototypes become reliable products.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Skills & Tools</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="rounded-full border border-violet-700/40 bg-violet-800/20 px-3 py-1 text-sm text-violet-100">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* COMPANIES */}
      <section id="companies" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Companies I Worked With</h2>
        <p className="mt-2 text-sm text-zinc-400">Valeo · Fingreen AI · Capgemini · Wafa Assurance</p>

        {/* marquee container */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-violet-800/40 bg-black/30">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0214] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0214] to-transparent" />

          {/* track */}
          <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused] will-change-transform">

            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex w-1/2 items-center justify-around gap-8 py-6">
                {partners.map((p) => (
                  <div
  key={p.name}
  className="flex h-20 w-44 items-center justify-center rounded-xl border border-violet-800/40 bg-white p-3 shadow-sm"
>
  <img src={p.src} alt={p.name} className="max-h-12 max-w-full object-contain" />
</div>


                ))}
              </div>
            ))}
          </div>
        </div>

        {/* marquee keyframes */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <a href={profile.github} className="text-sm text-violet-300 hover:underline" target="_blank" rel="noreferrer">
            See more on GitHub →
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group rounded-2xl border border-violet-800/40 bg-black/30 p-4 transition hover:shadow-[0_0_0_1px_rgba(167,139,250,0.4)] hover:translate-y-[-2px]"
              target={p.link.startsWith("http") ? "_blank" : undefined}
              rel={p.link.startsWith("http") ? "noreferrer" : undefined}
            >
              <div className="h-32 rounded-xl bg-gradient-to-br from-violet-900/30 to-fuchsia-900/30" />
              <h3 className="mt-4 font-semibold tracking-tight text-zinc-100">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-violet-900/40 px-2 py-0.5 text-xs text-violet-100">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <ol className="mt-6 space-y-6">
          {experience.map((job) => (
            <li key={job.company} className="rounded-2xl border border-violet-800/40 bg-black/30 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-semibold tracking-tight text-zinc-100">
                    {job.role} · <span className="text-zinc-300">{job.company}</span>
                  </h3>
                  <p className="text-sm text-zinc-400">{job.location}</p>
                </div>
                <div className="text-sm text-zinc-400">{job.dates}</div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-violet-800/40 bg-black/30 p-5">
            <p className="text-zinc-300">
              Want to collaborate or hire me? Reach out by email or LinkedIn, or
              download my CV for details.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-violet-100 hover:bg-violet-700/20 transition"
              >
                Email: {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-violet-100 hover:bg-violet-700/20 transition"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-violet-100 hover:bg-violet-700/20 transition"
              >
                GitHub
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-white hover:opacity-90 transition"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-violet-800/40 bg-black/30 p-5">
            <form className="grid gap-3" action={`mailto:${profile.email}`} method="post" encType="text/plain">
              <input
                name="name"
                placeholder="Your name"
                className="rounded-xl border border-violet-800/40 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-700/40"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="rounded-xl border border-violet-800/40 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-700/40"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="rounded-xl border border-violet-800/40 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-700/40"
                required
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm text-white shadow hover:opacity-90 transition"
              >
                Send Message
              </button>
              <p className="text-xs text-zinc-400">
                Tip: For a real backend, replace this mailto form with a service like
                Formspree/Web3Forms later.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-violet-800/40 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
