const StDS = window.CancerStagedDesignSystem_cc2fc3;

function StoriesScreen({ go }) {
  const { SectionHeading, Tabs, StoryCard, Pagination, NewsletterInput, Eyebrow } = StDS;
  const D = window.CS_DATA;
  const [cat, setCat] = React.useState('All');
  const [page, setPage] = React.useState(1);
  const list = D.stories.filter((s) => cat === 'All' || s.category === cat);
  const [lead, ...rest] = list;
  return (
    <div>
      <Section bg="white" innerStyle={{ paddingTop: 'calc(var(--header-h) + var(--space-9))', paddingBottom: 48 }}>
        <div className="cs-grid" style={{ alignItems: 'end' }}>
          <div style={{ gridColumn: '1 / span 8' }}><SectionHeading eyebrow="News & stories" title="More than the night itself." size="display-l" as="h1" /></div>
          <div style={{ gridColumn: '9 / span 4' }}><Body size="body-s" style={{ color: 'var(--text-secondary)' }}>We're a brand new charity, and our first stories are just getting started.</Body></div>
        </div>
        <Tabs tabs={['All', 'Venues', 'People']} value={cat} onChange={setCat} style={{ marginTop: 56 }} />
      </Section>
      <Section bg="white" innerStyle={{ paddingTop: 0 }}>
        {lead && <div className="cs-grid cs-collapse-md" style={{ alignItems: 'end', paddingBottom: 64, borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ gridColumn: '1 / span 12' }}><StoryCard variant="lead" {...lead} image={D.img(lead.img)} onClick={() => openStory(lead, go)} /></div>
        </div>}
        <div className="cs-grid" style={{ paddingTop: 64, rowGap: 64 }}>
          {rest.map((s) => <div key={s.title} style={{ gridColumn: 'span 4' }}><StoryCard {...s} image={D.img(s.img)} onClick={() => openStory(s, go)} /></div>)}
        </div>
        {list.length === 0 && <Body style={{ paddingBlock: 48, color: 'var(--text-secondary)' }}>No stories in this category yet.</Body>}
        <div style={{ marginTop: 80, display: 'flex', justifyContent: 'center' }}><Pagination page={page} total={3} onChange={setPage} /></div>
      </Section>
      <Section bg="peach" tight>
        <div className="cs-grid" style={{ alignItems: 'center' }}>
          <div style={{ gridColumn: '1 / span 6' }}><SectionHeading eyebrow="Newsletter" eyebrowAccent={false} title="Get stories like this in your inbox." size="h2" /></div>
          <div style={{ gridColumn: '8 / span 5' }}><NewsletterInput tone="light" /></div>
        </div>
      </Section>
    </div>
  );
}

