// Shared page-level helpers for the website kit (layout only — all UI comes from the design system bundle)
const KIT_BG = { white: 'var(--bg-page)', bone: 'var(--bg-bone)', peach: 'var(--bg-peach)', ink: 'var(--bg-ink)', orange: 'var(--bg-orange)', aubergine: 'var(--bg-after-dark)' };
function Section({ bg = 'white', tight = false, flush = false, children, style, innerStyle }) {
  const dark = bg === 'ink' || bg === 'aubergine';
  return (
    <section className={dark ? 'cs-dark' : undefined} style={{ position: 'relative', overflow: 'hidden', background: KIT_BG[bg], color: dark ? 'var(--text-inverse)' : 'var(--text-primary)', ...style }}>
      {flush ? children : <div className={'cs-container ' + (tight ? 'cs-section-tight' : 'cs-section')} style={{ position: 'relative', ...innerStyle }}>{children}</div>}
    </section>
  );
}
function Body({ children, tone = 'light', size = 'body', style }) {
  const lead = size === 'body-l';
  return <p style={{ margin: 0, fontFamily: lead ? 'var(--font-heading)' : 'var(--font-body)', fontWeight: 400, letterSpacing: lead ? 'var(--ls-body-l)' : 0, fontSize: 'var(--type-' + size + ')', lineHeight: 'var(--lh-' + size + ')', color: tone === 'dark' ? 'var(--text-inverse)' : 'var(--text-primary)', maxWidth: 'var(--measure-body)', textWrap: 'pretty', ...style }}>{children}</p>;
}
function Rule({ tone = 'light', weight = 1, style }) {
  return <div style={{ height: weight, background: tone === 'dark' ? 'var(--border-inverse-subtle)' : weight > 1 ? 'var(--cs-ink)' : 'var(--border-subtle)', ...style }}></div>;
}
function BioDialog({ person, onClose }) {
  const pic = React.useRef(null), box = React.useRef(null), bio = React.useRef(null);
  React.useEffect(() => { if (!person) return; const k = (e) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [person]);
  React.useLayoutEffect(() => {
    if (!person) return;
    const fit = () => {
      const p = pic.current, b = box.current, t = bio.current; if (!p || !b || !t) return;
      let s = 17; t.style.fontSize = s + 'px';
      if (b.offsetTop > p.offsetTop + 8) return;
      while (b.scrollHeight > p.offsetHeight + 1 && s > 12) { s -= 0.5; t.style.fontSize = s + 'px'; }
    };
    fit(); if (document.fonts) document.fonts.ready.then(fit);
    window.addEventListener('resize', fit); return () => window.removeEventListener('resize', fit);
  }, [person]);
  if (!person) return null;
  const D = window.CS_DATA;
  return (
    <div role="dialog" aria-modal="true" aria-label={person.name} onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(20,17,15,.72)', display: 'grid', placeItems: 'center', padding: 20 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(760px, 100%)', maxHeight: '90svh', overflow: 'auto', background: 'var(--bg-page)', color: 'var(--text-primary)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', alignItems: 'start', position: 'relative' }}>
        <div ref={pic} style={{ aspectRatio: '1/1', background: person.img ? 'url(' + D.img(person.img) + ') center/cover' : 'var(--bg-bone)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{!person.img && 'Portrait to follow'}</div>
        <div ref={box} style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 10, boxSizing: 'border-box' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--cs-orange)', fontWeight: 600, paddingRight: 36 }}>{person.role}</span>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--type-h3)', lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{person.name}</h2>
          <p ref={bio} style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.55, color: person.bio ? 'var(--text-primary)' : 'var(--text-secondary)', textWrap: 'pretty' }}>{person.bio || 'Biography to follow.'}</p>
        </div>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 8, right: 8, width: 44, height: 44, border: 'none', background: 'var(--bg-page)', cursor: 'pointer', fontSize: 26, lineHeight: 1, color: 'var(--text-primary)' }}>×</button>
      </div>
    </div>
  );
}
function TrusteeList({ people }) {
  const { Person } = window.CancerStagedDesignSystem_cc2fc3;
  const [open, setOpen] = React.useState(null);
  return <>{people.map((p) => p.static ? <Person key={p.name} variant="trustee" name={p.name} role={p.role} /> : <Person key={p.name} variant="trustee" name={p.name} role={p.role} onClick={() => setOpen(p)} />)}<BioDialog person={open} onClose={() => setOpen(null)} /></>;
}
Object.assign(window, { Section, Body, Rule, BioDialog, TrusteeList });
