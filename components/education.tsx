// components/Education.tsx
import Image from "next/image";
import { education } from "@/lib/content";
import Section from "./Section"; // adjust path if needed

const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmt = (ym: string) => {
  if (ym === "present") return "Present";
  const [y, m] = ym.split("-").map(Number);
  return `${monthNames[(m ?? 1) - 1]} ${y}`;
};

const byRecency = (a: any, b: any) => {
  const toNum = (v: string) => (v === "present" ? 9e12 : Number(v.replace("-","")));
  return toNum(b.end) - toNum(a.end) || toNum(b.start) - toNum(a.start);
};

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {[...education].sort(byRecency).map((e) => (
          <div
            key={`${e.degree}-${e.start}`}
            className="flex items-center gap-4 rounded-2xl border border-violet-800/40 bg-black/30 p-5"
          >
            {/* Avatar left — simple, no background */}
            <Image
              src="/graduation-avatar.png" // <-- mets ton avatar (sans fond) ici
              alt="Graduation Avatar"
              width={56}
              height={56}
              className="object-contain"
            />

            {/* Education details */}
            <div>
              <p className="font-medium">{e.degree}</p>
              <p className="text-sm text-zinc-400">
                {e.school}{e.city ? ` · ${e.city}` : ""} · {fmt(e.start)} — {fmt(e.end)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
