function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const StDS = window.CancerStagedDesignSystem_cc2fc3;
function StoriesScreen({
  go
}) {
  const {
    SectionHeading,
    Tabs,
    StoryCard,
    Pagination,
    NewsletterInput,
    Eyebrow
  } = StDS;
  const D = window.CS_DATA;
  const [cat, setCat] = React.useState('All');
  const [page, setPage] = React.useState(1);
  const list = D.stories.filter(s => cat === 'All' || s.category === cat);
  const [lead, ...rest] = list;
  return React.createElement("div", null, React.createElement(Section, {
    bg: "white",
    innerStyle: {
      paddingTop: 'calc(var(--header-h) + var(--space-9))',
      paddingBottom: 48
    }
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 8'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "News & stories",
    title: "More than the night itself.",
    size: "display-l",
    as: "h1"
  })), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4'
    }
  }, React.createElement(Body, {
    size: "body-s",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "We're a brand new charity, and our first stories are just getting started."))), React.createElement(Tabs, {
    tabs: ['All', 'Venues', 'People'],
    value: cat,
    onChange: setCat,
    style: {
      marginTop: 56
    }
  })), React.createElement(Section, {
    bg: "white",
    innerStyle: {
      paddingTop: 0
    }
  }, lead && React.createElement("div", {
    className: "cs-grid cs-collapse-md",
    style: {
      alignItems: 'end',
      paddingBottom: 64,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 12'
    }
  }, React.createElement(StoryCard, _extends({
    variant: "lead"
  }, lead, {
    image: D.img(lead.img),
    onClick: () => openStory(lead, go)
  })))), React.createElement("div", {
    className: "cs-grid",
    style: {
      paddingTop: 64,
      rowGap: 64
    }
  }, rest.map(s => React.createElement("div", {
    key: s.title,
    style: {
      gridColumn: 'span 4'
    }
  }, React.createElement(StoryCard, _extends({}, s, {
    image: D.img(s.img),
    onClick: () => openStory(s, go)
  }))))), list.length === 0 && React.createElement(Body, {
    style: {
      paddingBlock: 48,
      color: 'var(--text-secondary)'
    }
  }, "No stories in this category yet."), React.createElement("div", {
    style: {
      marginTop: 80,
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement(Pagination, {
    page: page,
    total: 3,
    onChange: setPage
  }))), React.createElement(Section, {
    bg: "peach",
    tight: true
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 6'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Newsletter",
    eyebrowAccent: false,
    title: "Get stories like this in your inbox.",
    size: "h2"
  })), React.createElement("div", {
    style: {
      gridColumn: '8 / span 5'
    }
  }, React.createElement(NewsletterInput, {
    tone: "light"
  })))));
}
function StoryDetailScreen({
  go
}) {
  const {
    Breadcrumb,
    Quote,
    StoryCard,
    PartnerAttribution,
    TextLink,
    RingArt,
    Eyebrow,
    Button
  } = StDS;
  const D = window.CS_DATA;
  const [sid, setSid] = React.useState(() => {
    try {
      return localStorage.getItem('cs-kit-story');
    } catch (e) {
      return null;
    }
  });
  const s = D.stories.find(x => x.id === sid) || D.stories[0];
  const others = D.stories.filter(x => x !== s).slice(0, 3);
  return React.createElement("article", null, React.createElement(Section, {
    bg: "white",
    innerStyle: {
      paddingTop: 'calc(var(--header-h) + var(--space-8))',
      paddingBottom: 56
    }
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 10',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, React.createElement(Breadcrumb, {
    items: ['Stories', s.category],
    onNavigate: () => go('Stories')
  }), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontWeight: 600,
      fontSize: 'var(--type-h1)',
      lineHeight: 'var(--lh-h1)',
      letterSpacing: 'var(--ls-h1)',
      maxWidth: '14ch'
    }
  }, s.title), React.createElement(Body, {
    size: "body-l",
    style: {
      maxWidth: 'var(--measure-lead)'
    }
  }, s.excerpt), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, React.createElement("span", null, s.date), React.createElement("span", null, "/"), React.createElement("span", null, s.readTime, " read"))))), React.createElement("div", {
    style: {
      aspectRatio: '21/9',
      maxHeight: 640,
      width: '100%',
      background: 'url(' + D.img(s.hero || 'union-chapel-v2') + ') ' + (s.heroPos || 'center 30%') + '/cover'
    }
  }), s.dialogue ? React.createElement(React.Fragment, null, React.createElement(Section, {
    bg: "white"
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '3 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, (s.dialogue || []).map(([who, text], i) => React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, (i === 0 || s.dialogue[i - 1][0] !== who) && React.createElement(Eyebrow, {
    accent: true
  }, who), React.createElement(Body, {
    size: i === 0 ? 'body-l' : 'body'
  }, text)))))), s.pull && React.createElement(Section, {
    bg: "aubergine",
    tight: true
  }, React.createElement(RingArt, {
    color: "orange",
    size: 520,
    basePath: "",
    className: "cs-desk",
    style: {
      position: 'absolute',
      right: -220,
      top: -80
    }
  }), React.createElement("div", {
    className: "cs-grid",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 8'
    }
  }, React.createElement(Quote, {
    tone: "dark",
    size: "lg",
    name: s.pull[0],
    role: "Co-founder"
  }, s.pull[1])))), s.bios && React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      rowGap: 48
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, React.createElement(Eyebrow, {
    accent: true
  }, "About the founders")), s.bios.map(([n, r, img, bio]) => React.createElement("div", {
    key: n,
    className: "cs-grid",
    style: {
      gridColumn: 'span 6',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,3fr)',
      columnGap: 24,
      alignItems: 'start'
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: 'url(' + D.img(img) + ') center/cover'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)'
    }
  }, n), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, r), React.createElement(Body, {
    size: "body-s"
  }, bio)))))), React.createElement(Section, {
    bg: "white",
    tight: true
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '3 / span 7',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, React.createElement(Button, {
    variant: "brand",
    arrow: true,
    onClick: () => go('Events')
  }, "Find an Event"), React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Donate')
  }, "Donate"))))) : React.createElement(React.Fragment, null, React.createElement(Section, {
    bg: "white"
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '3 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, (s.body || []).map((p, i) => React.createElement(Body, {
    key: i,
    size: i === 0 ? 'body-l' : 'body'
  }, p))))), s.quote && React.createElement(Section, {
    bg: "orange",
    tight: true
  }, React.createElement(RingArt, {
    color: "white",
    size: 520,
    basePath: "",
    className: "cs-desk",
    style: {
      position: 'absolute',
      right: -220,
      top: -80
    }
  }), React.createElement("div", {
    className: "cs-grid",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 8'
    }
  }, React.createElement(Quote, {
    tone: "orange",
    size: "lg"
  }, s.quote)))), React.createElement(Section, {
    bg: "white"
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '3 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, s.after && React.createElement(Body, null, s.after), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, React.createElement(Button, {
    variant: "brand",
    arrow: true,
    onClick: () => go('Events')
  }, "Find an Event"), React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Donate')
  }, "Donate")))))), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      marginBottom: 40
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h2)',
      letterSpacing: 'var(--ls-h2)'
    }
  }, "Keep reading"), React.createElement(TextLink, {
    onClick: () => go('Stories')
  }, "All stories")), React.createElement("div", {
    className: "cs-grid"
  }, others.map(x => React.createElement("div", {
    key: x.title,
    style: {
      gridColumn: 'span 4'
    }
  }, React.createElement(StoryCard, _extends({
    variant: "compact"
  }, x, {
    image: D.img(x.img),
    onClick: () => {
      try {
        localStorage.setItem('cs-kit-story', x.id);
      } catch (e) {}
      setSid(x.id);
      window.scrollTo(0, 0);
    }
  })))))));
}
Object.assign(window, {
  StoriesScreen,
  StoryDetailScreen
});