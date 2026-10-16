const {
  SiteHeader,
  SiteFooter
} = window.CancerStagedDesignSystem_cc2fc3;
const ALIAS = {
  'Find an Event': 'Events',
  'Our Trustees': 'Transparency',
  'Annual Report': 'Transparency',
  'Partner With Us': 'Partners',
  'For Brands': 'Support Us',
  'Brand Partnerships': 'Support Us'
};
const SCREENS = {
  Home: HomeScreen,
  About: AboutScreen,
  'What We Do': WhatWeDoScreen,
  Events: EventsScreen,
  Event: EventDetailScreen,
  Stories: StoriesScreen,
  Story: StoryDetailScreen,
  Donate: DonateScreen,
  Transparency: TransparencyScreen,
  Partners: PartnersScreen,
  Contact: ContactScreen,
  'Founding Circle': FoundingCircleScreen,
  'Support Us': SupportUsScreen,
  Privacy: PrivacyScreen,
  Terms: TermsScreen,
  Accessibility: AccessibilityScreen
};
const OVERLAY = ['Home', 'About', 'What We Do', 'Events', 'Event'];
const HAS_CTA = ['Home', 'About', 'What We Do'];
const NAV_ACTIVE = {
  Event: 'Events',
  Story: 'Stories',
  'Founding Circle': 'Support Us'
};
function App() {
  const read = () => {
    const q = new URLSearchParams(location.search).get('page');
    return q && SCREENS[q] ? q : 'Home';
  };
  const [page, setPage] = React.useState(read);
  React.useEffect(() => {
    const f = () => setPage(read());
    window.addEventListener('popstate', f);
    return () => window.removeEventListener('popstate', f);
  }, []);
  React.useEffect(() => {
    document.title = page === 'Home' ? 'Cancer Staged - Live music. Real impact.' : page + ' - Cancer Staged';
  }, [page]);
  const go = p => {
    const t = SCREENS[ALIAS[p] || p] ? ALIAS[p] || p : 'Home';
    history.pushState(null, '', t === 'Home' ? location.pathname : '?page=' + encodeURIComponent(t));
    setPage(t);
    window.scrollTo(0, 0);
  };
  const Screen = SCREENS[page];
  const donate = page === 'Donate';
  return React.createElement("div", {
    key: page,
    style: {
      animation: 'cs-page-in var(--dur-base) var(--ease-in-out)'
    }
  }, React.createElement(SiteHeader, {
    basePath: "",
    variant: OVERLAY.includes(page) ? 'overlay' : 'solid',
    logoOnPhoto: page === 'Home' ? 'white' : 'orange',
    minimal: donate,
    active: NAV_ACTIVE[page] || page,
    onNavigate: go,
    onDonate: () => go('Donate'),
    onFindEvent: () => go('Events'),
    style: OVERLAY.includes(page) ? null : {
      position: 'fixed',
      left: 0,
      right: 0
    }
  }), React.createElement("main", null, React.createElement(Screen, {
    go: go
  })), donate ? React.createElement("footer", {
    className: "cs-container",
    style: {
      paddingBlock: 32,
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 13,
      color: 'var(--text-secondary)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      justifyContent: 'space-between'
    }
  }, React.createElement("span", null, "\xA9 2026 The Cancer Staged Foundation \xB7 Registered charity No. 1209616"), React.createElement("span", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, React.createElement("a", {
    onClick: () => go('Privacy'),
    style: {
      cursor: 'pointer'
    }
  }, "Privacy"), React.createElement("a", {
    onClick: () => go('Accessibility'),
    style: {
      cursor: 'pointer'
    }
  }, "Accessibility"), React.createElement("a", {
    onClick: () => go('Terms'),
    style: {
      cursor: 'pointer'
    }
  }, "Terms"))) : React.createElement(SiteFooter, {
    basePath: "",
    rings: !HAS_CTA.includes(page),
    socialLinks: window.CS_DATA.social,
    onNavigate: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
if (window.netlifyIdentity) window.netlifyIdentity.on('init', u => {
  if (!u) window.netlifyIdentity.on('login', () => {
    document.location.href = '/admin/';
  });
});