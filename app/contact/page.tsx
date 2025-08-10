// app/contact/page.tsx
export default function ContactPage() {
    const email = "abl.chaimaie.2000@gmail.com";
    return (
      <main className="mx-auto max-w-6xl px-4 py-16 text-zinc-100">
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-zinc-300">
          Want to collaborate or hire me? Reach out by email or LinkedIn.
        </p>
  
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-3 text-violet-100 hover:bg-violet-700/20 transition text-sm"
            href={`mailto:${email}`}
          >
            Email: {email}
          </a>
          <a
            className="rounded-xl border border-violet-700/40 bg-violet-700/10 px-4 py-3 text-violet-100 hover:bg-violet-700/20 transition text-sm"
            href="https://www.linkedin.com/in/chaimae-aboulouafa-3bb"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </main>
    );
  }
  