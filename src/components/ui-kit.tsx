import { useEffect, useRef, useState, type ReactNode } from "react";
import { ADDRESS, BOOK, EMAIL, INSTAGRAM, MAPS, PHONE, PHONE_HREF, pricing } from "@/lib/site";

export function FadeUp({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, num, className = "" }: { children: ReactNode; num?: string; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      {num && <span>{num}</span>}
      {num && <span className="h-px w-8 bg-current opacity-50" />}
      <span>{children}</span>
    </p>
  );
}

/** Image with ratio + label naming the photo that belongs there. */
export function Photo({
  src,
  label,
  ratio = "4/5",
  className = "",
  eager = false,
}: {
  src: string;
  label: string;
  ratio?: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <figure className={`zoom relative bg-stone ${className}`} style={{ aspectRatio: ratio }}>
      <img
        src={src}
        alt={label}
        loading={eager ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <figcaption className="eyebrow absolute bottom-3 left-3 bg-ivory/85 px-2 py-1 text-[10px] text-foreground">
        Photo: {label}
      </figcaption>
    </figure>
  );
}

export function Ext({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function CtaBand({
  title = "Begin with a complimentary consultation.",
  label = "Make a booking",
  href = BOOK,
  tone = "taupe",
}: {
  title?: string;
  label?: string;
  href?: string;
  tone?: "taupe" | "stone";
}) {
  return (
    <section className={`${tone === "taupe" ? "bg-taupe" : "bg-stone"} section-pad`}>
      <FadeUp className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Eyebrow>Book your visit</Eyebrow>
          <h2 className="h-section mt-4 max-w-3xl">{title}</h2>
        </div>
        <Ext href={href} className="btn btn-primary shrink-0">{label}</Ext>
      </FadeUp>
    </section>
  );
}

export function PricingBlock({ num }: { num?: string }) {
  return (
    <section className="bg-stone section-pad">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <FadeUp className="md:col-span-4">
          <Eyebrow num={num}>Treatment Pricing</Eyebrow>
          <h2 className="h-section mt-4">The menu.</h2>
          <p className="pull mt-6 text-muted-foreground">A guide to our pricing</p>
        </FadeUp>
        <FadeUp className="md:col-span-8" delay={100}>
          <ul className="border-t border-foreground/25">
            {pricing.map((p) => (
              <li key={p.name} className="flex items-baseline justify-between gap-6 border-b border-foreground/25 py-5">
                <span className="font-serif text-2xl md:text-3xl">{p.name}</span>
                <span className="eyebrow shrink-0">{p.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            Wrinkle Reduction and Volume Restoration treatments require a consultation to assess suitability for
            treatment. Prices will be discussed during the consultation as per TGA requirements.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Gift vouchers are available, purchase through the booking page or enquire below.
          </p>
          <Ext href={BOOK} className="btn btn-primary mt-8">Make a booking</Ext>
        </FadeUp>
      </div>
    </section>
  );
}

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="border-t border-foreground/25 pt-8">
        <p className="pull">Thank you. We'll be in touch shortly.</p>
      </div>
    );
  const field = "w-full border-0 border-b border-foreground/30 bg-transparent py-3 outline-none focus:border-espresso placeholder:text-muted-foreground";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-6"
    >
      <label className="grid gap-1"><span className="eyebrow">Name</span><input required className={field} name="name" /></label>
      <label className="grid gap-1"><span className="eyebrow">Email</span><input required type="email" className={field} name="email" /></label>
      <label className="grid gap-1"><span className="eyebrow">Phone</span><input type="tel" className={field} name="phone" /></label>
      <label className="grid gap-1"><span className="eyebrow">Inquiry (optional)</span><textarea rows={3} className={field} name="inquiry" /></label>
      <button type="submit" className="btn btn-outline-dark justify-self-start">Send</button>
    </form>
  );
}

export function ContactDetails() {
  return (
    <ul className="grid gap-5">
      <li><p className="eyebrow text-muted-foreground">Visit</p><Ext href={MAPS} className="font-serif text-2xl hover:opacity-60">{ADDRESS}</Ext></li>
      <li><p className="eyebrow text-muted-foreground">Call</p><a href={PHONE_HREF} className="font-serif text-2xl hover:opacity-60">{PHONE}</a></li>
      <li><p className="eyebrow text-muted-foreground">Email</p><a href={`mailto:${EMAIL}`} className="font-serif text-2xl hover:opacity-60">{EMAIL}</a></li>
      <li><p className="eyebrow text-muted-foreground">Instagram</p><Ext href={INSTAGRAM} className="font-serif text-2xl hover:opacity-60">@lumeaglow.clinic</Ext></li>
    </ul>
  );
}

export function GetInTouch({ num }: { num?: string }) {
  return (
    <section className="section-pad">
      <div className="wrap grid gap-12 md:grid-cols-2 md:gap-20">
        <FadeUp>
          <Eyebrow num={num}>Get in touch</Eyebrow>
          <h2 className="h-section mt-4">We'd love to hear from you.</h2>
          <div className="mt-10"><ContactDetails /></div>
          <Ext href={BOOK} className="btn btn-primary mt-10">Make a booking</Ext>
        </FadeUp>
        <FadeUp delay={100}><EnquiryForm /></FadeUp>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string | string[]; twoCol?: boolean }[] }) {
  return (
    <div className="border-t border-foreground/25">
      {items.map((f, i) => (
        <details key={f.q} open={i === 0} className="border-b border-foreground/25">
          <summary className="flex items-start justify-between gap-6 py-6">
            <span className="font-serif text-2xl md:text-[1.75rem] leading-snug">{f.q}</span>
            <span className="faq-plus mt-2 text-2xl font-light transition-transform duration-300">+</span>
          </summary>
          <div className="pb-8 pr-10 text-muted-foreground">
            {Array.isArray(f.a) ? (
              <ul className={`grid gap-x-10 ${f.twoCol ? "sm:grid-cols-2" : ""}`}>
                {f.a.map((x) => (
                  <li key={x} className="border-b border-foreground/15 py-2">{x}</li>
                ))}
              </ul>
            ) : (
              <p className="max-w-2xl">{f.a}</p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

export function Disclaimer() {
  return (
    <>
      <p className="eyebrow wrap pt-8 text-center text-foreground/70">
        Jessica Taylor RN (Division 1) · Registration No. NMW0002801599
      </p>
      <p className="wrap py-8 text-center text-sm italic text-muted-foreground">
        All treatments are subject to a consultation with a registered health practitioner and subject to suitability.
        Every procedure carries risks, which will be discussed during the consultation.
      </p>
    </>
  );
}
