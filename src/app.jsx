const { SiteHeader, SiteFooter } = window.CancerStagedDesignSystem_cc2fc3;
const ALIAS = { 'Find an Event': 'Events', 'Our Trustees': 'Transparency', 'Annual Report': 'Transparency', 'Partner With Us': 'Partners', 'For Brands': 'Support Us', 'Brand Partnerships': 'Support Us' };
const SCREENS = { Home: HomeScreen, About: AboutScreen, 'What We Do': WhatWeDoScreen, Events: EventsScreen, Event: EventDetailScreen, Stories: StoriesScreen, Story: StoryDetailScreen, Donate: DonateScreen, Transparency: TransparencyScreen, Partners: PartnersScreen, Contact: ContactScreen, 'Founding Circle': FoundingCircleScreen, 'Support Us': SupportUsScreen, Privacy: PrivacyScreen, Terms: TermsScreen, Accessibility: AccessibilityScreen };
const OVERLAY = ['Home', 'About', 'What We Do', 'Events', 'Event'];
const HAS_CTA = ['Home', 'About', 'What We Do'];
const NAV_ACTIVE = { Event: 'Events', Story: 'Stories', 'Founding Circle': 'Support Us' };
function App() {
  const read = () => { const q = new URLSearchParams(location.search).get('page'); return q && SCREENS[q] ? q : 'Home'; };
  const [page, setPage] = React.useState(read);
  React.useEffect(() => { const f = () => setPage(read()); window.addEventListener('popstate', f); return () => window.removeEventListener('popstate', f); }, []);
  React.useEffect(() => { document.title = (page === 'Home' ? 'Cancer Staged - Live music. Real impact.' : page + ' - Cancer Staged'); }, [page]);
  const go = (p) => { const t = SCREENS[ALIAS[p] || p] ? (ALIAS[p] || p) : 'Home'; history.pushState(null, '', t === 'Home' ? location.pathname : '?page=' + encodeURIComponent(t)); setPage(t); window.scrollTo(0, 0); };
  const Screen = SCREENS[page];
  const donate = page === 'Donate';
  return (<div key={page} style={{ animation: 'cs-page-in var(--dur-base) var(--ease-in-out)' }}>
    <SiteHeader basePath="" variant={OVERLAY.includes(page) ? 'overlay' : 'solid'} logoOnPhoto={page === 'Home' ? 'white' : 'orange'} minimal={donate} active={NAV_ACTIVE[page] || page} onNavigate={go} onDonate={() => go('Donate')} onFindEvent={() => go('Events')} style={OVERLAY.includes(page) ? null : { position: 'fixed', left: 0, right: 0 }} />
    <main><Screen go={go} /></main>
    {donate
      ? <footer className="cs-container" style={{ paddingBlock: 32, borderTop: '1px solid var(--border-subtle)', fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 13, color: 'var(--text-secondary)', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' }}><span>© 2026 The Cancer Staged Foundation · Registered charity No. 1209616</span><span style={{ display: 'flex', gap: 16 }}><a onClick={() => go('Privacy')} style={{ cursor: 'pointer' }}>Privacy</a><a onClick={() => go('Accessibility')} style={{ cursor: 'pointer' }}>Accessibility</a><a onClick={() => go('Terms')} style={{ cursor: 'pointer' }}>Terms</a></span></footer>
      : <SiteFooter basePath="" rings={!HAS_CTA.includes(page)} socialLinks={window.CS_DATA.social} onNavigate={go} />}
  </div>);
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
if (window.netlifyIdentity) window.netlifyIdentity.on('init', (u) => { if (!u) window.netlifyIdentity.on('login', () => { document.location.href = '/admin/'; }); });
