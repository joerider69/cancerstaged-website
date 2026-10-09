const DnDS = window.CancerStagedDesignSystem_cc2fc3;
function DonateScreen({
  go
}) {
  const {
    FrequencyToggle,
    AmountSelector,
    Checkbox,
    TextInput,
    Button,
    Icon,
    Eyebrow,
    SectionHeading,
    TextLink
  } = DnDS;
  const D = window.CS_DATA;
  const [freq, setFreq] = React.useState('one-off');
  const [amt, setAmt] = React.useState(25);
  const [giftAid, setGiftAid] = React.useState(false);
  const [f, setF] = React.useState({
    name: '',
    email: '',
    card: '',
    exp: '',
    cvc: ''
  });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('form');
  const set = k => e => {
    setF({
      ...f,
      [k]: e.target.value
    });
    if (errors[k]) setErrors({
      ...errors,
      [k]: undefined
    });
  };
  const validate = () => {
    const e = {};
    if (!amt || amt < 2) e.amt = 'Enter an amount of £2 or more.';
    if (!f.name.trim()) e.name = 'Enter your full name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = 'Enter a valid email address, like name@example.com.';
    if (f.card.replace(/\D/g, '').length < 15) e.card = 'Enter the long number on the front of your card.';
    if (!/^\d{2}\s?\/\s?\d{2}$/.test(f.exp)) e.exp = 'Enter expiry as MM/YY.';
    if (!/^\d{3,4}$/.test(f.cvc)) e.cvc = '3 or 4 digits on the back.';
    return e;
  };
  const submit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('loading');
    setTimeout(() => setStatus('done'), 1200);
  };
  const total = giftAid ? amt * 1.25 : amt;
  const fmt = n => '£' + (Number.isInteger(n) ? n : n.toFixed(2));
  const step = (n, t) => React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'baseline',
      paddingTop: 20,
      borderTop: 'var(--border-rule) solid var(--cs-ink)'
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontSize: 'var(--type-h4)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-h4)'
    }
  }, t));
  const trust = [['lock', 'Secure payment via JustGiving'], ['shield-check', 'Registered charity No. 1209616'], ['check', 'Net surplus split 50/50, published openly']];
  if (status === 'done') return React.createElement(Section, {
    bg: "white",
    innerStyle: {
      paddingTop: 'calc(var(--header-h) + var(--space-11))',
      minHeight: '80svh'
    }
  }, React.createElement("div", {
    className: "cs-grid"
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    },
    role: "status"
  }, React.createElement(Eyebrow, {
    accent: true
  }, "Donation confirmed"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontWeight: 600,
      fontSize: 'var(--type-display-l)',
      lineHeight: .95,
      letterSpacing: '-.045em'
    }
  }, "Thank you, ", f.name.split(' ')[0], "."), React.createElement(Body, {
    size: "body-l"
  }, "Your ", freq === 'monthly' ? 'monthly ' : '', "gift of ", fmt(amt), giftAid ? ' (' + fmt(total) + ' with Gift Aid)' : '', " is on its way to the shows and the charities they fund. A receipt is heading to ", f.email, "."), React.createElement("div", {
    className: "cs-stack-sm",
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, React.createElement(Button, {
    variant: "brand",
    arrow: true,
    onClick: () => go('Events')
  }, "Find an Event"), React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Transparency')
  }, "Where the money goes")))));
  return React.createElement(Section, {
    bg: "white",
    innerStyle: {
      paddingTop: 'calc(var(--header-h) + var(--space-9))'
    }
  }, React.createElement("div", {
    className: "cs-grid cs-collapse-md",
    style: {
      alignItems: 'start'
    }
  }, React.createElement("div", {
    style: {
      gridColumn: '1 / span 5',
      position: 'sticky',
      top: 'calc(var(--header-h) + 32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "Make a donation",
    title: "Every donation funds care, not overhead.",
    size: "h1",
    as: "h1"
  }), React.createElement(Body, {
    size: "body-l",
    style: {
      maxWidth: '34ch'
    }
  }, "Your support helps us bring people together through live music and fund vital work across the cancer charity sector."), React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, trust.map(([i, t]) => React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 15
    }
  }, React.createElement(Icon, {
    name: i,
    size: 18
  }), t))), React.createElement("div", {
    className: "cs-hide-sm",
    style: {
      aspectRatio: '4/3',
      background: 'url(' + D.img('donate-heart') + ') 45% 40%/cover',
      marginTop: 8
    }
  })), React.createElement("div", {
    style: {
      gridColumn: '7 / span 6',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, step('', 'Your gift'), React.createElement(FrequencyToggle, {
    value: freq,
    onChange: setFreq
  }), React.createElement(AmountSelector, {
    amounts: D.donation.amounts,
    value: amt,
    onChange: v => {
      setAmt(v);
      setErrors({
        ...errors,
        amt: undefined
      });
    },
    impact: D.impact,
    error: errors.amt
  }), step('', 'Payment'), React.createElement(Body, {
    size: "body-s"
  }, "Donations are currently taken securely through our JustGiving page, where you can also add Gift Aid. Choose your amount there; your selection here is just a guide."), React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    arrow: true,
    href: D.justGiving,
    target: "_blank",
    rel: "noopener noreferrer"
  }, 'Donate ' + (amt ? fmt(amt) : '') + (freq === 'monthly' ? ' a month' : '') + ' via JustGiving'), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: 20,
      background: 'var(--bg-bone)',
      borderRadius: 'var(--radius-tile)'
    }
  }, React.createElement("img", {
    src: "assets/qr/justgiving-qr.png",
    alt: "QR code for our JustGiving page",
    style: {
      width: 112,
      height: 112,
      display: 'block',
      flexShrink: 0,
      background: '#fff'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h4)',
      letterSpacing: 'var(--ls-h4)'
    }
  }, "On your phone?"), React.createElement(Body, {
    size: "body-s"
  }, "Scan to give on JustGiving."), React.createElement("a", {
    href: D.justGiving,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      wordBreak: 'break-all'
    }
  }, "justgiving.com/charity/thecancerstagedfoundation"))), React.createElement("div", {
    style: {
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h4)',
      letterSpacing: 'var(--ls-h4)'
    }
  }, "Considering a larger gift?"), React.createElement(Body, {
    size: "body-s"
  }, "Founding gifts from \xA310K help us build the engine behind every show."), React.createElement(TextLink, {
    onClick: () => go('Founding Circle')
  }, "Join the Founding Circle")), React.createElement(Body, {
    size: "caption",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "The Cancer Staged Foundation is a registered UK charity, No. 1209616. ", freq === 'monthly' ? 'Cancel your monthly gift anytime. ' : '', React.createElement(TextLink, {
    size: "sm",
    arrow: false,
    onClick: () => go('Transparency')
  }, "See where your money goes")))));
}
window.DonateScreen = DonateScreen;