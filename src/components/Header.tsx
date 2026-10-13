import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BOOK, PHONE, PHONE_HREF, navTreatments } from "@/lib/site";

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); setDd(false); }, [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const solid = scrolled || path !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "border-b border-foreground/10 bg-ivory" : "bg-transparent"}`}
    >
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link to="/" className="logo text-lg md:text-xl">Lumea Glow</Link>
        <nav className="hidden items-center gap-9 lg:flex">
          <div className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button className="eyebrow py-6" aria-expanded={dd} onClick={() => setDd((v) => !v)}>Treatments</button>
            {dd && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 border border-foreground/15 bg-ivory p-2">
                {navTreatments.map((t) => (
                  <Link key={t.slug} to="/treatments/$slug" params={{ slug: t.slug }} className="block border-b border-foreground/10 px-4 py-3 font-serif text-xl last:border-0 hover:bg-stone">
                    {t.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/membership" className="eyebrow hover:opacity-60">Membership</Link>
          <Link to="/find-my-treatment" className="eyebrow hover:opacity-60">Find My Treatment</Link>
          <Link to="/contact" className="eyebrow hover:opacity-60">Contact</Link>
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a href={PHONE_HREF} className="text-xs tracking-wider hover:opacity-60">{PHONE}</a>
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-primary !w-auto !py-3">Book Now</a>
        </div>
        <button className="eyebrow lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ivory">
          <div className="wrap flex h-20 items-center justify-between">
            <Link to="/" className="logo text-lg">Lumea Glow</Link>
            <button className="eyebrow" onClick={() => setOpen(false)} aria-label="Close menu">Close</button>
          </div>
          <div className="wrap flex flex-1 flex-col gap-2 py-6">
            <p className="eyebrow text-muted-foreground">Treatments</p>
            {navTreatments.map((t) => (
              <Link key={t.slug} to="/treatments/$slug" params={{ slug: t.slug }} className="border-b border-foreground/10 py-3 font-serif text-2xl">
                {t.label}
              </Link>
            ))}
            <Link to="/membership" className="mt-6 font-serif text-4xl">Membership</Link>
            <Link to="/find-my-treatment" className="font-serif text-4xl">Find My Treatment</Link>
            <Link to="/contact" className="font-serif text-4xl">Contact</Link>
            <div className="mt-auto grid gap-3 pt-10">
              <a href={PHONE_HREF} className="eyebrow">{PHONE}</a>
              <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
