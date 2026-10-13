import { createFileRoute, Link } from "@tanstack/react-router";
import { img, treatments, type Slug } from "@/lib/site";
import { CtaBand, Eyebrow, Ext, FadeUp, Photo } from "@/components/ui-kit";

export const Route = createFileRoute("/find-my-treatment")({
  head: () => ({
    meta: [
      { title: "Find My Treatment | Lumea Glow" },
      { name: "description", content: "Choose what you'd like to improve and we'll suggest where to begin. Complimentary consultations in Gladesville." },
      { property: "og:title", content: "Find My Treatment | Lumea Glow" },
      { property: "og:description", content: "Unsure where to start? Let us guide you." },
    ],
  }),
  component: Finder,
});

const groups: {
  title: string; src: string; label: string; book: string; explore: Slug[];
  items: { name: string; line: string }[];
}[] = [
  {
    title: "Lines & Volume",
    src: img.profile, label: "Soft profile portrait",
    book: "https://app.acuityscheduling.com/schedule/1aaae92a/category/Cosmetic%2520Consultations%252FWrinkle%2520%2526%2520Volume%2520Treatments",
    explore: ["lines-wrinkles-volume"],
    items: [
      { name: "Lines & Wrinkles", line: "Softening the look of expression lines with a natural approach." },
      { name: "Masseter Muscle Concerns", line: "Considered care for jaw clenching and facial balance." },
      { name: "Facial Volume & Definition", line: "Supporting proportion and harmony of your features." },
    ],
  },
  {
    title: "Texture & Radiance",
    src: img.skin, label: "Skin texture close-up",
    book: "https://app.acuityscheduling.com/schedule/1aaae92a/category/Skin%2520Boosters%2520%2526%2520Rejuran%2520",
    explore: ["microneedling", "the-glassifier", "skin-boosters-rejuran"],
    items: [
      { name: "Skin Texture & Pores", line: "Refining the look of texture and the appearance of pores." },
      { name: "Dehydrated & Dull Skin", line: "Restoring hydration and a fresher looking complexion." },
    ],
  },
  {
    title: "Clarity & Tone",
    src: img.facial, label: "Facial in treatment",
    book: "https://app.acuityscheduling.com/schedule/1aaae92a/category/Skin%2520Consultation",
    explore: ["skin-rejuvenation-facials", "lhala-peel"],
    items: [
      { name: "Acne & Congestion", line: "Calming, clarifying care tailored to your skin on the day." },
      { name: "Pigmentation & Uneven Tone", line: "A plan towards a more even looking complexion." },
      { name: "Overall Skin Quality", line: "Long term skin health, built through consistent care." },
    ],
  },
];

function Finder() {
  return (
    <>
      <section className="pt-20">
        <div className="grid md:grid-cols-2">
          <FadeUp className="section-pad flex flex-col justify-center px-5 md:px-12 lg:px-20">
            <Eyebrow>Unsure where to start?</Eyebrow>
            <h1 className="display mt-6">Let us guide you.</h1>
            <p className="mt-6 max-w-md">
              Choose what you'd like to improve. We'll suggest where to begin, and Jess will tailor everything at your
              complimentary consultation.
            </p>
          </FadeUp>
          <Photo src={img.hero} label="Soft-focus portrait, 4:5" eager />
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.title} className={gi % 2 ? "bg-stone section-pad" : "section-pad"}>
          <div className="wrap grid gap-10 md:grid-cols-12">
            <FadeUp className={`md:col-span-4 ${gi % 2 ? "md:order-2 md:col-start-9" : ""}`}>
              <Photo src={g.src} label={g.label} />
            </FadeUp>
            <div className={`md:col-span-7 ${gi % 2 ? "md:order-1 md:col-start-1" : "md:col-start-6"}`}>
              <FadeUp>
                <Eyebrow num={`0${gi + 1}`}>Concern group</Eyebrow>
                <h2 className="h-section mt-5">{g.title}</h2>
              </FadeUp>
              <div className="mt-8 border-t border-foreground/25">
                {g.items.map((it, i) => (
                  <FadeUp key={it.name} delay={i * 80} className="border-b border-foreground/25 py-7">
                    <h3 className="font-serif text-3xl">{it.name}</h3>
                    <p className="mt-2 text-muted-foreground">{it.line}</p>
                    <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                      {g.explore.map((s) => (
                        <Link key={s} to="/treatments/$slug" params={{ slug: s }} className="link-line">
                          Explore {treatments[s].name}
                        </Link>
                      ))}
                      <Ext href={g.book} className="link-line">Book a consultation</Ext>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-pad">
        <div className="wrap">
          <FadeUp>
            <Eyebrow num="04">How your consultation works</Eyebrow>
            <h2 className="h-section mt-5">Honest, unhurried, personal.</h2>
          </FadeUp>
          <ol className="mt-12 grid border-t border-foreground/25 md:grid-cols-3">
            {[
              "Book a complimentary consultation.",
              "A facial assessment and an honest conversation about your goals.",
              "A personalised plan, with no pressure.",
            ].map((s, i) => (
              <FadeUp key={s} delay={i * 100} className="border-b border-foreground/25 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <p className="font-serif text-6xl text-taupe">0{i + 1}</p>
                <p className="mt-5 font-serif text-3xl leading-snug">{s}</p>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      <Link to="/membership" className="group block border-y border-foreground/20">
        <div className="wrap flex flex-col justify-between gap-4 py-10 md:flex-row md:items-center">
          <p className="font-serif text-3xl italic md:text-4xl">Your glow, ongoing. Discover the Lumea Glow Membership.</p>
          <span className="link-line self-start md:self-auto">Explore membership</span>
        </div>
      </Link>

      <CtaBand title="Still unsure? Book a complimentary consultation." label="Book a consultation" />
    </>
  );
}
