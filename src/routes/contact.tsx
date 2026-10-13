import { createFileRoute } from "@tanstack/react-router";
import { MAPS, img } from "@/lib/site";
import { ContactDetails, CtaBand, EnquiryForm, Eyebrow, Ext, FadeUp, Photo } from "@/components/ui-kit";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Lumea Glow, Gladesville" },
      { name: "description", content: "Visit Lumea Glow at 208 Victoria Road, Gladesville NSW 2111. Call 0408 463 126 or send an enquiry." },
      { property: "og:title", content: "Visit Lumea Glow" },
      { property: "og:description", content: "A warm, welcoming boutique clinic in Gladesville." },
    ],
  }),
  component: Contact,
});

const hours = [
  ["Monday", "To be confirmed"],
  ["Tuesday", "To be confirmed"],
  ["Wednesday", "To be confirmed"],
  ["Thursday", "To be confirmed"],
  ["Friday", "To be confirmed"],
  ["Saturday", "To be confirmed"],
  ["Sunday", "Closed"],
];

function Contact() {
  return (
    <>
      <section className="pt-32 md:pt-40">
        <FadeUp className="wrap pb-14 md:pb-20">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="display mt-6">Visit Lumea Glow</h1>
          <p className="pull mt-5 text-muted-foreground">A warm, welcoming boutique clinic in Gladesville.</p>
        </FadeUp>
      </section>

      <section className="border-t border-foreground/20 section-pad">
        <div className="wrap grid gap-14 md:grid-cols-2 md:gap-20">
          <FadeUp>
            <ContactDetails />
            <div className="mt-12">
              <p className="eyebrow text-muted-foreground">Opening hours</p>
              <ul className="mt-4 border-t border-foreground/25">
                {hours.map(([d, h]) => (
                  <li key={d} className="flex justify-between border-b border-foreground/25 py-3 text-sm">
                    <span>{d}</span><span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <Eyebrow>Send an enquiry</Eyebrow>
            <div className="mt-8"><EnquiryForm /></div>
          </FadeUp>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <Photo src={img.clinic} label="Clinic interior" />
        <Photo src={img.facial} label="Treatment room" />
        <Photo src={img.reception} label="Reception" />
      </section>

      <section className="relative bg-stone" style={{ aspectRatio: "21/9", minHeight: 320 }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
          <p className="eyebrow text-muted-foreground">Map placeholder</p>
          <p className="font-serif text-3xl">208 Victoria Road, Gladesville</p>
          <Ext href={MAPS} className="link-line">Open in Google Maps</Ext>
        </div>
      </section>

      <CtaBand title="We look forward to welcoming you." />
    </>
  );
}
