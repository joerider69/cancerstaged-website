const HomeDS = window.CancerStagedDesignSystem_cc2fc3;

function HomeScreen({ go }) {
  const { Hero, SectionHeading, Eyebrow, TextLink, Button, RingArt, Stat, FiftyFifty, FeaturedEvent, ProgrammeRow, TransparencyList, PartnerWall, StoryCard, CTABand, EventMeta } = HomeDS;
  const D = window.CS_DATA;
  const L = D.launch;
  const [lead, s2, s3, s4] = D.stories;
  return (
    <div>
      {/* 2 HERO */}
      <Hero image={D.img(D.pages.home.image)} focal="70% center" leadMatchTitle title={D.pages.home.title} accent={D.pages.home.accent} lead={D.pages.home.lead}
        primary="Find an Event" secondary="How It Works" onPrimary={() => go('Events')} onSecondary={() => go('What We Do')} meta={['Cancer Staged', 'UK', 'Est. 2026']} />

      {/* 3 MISSION - Bone + oversized rings */}
      <Section bg="bone">
        <RingArt color="orange" size={820} basePath="" style={{ position: 'absolute', right: -300, top: -120 }} />
        <div className="cs-grid" style={{ position: 'relative' }}>
          <div style={{ gridColumn: '1 / span 7', display: 'flex', flexDirection: 'column', gap: 32 }}>
            <SectionHeading eyebrow="What we're building" title="Music can do more." size="display-l" as="h2" />
            <Body size="body-l" style={{ maxWidth: 'var(--measure-lead)' }}>We stage unforgettable live music experiences that raise money for cancer charities across the UK.</Body>
          </div>
          <div style={{ gridColumn: '1 / span 5', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Body>A new model that brings people together, supports the wider cancer charity sector and strengthens the live music ecosystem around it. Whether you come for the music, the cause, or both, there is a place for you.</Body>
            <TextLink onClick={() => go('About')}>Our story</TextLink>
          </div>
        </div>
      </Section>

      {/* 4 CHALLENGE - Ink, no cards */}
      <Section bg="ink">
        <div className="cs-grid" style={{ rowGap: 64 }}>
          <div style={{ gridColumn: '1 / span 9' }}><SectionHeading eyebrow="The challenge" title="Two worlds" accent={<span style={{ whiteSpace: 'nowrap' }}>under pressure.</span>} caps size="display-l" tone="dark" /></div>
          <div style={{ gridColumn: '1 / span 5', borderTop: 'var(--border-rule) solid var(--cs-orange)', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow tone="dark">Live music</Eyebrow>
            <Stat value={170} suffix="+" accent tone="dark" label="UK towns" note="no longer see regular touring shows - and over half of local venues made no profit last year." />
          </div>
          <div style={{ gridColumn: '7 / span 5', borderTop: 'var(--border-rule) solid var(--cs-orange)', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow tone="dark">Cancer charities</Eyebrow>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--type-h1)', lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>Fragmented and <span style={{ color: 'var(--cs-orange)' }}>under-resourced.</span></div>
            <Body tone="dark" size="body-s" style={{ color: 'var(--text-inverse-secondary)', maxWidth: '34ch' }}>Exceptional charities are often left competing for the same donor attention, despite the scale of need.</Body>
          </div>
        </div>
      </Section>

      {/* 5 THE MODEL - Orange, 50/50 signature */}
      <Section bg="orange">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <Eyebrow>Our solution</Eyebrow>
          <FiftyFifty caption="Every show gives locally and builds something nationally." />
          <TextLink onClick={() => go('Transparency')}>How the money works</TextLink>
        </div>
      </Section>

      {/* 6 FEATURED EVENT */}
      <Section bg="white">
        <FeaturedEvent image={D.img(L.img)} eyebrow="Next up · Launch night" day={L.day} month={L.month} year={L.year} weekday={L.weekday} title={L.title} venue={L.venue} location={L.location}
          description="Our launch night at one of the UK's most iconic live music venues - the first date on a route that continues with our 2027 UK Showcase Tour." charity={L.charity}
          onCta={() => go('Event')} onSecondary={() => go('Event')} />
      </Section>

      {/* 7 PROGRAMME - Ink rows */}
      <Section bg="ink">
        <div className="cs-grid" style={{ alignItems: 'end', marginBottom: 48 }}>
          <div style={{ gridColumn: '1 / span 8' }}><SectionHeading eyebrow="The route continues" title="2027 UK Showcase Tour." size="h1" tone="dark" /></div>
          <div style={{ gridColumn: '9 / span 4', display: 'flex', justifyContent: 'flex-end' }}><EventMeta tone="dark" items={['Season 01', 'Feb - Apr 2027']} /></div>
        </div>
        {D.route.map((r) => <ProgrammeRow key={r.city} day={r.day} month={r.month} weekday={r.weekday} city={r.city} venue={r.venue} charity={r.charity} status={r.status} onClick={() => go('Events')} />)}
        <div style={{ borderTop: '1px solid var(--border-inverse-subtle)', paddingTop: 32 }}><TextLink tone="dark" onClick={() => go('Events')}>View all events</TextLink></div>
      </Section>

      {/* 8 FOUNDER STORY - Aubergine, half-bleed photo */}
      <Section bg="aubergine" flush>
        <div className="cs-grid" style={{ columnGap: 0 }}>
          <div style={{ gridColumn: '1 / span 6', minHeight: 640, background: 'url(' + D.img('founders-why') + ') center 20%/cover' }}></div>
          <div style={{ gridColumn: '7 / span 6', padding: 'var(--section-y) var(--page-margin)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
            <SectionHeading eyebrow="Why we started" title="Two second chances." accent="One mission." caps size="display-l" tone="dark" />
            <Body tone="dark" style={{ maxWidth: '44ch' }}>Our founders started this while living with the very thing we're fighting. Cancer Staged was born from two personal battles with life and death - and a belief in the power of music to bring people together.</Body>
            <div><Button variant="secondary" tone="dark" arrow onClick={() => go('About')}>Read our story</Button></div>
          </div>
        </div>
      </Section>

      {/* 9 TRANSPARENCY - Bone, big numbers, no cards */}
      <Section bg="bone">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          <SectionHeading eyebrow="Radical transparency" title="You should know" accent="where the money goes." caps size="display-l" />
          <TransparencyList items={[
            { value: '50 / 50', title: 'Split fairly', body: 'Net surplus from every show split equally between a named local charity and our national grants pool, which awards its first grants from Year 2.' },
            { value: '100%', title: 'Published', body: 'Grant criteria, award decisions and recipient outcomes reported openly, with an annual independent audit.' },
            { value: '0', title: 'Hidden cuts', body: 'An independent grants panel, published conflict-of-interest declarations and a trustee majority.' },
          ]} />
          <div><Button variant="secondary" arrow onClick={() => go('Transparency')}>See how the money works</Button></div>
        </div>
      </Section>

      {/* 10 PARTNERS - Peach */}
      <Section bg="peach">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <SectionHeading eyebrow="Together with" title={<span className="cs-nowrap">Local knowledge. National reach.</span>} size="h1" layout="stack" eyebrowAccent={false} lead="Every show is paired with a named local cancer charity, chosen for that city." />
        </div>
      </Section>

      {/* 10b BRANDS - Ink */}
      <Section bg="ink">
        <div className="cs-grid" style={{ alignItems: 'end', rowGap: 32 }}>
          <div style={{ gridColumn: '1 / span 7' }}><SectionHeading eyebrow="For brands" title="Partner with Cancer Staged." size="h1" tone="dark" lead="Sponsor a show, partner across the season, or support us another way." /></div>
          <div style={{ gridColumn: '9 / span 4' }}><Button size="lg" arrow onClick={() => go('Brand Partnerships')}>Explore partnerships</Button></div>
        </div>
      </Section>
      {/* 11 STORIES - magazine */}
      <Section bg="bone">
        <div className="cs-grid" style={{ alignItems: 'end', marginBottom: 56 }}>
          <div style={{ gridColumn: '1 / span 8' }}><SectionHeading eyebrow="Stories" title="More than the night itself." size="h1" /></div>
          <div style={{ gridColumn: '9 / span 4', display: 'flex', justifyContent: 'flex-end' }}><TextLink onClick={() => go('Stories')}>All stories</TextLink></div>
        </div>
        <div className="cs-grid cs-collapse-md">
          <div style={{ gridColumn: '1 / span 7' }}><StoryCard variant="lead" {...lead} image={D.img(lead.img)} onClick={() => openStory(lead, go)} /></div>
          <div style={{ gridColumn: '9 / span 4', display: 'flex', flexDirection: 'column', gap: 32 }}>
            <StoryCard {...s2} excerpt={null} image={D.img(s2.img)} onClick={() => openStory(s2, go)} />
            {s3 && <StoryCard variant="compact" {...s3} image={D.img(s3.img)} onClick={() => openStory(s3, go)} />}
            {s4 && <StoryCard variant="compact" {...s4} image={D.img(s4.img)} onClick={() => openStory(s4, go)} />}
          </div>
        </div>
      </Section>

      {/* 12 FINAL CTA */}
      <CTABand basePath="" title={D.pages.home.ctaTitle} onPrimary={() => go('Events')} onSecondary={() => go('Donate')} />
    </div>
  );
}
window.HomeScreen = HomeScreen;
