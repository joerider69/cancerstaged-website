function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EvDS = window.CancerStagedDesignSystem_cc2fc3;
function EventsScreen({
  go
}) {
  const {
    Hero,
    Tabs,
    FeaturedEvent,
    SectionHeading,
    Button,
    Eyebrow,
    ProgrammeRow
  } = EvDS;
  const D = window.CS_DATA;
  const L = D.launch;
  const [tab, setTab] = React.useState('Upcoming');
  return React.createElement("div", null, React.createElement(Hero, {
    image: D.img(D.pages.events.image),
    height: "tall",
    eyebrow: D.pages.events.eyebrow,
    title: D.pages.events.title,
    accent: D.pages.events.accent,
    lead: D.pages.events.lead
  }), React.createElement(Section, {
    bg: "bone"
  }, React.createElement(FeaturedEvent, {
    image: D.img(L.img),
    eyebrow: "Launch night \xB7 On sale",
    day: L.day,
    month: L.month,
    year: L.year,
    weekday: L.weekday,
    title: L.title,
    venue: L.venue,
    location: L.location,
    charity: L.charity,
    description: "The first night of Season 01, at one of the UK's most iconic live music venues.",
    onCta: () => go('Event'),
    onSecondary: () => go('Event')
  })), React.createElement(Section, {
    bg: "ink"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end',
      marginBottom: 40
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Season 01 programme",
    title: "Nov 2026 - Apr 2027.",
    size: "h1",
    tone: "dark"
  })), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4'
    }
  }, React.createElement(Tabs, {
    tone: "dark",
    tabs: ['Upcoming', 'Past'],
    value: tab,
    onChange: setTab
  }))), tab === 'Upcoming' ? React.createElement(React.Fragment, null, React.createElement(ProgrammeRow, {
    day: L.day,
    month: L.month + ' ' + L.year,
    weekday: L.weekday,
    city: "London",
    venue: L.venue + ', Islington',
    charity: L.charity,
    status: "On sale",
    onClick: () => go('Event')
  }), D.route.map(r => React.createElement(ProgrammeRow, _extends({
    key: r.city
  }, r)))) : React.createElement("div", {
    style: {
      padding: '56px 0',
      borderTop: '1px solid var(--border-inverse-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h2)',
      letterSpacing: 'var(--ls-h2)',
      lineHeight: 'var(--lh-h2)'
    }
  }, "Our first night hasn't happened yet."), React.createElement(Body, {
    tone: "dark",
    style: {
      color: 'var(--text-inverse-secondary)'
    }
  }, "Highlights, photography and what each show raised will appear here after every date."), React.createElement(Button, {
    variant: "brand",
    arrow: true,
    onClick: () => setTab('Upcoming')
  }, "See upcoming events"))), React.createElement(Section, {
    bg: "aubergine",
    flush: true
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      columnGap: 0
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      minHeight: 520,
      background: 'url(' + D.img('be-part-of-it') + ') center 35%/cover'
    }
  }), React.createElement("div", {
    style: {
      gridColumn: '8 / span 5',
      padding: 'var(--section-y) var(--page-margin)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 28
    }
  }, React.createElement(Eyebrow, {
    tone: "dark",
    accent: true
  }, "Be part of it"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h2)',
      lineHeight: 'var(--lh-h2)',
      letterSpacing: 'var(--ls-h2)'
    }
  }, "From grassroots rooms to iconic stages, every show helps fund a fairer, stronger cancer charity sector."), React.createElement("div", null, React.createElement(Button, {
    variant: "secondary",
    tone: "dark",
    arrow: true,
    onClick: () => go('What We Do')
  }, "How it works"))))));
}
function EventDetailScreen({
  go
}) {
  const {
    Breadcrumb,
    DateBlock,
    EventMeta,
    Button,
    PartnerAttribution,
    SectionHeading,
    Eyebrow,
    FiftyFifty,
    ProgrammeRow,
    TextLink
  } = EvDS;
  const D = window.CS_DATA;
  const L = D.launch;
  return React.createElement("div", null, React.createElement("section", {
    className: "cs-dark",
    style: {
      position: 'relative',
      background: 'var(--bg-ink)',
      color: 'var(--text-inverse)'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      height: 'min(70svh, 640px)',
      background: 'url(' + D.img(L.img) + ') center/cover'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-bottom)'
    }
  }), React.createElement("div", {
    className: "cs-container",
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      paddingBottom: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement(Breadcrumb, {
    tone: "dark",
    items: ['Events', 'Launch Night'],
    onNavigate: () => go('Events')
  }), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: 0,
      fontWeight: 400,
      fontSize: 'var(--type-display-l)',
      lineHeight: 'var(--lh-display-l)',
      letterSpacing: 'var(--ls-display-l)',
      textTransform: 'uppercase',
      maxWidth: '12ch'
    }
  }, "Live at ", React.createElement("span", {
    style: {
      color: 'var(--cs-orange)'
    }
  }, "Union Chapel."))))), React.createElement(Section, {
    bg: "white"
  }, React.createElement("div", {
    className: "cs-grid cs-collapse-md"
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, React.createElement(Eyebrow, {
    accent: true
  }, "Launch night"), React.createElement(Body, {
    size: "body-l"
  }, "On Wednesday 11 November 2026, Cancer Staged stages its first show at Union Chapel in Islington, London - a landmark venue for live music."), React.createElement(Body, null, "It's the first date in a route that continues with our 2027 UK Showcase Tour across Bristol, Brighton, Nottingham, Sheffield, Leeds, Manchester and Liverpool. Every ticket contributes to a local cancer charity partner and to our national grants pool."), React.createElement("div", {
    style: {
      borderTop: 'var(--border-rule) solid var(--cs-ink)',
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h3)',
      letterSpacing: 'var(--ls-h3)'
    }
  }, "Line-up"), React.createElement(Body, {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Artists to be announced. Join the mailing list to hear first."))), React.createElement("aside", {
    style: {
      gridColumn: '9 / span 4',
      position: 'sticky',
      top: 'calc(var(--header-h-scrolled) + 24px)',
      alignSelf: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      paddingTop: 24,
      borderTop: 'var(--border-rule) solid var(--cs-orange)'
    }
  }, React.createElement(DateBlock, {
    day: L.day,
    month: L.month,
    year: L.year,
    weekday: L.weekday,
    size: "lg"
  }), React.createElement(EventMeta, {
    items: [L.venue, L.location]
  }), React.createElement(Button, {
    variant: "brand",
    size: "lg",
    fullWidth: true,
    arrow: true,
    href: L.ticketUrl || D.settings.ticketsUrl || undefined,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Get Tickets"), React.createElement(Button, {
    variant: "secondary",
    fullWidth: true
  }, "Add to calendar"), React.createElement(PartnerAttribution, {
    name: L.charity
  })))), React.createElement(Section, {
    bg: "orange",
    tight: true
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 4'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Where your ticket goes",
    title: "Half here. Half everywhere.",
    size: "h2",
    tone: "orange"
  })), React.createElement("div", {
    style: {
      gridColumn: '6 / span 7'
    }
  }, React.createElement(FiftyFifty, {
    left: "Local cancer charity",
    right: "National grants pool"
  })))), React.createElement(Section, {
    bg: "ink"
  }, React.createElement(SectionHeading, {
    eyebrow: "The route continues",
    title: "2027 UK Showcase Tour.",
    size: "h2",
    tone: "dark",
    style: {
      marginBottom: 40
    }
  }), D.route.map(r => React.createElement(ProgrammeRow, _extends({
    key: r.city
  }, r, {
    onClick: () => go('Events')
  })))), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    className: "cs-grid cs-collapse-md",
    style: {
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 6',
      aspectRatio: '3/2',
      background: 'url(' + D.img('story-venue') + ') center/cover'
    }
  }), React.createElement("div", {
    style: {
      gridColumn: '8 / span 5',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "The venue",
    title: "Why Union Chapel.",
    size: "h2"
  }), React.createElement(Body, null, "A former church turned one of London's most loved music venues, Union Chapel felt like the right place to bring the UK cancer community together for the first time."), React.createElement(TextLink, {
    onClick: () => openStory({
      id: 'union-chapel'
    }, go)
  }, "Read the story")))));
}
Object.assign(window, {
  EventsScreen,
  EventDetailScreen
});