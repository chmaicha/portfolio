import Image from "next/image";
import type { Certification } from "@/lib/content";

export default function CertificationCard({ c }: { c: Certification }) {
  return (
    <article className="rounded-2xl bg-zinc-950/60 shadow-sm ring-1 ring-white/10">
      {/* Header with gradient & logo */}
      <div className={`rounded-t-2xl p-4 text-white bg-gradient-to-r ${c.gradientFrom} ${c.gradientTo}`}>
  <div className="flex items-center gap-3">
    {/* Pastille logo parfaitement ronde */}
    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow ring-1 ring-black/5">
  <Image
    src={c.logo}
    alt={`${c.org} logo`}
    width={40}
    height={40}
    quality={100}
    className="h-10 w-10 object-contain p-1"
  />
</div>


    <div>
      <h3 className="text-lg font-semibold leading-tight">{c.title}</h3>
      <p className="text-sm/5 opacity-90">{c.org}</p>
    </div>
  </div>
</div>


      {/* Body with skills chips */}
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {c.skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
          <span>{c.date}</span>
          <a
            href={c.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200"
          >
            Verify <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
