import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { treatments, type Slug } from "@/lib/site";
import { Disclaimer, Eyebrow, Ext, Faq, FadeUp, GetInTouch, Photo, PricingBlock } from "@/components/ui-kit";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const t = treatments[params.slug as Slug];
    if (!t) throw notFound();
    return { slug: t.slug };
  },
  head: ({ params }) => {
    const t = treatments[params.slug as Slug];
    const title = t ? `${t.name} | Lumea Glow, Gladesville` : "Treatment | Lumea Glow";
    const desc = t ? `${t.intro} RN-led treatment at Lumea Glow, Gladesville.` : "Treatments at Lumea Glow.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: TreatmentPage,
});

function TreatmentPage() {
  const { slug } = Route.useLoaderData();
  const t = treatments[slug];
  const rel = treatments[t.related.to];

  return (
    <>
      {/* HERO split */}
      <section className="pt-20">
        <div className="grid md:grid-cols-2">
          <FadeUp className="section-pad flex flex-col justify-center px-5 md:px-12 lg:px-20">
            <Eyebrow>Treatment</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">{t.title}</h1>
            {t.subline && <p className="pull mt-5 text-muted-foreground">{t.subline}</p>}
            {!t.subline && <p className="mt-6 max-w-md text-lg">{t.intro}</p>}
            <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center">
              <Ext href={t.button.href} className="btn btn-primary">{t.button.label}</Ext>
              {t.price && <span className="eyebrow">{t.price}</span>}
            </div>
          </FadeUp>
          <Photo src={t.heroImg} label={`${t.name} hero, 4:5`} eager />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <FadeUp className="md:col-span-7">
            <Eyebrow num="01">Overview</Eyebrow>
            <div className="mt-6 max-w-[640px] space-y-5">
              {t.body.map((p) => <p key={p}>{p}</p>)}
              {t.list && (
                <>
                  <p>{t.list.lead}</p>
                  <ol className="border-t border-foreground/25">
                    {t.list.items.map((x, i) => (
                      <li key={x} className="flex gap-6 border-b border-foreground/25 py-4">
                        <span className="font-serif text-2xl text-taupe">0{i + 1}</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          </FadeUp>
          <FadeUp className="md:col-span-4 md:col-start-9" delay={100}>
            <Photo src={t.sideImg} label="Supporting detail" />
            {t.pull && <p className="pull mt-8 border-l border-taupe pl-6">{t.pull}</p>}
          </FadeUp>
        </div>

        {t.columns && (
          <div className="wrap mt-16 grid gap-10 border-t border-foreground/25 pt-12 md:grid-cols-2">
            {t.columns.map((c, i) => (
              <FadeUp key={c.title} delay={i * 100}>
                <h3 className="font-serif text-3xl">{c.title}</h3>
                <ul className="mt-6 border-t border-foreground/25">
                  {c.items.map((x) => <li key={x} className="border-b border-foreground/25 py-3">{x}</li>)}
                </ul>
              </FadeUp>
            ))}
          </div>
        )}

        {t.feature && (
          <FadeUp className="wrap mt-16">
            <Link to="/treatments/$slug" params={{ slug: t.feature.to }} className="grid items-center gap-8 bg-taupe p-8 md:grid-cols-12 md:p-12">
              <p className="pull md:col-span-9">{t.feature.text}</p>
              <span className="link-line justify-self-start md:col-span-3 md:justify-self-end">Discover the LHALA Peel</span>
            </Link>
          </FadeUp>
        )}
      </section>

      {/* QUICK FACTS */}
      {t.facts && (
        <section className="border-y border-foreground/20 bg-stone">
          <ul className="wrap grid divide-y divide-foreground/20 md:grid-cols-3 md:divide-x md:divide-y-0">
            {t.facts.map((f) => (
              <li key={f.label} className="py-8 md:px-8 md:first:pl-0">
                <p className="eyebrow text-muted-foreground">{f.label}</p>
                <p className="mt-2 font-serif text-3xl">{f.value}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      <section className="section-pad">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <FadeUp className="md:col-span-4">
            <Eyebrow num="02">Questions</Eyebrow>
            <h2 className="h-section mt-5">Frequently asked.</h2>
          </FadeUp>
          <FadeUp className="md:col-span-8" delay={100}><Faq items={t.faqs} /></FadeUp>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {t.strip.map((s) => (
            <Photo key={s.label} src={s.src} label={s.label} className="w-[75vw] shrink-0 snap-start md:w-auto" />
          ))}
        </div>
      </section>

      <Disclaimer />

      {/* RELATED */}
      <Link to="/treatments/$slug" params={{ slug: rel.slug }} className="group block border-y border-foreground/20 bg-stone">
        <div className="wrap flex flex-col justify-between gap-4 py-12 md:flex-row md:items-center">
          <div>
            <Eyebrow>Related treatment</Eyebrow>
            <p className="mt-3 font-serif text-4xl md:text-5xl">{t.related.label}</p>
          </div>
          <span className="link-line self-start transition-transform group-hover:translate-x-2 md:self-auto">Explore {rel.name}</span>
        </div>
      </Link>

      <PricingBlock />
      <GetInTouch />
    </>
  );
}
