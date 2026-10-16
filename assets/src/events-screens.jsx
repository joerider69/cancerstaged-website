const EvDS = window.CancerStagedDesignSystem_cc2fc3;

function EventsScreen({ go }) {
  const { Hero, Tabs, FeaturedEvent, SectionHeading, Button, Eyebrow, ProgrammeRow } = EvDS;
  const D = window.CS_DATA;
  const L = D.launch;
  const [tab, setTab] = React.useState('Upcoming');
  return (
    <div>
      <Hero image={D.img(D.pages.events.image)} height="tall" eyebrow={D.pages.events.eyebrow} title={D.pages.events.title} accent={D.pages.events.accent} lead={D.pages.events.lead} />
      <Section bg="bone">
        <FeaturedEvent image={D.img(L.img)} eyebrow="Launch night · On sale" day={L.day} month={L.month} year={L.year} weekday={L.weekday} title={L.title} venue={L.venue} location={L.location} charity={L.charity}
          description="The first night of Season 01, at one of the UK's most iconic live music venues." onCta={() => go('Event')} onSecondary={() => go('Event')} />
      </Section>
      <Section bg="ink">
        <div className="cs-grid" style={{ alignItems: 'end', marginBottom: 40 }}>
          <div style={{ gridColumn: '1 / span 7' }}><SectionHeading eyebrow="Season 01 programme" title="Dec 2026 - May 2027." size="h1" tone="dark" /></div>
          <div style={{ gridColumn: '9 / span 4' }}><Tabs tone="dark" tabs={['Upcoming', 'Past']} value={tab} onChange={setTab} /></div>
        </div>
        {tab === 'Upcoming' ? <>
          <ProgrammeRow day={L.day} month={L.month + ' ' + L.year} weekday={L.weekday} city="London" venue={L.venue + ', Islington'} charity={L.charity} status="On sale" onClick={() => go('Event')} />
          {D.route.map((r) => <ProgrammeRow key={r.city} {...r} />)}
        </> : (
          <div style={{ padding: '56px 0', borderTop: '1px solid var(--border-inverse-subtle)', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--type-h2)', letterSpacing: 'var(--ls-h2)', lineHeight: 'var(--lh-h2)' }}>Our first night hasn't happened yet.</div>
            <Body tone="dark" style={{ color: 'var(--text-inverse-secondary)' }}>Highlights, photography and what each show raised will appear here after every date.</Body>
            <Button variant="brand" arrow onClick={() => setTab('Upcoming')}>See upcoming events</Button>
          </div>
        )}
      </Section>
      <Section bg="aubergine" flush>
        <div className="cs-grid" style={{ columnGap: 0 }}>
          <div style={{ gridColumn: '1 / span 7', minHeight: 520, background: 'url(' + D.img('be-part-of-it') + ') center 35%/cover' }}></div>
          <div style={{ gridColumn: '8 / span 5', padding: 'var(--section-y) var(--page-margin)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
            <Eyebrow tone="dark" accent>Be part of it</Eyebrow>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--type-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>From grassroots rooms to iconic stages, every show helps fund a fairer, stronger cancer charity sector.</div>
            <div><Button variant="secondary" tone="dark" arrow onClick={() => go('What We Do')}>How it works</Button></div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function EventDetailScreen({ go }) {
  const { Breadcrumb, DateBlock, EventMeta, Button, PartnerAttribution, SectionHeading, Eyebrow, FiftyFifty, ProgrammeRow, TextLink } = EvDS;
  const D = window.CS_DATA;
  const L = D.launch;
  return (
    <div>
      <section className="cs-dark" style={{ position: 'relative', background: 'var(--bg-ink)', color: 'var(--text-inverse)' }}>
        <div style={{ position: 'relative', height: 'min(70svh, 640px)', background: 'url(' + D.img(L.img) + ') center/cover' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-bottom)' }}></div>
          <div className="cs-container" style={{ position: 'absolute', inset: 'auto 0 0 0', paddingBottom: 48, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Breadcrumb tone="dark" items={['Events', 'Launch Night']} onNavigate={() => go('Events')} />
            <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontWeight: 400, fontSize: 'var(--type-display-l)', lineHeight: 'var(--lh-display-l)', letterSpacing: 'var(--ls-display-l)', textTransform: 'uppercase', maxWidth: '12ch' }}>Live at <span style={{ color: 'var(--cs-orange)' }}>Union Chapel.</span></h1>
          </div>
        </div>
      </section>
      <Section bg="white">
        <div className="cs-grid cs-collapse-md">
          <div style={{ gridColumn: '1 / span 7', display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Eyebrow accent>Launch night</Eyebrow>
            <Body size="body-l">On Tuesday 1 December 2026, Cancer Staged stages its first show at Union Chapel in Islington, London - a landmark venue for live music.</Body>
            <Body>It's the first date in a route that continues with our 2027 UK Showcase Tour across Bristol, Brighton, Cardiff, Nottingham, Sheffield, Leeds, Manchester and Liverpool. Every ticket contributes to a local cancer charity partner and to our national grants pool.</Body>
            <div style={{ borderTop: 'var(--border-rule) solid var(--cs-ink)', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--type-h3)', letterSpacing: 'var(--ls-h3)' }}>Line-up</div>
              <Body style={{ color: 'var(--text-secondary)' }}>Artists to be announced. Join the mailing list to hear first.</Body>
            </div>
          </div>
          <aside style={{ gridColumn: '9 / span 4', position: 'sticky', top: 'calc(var(--header-h-scrolled) + 24px)', alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 24, borderTop: 'var(--border-rule) solid var(--cs-orange)' }}>
            <DateBlock day={L.day} month={L.month} year={L.year} weekday={L.weekday} size="lg" />
            <EventMeta items={[L.venue, L.location]} />
            <Button variant="brand" size="lg" fullWidth arrow href={L.ticketUrl || D.settings.ticketsUrl || undefined} target="_blank" rel="noopener noreferrer">Get Tickets</Button>
            <Button variant="secondary" fullWidth>Add to calendar</Button>
            <PartnerAttribution name={L.charity} />
          </aside>
        </div>
      </Section>
      <Section bg="orange" tight>
        <div className="cs-grid" style={{ alignItems: 'center' }}>
          <div style={{ gridColumn: '1 / span 4' }}><SectionHeading eyebrow="Where your ticket goes" title="Half here. Half everywhere." size="h2" tone="orange" /></div>
          <div style={{ gridColumn: '6 / span 7' }}><FiftyFifty left="Local cancer charity" right="National grants pool" /></div>
        </div>
      </Section>
      <Section bg="ink">
        <SectionHeading eyebrow="The route continues" title="2027 UK Showcase Tour." size="h2" tone="dark" style={{ marginBottom: 40 }} />
        {D.route.map((r) => <ProgrammeRow key={r.city} {...r} onClick={() => go('Events')} />)}
      </Section>
      <Section bg="bone">
        <div className="cs-grid cs-collapse-md" style={{ alignItems: 'center' }}>
          <div style={{ gridColumn: '1 / span 6', aspectRatio: '3/2', background: 'url(' + D.img('story-venue') + ') center/cover' }}></div>
          <div style={{ gridColumn: '8 / span 5', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <SectionHeading eyebrow="The venue" title="Why Union Chapel." size="h2" />
            <Body>A former church turned one of London's most loved music venues, Union Chapel felt like the right place to bring the UK cancer community together for the first time.</Body>
            <TextLink onClick={() => openStory({ id: 'union-chapel' }, go)}>Read the story</TextLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { EventsScreen, EventDetailScreen });
