export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
      <section id={id} className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6">{children}</div>
      </section>
    );
  }
  