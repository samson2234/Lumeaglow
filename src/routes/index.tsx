import { createFileRoute, Link } from "@tanstack/react-router";
import { BOOK, concerns, img } from "@/lib/site";
import { Eyebrow, Ext, FadeUp, GetInTouch, Photo, PricingBlock } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumea Glow | Registered Nurse-led Skin Clinic, Gladesville" },
      { name: "description", content: "Boutique RN-led cosmetic and skin clinic in Gladesville, Sydney. Natural, considered results. Book a complimentary consultation." },
      { property: "og:title", content: "Lumea Glow | Every face is unique" },
      { property: "og:description", content: "Registered Nurse-led cosmetic and skin clinic in Gladesville, Sydney." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[620px] overflow-hidden">
        <img src={img.hero} alt="Soft-focus portrait" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" width={1920} height={1088} />
        <div className="absolute inset-0 bg-ivory/30 md:bg-transparent" />
        <div className="wrap relative flex h-full flex-col justify-end pb-16 md:justify-center md:pb-0">
          <FadeUp className="max-w-xl">
            <Eyebrow>Registered Nurse-led clinic</Eyebrow>
            <h1 className="display mt-6">Every face is unique. Every glow is yours.</h1>
            <p className="mt-6 max-w-md">
              Rather than chasing trends or dramatic changes, our approach focuses on maintaining balance, harmony and
              results that remain natural, complementing your individual features.
            </p>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
              <Ext href={BOOK} className="btn btn-primary">Make a booking</Ext>
              <Link to="/find-my-treatment" className="link-line self-start">Find my treatment</Link>
            </div>
          </FadeUp>
        </div>
        <span className="eyebrow absolute bottom-3 right-4 hidden bg-ivory/85 px-2 py-1 text-[10px] md:block">Photo: soft-focus hero portrait</span>
      </section>

      {/* TRUST ROW */}
      <div className="border-y border-foreground/20">
        <ul className="wrap grid divide-y divide-foreground/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {["Registered Nurse led", "Complimentary consultations", "Gladesville, Sydney"].map((t) => (
            <li key={t} className="eyebrow py-5 text-center">{t}</li>
          ))}
        </ul>
      </div>

      {/* ABOUT */}
      <section className="section-pad">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <FadeUp className="md:col-span-5">
            <Eyebrow num="01">About Lumea Glow</Eyebrow>
            <h2 className="h-section mt-5">Personalised care. Considered treatments. Proportion and harmony.</h2>
          </FadeUp>
          <FadeUp className="md:col-span-6 md:col-start-7" delay={100}>
            <p>
              As a Registered Nurse led clinic, every treatment begins with a consultation, facial assessment and an
              honest conversation about your goals. Rather than recommending unnecessary treatments, we focus on
              creating personalised treatment plans that prioritise safety, balance and long term skin health.
            </p>
            <p className="mt-5">
              Whether you're visiting for preventative care, skin rejuvenation or aesthetic enhancements, you can expect
              evidence informed care, genuine guidance and a welcoming environment, where you will never feel pressured
              or rushed.
            </p>
            <p className="pull mt-10 border-l border-taupe pl-6">
              Our goal is simple, to help you feel confident, refreshed and beautiful in your own skin.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* MEET JESS */}
      <section className="bg-stone">
        <div className="grid md:grid-cols-2">
          <Photo src={img.jess} label="Jess in clinic, 4:5" className="md:h-full" />
          <FadeUp className="section-pad flex flex-col justify-center px-5 md:px-16 lg:px-24">
            <Eyebrow num="02">Meet RN Jess</Eyebrow>
            <h2 className="h-section mt-5">Aesthetics should be personal.</h2>
            <p className="mt-6">
              Lumea Glow was created by Jess with a simple philosophy; aesthetic treatments should be considered,
              personalised and centred around what is right for you. A space that is warm and welcoming, all clients are
              heard and comfortable throughout their experience.
            </p>
            <p className="mt-4">
              With a nursing background and a passion for facial aesthetics and skin health, Jess takes the time to
              understand your concerns, assess your individual features and develop a treatment approach suited to your
              goals.
            </p>
            <p className="mt-4">
              She believes aesthetics should be personal, there is no one-size-fits-all approach, instead, focusing on
              each client's individual anatomy and features.
            </p>
            <p className="eyebrow mt-8 border-t border-foreground/25 pt-5">
              Jessica Taylor RN (Division 1), accredited Cosmetic Injector
            </p>
            <Ext href={BOOK} className="btn btn-primary mt-8 self-start">Book your complimentary consultation</Ext>
          </FadeUp>
        </div>
      </section>

      {/* TREATMENTS INDEX */}
      <section className="section-pad">
        <div className="wrap">
          <FadeUp className="flex flex-col justify-between gap-6 border-b border-foreground/25 pb-10 md:flex-row md:items-end">
            <div>
              <Eyebrow num="03">Treatments</Eyebrow>
              <h2 className="h-section mt-5">Four considered areas of care.</h2>
            </div>
          </FadeUp>

          <IndexRow
            n="01"
            title="Treating Lines, Wrinkles and Volume Enhancements"
            text="Personalised treatment plans with Registered Nurse Jess to address your skin concerns and goals whilst prioritising a natural approach."
            slug="lines-wrinkles-volume"
            src={img.profile}
            label="Soft profile portrait"
          />
          <IndexRow
            n="02"
            flip
            title="Skin Rejuvenation & Targeted Facials"
            text="Whether you're concerned about dehydration, dullness, congestion, sensitivity or the early signs of ageing, every treatment is tailored to your skin's needs on the day. Rather than a one size fits all facial, each appointment is intentional and designed to support your skin while working towards your long term goals."
            slug="skin-rejuvenation-facials"
            src={img.facial}
            label="Facial in treatment"
          />

          {/* 03 */}
          <div className="grid gap-10 border-b border-foreground/25 py-14 md:grid-cols-12">
            <FadeUp className="md:col-span-4">
              <p className="font-serif text-6xl text-taupe">03</p>
              <h3 className="mt-4 font-serif text-4xl">Collagen & Skin Refinement</h3>
              <p className="mt-4 text-muted-foreground">
                Two approaches to smoother, brighter skin. Not sure which suits you? We'll guide you at your consultation.
              </p>
            </FadeUp>
            <div className="grid gap-8 sm:grid-cols-2 md:col-span-8">
              {[
                { t: "Microneedling", p: "from $250", d: "Collagen induction with medical-grade needles for texture, scarring, pores and fine lines.", s: "microneedling" as const, src: img.skin, l: "Skin texture close-up" },
                { t: "The Glassifier", p: "from $375", d: "Microscopic spicules with peptides and glutathione for texture, radiance and a refined, luminous complexion.", s: "the-glassifier" as const, src: img.texture, l: "Peptide texture" },
              ].map((c, i) => (
                <FadeUp key={c.t} delay={i * 100}>
                  <Link to="/treatments/$slug" params={{ slug: c.s }} className="block">
                    <Photo src={c.src} label={c.l} />
                    <div className="mt-5 flex items-baseline justify-between border-b border-foreground/25 pb-3">
                      <h4 className="eyebrow text-sm">{c.t}</h4>
                      <span className="eyebrow">{c.p}</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">{c.d}</p>
                    <span className="link-line mt-5 inline-block">Find out more</span>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>

          <IndexRow
            n="04"
            flip
            title="Skin Boosters & Regenerative Treatments"
            text="Advanced injectable treatments, designed to support skin quality by improving hydration, texture and overall skin appearance. Containing Hyaluronic acid and PDRN, these treatments will work to refresh tired, dull skin, address early signs of ageing or encourage a natural glow."
            slug="skin-boosters-rejuran"
            src={img.skin}
            label="Hydrated skin"
            last
          />
        </div>
      </section>

      {/* MEMBERSHIP BAND (espresso feature) */}
      <section className="bg-espresso text-ivory">
        <div className="grid md:grid-cols-2">
          <FadeUp className="section-pad flex flex-col justify-center px-5 md:px-16 lg:px-24">
            <Eyebrow num="04">Lumea Glow Membership</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl italic md:text-7xl">Your glow, ongoing.</h2>
            <p className="mt-6 max-w-lg opacity-90">
              Introducing the Lumea Glow Membership, a considered approach to your skin journey. Enjoy exclusive member
              pricing, thoughtful treatment perks and monthly contributions that accumulate as credit towards your
              favourite treatments.
            </p>
            <p className="eyebrow mt-6 opacity-80">$140 per month, credited to your treatment wallet</p>
            <Link to="/membership" className="btn btn-outline mt-8 self-start">Discover our membership</Link>
          </FadeUp>
          <Photo src={img.reception} label="Clinic reception" className="md:h-full" />
        </div>
      </section>

      {/* FIND MY TREATMENT */}
      <section className="section-pad">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <FadeUp className="md:col-span-4">
            <Eyebrow num="05">Find my treatment</Eyebrow>
            <h2 className="h-section mt-5">Unsure where to start?</h2>
            <p className="pull mt-3 text-muted-foreground">Let us guide you.</p>
          </FadeUp>
          <FadeUp className="flex flex-wrap content-start gap-3 md:col-span-8" delay={100}>
            {concerns.map((c) => (
              <Link key={c} to="/find-my-treatment" className="border border-foreground/30 px-5 py-3 font-serif text-xl transition-colors hover:bg-espresso hover:text-ivory">
                {c}
              </Link>
            ))}
          </FadeUp>
        </div>
      </section>

      <PricingBlock num="06" />
      <GetInTouch num="07" />
    </>
  );
}

function IndexRow({
  n, title, text, slug, src, label, flip, last,
}: {
  n: string; title: string; text: string;
  slug: "lines-wrinkles-volume" | "skin-rejuvenation-facials" | "skin-boosters-rejuran";
  src: string; label: string; flip?: boolean; last?: boolean;
}) {
  return (
    <div className={`grid items-center gap-10 py-14 md:grid-cols-12 ${last ? "" : "border-b border-foreground/25"}`}>
      <div className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
        <Link to="/treatments/$slug" params={{ slug }}><Photo src={src} label={label} /></Link>
      </div>
      <FadeUp className={`md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
        <p className="font-serif text-6xl text-taupe">{n}</p>
        <h3 className="mt-4 font-serif text-4xl md:text-5xl">{title}</h3>
        <p className="mt-5 max-w-lg text-muted-foreground">{text}</p>
        <Link to="/treatments/$slug" params={{ slug }} className="link-line mt-8 inline-block">Find out more</Link>
      </FadeUp>
    </div>
  );
}
