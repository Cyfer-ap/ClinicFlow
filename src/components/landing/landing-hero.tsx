import Link from "next/link";

export function LandingHero() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.2),_transparent_50%),radial-gradient(circle_at_80%_80%,_rgba(56,189,248,0.16),_transparent_35%)]" />

      <section className="w-full max-w-3xl rounded-3xl border border-slate-800/70 bg-slate-900/70 p-10 text-center shadow-glow backdrop-blur">
        <p className="mb-4 inline-flex rounded-full border border-brand-600/50 bg-brand-900/35 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">
          Smart Clinic Operations
        </p>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
          ClinicFlow Token
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
          A smart queue, token, appointment, and follow-up management system tailored for modern clinics.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/login"
            className="w-full rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </main>
  );
}

