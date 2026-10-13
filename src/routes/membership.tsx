import { createFileRoute } from "@tanstack/react-router";
import { MEMBERSHIP_URL, img } from "@/lib/site";
import { Eyebrow, Ext, FadeUp, GetInTouch, Photo } from "@/components/ui-kit";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership | Lumea Glow" },
      { name: "description", content: "The Lumea Glow Membership: $140 per month credited to your treatment wallet, with member pricing and considered perks." },
      { property: "og:title", content: "Lumea Glow Membership" },
      { property: "og:description", content: "Your skin journey deserves consistency. $140 per month, credited to your treatment wallet." },
    ],
  }),
  component: Membership,
});

const benefits = [
  "15% off microneedling, the glassifier, skin peels/facials, Rejuran eye and classic",
  "$50 off your first injectable treatment",
  "1 complimentary skin peel/facial per year",
  "Birthday skin treat",
  "50% off a microneedling or Glassifier add-on, one per year",
  "10% off skincare range",
];

function Membership() {
  return (
    <>
      <section className="bg-taupe pt-20">
        <div className="grid md:grid-cols-2">
          <FadeUp className="section-pad flex flex-col justify-center px-5 md:px-12 lg:px-20">
            <Eyebrow>Lumea Glow Membership</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">Your skin journey deserves consistency.</h1>
            <p className="mt-6 max-w-lg">
              The Lumea Glow Membership has been thoughtfully designed to make ongoing skin maintenance more rewarding,
              with exclusive member pricing, considered treatment perks and monthly contributions that accumulate as
              credit towards your favourite treatments.
            </p>
            <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center">
              <Ext href={MEMBERSHIP_URL} className="btn btn-primary">Join the membership</Ext>
              <span className="eyebrow">$140 per month</span>
            </div>
          </FadeUp>
          <Photo src={img.profile} label="Soft blurred portrait, 4:5" eager />
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <FadeUp>
            <Eyebrow num="01">How it works</Eyebrow>
            <h2 className="h-section mt-5 max-w-2xl">Three simple steps.</h2>
          </FadeUp>
          <ol className="mt-12 grid border-t border-foreground/25 md:grid-cols-3">
            {[
              "Join for $140 per month.",
              "Your monthly payment builds as credit in your treatment wallet.",
              "Use your credit towards your favourite treatments, with member pricing.",
            ].map((s, i) => (
              <FadeUp key={s} delay={i * 100} className="border-b border-foreground/25 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <p className="font-serif text-7xl text-taupe">0{i + 1}</p>
                <p className="mt-6 font-serif text-3xl leading-snug">{s}</p>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-stone section-pad">
        <div className="wrap">
          <FadeUp>
            <Eyebrow num="02">Member benefits</Eyebrow>
            <h2 className="h-section mt-5">Thoughtful perks, all year.</h2>
          </FadeUp>
          <div className="mt-12 grid border-l border-t border-foreground/25 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <FadeUp key={b} delay={(i % 3) * 80} className="border-b border-r border-foreground/25 p-8 md:p-10">
                <p className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-4 font-serif text-2xl leading-snug md:text-3xl">{b}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <FadeUp className="wrap">
          <p className="mx-auto max-w-4xl text-center font-serif text-3xl italic leading-snug md:text-5xl">
            Enjoy the flexibility to invest in your skin at your own pace, with added benefits along the way, all
            within a personalised approach to skin health and long-term maintenance.
          </p>
        </FadeUp>
      </section>

      <section className="bg-espresso text-ivory section-pad">
        <FadeUp className="wrap flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Join today</Eyebrow>
            <p className="mt-5 max-w-2xl font-serif text-3xl leading-snug md:text-4xl">
              The monthly payment of $140 will accumulate in your treatment wallet and be entirely used towards your
              treatments.
            </p>
            <p className="mt-4 text-sm opacity-80">For full terms and conditions, follow the purchase link below.</p>
          </div>
          <Ext href={MEMBERSHIP_URL} className="btn btn-outline shrink-0">Join the membership</Ext>
        </FadeUp>
      </section>

      <GetInTouch />
    </>
  );
}
