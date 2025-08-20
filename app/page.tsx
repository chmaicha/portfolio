"use client";

import Image from "next/image";
import Link from "next/link";
import AssistantWidget from "@/components/AssistantWidget";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { profile, skills, projects, experiences, certifications, education } from "@/lib/content";
import CompaniesMarquee from "@/components/CompaniesMarquee";
import Education from "@/components/education";
import { partners } from "@/lib/content";
import CertificationCard from "@/components/CertificationCard";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-violet-700/30 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-tight text-zinc-100">{profile.name}</a>
          <div className="hidden gap-6 text-sm md:flex">
            {["about","skills","projects","experience","certifications","education","contact"].map((s) => (
              <a key={s} href={`#${s}`} className="text-zinc-300 hover:text-white transition">
                {s[0].toUpperCase()+s.slice(1)}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a className="inline-flex items-center rounded-xl border border-violet-700/40 bg-violet-700/10 px-3 py-1.5 text-sm text-violet-200 hover:bg-violet-700/20 transition"
               href={profile.cvUrl} target="_blank" rel="noreferrer">Download CV</a>
            <a className="hidden md:inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1.5 text-sm text-white shadow hover:opacity-90 transition"
               href="#contact">Hire Me</a>
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
            <p className="mt-4 max-w-prose text-lg text-zinc-300">{profile.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"
                 className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-sm text-violet-200 hover:bg-violet-700/20 transition">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"
                 className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-sm text-violet-200 hover:bg-violet-700/20 transition">GitHub</a>
              <a href={`mailto:${profile.email}`}
                 className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-sm text-violet-200 hover:bg-violet-700/20 transition">Email</a>
            </div>
            <p className="mt-4 text-sm text-zinc-400">{profile.location} · {profile.phone}</p>
          </div>

          {/* <div className="md:col-span-2 flex items-center justify-center">
            <div className="h-40 w-40 overflow-hidden rounded-2xl border border-violet-700/40 bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 md:h-56 md:w-56">
              <Image src="/avatar.jpg" alt="Chaimae Aboulouafa" width={224} height={224} className="h-full w-full object-cover" />
            </div>
          </div> */}
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About">
        <p className="max-w-3xl text-zinc-300">
          I’m an AI engineer experienced in building infrastructure, tools, and environments
          for LLM‑based agents. I deploy and fine‑tune Mistral on GCP, design RAG pipelines and multi‑agent systems,
          and ship robust CI/CD so research prototypes become reliable products.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
  Available for Work / Freelance
</div>

      </Section>



      {/* COMPANIES */}
      <section id="companies" className="mx-auto max-w-6xl px-4 py-12">
  <h2 className="text-xl font-semibold tracking-tight">Companies I Worked With</h2>
  <div className="mt-6 max-w-3xl">
    <CompaniesMarquee items={partners} height={84} gap={28} speed={26} />
  </div>
</section>


      {/* SKILLS */}
      <Section id="skills" title="Skills & Tools">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([cat, list]) => (
            <div key={cat} className="rounded-2xl border border-violet-800/40 bg-black/30 p-5">
              <p className="mb-2 text-lg font-semibold">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="rounded-full border border-violet-700/40 bg-violet-800/20 px-3 py-1 text-sm text-violet-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects & Architectures">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-zinc-400">Selected work.</p>
          <Link href={profile.github} className="text-sm text-violet-300 hover:underline" target="_blank">
            More on GitHub →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <ol className="space-y-6">
          {experiences.map((job) => (
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
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* CERTIFICATIONS */}

        <section id="certifications" className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="text-xl font-semibold tracking-tight">Certifications</h2>

    {/* 2 cartes par ligne dès sm+ ; 1 carte sur mobile */}
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
  {certifications.map((c) => (
    <CertificationCard key={c.id} c={c} />
  ))}
</div>

  </section>



      {/* EDUCATION */}

         
    
        <div className="space-y-4">
        <Education />
        </div>
   

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-violet-800/40 bg-black/30 p-5">
            <p className="text-zinc-300">Want to collaborate or hire me? Reach out by email or LinkedIn, or download my CV.</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href={`mailto:${profile.email}`} className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-violet-100 hover:bg-violet-700/20 transition">Email: {profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-violet-100 hover:bg-violet-700/20 transition">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-2 text-violet-100 hover:bg-violet-700/20 transition">GitHub</a>
              <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-white hover:opacity-90 transition">Download CV</a>
            </div>
          </div>
          <div className="rounded-2xl border border-violet-800/40 bg-black/30 p-5">
            <form className="grid gap-3" action={`mailto:${profile.email}`} method="post" encType="text/plain">
              <input name="name" placeholder="Your name" className="rounded-xl border border-violet-800/40 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-700/40" required />
              <input name="email" type="email" placeholder="Your email" className="rounded-xl border border-violet-800/40 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-700/40" required />
              <textarea name="message" placeholder="Message" rows={4} className="rounded-xl border border-violet-800/40 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-700/40" required />
              <button type="submit" className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm text-white shadow hover:opacity-90 transition">Send Message</button>
              <p className="text-xs text-zinc-400">Tip: pour un vrai backend, branche Formspree/Web3Forms.</p>
            </form>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-violet-800/40 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#certifications" className="hover:underline">Certifications</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>

      <AssistantWidget />
    </main>
  );
}
