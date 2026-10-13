import { Link } from "@tanstack/react-router";
import { ADDRESS, BOOK, EMAIL, INSTAGRAM, MAPS, PHONE, PHONE_HREF, navTreatments } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="wrap section-pad grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="logo text-3xl md:text-4xl">Lumea Glow</Link>
          <p className="pull mt-5 opacity-90">Personalised care. Considered treatments.</p>
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-8">Book a complimentary consultation</a>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow opacity-70">Clinic</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">{ADDRESS}</a></li>
            <li><a href={PHONE_HREF} className="hover:opacity-60">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:opacity-60">{EMAIL}</a></li>
            <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram @lumeaglow.clinic</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow opacity-70">Treatments</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {navTreatments.map((t) => (
              <li key={t.slug}><Link to="/treatments/$slug" params={{ slug: t.slug }} className="hover:opacity-60">{t.label}</Link></li>
            ))}
            <li><Link to="/membership" className="hover:opacity-60">Membership</Link></li>
            <li><Link to="/find-my-treatment" className="hover:opacity-60">Find My Treatment</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap flex flex-col gap-2 border-t border-ivory/20 py-6 text-xs opacity-70 md:flex-row md:justify-between">
        <span>Jessica Taylor RN (Division 1) NMW0002801599</span>
        <span>© {new Date().getFullYear()} Lumea Glow</span>
      </div>
    </footer>
  );
}
