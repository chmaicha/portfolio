import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/content";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group rounded-2xl border border-violet-800/40 bg-black/30 p-4 transition hover:shadow-[0_0_0_1px_rgba(167,139,250,0.4)] hover:-translate-y-0.5"
    >
      <div className="relative h-32 w-full overflow-hidden rounded-xl">
        {p.heroImage ? (
          <Image src={p.heroImage} alt={p.title} fill className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-violet-900/30 to-fuchsia-900/30" />
        )}
      </div>
      <h3 className="mt-4 font-semibold tracking-tight text-zinc-100">{p.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-zinc-300">{p.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.slice(0, 4).map((t) => (
          <span key={t} className="rounded-full bg-violet-900/40 px-2 py-0.5 text-xs text-violet-100">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
