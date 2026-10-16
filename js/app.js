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
const SEO_DESC = {
  Home: 'Cancer Staged is a UK charity staging live music to fund UK cancer charities. Loud for a reason.',
  About: 'How two second chances became Cancer Staged, and the people and trustees behind it.',
  'What We Do': 'We raise funds through live music and distribute them across the sector, so UK cancer charities can gain.',
  Events: 'Launch night at Union Chapel, London, then the 2027 UK Showcase Tour. Every show supports UK cancer charities.',
  Event: 'Cancer Staged launch night at Union Chapel, Islington, London.',
  Stories: 'Stories from the people, venues and nights behind Cancer Staged.',
  'Support Us': 'Donate, come to a show, give in memory, leave a legacy or partner with Cancer Staged as a business or brand.',
  Donate: 'Give to Cancer Staged and help live music fund UK cancer charities.',
  'Founding Circle': 'Founding gifts from £10K that build the capacity of Cancer Staged.',
  Transparency: 'Where the money goes: every show reported, independent grant-making and annual audit.',
  Partners: 'The venues, charities, sponsors and brands who help make Cancer Staged nights happen.',
  Contact: 'Get in touch with Cancer Staged: contact@cancerstaged.org.'
};
const SITE = 'https://cancerstaged.org';
function setMeta(sel, attr, val) {
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement(sel.startsWith('link') ? 'link' : 'meta');
    const m = sel.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
    if (m) el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, val);
}
(function eventSchema() {
  const L = (window.CS_DATA || {}).launch;
  if (!L) return;
  const M = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };
  const mm = M[(L.month || '').slice(0, 3)];
  const dd = String(L.day || '').padStart(2, '0');
  if (!mm || !/^\d{2}$/.test(dd)) return;
  const ev = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: 'Cancer Staged: ' + (L.title || 'Launch night'),
    startDate: L.year + '-' + mm + '-' + dd + 'T' + (L.doorsTime || '18:30') + ':00+00:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    description: 'Cancer Staged launch night. Net surplus is shared between a London cancer charity partner and our national grants pool for UK cancer charities.',
    image: [SITE + '/assets/imagery/union-chapel-v2.png'],
    url: SITE + '/?page=Event',
    location: {
      '@type': 'Place',
      name: L.venue || 'Union Chapel',
      address: {
        '@type': 'PostalAddress',
        streetAddress: L.address || 'Compton Terrace',
        addressLocality: 'London',
        postalCode: L.postcode || 'N1 2UN',
        addressCountry: 'GB'
      }
    },
    organizer: {
      '@type': 'NGO',
      name: 'Cancer Staged',
      url: SITE + '/'
    }
  };
  if (L.ticketUrl) ev.offers = {
    '@type': 'Offer',
    url: L.ticketUrl,
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP'
  };
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(ev);
  document.head.appendChild(s);
})();
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
    const title = page === 'Home' ? 'Cancer Staged - Live music. Real impact.' : page + ' - Cancer Staged';
    const href = page === 'Home' ? SITE + '/' : SITE + '/?page=' + encodeURIComponent(page);
    const d = SEO_DESC[page] || SEO_DESC.Home;
    document.title = title;
    setMeta('link[rel="canonical"]', 'href', href);
    setMeta('meta[name="description"]', 'content', d);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', d);
    setMeta('meta[property="og:url"]', 'content', href);
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