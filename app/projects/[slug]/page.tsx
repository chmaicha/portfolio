import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  // ✅ inchangé
  return projects.map((p) => ({ slug: p.slug }));
}

// ✅ params est une Promise et on l'attend
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) {
    return <div className="mx-auto max-w-3xl p-8">Project not found.</div>;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-zinc-100">
      <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">← Back</Link>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{p.title}</h1>
      <p className="mt-2 text-zinc-300">{p.summary}</p>

      {p.metrics && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {p.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-violet-800/40 bg-black/30 p-4">
              <p className="text-lg font-semibold">{m.value}</p>
              <p className="text-xs text-zinc-400">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      {p.heroImage && (
        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl">
          <Image src={p.heroImage} alt={p.title} fill className="object-cover" />
        </div>
      )}

      <section className="prose prose-invert mt-8 max-w-none">
        <h3>Problem</h3>
        <p>Décris en 3–5 lignes le contexte (utilisateurs, douleur, KPI visés).</p>
        <h3>Solution</h3>
        <ul>
          {p.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <h3>Stack</h3>
        <p>{p.tech.join(" · ")}</p>
      </section>

      {p.gallery && p.gallery.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {p.gallery.map((src) => (
            <div key={src} className="relative h-48 w-full overflow-hidden rounded-xl border border-violet-800/40">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {p.links && p.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-3 py-1.5 text-sm text-violet-200 hover:bg-violet-700/20 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
