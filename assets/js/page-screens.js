const PgDS = window.CancerStagedDesignSystem_cc2fc3;
const DIFFS = [['vs. single-charity models', 'Where other music-led efforts raise funds for one charity, we tour nationally at a grassroots scale and distribute across the sector.'], ['vs. research-only campaigns', 'We fund support, hospice, care and research - not research alone, and our shows are live, not broadcast.'], ['vs. single-intervention charities', 'Where some charities focus on one intervention, we are a sector-wide grant maker.'], ['vs. single-cancer charities', 'We span all cancer types and all forms of charitable response, not one diagnosis.']];
function DiffList() {
  return React.createElement("div", {
    className: "cs-grid",
    style: {
      rowGap: 0
    }
  }, DIFFS.map(([t, b]) => React.createElement("div", {
    key: t,
    style: {
      gridColumn: 'span 6',
      padding: '28px 0',
      borderTop: '1px solid var(--border-inverse-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h4)',
      color: 'var(--cs-orange)'
    }
  }, t), React.createElement(Body, {
    tone: "dark",
    size: "body-s",
    style: {
      color: 'var(--text-inverse-secondary)',
      maxWidth: '46ch'
    }
  }, b))));
}
function PageIntro({
  eyebrow,
  title,
  lead,
  bg = 'white'
}) {
  const {
    SectionHeading
  } = PgDS;
  return React.createElement(Section, {
    bg: bg,
    innerStyle: {
      paddingTop: 'calc(var(--header-h) + var(--space-11))'
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
    eyebrow: eyebrow,
    title: title,
    size: "display-l",
    as: "h1"
  })), lead && React.createElement("div", {
    style: {
      gridColumn: '9 / span 4'
    }
  }, React.createElement(Body, {
    size: "body-l"
  }, lead))));
}
function AboutScreen({
  go
}) {
  const {
    Hero,
    SectionHeading,
    Quote,
    Person,
    RingArt,
    CTABand,
    Eyebrow
  } = PgDS;
  const D = window.CS_DATA;
  return React.createElement("div", null, React.createElement(Hero, {
    image: D.img(D.pages.about.image),
    focal: "70% 30%",
    height: "tall",
    eyebrow: D.pages.about.eyebrow,
    title: D.pages.about.title,
    accent: D.pages.about.accent,
    lead: D.pages.about.lead
  }), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 5'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Why we started",
    title: "From two second chances came a united front.",
    size: "h1"
  })), React.createElement("div", {
    style: {
      gridColumn: '7 / span 6',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement(Body, {
    size: "body-l"
  }, "In 2018, co-founder Mark Rooney was diagnosed with Stage 4 kidney cancer. Rather than accept the prognosis, he channelled his experience of music's healing power in cancer wards into a bold new idea: a charity that unites the entire cancer sector through live music."), React.createElement(Body, null, "Co-founder Steve Bond nearly lost his life to a sudden cardiac arrest, saved only by his wife's quick-thinking CPR. That second chance brought him to Cancer Staged, where he now helps build something that could transform how the UK fights cancer.")))), React.createElement(Section, {
    bg: "aubergine"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 5',
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement("img", {
    src: D.img('best-nights-rings'),
    alt: "Crowd at a gig, framed by the Cancer Staged rings",
    style: {
      width: '100%',
      maxWidth: 480,
      height: 'auto',
      display: 'block'
    }
  })), React.createElement("div", {
    style: {
      gridColumn: '7 / span 6',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement(Eyebrow, {
    tone: "dark",
    accent: true
  }, "Why this?"), React.createElement(Quote, {
    tone: "dark"
  }, "Some of the best nights of your life haven't happened yet."), React.createElement(Body, {
    tone: "dark",
    style: {
      color: 'var(--text-inverse-secondary)',
      maxWidth: '44ch'
    }
  }, "Our events are infused with creativity, energy and a profound sense of purpose. They're more than fundraisers. They're celebrations of life, hope and community.")))), React.createElement(Section, {
    bg: "white"
  }, React.createElement(SectionHeading, {
    eyebrow: "Founders & leadership",
    title: React.createElement("span", {
      className: "cs-nowrap"
    }, "The people behind the nights."),
    size: "h2",
    style: {
      marginBottom: 56
    }
  }), React.createElement("div", {
    className: "cs-grid"
  }, D.people.map(p => React.createElement("div", {
    key: p.name,
    style: {
      gridColumn: 'span 4'
    }
  }, React.createElement(Person, {
    variant: "founder",
    ratio: "1/1",
    image: D.img(p.image),
    name: p.name,
    role: p.role,
    bio: p.bio
  }))))), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 4'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Our board",
    title: "Governance.",
    size: "h2"
  })), React.createElement("div", {
    style: {
      gridColumn: '6 / span 7'
    }
  }, React.createElement(TrusteeList, {
    people: [...D.trustees, ...D.advisors]
  }), React.createElement(Body, {
    size: "body-s",
    style: {
      marginTop: 24,
      color: 'var(--text-secondary)'
    }
  }, "The Cancer Staged Foundation is a registered UK charity, No. 1209616, moving to an independent trustee majority, with Gift Aid registration underway.")))), React.createElement(CTABand, {
    basePath: "",
    title: "Be part of the story.",
    primary: "Register for an Event",
    secondary: "Donate",
    onPrimary: () => go('Events'),
    onSecondary: () => go('Donate')
  }));
}
function WhatWeDoScreen({
  go
}) {
  const {
    Hero,
    SectionHeading,
    FiftyFifty,
    CTABand,
    Eyebrow
  } = PgDS;
  const D = window.CS_DATA;
  const prog = [['01', 'Grassroots gigs', 'We begin in the grassroots rooms where new artists are made, supporting UK towns and venues under real pressure from the decline of regular touring shows.', 'grassroots-gig'], ['02', 'Flagship shows', 'As the audience builds, we add flagship shows in major venues, pairing national reach with named local cancer charities.', 'flagship-show-v2'], ['03', 'National grants pool', 'Half of every show\'s net surplus builds a national grants pool. Grants will be awarded to UK cancer charities through open, published rounds.', 'grants-pool-v2']];
  return React.createElement("div", null, React.createElement(Hero, {
    image: D.img(D.pages.whatwedo.image),
    focal: "center 35%",
    height: "tall",
    eyebrow: D.pages.whatwedo.eyebrow,
    title: D.pages.whatwedo.title,
    accent: D.pages.whatwedo.accent,
    lead: D.pages.whatwedo.lead,
    primary: "Find an Event",
    onPrimary: () => go('Events')
  }), React.createElement(Section, {
    bg: "bone"
  }, React.createElement(SectionHeading, {
    eyebrow: "How it grows",
    title: "Built to grow, room by room.",
    size: "h1",
    style: {
      marginBottom: 64
    }
  }), prog.map(([n, t, b, img], i) => React.createElement("div", {
    key: n,
    className: "cs-grid cs-collapse-md",
    style: {
      alignItems: 'center',
      padding: '48px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: i % 2 ? '7 / span 6' : '1 / span 6',
      gridRow: 1,
      aspectRatio: '3/2',
      background: 'url(' + D.img(img) + ') center/cover'
    }
  }), React.createElement("div", {
    style: {
      gridColumn: i % 2 ? '1 / span 5' : '8 / span 5',
      gridRow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontWeight: 600,
      fontSize: 'var(--type-h2)',
      lineHeight: 'var(--lh-h2)',
      letterSpacing: 'var(--ls-h2)'
    }
  }, t), React.createElement(Body, null, b))))), React.createElement(Section, {
    bg: "orange"
  }, React.createElement(Eyebrow, {
    style: {
      marginBottom: 24
    }
  }, "The model"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      marginBottom: 40,
      maxWidth: '36ch'
    }
  }, "1 in 2 of us will get cancer in our lifetime. So every show splits its surplus in two."), React.createElement(FiftyFifty, {
    caption: "Net surplus from each show is split equally. No hidden cuts."
  })), React.createElement(Section, {
    bg: "ink"
  }, React.createElement(SectionHeading, {
    eyebrow: "How we're different",
    title: "Additive, not duplicative.",
    size: "h1",
    tone: "dark",
    style: {
      marginBottom: 56
    }
  }), React.createElement(DiffList, null)), React.createElement(CTABand, {
    basePath: "",
    title: "Help us fund more care.",
    primary: "Register for an Event",
    secondary: "Donate",
    onPrimary: () => go('Events'),
    onSecondary: () => go('Donate')
  }));
}
function TransparencyScreen({
  go
}) {
  const {
    FiftyFifty,
    TransparencyList,
    SectionHeading,
    Person,
    TextLink
  } = PgDS;
  const D = window.CS_DATA;
  return React.createElement("div", null, React.createElement(PageIntro, {
    eyebrow: "Transparency",
    title: "Where your money goes.",
    lead: "What each show makes, and where it goes, is published openly. No hidden cuts."
  }), React.createElement(Section, {
    bg: "orange"
  }, React.createElement(FiftyFifty, {
    left: "Local cancer charity",
    right: "National grants pool",
    caption: "Net surplus from every show, split equally. Grants will be awarded to UK cancer charities through open, published rounds."
  })), React.createElement(Section, {
    bg: "white"
  }, React.createElement(SectionHeading, {
    eyebrow: "How grants are made",
    title: "Seen to be fair.",
    size: "h1",
    style: {
      marginBottom: 56
    }
  }), React.createElement(TransparencyList, {
    items: [{
      title: 'Independent grant-making',
      body: 'An independent grants panel with published conflict-of-interest declarations, so awards are seen to be fair.'
    }, {
      title: 'Published & audited',
      body: 'Open grant criteria, published award decisions, recipient outcome reporting, and an annual independent audit.'
    }, {
      title: 'Every show reported',
      body: 'For each date: gross income, costs, net surplus and the amount sent to each partner.'
    }]
  })), React.createElement(Section, {
    bg: "ink"
  }, React.createElement(SectionHeading, {
    eyebrow: "How we're different",
    title: "Additive, not duplicative.",
    size: "h1",
    tone: "dark",
    style: {
      marginBottom: 56
    }
  }), React.createElement(DiffList, null)), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 4',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Governance",
    title: "Who holds us to account.",
    size: "h2"
  }), React.createElement(TextLink, null, "Annual report (coming 2027)")), React.createElement("div", {
    style: {
      gridColumn: '6 / span 7'
    }
  }, React.createElement(TrusteeList, {
    people: [{
      name: 'UK Registered Charity',
      role: '1209616',
      static: true
    }, ...D.trustees, ...D.advisors, {
      name: 'Gift Aid',
      role: 'Registration underway',
      static: true
    }]
  }), React.createElement(Body, {
    size: "body-s",
    style: {
      marginTop: 20,
      color: 'var(--text-secondary)'
    }
  }, "Select a name to read their biography.")))));
}
function PartnersScreen({
  go
}) {
  const {
    TransparencyList,
    SectionHeading,
    Button
  } = PgDS;
  const D = window.CS_DATA;
  const line = '1px solid var(--border-subtle)';
  return React.createElement("div", null, React.createElement(PageIntro, {
    eyebrow: "Partners",
    title: "Together, we go further.",
    lead: "The venues, charities, sponsors and brands who help make each night happen. New partners are added here as they're confirmed."
  }), React.createElement(Section, {
    bg: "white",
    innerStyle: {
      paddingTop: 0
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Our partners",
    title: "In our corner.",
    size: "h2",
    style: {
      marginBottom: 40
    }
  }), React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
      borderTop: line,
      borderLeft: line
    }
  }, D.partners.map(p => React.createElement("li", {
    key: p.name,
    style: {
      borderRight: line,
      borderBottom: line
    }
  }, React.createElement("a", {
    href: p.url || undefined,
    target: p.url ? '_blank' : undefined,
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 28,
      height: '100%',
      boxSizing: 'border-box',
      textDecoration: 'none',
      color: 'var(--text-primary)'
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: '3/2',
      display: 'grid',
      placeItems: 'center'
    }
  }, p.logo ? React.createElement("img", {
    src: D.img(p.logo),
    alt: p.name + ' logo',
    style: {
      width: '64%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  }) : React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h3)'
    }
  }, p.name)), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, p.region && React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, p.region), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h4)',
      letterSpacing: '-.015em'
    }
  }, p.name, p.url && React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: '#B23B08'
    }
  }, " \u2197")))))))), React.createElement(Section, {
    bg: "bone"
  }, React.createElement(SectionHeading, {
    eyebrow: "How partnership works",
    title: "Local knowledge. National reach.",
    size: "h1",
    style: {
      marginBottom: 56
    }
  }), React.createElement(TransparencyList, {
    items: [{
      title: 'Chosen for the city',
      body: 'Each show is paired with a confirmed local cancer charity before tickets go on sale.'
    }, {
      title: 'Named on the night',
      body: 'Partners are credited on every listing, ticket and stage - support lands visibly in the community.'
    }, {
      title: 'More by city',
      body: 'New partners are appointed as the route grows into new towns and venues.'
    }]
  })), React.createElement(Section, {
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
    eyebrow: "Support us",
    title: "Want to get involved?",
    size: "h1",
    tone: "dark",
    lead: "Donate, come to a show, or partner with us as a business or brand."
  })), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4'
    }
  }, React.createElement(Button, {
    size: "lg",
    arrow: true,
    onClick: () => go('Support Us')
  }, "Ways to support")))), React.createElement(Section, {
    bg: "orange"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Partner with us",
    title: "A cancer charity in a city we're coming to?",
    size: "h1",
    tone: "orange"
  })), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4'
    }
  }, React.createElement(Button, {
    size: "lg",
    arrow: true,
    onClick: () => go('Contact')
  }, "Get in touch")))));
}
function ContactScreen({
  go
}) {
  const {
    SectionHeading,
    TextInput,
    Select,
    Button,
    Checkbox,
    Eyebrow
  } = PgDS;
  const D = window.CS_DATA;
  const [busy, setBusy] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [f, setF] = React.useState({
    name: '',
    email: '',
    subject: '',
    msg: ''
  });
  const [err, setErr] = React.useState({});
  const send = () => {
    const e = {};
    if (!f.name) e.name = 'Enter your name.';
    if (!/@/.test(f.email)) e.email = 'Enter a valid email address.';
    if (!f.subject) e.subject = 'Choose a subject.';
    if (!f.msg) e.msg = 'Write a short message.';
    setErr(e);
    if (Object.keys(e).length) return;
    if (!D.netlifyForms) {
      setSent(true);
      return;
    }
    setBusy(true);
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'form-name': 'contact',
        subject: f.subject,
        name: f.name,
        email: f.email,
        message: f.msg
      }).toString()
    }).then(r => {
      if (!r.ok) throw new Error('send failed');
      setSent(true);
    }).catch(() => setErr({
      form: 'Sorry, your message didn’t send. Please email us at ' + D.contactEmail + '.'
    })).finally(() => setBusy(false));
  };
  return React.createElement(Section, {
    bg: "white",
    innerStyle: {
      paddingTop: 'calc(var(--header-h) + var(--space-11))'
    }
  }, React.createElement("div", {
    className: "cs-grid cs-collapse-md"
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 5',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Get in touch.",
    size: "display-l",
    as: "h1"
  }), React.createElement(Body, {
    size: "body-l",
    style: {
      maxWidth: '30ch'
    }
  }, "Artists, venues, charities, brands, press or just a question - tell us who you are and we'll route it to the right person."), React.createElement(Body, null, "Or email us at ", React.createElement("a", {
    href: 'mailto:' + D.contactEmail,
    style: {
      color: 'inherit',
      fontWeight: 600
    }
  }, D.contactEmail), ".")), React.createElement("div", {
    style: {
      gridColumn: '7 / span 6',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, sent ? React.createElement("div", {
    role: "status",
    style: {
      borderTop: 'var(--border-rule) solid var(--status-success)',
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement(Eyebrow, {
    style: {
      color: 'var(--status-success)'
    }
  }, "Message sent"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h2)',
      letterSpacing: 'var(--ls-h2)',
      lineHeight: 'var(--lh-h2)'
    }
  }, "Thanks, ", f.name.split(' ')[0], ". We'll be in touch."), React.createElement("div", null, React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Home')
  }, "Back to home"))) : React.createElement(React.Fragment, null, React.createElement(Select, {
    label: "I'm getting in touch about",
    placeholder: "Choose a subject",
    options: ['Events & tickets', 'Artists & performing', 'Venues', 'Charity partnerships', 'Brand partnerships & sponsorship', 'Founding Circle & giving', 'Donations & legacy gifts', 'Press', 'Something else'],
    value: f.subject,
    onChange: e => setF({
      ...f,
      subject: e.target.value
    }),
    error: err.subject
  }), React.createElement(TextInput, {
    label: "Full name",
    autoComplete: "name",
    value: f.name,
    onChange: e => setF({
      ...f,
      name: e.target.value
    }),
    error: err.name
  }), React.createElement(TextInput, {
    label: "Email address",
    type: "email",
    autoComplete: "email",
    value: f.email,
    onChange: e => setF({
      ...f,
      email: e.target.value
    }),
    error: err.email
  }), React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 15,
      fontWeight: 600
    }
  }, "Message"), React.createElement("textarea", {
    rows: 6,
    value: f.msg,
    onChange: e => setF({
      ...f,
      msg: e.target.value
    }),
    "aria-invalid": !!err.msg || undefined,
    style: {
      padding: 16,
      fontFamily: 'var(--font-heading)',
      fontSize: 17,
      lineHeight: 1.5,
      border: 'var(--border-control) solid ' + (err.msg ? 'var(--status-error)' : 'var(--cs-warm-grey-light)'),
      borderRadius: 'var(--radius-control)',
      resize: 'vertical',
      background: 'var(--surface-default)'
    }
  }), err.msg && React.createElement("span", {
    role: "alert",
    style: {
      fontSize: 14,
      color: 'var(--status-error)'
    }
  }, err.msg)), React.createElement(Checkbox, {
    label: "Keep me posted about events",
    description: "Occasional emails. Unsubscribe anytime."
  }), err.form && React.createElement("span", {
    role: "alert",
    style: {
      fontSize: 15,
      color: 'var(--status-error)'
    }
  }, err.form), React.createElement("div", null, React.createElement(Button, {
    size: "lg",
    arrow: true,
    loading: busy,
    disabled: busy,
    onClick: send
  }, "Send message"))))));
}
function FoundingCircleScreen({
  go
}) {
  const {
    SectionHeading,
    Eyebrow,
    Button,
    TransparencyList,
    TextLink
  } = PgDS;
  const D = window.CS_DATA;
  const tiers = [['£10K', 'Founding Supporter', 'Start the engine', ['Campaign materials', 'Donor engagement', 'Charity administration', 'Partnership development']], ['£25K', 'Founding Patron', 'Launch capability', ['Launch operations', 'Donor-circle development', 'Event readiness', 'Impact-reporting systems']], ['£50K', 'Principal Supporter', 'Operational depth', ['Team capacity', 'Partnership activation', 'Event pipeline development', 'Governance', 'Reporting infrastructure']], ['£100K', 'Lead Patron', 'Anchor funding', ['Accelerates the music-led fundraising engine', 'High-value partnerships', 'Preparation for first major fundraising moments']]];
  const benefits = [['Clear returns', 'See a direct return on your donation through clear reporting on funds raised and charities supported.'], ['Privileged entry', 'Privileged entry to our concerts and private events, and an inner circle of artists, leaders and philanthropists.'], ['Authentic experiences', 'Invitations to rehearsals and artist-adjacent moments where appropriate.'], ['Celebrate life', 'Opportunities to celebrate life with the people who matter most.'], ['Tax-efficient', 'As a registered UK charity, your generosity is maximised through Gift Aid, Corporation Tax relief and IHT benefits.'], ['Permanent recognition', 'As a Founding Patron, your name will be permanently recognised as a visionary who helped change the future of cancer support in the UK.']];
  const mail = 'mailto:' + (D.partnershipEmail || D.contactEmail) + '?subject=' + encodeURIComponent('Founding Circle');
  return React.createElement("div", null, React.createElement(PageIntro, {
    eyebrow: "Founding Circle",
    title: "A founding gift creates capacity, not dependency.",
    lead: "Philanthropic and corporate giving that builds what UK cancer charities cannot build alone - a music-led engine for lasting support."
  }), React.createElement(Section, {
    bg: "ink"
  }, React.createElement(SectionHeading, {
    eyebrow: "Founding gifts",
    title: "Four ways to found it.",
    size: "h1",
    tone: "dark",
    style: {
      marginBottom: 56
    }
  }), React.createElement("div", {
    className: "cs-grid",
    style: {
      rowGap: 40
    }
  }, tiers.map(([amt, name, focus, items]) => React.createElement("div", {
    key: name,
    style: {
      gridColumn: 'span 3',
      borderTop: 'var(--border-rule) solid var(--cs-orange)',
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: 'var(--type-display-m, 64px)',
      lineHeight: .9,
      letterSpacing: '-.04em',
      color: 'var(--cs-orange)'
    }
  }, amt), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)'
    }
  }, name), React.createElement(Eyebrow, {
    tone: "dark"
  }, focus), React.createElement("ul", {
    style: {
      margin: '4px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(i => React.createElement("li", {
    key: i,
    style: {
      fontSize: 15,
      lineHeight: 1.4,
      color: 'var(--text-inverse-secondary)',
      paddingTop: 8,
      borderTop: '1px solid var(--border-inverse-subtle)'
    }
  }, i))))))), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      marginBottom: 56
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 6'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "The return on generosity",
    title: "What founding partners receive.",
    size: "h1"
  })), React.createElement("div", {
    style: {
      gridColumn: '8 / span 5'
    }
  }, React.createElement(Body, null, "We are seeking visionary partners to provide the foundational capital to launch and scale Cancer Staged. Founding gifts support agreed working-capital priorities and launch milestones, not an open-ended appeal."))), React.createElement(TransparencyList, {
    items: benefits.map(([title, body]) => ({
      title,
      body
    }))
  })), React.createElement(Section, {
    bg: "orange"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end',
      rowGap: 32
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Start a conversation",
    title: "Join the Founding Circle.",
    size: "h1",
    tone: "orange"
  }), React.createElement(Body, null, "We can offer guidance on Gift Aid for individuals, company donations and legacy giving, and discuss giving routes that may help you maximise the value of your support.")), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, React.createElement(Button, {
    size: "lg",
    arrow: true,
    href: mail
  }, "Talk to us"), React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, D.partnershipEmail || D.contactEmail)))), React.createElement(Section, {
    bg: "white",
    tight: true
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'baseline',
      justifyContent: 'space-between',
      paddingBottom: 24,
      marginBottom: 24,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement(Body, null, "Looking for a brand partnership? Sponsorship, activation and content are a separate, commercial route."), React.createElement(TextLink, {
    onClick: () => go('Support Us')
  }, "See all ways to support")), React.createElement(Body, {
    size: "caption",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '90ch'
    }
  }, "This is general awareness only and does not constitute tax, legal, financial or estate-planning advice. The Cancer Staged Foundation, registered charity No. 1209616. Content subject to change.")));
}
function SupportUsScreen({
  go
}) {
  const {
    SectionHeading,
    Eyebrow,
    Button,
    TransparencyList
  } = PgDS;
  const D = window.CS_DATA;
  const email = D.partnershipEmail || D.contactEmail;
  const mailto = s => 'mailto:' + email + '?subject=' + encodeURIComponent(s);
  const merch = D.merchUrl || '';
  const donate = () => go('Donate');
  const ways = [['Donate', 'Make a one-off or monthly gift.', [['Donate', donate]]], ['Come to a show', 'Buy a ticket for one of our UK shows. Every ticket helps fund UK cancer charities.', [['Find tickets', () => go('Events')], ['Donate', donate, 'secondary']]], ['Match your gift', 'Ask your employer to match your donation through their matched giving scheme.', [['Donate', donate]]], ['Give in memory', 'Make a donation in memory of a loved one affected by cancer.', [['Donate', donate]]], ['Leave a gift in your will', 'A legacy gift keeps the music playing for years to come. We recommend taking independent financial advice.', [['Contact us', mailto('Legacy gift')]]], ['Buy merchandise', 'Shop online or at our shows. 50% of all merchandise sales go directly into grants.', [[merch ? 'Merch store' : 'Store opening soon', merch || null]]]];
  const routes = [['Sponsor a show', 'Live Event Sponsor', 'Presenting partner of a show, a city or the UK Showcase Tour.', ['Brand on stage, tickets, livestream and social', 'Hospitality and artist introductions', 'Film and photography for your channels', 'A post-show impact report']], ['Partner across the season', 'Founding Brand Partner', 'Partner with Cancer Staged across the whole season, from the first show.', ['All core supporter and event-partner benefits', 'Founding partner recognition', 'Category exclusivity across the season', 'Private events, rehearsals and artist moments', 'Full impact reporting and an annual review']], ['Support us another way', 'Friend of Cancer Staged', 'Support in kind or at a level that fits, from day one.', ['Product, equipment, services or activation', 'Supporter recognition online and at shows', 'Staff engagement and ticket offers', 'Seasonal updates on impact']]];
  const why = [['Visible social impact', 'Be seen funding UK cancer charities in every city, with the impact reported show by show.'], ['Access and content', 'Hospitality, artist introductions, and film and photography made for your channels.'], ['Category exclusivity', 'Sole status in your category, agreed as part of a season partnership.'], ['New money, not diverted money', 'Ticket income comes from entertainment spend, so your support grows what reaches UK cancer charities rather than shifting existing donations.']];
  const act = ([label, to, v]) => !to ? React.createElement("span", {
    key: label,
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-secondary)',
      paddingBlock: 10
    }
  }, label) : typeof to === 'string' ? React.createElement(Button, {
    key: label,
    size: "md",
    variant: v || 'primary',
    arrow: true,
    href: to
  }, label) : React.createElement(Button, {
    key: label,
    size: "md",
    variant: v || 'primary',
    arrow: true,
    onClick: to
  }, label);
  return React.createElement("div", null, React.createElement(PageIntro, {
    eyebrow: "Support us",
    title: "Be loud for a reason.",
    lead: "Whether you're a fan, a business or a brand, there's a way to help live music fund UK cancer charities."
  }), React.createElement(Section, {
    bg: "bone"
  }, React.createElement(SectionHeading, {
    eyebrow: "For individuals",
    title: "Six ways to give.",
    size: "h1",
    style: {
      marginBottom: 56
    }
  }), React.createElement("div", {
    className: "cs-grid cs-collapse-md",
    style: {
      rowGap: 56
    }
  }, ways.map(([t, b, acts], i) => React.createElement("div", {
    key: t,
    style: {
      gridColumn: 'span 4',
      borderTop: 'var(--border-rule) solid var(--cs-ink)',
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 14,
      fontWeight: 500,
      color: '#B23B08'
    }
  }, String(i + 1).padStart(2, '0')), React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)'
    }
  }, t), React.createElement(Body, {
    size: "body-s",
    style: {
      flex: '1 1 auto'
    }
  }, b), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 8
    }
  }, acts.map(act)))))), React.createElement(Section, {
    bg: "ink"
  }, React.createElement(SectionHeading, {
    eyebrow: "For corporates and brands",
    title: "Three ways in.",
    size: "h1",
    tone: "dark",
    lead: "Commercial partnerships, each shaped around your priorities, with cash, product or activation in kind.",
    style: {
      marginBottom: 56
    }
  }), React.createElement("div", {
    className: "cs-grid cs-collapse-md",
    style: {
      rowGap: 48
    }
  }, routes.map(([route, name, summary, items]) => React.createElement("div", {
    key: name,
    style: {
      gridColumn: 'span 4',
      borderTop: 'var(--border-rule) solid var(--cs-orange)',
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement(Eyebrow, {
    tone: "dark"
  }, route), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h2)',
      lineHeight: 'var(--lh-h2)',
      letterSpacing: 'var(--ls-h2)'
    }
  }, name), React.createElement("div", {
    style: {
      fontSize: 17,
      lineHeight: 1.5,
      color: 'var(--text-inverse-secondary)'
    }
  }, summary), React.createElement("ul", {
    style: {
      margin: '8px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(i => React.createElement("li", {
    key: i,
    style: {
      fontSize: 15,
      lineHeight: 1.4,
      color: 'var(--text-inverse-secondary)',
      paddingTop: 8,
      borderTop: '1px solid var(--border-inverse-subtle)'
    }
  }, i))))))), React.createElement(Section, {
    bg: "white"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      marginBottom: 56
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 6'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Why partner",
    title: "What your business gets.",
    size: "h1"
  })), React.createElement("div", {
    style: {
      gridColumn: '8 / span 5'
    }
  }, React.createElement(Body, null, "Detailed options and commercials are set out in a tailored proposal."))), React.createElement(TransparencyList, {
    items: why.map(([title, body]) => ({
      title,
      body
    }))
  })), React.createElement(Section, {
    bg: "bone"
  }, React.createElement("div", {
    className: "cs-grid cs-collapse-md",
    style: {
      alignItems: 'end',
      rowGap: 32
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 6'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Philanthropic and corporate giving",
    title: "The Founding Circle.",
    size: "h1"
  })), React.createElement("div", {
    style: {
      gridColumn: '8 / span 5',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, React.createElement(Body, null, "Founding gifts from \xA310K, for individuals and companies giving philanthropically or through CSR, that build the charity's capacity to grow."), React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    onClick: () => go('Founding Circle')
  }, "Explore the Founding Circle")))), React.createElement(Section, {
    bg: "orange"
  }, React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end',
      rowGap: 32
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Start a conversation",
    title: "Let's talk.",
    size: "h1",
    tone: "orange"
  }), React.createElement(Body, null, "Tell us how you'd like to help, and we'll come back to you.")), React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, React.createElement(Button, {
    size: "lg",
    arrow: true,
    href: mailto('Supporting Cancer Staged')
  }, "Talk to us"), React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, email)))));
}
Object.assign(window, {
  AboutScreen,
  WhatWeDoScreen,
  TransparencyScreen,
  PartnersScreen,
  ContactScreen,
  FoundingCircleScreen,
  SupportUsScreen,
  BrandPartnershipsScreen: SupportUsScreen
});