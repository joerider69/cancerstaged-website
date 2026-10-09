function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HomeDS = window.CancerStagedDesignSystem_cc2fc3;
function HomeScreen({
  go
}) {
  const {
    Hero,
    SectionHeading,
    Eyebrow,
    TextLink,
    Button,
    RingArt,
    Stat,
    FiftyFifty,
    FeaturedEvent,
    ProgrammeRow,
    TransparencyList,
    PartnerWall,
    StoryCard,
    CTABand,
    EventMeta
  } = HomeDS;
  const D = window.CS_DATA;
  const L = D.launch;
  const [lead, s2, s3, s4] = D.stories;
  return React.createElement("div", null, React.createElement(Hero, {
    image: D.img(D.pages.home.image),
    focal: "70% center",
    leadMatchTitle: true,
    title: D.pages.home.title,
    accent: D.pages.home.accent,
    lead: D.pages.home.lead,
    primary: "Find an Event",
    secondary: "How It Works",
    onPrimary: () => go('Events'),
    onSecondary: () => go('What We Do'),
    meta: ['Cancer Staged', 'UK', 'Est. 2026']
  }), React.createElement(Section, {
    bg: "bone"
  }, React.createElement(RingArt, {
    color: "orange",
    size: 820,
    basePath: "",
    style: {
      position: 'absolute',
      right: -300,
      top: -120
    }
  }), React.createElement("div", {
    className: "cs-grid",
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "What we're building",
    title: "Music can do more.",
    size: "display-l",
    as: "h2"
  }), React.createElement(Body, {
    size: "body-l",
    style: {
      maxWidth: 'var(--measure-lead)'
    }
  }, "We stage unforgettable live music experiences that raise money for cancer charities across the UK.")), React.createElement("div", {
    style: {
      gridColumn: '1 / span 5',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement(Body, null, "A new model that brings people together, supports the wider cancer charity sector and strengthens the live music ecosystem around it. Whether you come for the music, the cause, or both, there is a place for you."), React.createElement(TextLink, {
    onClick: () => go('About')
  }, "Our story")))), React.createElement(Section, {
    bg: "ink"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      rowGap: 64
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 9'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "The challenge",
    title: "Two worlds",
    accent: React.createElement("span", {
      style: {
        whiteSpace: 'nowrap'
      }
    }, "under pressure."),
    caps: true,
    size: "display-l",
    tone: "dark"
  })), React.createElement("div", {
    style: {
      gridColumn: '1 / span 5',
      borderTop: 'var(--border-rule) solid var(--cs-orange)',
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement(Eyebrow, {
    tone: "dark"
  }, "Live music"), React.createElement(Stat, {
    value: 170,
    suffix: "+",
    accent: true,
    tone: "dark",
    label: "UK towns",
    note: "no longer see regular touring shows - and over half of local venues made no profit last year."
  })), React.createElement("div", {
    style: {
      gridColumn: '7 / span 5',
      borderTop: 'var(--border-rule) solid var(--cs-orange)',
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement(Eyebrow, {
    tone: "dark"
  }, "Cancer charities"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h1)',
      lineHeight: 'var(--lh-h1)',
      letterSpacing: 'var(--ls-h1)'
    }
  }, "Fragmented and ", React.createElement("span", {
    style: {
      color: 'var(--cs-orange)'
    }
  }, "under-resourced.")), React.createElement(Body, {
    tone: "dark",
    size: "body-s",
    style: {
      color: 'var(--text-inverse-secondary)',
      maxWidth: '34ch'
    }
  }, "Exceptional charities are often left competing for the same donor attention, despite the scale of need.")))), React.createElement(Section, {
    bg: "orange"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, React.createElement(Eyebrow, null, "Our solution"), React.createElement(FiftyFifty, {
    caption: "Every show gives locally and builds something nationally."
  }), React.createElement(TextLink, {
    onClick: () => go('Transparency')
  }, "How the money works"))), React.createElement(Section, {
    bg: "white"
  }, React.createElement(FeaturedEvent, {
    image: D.img(L.img),
    eyebrow: "Next up \xB7 Launch night",
    day: L.day,
    month: L.month,
    year: L.year,
    weekday: L.weekday,
    title: L.title,
    venue: L.venue,
    location: L.location,
    description: "Our launch night at one of the UK's most iconic live music venues - the first date on a route that continues with our 2027 UK Showcase Tour.",
    charity: L.charity,
    onCta: () => go('Event'),
    onSecondary: () => go('Event')
  })), React.createElement(Section, {
    bg: "ink"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end',
      marginBottom: 48
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 8'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "The route continues",
    title: "2027 UK Showcase Tour.",
    size: "h1",
    tone: "dark"
  })), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, React.createElement(EventMeta, {
    tone: "dark",
    items: ['Season 01', 'Feb - Apr 2027']
  }))), D.route.map(r => React.createElement(ProgrammeRow, {
    key: r.city,
    day: r.day,
    month: r.month,
    weekday: r.weekday,
    city: r.city,
    venue: r.venue,
    charity: r.charity,
    status: r.status,
    onClick: () => go('Events')
  })), React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse-subtle)',
      paddingTop: 32
    }
  }, React.createElement(TextLink, {
    tone: "dark",
    onClick: () => go('Events')
  }, "View all events"))), React.createElement(Section, {
    bg: "aubergine",
    flush: true
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      columnGap: 0
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 6',
      minHeight: 640,
      background: 'url(' + D.img('founders-why') + ') center 20%/cover'
    }
  }), React.createElement("div", {
    style: {
      gridColumn: '7 / span 6',
      padding: 'var(--section-y) var(--page-margin)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 32
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Why we started",
    title: "Two second chances.",
    accent: "One mission.",
    caps: true,
    size: "display-l",
    tone: "dark"
  }), React.createElement(Body, {
    tone: "dark",
    style: {
      maxWidth: '44ch'
    }
  }, "Our founders started this while living with the very thing we're fighting. Cancer Staged was born from two personal battles with life and death - and a belief in the power of music to bring people together."), React.createElement("div", null, React.createElement(Button, {
    variant: "secondary",
    tone: "dark",
    arrow: true,
    onClick: () => go('About')
  }, "Read our story"))))), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 64
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Radical transparency",
    title: "You should know",
    accent: "where the money goes.",
    caps: true,
    size: "display-l"
  }), React.createElement(TransparencyList, {
    items: [{
      value: '50 / 50',
      title: 'Split fairly',
      body: 'Net surplus from every show split equally between a named local charity and our national grants pool, which awards its first grants from Year 2.'
    }, {
      value: '100%',
      title: 'Published',
      body: 'Grant criteria, award decisions and recipient outcomes reported openly, with an annual independent audit.'
    }, {
      value: '0',
      title: 'Hidden cuts',
      body: 'An independent grants panel, published conflict-of-interest declarations and a trustee majority.'
    }]
  }), React.createElement("div", null, React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    onClick: () => go('Transparency')
  }, "See how the money works")))), React.createElement(Section, {
    bg: "peach"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Together with",
    title: React.createElement("span", {
      className: "cs-nowrap"
    }, "Local knowledge. National reach."),
    size: "h1",
    layout: "stack",
    eyebrowAccent: false,
    lead: "Every show is paired with a named local cancer charity, chosen for that city."
  }))), React.createElement(Section, {
    bg: "ink"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end',
      rowGap: 32
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "For brands",
    title: "Partner with Cancer Staged.",
    size: "h1",
    tone: "dark",
    lead: "Sponsor a show, partner across the season, or support us another way."
  })), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4'
    }
  }, React.createElement(Button, {
    size: "lg",
    arrow: true,
    onClick: () => go('Brand Partnerships')
  }, "Explore partnerships")))), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end',
      marginBottom: 56
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 8'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Stories",
    title: "More than the night itself.",
    size: "h1"
  })), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, React.createElement(TextLink, {
    onClick: () => go('Stories')
  }, "All stories"))), React.createElement("div", {
    className: "cs-grid cs-collapse-md"
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7'
    }
  }, React.createElement(StoryCard, _extends({
    variant: "lead"
  }, lead, {
    image: D.img(lead.img),
    onClick: () => openStory(lead, go)
  }))), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, React.createElement(StoryCard, _extends({}, s2, {
    excerpt: null,
    image: D.img(s2.img),
    onClick: () => openStory(s2, go)
  })), s3 && React.createElement(StoryCard, _extends({
    variant: "compact"
  }, s3, {
    image: D.img(s3.img),
    onClick: () => openStory(s3, go)
  })), s4 && React.createElement(StoryCard, _extends({
    variant: "compact"
  }, s4, {
    image: D.img(s4.img),
    onClick: () => openStory(s4, go)
  }))))), React.createElement(CTABand, {
    basePath: "",
    title: D.pages.home.ctaTitle,
    onPrimary: () => go('Events'),
    onSecondary: () => go('Donate')
  }));
}
window.HomeScreen = HomeScreen;