function StoryDetailScreen({ go }) {
  const { Breadcrumb, Quote, StoryCard, PartnerAttribution, TextLink, RingArt, Eyebrow, Button } = StDS;
  const D = window.CS_DATA;
  const [sid, setSid] = React.useState(() => { try { return localStorage.getItem('cs-kit-story'); } catch (e) { return null; } });
  const s = D.stories.find((x) => x.id === sid) || D.stories[0];
  const others = D.stories.filter((x) => x !== s).slice(0, 3);
  return (
    <article>
      <Section bg="white" innerStyle={{ paddingTop: 'calc(var(--header-h) + var(--space-8))', paddingBottom: 56 }}>
        <div className="cs-grid">
          <div style={{ gridColumn: '1 / span 10', display: 'flex', flexDirection: 'column', gap: 28 }}>
            <Breadcrumb items={['Stories', s.category]} onNavigate={() => go('Stories')} />
            <h1 style={{ fontFamily: 'var(--font-heading)', margin: 0, fontWeight: 600, fontSize: 'var(--type-h1)', lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)', maxWidth: '14ch' }}>{s.title}</h1>
            <Body size="body-l" style={{ maxWidth: 'var(--measure-lead)' }}>{s.excerpt}</Body>
            <div style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-heading)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}><span>{s.date}</span><span>/</span><span>{s.readTime} read</span></div>
          </div>
        </div>
      </Section>
      <div style={{ aspectRatio: '21/9', maxHeight: 640, width: '100%', background: 'url(' + D.img(s.hero || 'union-chapel-v2') + ') ' + (s.heroPos || 'center 30%') + '/cover' }}></div>
      {s.dialogue ? <>
      <Section bg="white">
        <div className="cs-grid">
          <div style={{ gridColumn: '3 / span 7', display: 'flex', flexDirection: 'column', gap: 36 }}>
            {(s.dialogue || []).map(([who, text], i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {(i === 0 || s.dialogue[i - 1][0] !== who) && <Eyebrow accent>{who}</Eyebrow>}
                <Body size={i === 0 ? 'body-l' : 'body'}>{text}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {s.pull && <Section bg="aubergine" tight>
        <RingArt color="orange" size={520} basePath="" className="cs-desk" style={{ position: 'absolute', right: -220, top: -80 }} />
        <div className="cs-grid" style={{ position: 'relative', zIndex: 1 }}><div style={{ gridColumn: '1 / span 8' }}><Quote tone="dark" size="lg" name={s.pull[0]} role="Co-founder">{s.pull[1]}</Quote></div></div>
      </Section>}
      {s.bios && <Section bg="bone">
        <div className="cs-grid" style={{ rowGap: 48 }}>
          <div style={{ gridColumn: '1 / -1' }}><Eyebrow accent>About the founders</Eyebrow></div>
          {s.bios.map(([n, r, img, bio]) => (
            <div key={n} className="cs-grid" style={{ gridColumn: 'span 6', gridTemplateColumns: 'minmax(0,2fr) minmax(0,3fr)', columnGap: 24, alignItems: 'start' }}>
              <div style={{ aspectRatio: '1/1', background: 'url(' + D.img(img) + ') center/cover' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--type-h3)', lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{n}</div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{r}</span>
                <Body size="body-s">{bio}</Body>
              </div>
            </div>
          ))}
        </div>
      </Section>}
      <Section bg="white" tight>
        <div className="cs-grid"><div style={{ gridColumn: '3 / span 7', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Button variant="brand" arrow onClick={() => go('Events')}>Find an Event</Button>
          <Button variant="secondary" onClick={() => go('Donate')}>Donate</Button>
        </div></div>
      </Section>
      </> : <>
      <Section bg="white">
        <div className="cs-grid">
          <div style={{ gridColumn: '3 / span 7', display: 'flex', flexDirection: 'column', gap: 28 }}>
            {(s.body || []).map((p, i) => <Body key={i} size={i === 0 ? 'body-l' : 'body'}>{p}</Body>)}
          </div>
        </div>
      </Section>
      {s.quote && <Section bg="orange" tight>
        <RingArt color="white" size={520} basePath="" className="cs-desk" style={{ position: 'absolute', right: -220, top: -80 }} />
        <div className="cs-grid" style={{ position: 'relative', zIndex: 1 }}><div style={{ gridColumn: '1 / span 8' }}><Quote tone="orange" size="lg">{s.quote}</Quote></div></div>
      </Section>}
      <Section bg="white">
        <div className="cs-grid">
          <div style={{ gridColumn: '3 / span 7', display: 'flex', flexDirection: 'column', gap: 28 }}>
            {s.after && <Body>{s.after}</Body>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Button variant="brand" arrow onClick={() => go('Events')}>Find an Event</Button>
              <Button variant="secondary" onClick={() => go('Donate')}>Donate</Button>
            </div>
          </div>
        </div>
      </Section>
      </>}
      <Section bg="bone">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40 }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--type-h2)', letterSpacing: 'var(--ls-h2)' }}>Keep reading</div>
          <TextLink onClick={() => go('Stories')}>All stories</TextLink>
        </div>
        <div className="cs-grid">
          {others.map((x) => <div key={x.title} style={{ gridColumn: 'span 4' }}><StoryCard variant="compact" {...x} image={D.img(x.img)} onClick={() => { try { localStorage.setItem('cs-kit-story', x.id); } catch (e) {} setSid(x.id); window.scrollTo(0, 0); }} /></div>)}
        </div>
      </Section>
    </article>
  );
}
Object.assign(window, { StoriesScreen, StoryDetailScreen });
