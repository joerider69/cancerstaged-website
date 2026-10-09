/* @ds-bundle: {"format":4,"namespace":"CancerStagedDesignSystem_cc2fc3","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"RingArt","sourcePath":"components/core/RingArt.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"ICONS","sourcePath":"components/core/icons-data.js"},{"name":"AmountSelector","sourcePath":"components/donation/AmountSelector.jsx"},{"name":"FrequencyToggle","sourcePath":"components/donation/FrequencyToggle.jsx"},{"name":"Quote","sourcePath":"components/editorial/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/editorial/SectionHeading.jsx"},{"name":"StoryCard","sourcePath":"components/editorial/StoryCard.jsx"},{"name":"DateBlock","sourcePath":"components/events/DateBlock.jsx"},{"name":"EventListing","sourcePath":"components/events/EventListing.jsx"},{"name":"EventMeta","sourcePath":"components/events/EventMeta.jsx"},{"name":"FeaturedEvent","sourcePath":"components/events/FeaturedEvent.jsx"},{"name":"ProgrammeRow","sourcePath":"components/events/ProgrammeRow.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"NewsletterInput","sourcePath":"components/forms/NewsletterInput.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"FiftyFifty","sourcePath":"components/impact/FiftyFifty.jsx"},{"name":"Stat","sourcePath":"components/impact/Stat.jsx"},{"name":"TransparencyList","sourcePath":"components/impact/TransparencyList.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"PartnerAttribution","sourcePath":"components/partners/PartnerAttribution.jsx"},{"name":"PartnerWall","sourcePath":"components/partners/PartnerWall.jsx"},{"name":"Person","sourcePath":"components/people/Person.jsx"},{"name":"CTABand","sourcePath":"components/sections/CTABand.jsx"},{"name":"Hero","sourcePath":"components/sections/Hero.jsx"}],"sourceHashes":{"components/core/Button.jsx":"259f5c553251","components/core/Eyebrow.jsx":"abe21dde3337","components/core/Icon.jsx":"e22f758d199e","components/core/Logo.jsx":"d8a6311c9248","components/core/RingArt.jsx":"5a9ce274b045","components/core/TextLink.jsx":"9c30c40e22f5","components/core/icons-data.js":"d34fa3e8325b","components/donation/AmountSelector.jsx":"a7c6bf8b7f79","components/donation/FrequencyToggle.jsx":"400b8e598b44","components/editorial/Quote.jsx":"261bdbb3beb9","components/editorial/SectionHeading.jsx":"09caf99c3bd5","components/editorial/StoryCard.jsx":"f98a7fa64c26","components/events/DateBlock.jsx":"ff1aaadb947c","components/events/EventListing.jsx":"12739a31d6ae","components/events/EventMeta.jsx":"ff8f48f695a6","components/events/FeaturedEvent.jsx":"e0936142f649","components/events/ProgrammeRow.jsx":"bae73d403a0a","components/forms/Checkbox.jsx":"2bf634349600","components/forms/NewsletterInput.jsx":"dc98c9ed41e6","components/forms/Radio.jsx":"c237d26576e9","components/forms/Select.jsx":"1ee1f8897185","components/forms/TextInput.jsx":"1c2425838c42","components/impact/FiftyFifty.jsx":"571b93a93421","components/impact/Stat.jsx":"8d3a77f4107f","components/impact/TransparencyList.jsx":"e194f6e042d9","components/navigation/Breadcrumb.jsx":"808a62e1afea","components/navigation/Pagination.jsx":"9cd70b0ef563","components/navigation/SiteFooter.jsx":"6c244a58b233","components/navigation/SiteHeader.jsx":"cbd4c77b91ed","components/navigation/Tabs.jsx":"fbcc2ed97286","components/partners/PartnerAttribution.jsx":"491660173319","components/partners/PartnerWall.jsx":"e89553ac1129","components/people/Person.jsx":"2988ee2c051a","components/sections/CTABand.jsx":"323a0be52825","components/sections/Hero.jsx":"a1946e6f0c60","publish/js/data.js":"88c5fc2853ec","publish/js/donate-screen.jsx":"e6c27a586a49","publish/js/events-screens.jsx":"79871ad2576a","publish/js/home-screen.jsx":"c073321c4a43","publish/js/kit.jsx":"69cc3550a165","publish/js/page-screens.jsx":"a329ea0acdf1","publish/js/policy-screens.jsx":"4e19e8703e99","publish/js/stories-screens.jsx":"d6b808e44bdc","ui_kits/website/DonateScreen.jsx":"ad75a1d17b53","ui_kits/website/EventsScreens.jsx":"b4e91fdc25c8","ui_kits/website/HomeScreen.jsx":"a105f5dfe9ea","ui_kits/website/PageScreens.jsx":"ebbe86978cc6","ui_kits/website/PolicyScreens.jsx":"3cd0aca871b3","ui_kits/website/StoriesScreens.jsx":"b391ce751633","ui_kits/website/data.js":"0f9787ea027d","ui_kits/website/doc-page.js":"f52ae9c02fca","ui_kits/website/kit.jsx":"1bd4f3ba40dc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CancerStagedDesignSystem_cc2fc3 = window.CancerStagedDesignSystem_cc2fc3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'light',
  accent = false,
  as = 'div',
  style
}) {
  const Tag = as;
  const color = accent ? tone === 'dark' ? 'var(--cs-orange)' : 'var(--text-accent-on-light)' : tone === 'dark' ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 'var(--type-nav)',
      lineHeight: 1.25,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = 'orange',
  mark = false,
  height = 32,
  basePath = '',
  style,
  alt = 'Cancer Staged'
}) {
  const file = (mark ? 'mark-' : 'logo-v2-') + variant + '.png';
  return /*#__PURE__*/React.createElement("img", {
    src: basePath + 'assets/logo/' + file,
    alt: alt,
    style: {
      height,
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
      alignSelf: 'flex-start',
      flexShrink: 0,
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/RingArt.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function RingArt({
  color = 'orange',
  size = 480,
  image,
  basePath = '',
  animate = true,
  breathe = false,
  opacity = 1,
  style,
  className
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(!animate);
  useEffect(() => {
    if (!animate || !ref.current || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: .15
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  const mark = basePath + 'assets/logo/mark-' + (image ? 'white' : color) + '.png';
  const base = {
    width: size,
    height: size,
    flexShrink: 0,
    opacity: inView ? opacity : 0,
    transform: inView ? 'scale(1)' : 'scale(.96)',
    transition: 'opacity var(--dur-reveal) var(--ease-out), transform var(--dur-reveal) var(--ease-out)',
    pointerEvents: 'none',
    ...style
  };
  const inner = breathe ? {
    animation: 'cs-breathe 6s var(--ease-in-out) infinite'
  } : {};
  if (image) return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "aria-hidden": "true",
    className: className,
    style: base
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      WebkitMaskImage: 'url(' + mark + ')',
      maskImage: 'url(' + mark + ')',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      ...inner
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "aria-hidden": "true",
    className: className,
    style: base
  }, /*#__PURE__*/React.createElement("img", {
    src: mark,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      ...inner
    }
  }));
}
Object.assign(__ds_scope, { RingArt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RingArt.jsx", error: String((e && e.message) || e) }); }

// components/core/icons-data.js
try { (() => {
// Lucide icons (lucide-static@0.468.0, ISC) — inner SVG markup copied verbatim.
const ICONS = {
  "arrow-right": "<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />",
  "arrow-up-right": "<path d=\"M7 7h10v10\" /> <path d=\"M7 17 17 7\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />",
  "music": "<path d=\"M9 18V5l12-2v13\" /> <circle cx=\"6\" cy=\"18\" r=\"3\" /> <circle cx=\"18\" cy=\"16\" r=\"3\" />",
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /> <path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" />",
  "calendar": "<path d=\"M8 2v4\" /> <path d=\"M16 2v4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /> <path d=\"M3 10h18\" />",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /> <circle cx=\"12\" cy=\"10\" r=\"3\" />",
  "ticket": "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\" /> <path d=\"M13 5v2\" /> <path d=\"M13 17v2\" /> <path d=\"M13 11v2\" />",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /> <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />",
  "instagram": "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\" /> <path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\" /> <line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\" />",
  "youtube": "<path d=\"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17\" /> <path d=\"m10 15 5-3-5-3z\" />",
  "linkedin": "<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\" /> <rect width=\"4\" height=\"12\" x=\"2\" y=\"9\" /> <circle cx=\"4\" cy=\"4\" r=\"2\" />",
  "facebook": "<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\" />",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />",
  "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "play": "<polygon points=\"6 3 20 12 6 21 6 3\" />",
  "plus": "<path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "gift": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\" /> <path d=\"M12 8v13\" /> <path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\" /> <path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\" />",
  "hand-heart": "<path d=\"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16\" /> <path d=\"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\" /> <path d=\"m2 15 6 6\" /> <path d=\"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z\" />",
  "loader-circle": "<path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /> <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" />",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />",
  "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "arrow-down": "<path d=\"M12 5v14\" /> <path d=\"m19 12-7 7-7-7\" />"
};
Object.assign(__ds_scope, { ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/icons-data.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const inner = __ds_scope.ICONS[name];
  if (!inner) return null;
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    },
    ...rest
  });
}
const ICON_NAMES = Object.keys(__ds_scope.ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    h: 40,
    px: 16,
    fs: 14
  },
  md: {
    h: 48,
    px: 22,
    fs: 15
  },
  lg: {
    h: 56,
    px: 28,
    fs: 16
  }
};
function Button({
  variant = 'primary',
  tone = 'light',
  size = 'md',
  arrow = false,
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const dark = tone === 'dark';
  const V = {
    primary: dark ? {
      bg: 'var(--cs-warm-white)',
      fg: 'var(--cs-ink)',
      bd: 'var(--cs-warm-white)',
      hbg: 'var(--cs-bone)',
      hfg: 'var(--cs-ink)'
    } : {
      bg: 'var(--interactive-primary)',
      fg: 'var(--interactive-primary-text)',
      bd: 'var(--interactive-primary)',
      hbg: 'var(--hover-primary)',
      hfg: 'var(--interactive-primary-text)'
    },
    brand: {
      bg: 'var(--interactive-brand)',
      fg: 'var(--interactive-brand-text)',
      bd: 'var(--interactive-brand)',
      hbg: 'var(--hover-brand)',
      hfg: 'var(--interactive-brand-text)'
    },
    secondary: dark ? {
      bg: 'transparent',
      fg: 'var(--cs-warm-white)',
      bd: 'var(--cs-warm-white)',
      hbg: 'var(--cs-warm-white)',
      hfg: 'var(--cs-ink)'
    } : {
      bg: 'transparent',
      fg: 'var(--cs-ink)',
      bd: 'var(--cs-ink)',
      hbg: 'var(--cs-ink)',
      hfg: 'var(--cs-warm-white)'
    }
  }[variant] || {};
  const off = disabled || loading;
  const st = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    minHeight: s.h,
    padding: '0 ' + s.px + 'px',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    fontSize: s.fs,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    borderRadius: 'var(--radius-control)',
    border: 'var(--border-control) solid ' + (disabled ? 'var(--disabled-border)' : V.bd),
    background: disabled ? 'var(--disabled-bg)' : h && !off ? V.hbg : V.bg,
    color: disabled ? 'var(--disabled-text)' : h && !off ? V.hfg : V.fg,
    cursor: disabled ? 'not-allowed' : loading ? 'progress' : 'pointer',
    transform: p && !off ? 'translateY(1px)' : 'none',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-instant)',
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === 'a' ? href : undefined,
    type: Tag === 'button' ? type : undefined,
    onClick: off ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-busy": loading || undefined,
    "aria-disabled": disabled || undefined,
    style: st,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest), icon && !loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fs + 3
  }), /*#__PURE__*/React.createElement("span", null, children), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: s.fs + 3,
    style: {
      animation: 'cs-spin 900ms linear infinite'
    }
  }) : arrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: s.fs + 2,
    style: {
      transform: h && !off ? 'translateX(var(--move-s))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
const {
  useState
} = React;
function TextLink({
  children,
  href,
  onClick,
  arrow = true,
  icon,
  iconOnly = false,
  label,
  tone = 'light',
  size = 'md',
  external = false,
  style
}) {
  const [h, setH] = useState(false);
  const dark = tone === 'dark';
  const color = h ? dark ? 'var(--cs-orange)' : 'var(--text-accent-on-light)' : dark ? 'var(--cs-warm-white)' : 'var(--cs-ink)';
  const fs = size === 'sm' ? 14 : 16;
  const ic = external ? 'arrow-up-right' : icon || 'arrow-right';
  if (iconOnly) return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    "aria-label": label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 44,
      height: 44,
      display: 'inline-grid',
      placeItems: 'center',
      color,
      borderRadius: 'var(--radius-control)',
      border: 'var(--border-control) solid ' + (dark ? 'var(--border-inverse-subtle)' : 'var(--border-subtle)'),
      cursor: 'pointer',
      transition: 'color var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 20,
    style: {
      transform: h ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-heading)',
      fontSize: fs,
      fontWeight: 600,
      color,
      cursor: 'pointer',
      textDecoration: 'underline',
      textDecorationThickness: h ? '2px' : '1px',
      textUnderlineOffset: '.25em',
      transition: 'color var(--dur-fast)',
      ...style
    }
  }, children, arrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: fs,
    style: {
      transform: h ? 'translateX(var(--move-s))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/donation/AmountSelector.jsx
try { (() => {
const {
  useState
} = React;
function AmountSelector({
  amounts = [10, 25, 50, 100],
  value,
  onChange,
  impact = {},
  currency = '£',
  allowCustom = true,
  error,
  style
}) {
  const [custom, setCustom] = useState(amounts.includes(value) ? '' : value ? String(value) : '');
  const tile = on => ({
    height: 64,
    borderRadius: 'var(--radius-tile)',
    cursor: 'pointer',
    fontFamily: 'var(--font-heading)',
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: '-.02em',
    border: 'var(--border-control) solid ' + (on ? 'var(--cs-ink)' : 'var(--border-subtle)'),
    background: on ? 'var(--cs-ink)' : 'var(--surface-default)',
    color: on ? 'var(--cs-warm-white)' : 'var(--text-primary)',
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base), border-color var(--dur-base)'
  });
  const msg = impact[value];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": "Donation amount",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + amounts.length + ', minmax(0,1fr))',
      gap: 8
    }
  }, amounts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    role: "radio",
    "aria-checked": value === a && !custom,
    style: tile(value === a && !custom),
    onClick: () => {
      setCustom('');
      onChange && onChange(a);
    }
  }, currency, a))), allowCustom && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 56,
      border: 'var(--border-control) solid ' + (error ? 'var(--status-error)' : custom ? 'var(--cs-ink)' : 'var(--cs-warm-grey-light)'),
      borderRadius: 'var(--radius-control)',
      background: 'var(--surface-default)',
      padding: '0 16px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 20,
      fontWeight: 600
    }
  }, currency), /*#__PURE__*/React.createElement("input", {
    inputMode: "decimal",
    placeholder: "Other amount",
    value: custom,
    "aria-label": "Other amount in pounds",
    "aria-invalid": !!error || undefined,
    onChange: e => {
      const v = e.target.value.replace(/[^0-9.]/g, '');
      setCustom(v);
      onChange && onChange(v ? Number(v) : 0);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-heading)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      minHeight: 24,
      fontSize: 16,
      lineHeight: 1.45,
      color: error ? 'var(--status-error)' : 'var(--text-primary)'
    }
  }, error || (msg ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, currency, value), " ", msg) : value ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, currency, value), " goes straight to the shows and the charities they fund.") : '')));
}
Object.assign(__ds_scope, { AmountSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/donation/AmountSelector.jsx", error: String((e && e.message) || e) }); }

// components/donation/FrequencyToggle.jsx
try { (() => {
function FrequencyToggle({
  value = 'one-off',
  onChange,
  options = [{
    value: 'one-off',
    label: 'One-off'
  }, {
    value: 'monthly',
    label: 'Monthly'
  }],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": "Donation frequency",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + options.length + ', minmax(0,1fr))',
      padding: 4,
      gap: 4,
      background: 'var(--bg-bone)',
      borderRadius: 'var(--radius-tile)',
      ...style
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "radio",
      "aria-checked": on,
      onClick: () => onChange && onChange(o.value),
      style: {
        height: 48,
        border: 'none',
        borderRadius: 'var(--radius-control)',
        cursor: 'pointer',
        fontFamily: 'var(--font-heading)',
        fontSize: 16,
        fontWeight: 600,
        background: on ? 'var(--cs-ink)' : 'transparent',
        color: on ? 'var(--cs-warm-white)' : 'var(--text-primary)',
        transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { FrequencyToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/donation/FrequencyToggle.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Quote.jsx
try { (() => {
function Quote({
  children,
  name,
  role,
  tone = 'light',
  size = 'md',
  style
}) {
  const dark = tone === 'dark';
  const ink = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontWeight: 500,
      fontSize: size === 'lg' ? 'var(--type-h1)' : 'var(--type-quote)',
      lineHeight: 'var(--lh-quote)',
      letterSpacing: 'var(--ls-quote)',
      color: ink,
      textWrap: 'balance',
      maxWidth: '24ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, '\u201C'), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, '\u201D')), name && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-heading)',
      fontSize: 13,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: ink
    }
  }, /*#__PURE__*/React.createElement("span", null, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--text-inverse-secondary)' : tone === 'orange' ? ink : 'var(--text-secondary)'
    }
  }, role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Quote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeading.jsx
try { (() => {
const SIZES = {
  'display-xl': 'display-xl',
  'display-l': 'display-l',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3'
};
function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  size = 'h2',
  caps = false,
  tone = 'light',
  layout = 'stack',
  as = 'h2',
  eyebrowAccent = true,
  style
}) {
  const k = SIZES[size] || 'h2';
  const dark = tone === 'dark';
  const ink = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  const accentColor = tone === 'orange' ? 'var(--cs-warm-white)' : dark ? 'var(--cs-orange)' : 'var(--text-accent-on-light)';
  const Tag = as;
  const h = /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      color: ink,
      fontFamily: caps ? 'var(--font-display)' : 'var(--font-heading)',
      fontWeight: caps ? 400 : 600,
      fontSize: 'var(--type-' + k + ')',
      lineHeight: !caps && k.startsWith('display') ? .95 : 'var(--lh-' + k + ')',
      letterSpacing: caps ? 0 : k.startsWith('display') ? '-.045em' : 'var(--ls-' + k + ')',
      textTransform: caps ? 'uppercase' : 'none',
      textWrap: 'balance',
      maxWidth: caps ? '14ch' : '20ch'
    }
  }, title, accent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === 'orange' ? ink : accentColor
    }
  }, accent)));
  const ld = lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontWeight: 400,
      fontSize: 'var(--type-body-l)',
      lineHeight: 'var(--lh-body-l)',
      letterSpacing: 'var(--ls-body-l)',
      color: ink,
      maxWidth: 'var(--measure-lead)',
      textWrap: 'pretty'
    }
  }, lead);
  if (layout === 'hang') return /*#__PURE__*/React.createElement("div", {
    className: "cs-grid",
    style: {
      alignItems: 'end',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / span 6',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'dark' : 'light',
    accent: tone !== 'orange' && eyebrowAccent
  }, eyebrow), h), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / span 5'
    }
  }, ld));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'dark' : 'light',
    accent: tone !== 'orange' && eyebrowAccent
  }, eyebrow), h, ld && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, ld));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/editorial/StoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function StoryCard({
  variant = 'secondary',
  image,
  category,
  date,
  title,
  excerpt,
  readTime,
  tone = 'light',
  onClick,
  style
}) {
  const [h, setH] = useState(false);
  const dark = tone === 'dark';
  const ink = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)';
  const meta = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: sub
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink
    }
  }, category), date && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", null, date)), readTime && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", null, readTime)));
  const pic = ratio => /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--cs-ink)',
      flexShrink: 0,
      width: variant === 'compact' ? 112 : '100%'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: h ? 'scale(var(--scale-hover))' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }));
  const tStyle = k => ({
    margin: 0,
    color: ink,
    fontWeight: 600,
    fontSize: 'var(--type-' + k + ')',
    lineHeight: 'var(--lh-' + k + ')',
    letterSpacing: 'var(--ls-' + k + ')',
    textWrap: 'balance',
    textDecoration: h ? 'underline' : 'none',
    textDecorationThickness: 2,
    textUnderlineOffset: '.15em'
  });
  const wrap = {
    cursor: 'pointer',
    ...style
  };
  const ev = {
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  };
  if (variant === 'compact') return /*#__PURE__*/React.createElement("article", _extends({}, ev, {
    style: {
      ...wrap,
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start',
      paddingTop: 20,
      borderTop: '1px solid ' + (dark ? 'var(--border-inverse-subtle)' : 'var(--border-subtle)')
    }
  }), pic('1/1'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, meta, /*#__PURE__*/React.createElement("h3", {
    style: tStyle('h4')
  }, title)));
  const lead = variant === 'lead';
  return /*#__PURE__*/React.createElement("article", _extends({}, ev, {
    style: {
      ...wrap,
      display: 'flex',
      flexDirection: 'column',
      gap: lead ? 24 : 16
    }
  }), pic(lead ? '3/2' : '4/3'), meta, /*#__PURE__*/React.createElement("h3", {
    style: tStyle(lead ? 'h2' : 'h3')
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: lead ? 'var(--font-heading)' : 'var(--font-body)',
      margin: 0,
      fontSize: lead ? 'var(--type-h4)' : 'var(--type-body-s)',
      lineHeight: lead ? 1.35 : 'var(--lh-body-s)',
      color: lead ? ink : sub,
      maxWidth: '48ch'
    }
  }, excerpt));
}
Object.assign(__ds_scope, { StoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/StoryCard.jsx", error: String((e && e.message) || e) }); }

// components/events/DateBlock.jsx
try { (() => {
function DateBlock({
  day,
  month,
  year,
  weekday,
  tone = 'light',
  size = 'md',
  accent = false,
  style
}) {
  const dark = tone === 'dark';
  const fs = size === 'lg' ? 'var(--type-display-l)' : size === 'sm' ? 'var(--type-h3)' : 'var(--type-date)';
  const numColor = accent ? dark ? 'var(--event-date)' : 'var(--text-accent-on-light)' : dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 'var(--lh-date)',
      letterSpacing: '-.03em',
      fontVariantNumeric: 'tabular-nums',
      color: numColor
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--type-meta)',
      letterSpacing: 'var(--ls-meta)',
      textTransform: 'uppercase',
      lineHeight: 1.25,
      color: dark ? 'var(--event-meta-on-dark)' : 'var(--event-meta)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, month, year ? ' ' + year : ''), weekday && /*#__PURE__*/React.createElement("span", null, weekday)));
}
Object.assign(__ds_scope, { DateBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/DateBlock.jsx", error: String((e && e.message) || e) }); }

// components/events/EventMeta.jsx
try { (() => {
function EventMeta({
  items = [],
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 10px',
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--type-meta)',
      letterSpacing: 'var(--ls-meta)',
      textTransform: 'uppercase',
      lineHeight: 1.35,
      color: dark ? 'var(--event-meta-on-dark)' : 'var(--event-meta)',
      ...style
    }
  }, items.filter(Boolean).map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { EventMeta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/EventMeta.jsx", error: String((e && e.message) || e) }); }

// components/events/EventListing.jsx
try { (() => {
const {
  useState
} = React;
function EventListing({
  image,
  day,
  month,
  year,
  weekday,
  title,
  venue,
  city,
  charity,
  status,
  cta = 'Register Interest',
  onCta,
  onClick,
  style
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("article", {
    className: "cs-grid",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      alignItems: 'center',
      padding: '32px 0',
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      gridColumn: 'span 4',
      aspectRatio: '3/2',
      overflow: 'hidden',
      background: 'var(--cs-ink)',
      cursor: 'pointer'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: h ? 'scale(var(--scale-hover))' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DateBlock, {
    day: day,
    month: month,
    year: year,
    weekday: weekday
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 4',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontSize: 'var(--type-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 600,
      cursor: 'pointer',
      textDecoration: h ? 'underline' : 'none',
      textDecorationThickness: 2,
      textUnderlineOffset: '.18em'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.EventMeta, {
    items: [venue, city]
  }), charity && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Local charity partner: "), charity)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10
    }
  }, status && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      padding: '4px 8px',
      borderRadius: 4,
      background: status === 'On sale' ? 'var(--cs-orange)' : 'var(--bg-peach)',
      color: 'var(--cs-ink)'
    }
  }, status), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: status === 'On sale' ? 'brand' : 'secondary',
    size: "sm",
    arrow: true,
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { EventListing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/EventListing.jsx", error: String((e && e.message) || e) }); }

// components/events/FeaturedEvent.jsx
try { (() => {
function FeaturedEvent({
  image,
  eyebrow = 'Next up',
  day,
  month,
  year,
  weekday,
  title,
  venue,
  location,
  time,
  charity,
  description,
  cta = 'Get Tickets',
  onCta,
  secondary = 'Event Details',
  onSecondary,
  imageSide = 'left',
  style
}) {
  const img = /*#__PURE__*/React.createElement("div", {
    key: "i",
    style: {
      gridColumn: imageSide === 'left' ? '1 / span 7' : '6 / span 7',
      gridRow: 1,
      aspectRatio: '4/3',
      background: 'var(--cs-ink) center/cover no-repeat',
      backgroundImage: image ? 'url(' + image + ')' : undefined
    }
  });
  const txt = /*#__PURE__*/React.createElement("div", {
    key: "t",
    style: {
      gridColumn: imageSide === 'left' ? '9 / span 4' : '1 / span 4',
      gridRow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    accent: true
  }, eyebrow), /*#__PURE__*/React.createElement(__ds_scope.DateBlock, {
    day: day,
    month: month,
    year: year,
    weekday: weekday,
    size: "lg"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontSize: 'var(--type-h1)',
      lineHeight: 'var(--lh-h1)',
      letterSpacing: 'var(--ls-h1)',
      fontWeight: 600,
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.EventMeta, {
    items: [venue, location, time]
  }), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--type-body)',
      lineHeight: 'var(--lh-body)',
      maxWidth: '40ch'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    arrow: true,
    onClick: onCta
  }, cta), secondary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onSecondary
  }, secondary)), charity && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "Local charity partner"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 17,
      fontWeight: 600
    }
  }, charity)));
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-grid cs-collapse-md",
    style: {
      alignItems: 'center',
      ...style
    }
  }, imageSide === 'left' ? [img, txt] : [txt, img]);
}
Object.assign(__ds_scope, { FeaturedEvent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/FeaturedEvent.jsx", error: String((e && e.message) || e) }); }

// components/events/ProgrammeRow.jsx
try { (() => {
const {
  useState
} = React;
function ProgrammeRow({
  day,
  month,
  weekday,
  city,
  venue,
  charity,
  status,
  charityLabel = 'Local charity partner',
  tone = 'dark',
  onClick,
  href,
  style
}) {
  const [h, setH] = useState(false);
  const dark = tone === 'dark';
  const ink = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = dark ? 'var(--event-meta-on-dark)' : 'var(--event-meta)';
  const mono = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--type-meta)',
    letterSpacing: 'var(--ls-meta)',
    textTransform: 'uppercase',
    lineHeight: 1.35
  };
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    role: onClick ? 'link' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    className: "cs-grid",
    style: {
      alignItems: 'center',
      rowGap: 8,
      padding: '28px 0',
      borderTop: '1px solid ' + (dark ? 'var(--border-inverse-subtle)' : 'var(--border-subtle)'),
      cursor: 'pointer',
      textDecoration: 'none',
      color: ink,
      background: h ? dark ? 'var(--hover-row-dark)' : 'var(--hover-row-light)' : 'transparent',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h2)',
      lineHeight: 1,
      letterSpacing: '-.03em',
      fontVariantNumeric: 'tabular-nums',
      color: h ? 'var(--cs-orange)' : ink,
      transition: 'color var(--dur-fast)'
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      color: sub
    }
  }, month, weekday ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), weekday) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      gridColumn: 'span 4',
      fontWeight: 600,
      fontSize: 'var(--type-h2)',
      lineHeight: 1,
      letterSpacing: '-.03em',
      textTransform: 'uppercase'
    }
  }, city), /*#__PURE__*/React.createElement("div", {
    className: "cs-hide-sm",
    style: {
      gridColumn: 'span 3',
      ...mono,
      color: sub
    }
  }, venue), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      fontSize: 15,
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      display: 'block',
      color: sub,
      fontSize: 11
    }
  }, charityLabel), charity), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 1',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 12
    }
  }, status && /*#__PURE__*/React.createElement("span", {
    className: "cs-hide-sm",
    style: {
      ...mono,
      fontSize: 11,
      color: status === 'On sale' ? 'var(--cs-orange)' : sub
    }
  }, status), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 24,
    strokeWidth: 1.75,
    style: {
      color: h ? 'var(--cs-orange)' : ink,
      transform: h ? 'translateX(var(--move-s))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), color var(--dur-fast)'
    }
  })));
}
Object.assign(__ds_scope, { ProgrammeRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/ProgrammeRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  error,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      minHeight: 44,
      fontFamily: 'var(--font-heading)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      width: 24,
      height: 24,
      marginTop: 1,
      borderRadius: 4,
      display: 'grid',
      placeItems: 'center',
      border: 'var(--border-control) solid ' + (error ? 'var(--status-error)' : 'var(--cs-ink)'),
      background: checked ? 'var(--cs-ink)' : 'var(--surface-default)',
      color: 'var(--cs-warm-white)',
      transition: 'background var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 16,
      fontWeight: 600,
      color: disabled ? 'var(--disabled-text)' : 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterInput.jsx
try { (() => {
const {
  useState
} = React;
function NewsletterInput({
  placeholder = 'Your email address',
  tone = 'dark',
  label = 'Email address',
  onSubmit,
  style
}) {
  const [v, setV] = useState('');
  const [state, setState] = useState('idle');
  const dark = tone === 'dark';
  const submit = e => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      setState('error');
      return;
    }
    setState('done');
    onSubmit && onSubmit(v);
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 420,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)'
    },
    htmlFor: "cs-nl"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: "cs-nl",
    value: v,
    onChange: e => {
      setV(e.target.value);
      setState('idle');
    },
    placeholder: placeholder,
    type: "email",
    autoComplete: "email",
    disabled: state === 'done',
    "aria-invalid": state === 'error' || undefined,
    style: {
      flex: 1,
      minWidth: 0,
      height: 52,
      padding: '0 16px',
      fontFamily: 'var(--font-heading)',
      fontSize: 16,
      background: dark ? 'transparent' : 'var(--surface-default)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
      border: 'var(--border-control) solid ' + (state === 'error' ? 'var(--status-error)' : dark ? 'var(--border-inverse-subtle)' : 'var(--cs-ink)'),
      borderRadius: 'var(--radius-control)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Subscribe",
    style: {
      width: 52,
      height: 52,
      flexShrink: 0,
      border: 'none',
      borderRadius: 'var(--radius-control)',
      background: 'var(--cs-orange)',
      color: 'var(--cs-ink)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: state === 'done' ? 'check' : 'arrow-right',
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      fontSize: 14,
      minHeight: 20,
      color: state === 'error' ? dark ? '#FF9A85' : 'var(--status-error)' : dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
    }
  }, state === 'error' ? 'Enter a valid email address.' : state === 'done' ? 'You\u2019re on the list. See you down the front.' : 'Monthly at most. Unsubscribe anytime.'));
}
Object.assign(__ds_scope, { NewsletterInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  onChange,
  legend,
  layout = 'stack',
  style
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, legend && /*#__PURE__*/React.createElement("legend", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 15,
      fontWeight: 600,
      marginBottom: 12,
      padding: 0
    }
  }, legend), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: layout === 'row' ? 'row' : 'column',
      flexWrap: 'wrap',
      gap: layout === 'row' ? 24 : 4
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 44,
        cursor: 'pointer',
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      onChange: () => onChange && onChange(v),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        border: 'var(--border-control) solid var(--cs-ink)',
        display: 'grid',
        placeItems: 'center',
        background: 'var(--surface-default)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--cs-ink)'
      }
    })), l);
  })));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useId
} = React;
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  hint,
  error,
  disabled = false,
  style
}) {
  const id = useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-heading)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 15,
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": !!error || undefined,
    style: {
      width: '100%',
      height: 52,
      padding: '0 44px 0 16px',
      appearance: 'none',
      fontFamily: 'inherit',
      fontSize: 17,
      color: 'var(--text-primary)',
      background: disabled ? 'var(--disabled-bg)' : 'var(--surface-default)',
      border: 'var(--border-control) solid ' + (error ? 'var(--status-error)' : 'var(--cs-warm-grey-light)'),
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20,
    style: {
      position: 'absolute',
      right: 14,
      top: 16,
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    role: error ? 'alert' : undefined,
    style: {
      fontSize: 14,
      color: error ? 'var(--status-error)' : 'var(--text-secondary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
const {
  useId,
  useState
} = React;
function TextInput({
  label,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  hint,
  error,
  success,
  required = false,
  optional = false,
  disabled = false,
  tone = 'light',
  autoComplete,
  inputMode,
  name,
  style
}) {
  const id = useId();
  const [focus, setFocus] = useState(false);
  const dark = tone === 'dark';
  const bd = error ? 'var(--status-error)' : success ? 'var(--status-success)' : focus ? dark ? 'var(--cs-orange)' : 'var(--cs-ink)' : dark ? 'var(--border-inverse-subtle)' : 'var(--cs-warm-grey-light)';
  const msg = error || success || hint;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-heading)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 15,
      fontWeight: 600,
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, label, optional && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
    }
  }, " (optional)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    autoComplete: autoComplete,
    inputMode: inputMode,
    "aria-invalid": !!error || undefined,
    "aria-describedby": msg ? id + '-msg' : undefined,
    onFocus: () => setFocus(true),
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      width: '100%',
      height: 52,
      padding: '0 44px 0 16px',
      fontFamily: 'inherit',
      fontSize: 17,
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
      background: disabled ? 'var(--disabled-bg)' : dark ? 'var(--surface-on-dark)' : 'var(--surface-default)',
      border: 'var(--border-control) solid ' + bd,
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px ' + (dark ? 'rgba(255,106,40,.35)' : 'rgba(17,17,17,.12)') : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }), (error || success) && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: error ? 'circle-alert' : 'circle-check',
    size: 20,
    color: error ? 'var(--status-error)' : 'var(--status-success)',
    style: {
      position: 'absolute',
      right: 14,
      top: 16
    }
  })), msg && /*#__PURE__*/React.createElement("div", {
    id: id + '-msg',
    role: error ? 'alert' : undefined,
    style: {
      fontSize: 14,
      color: error ? 'var(--status-error)' : success ? 'var(--status-success)' : dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
    }
  }, msg));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/impact/FiftyFifty.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function FiftyFifty({
  left = 'Local cancer charity',
  right = 'National grants pool',
  caption,
  tone = 'orange',
  style
}) {
  const ref = useRef(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIn(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setIn(true);
        io.disconnect();
      }
    }, {
      threshold: .3
    });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const ink = tone === 'dark' ? 'var(--text-inverse)' : 'var(--cs-ink)';
  const num = {
    fontFamily: 'var(--font-heading)',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    fontSize: 'clamp(120px, 21vw, 300px)',
    lineHeight: .8,
    letterSpacing: '0',
    fontVariantNumeric: 'tabular-nums',
    color: ink,
    transition: 'transform var(--dur-reveal) var(--ease-out)'
  };
  const lab = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--type-meta)',
    letterSpacing: 'var(--ls-meta)',
    textTransform: 'uppercase',
    color: ink,
    lineHeight: 1.35
  };
  return /*#__PURE__*/React.createElement("figure", {
    ref: ref,
    "aria-label": '50 percent to ' + left + ', 50 percent to ' + right,
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      justifyContent: 'start',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...num,
      transform: inView ? 'none' : 'translateX(calc(var(--move-m) * -1))'
    }
  }, "50"), /*#__PURE__*/React.createElement("span", {
    className: "cs-nowrap",
    style: lab
  }, left)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 3,
      alignSelf: 'stretch',
      background: ink,
      margin: '0 clamp(16px,3vw,48px)',
      transform: 'skewX(-14deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...num,
      transform: inView ? 'none' : 'translateX(var(--move-m))'
    }
  }, "50"), /*#__PURE__*/React.createElement("span", {
    className: "cs-nowrap",
    style: lab
  }, right))), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "cs-nowrap",
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--type-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 500,
      color: ink
    }
  }, caption));
}
Object.assign(__ds_scope, { FiftyFifty });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/impact/FiftyFifty.jsx", error: String((e && e.message) || e) }); }

// components/impact/Stat.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function Stat({
  value,
  prefix = '',
  suffix = '',
  label,
  note,
  tone = 'light',
  accent = false,
  size = 'md',
  layout = 'stack',
  countUp = true,
  style
}) {
  const dark = tone === 'dark';
  const ink = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  const num = typeof value === 'number';
  const [shown, setShown] = useState(num && countUp ? 0 : value);
  const ref = useRef(null);
  useEffect(() => {
    if (!num || !countUp) {
      setShown(value);
      return;
    }
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setShown(value);
      return;
    }
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min(1, (t - t0) / 900);
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, {
      threshold: .3
    });
    ref.current && io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, num, countUp]);
  if (layout === 'inline') return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-label": prefix + value + suffix,
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: size === 'sm' ? 'var(--type-h1)' : 'var(--type-date)',
      lineHeight: 1,
      letterSpacing: '-.04em',
      fontVariantNumeric: 'tabular-nums',
      color: accent ? 'var(--cs-orange)' : ink
    }
  }, prefix, shown, suffix), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.25,
      color: ink,
      maxWidth: '14ch'
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-label": prefix + value + suffix,
    style: {
      fontWeight: 600,
      fontSize: size === 'sm' ? 'var(--type-h1)' : 'var(--type-stat)',
      lineHeight: 'var(--lh-stat)',
      letterSpacing: 'var(--ls-stat)',
      fontVariantNumeric: 'tabular-nums',
      color: accent ? 'var(--cs-orange)' : ink
    }
  }, prefix, shown, suffix), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 13,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      lineHeight: 1.35,
      color: ink,
      maxWidth: '28ch'
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-body-s)',
      lineHeight: 'var(--lh-body-s)',
      color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)',
      maxWidth: '34ch'
    }
  }, note));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/impact/Stat.jsx", error: String((e && e.message) || e) }); }

// components/impact/TransparencyList.jsx
try { (() => {
function TransparencyList({
  items = [],
  tone = 'light',
  columns = 3,
  style
}) {
  const dark = tone === 'dark';
  const ink = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  const span = Math.floor(12 / columns);
  return /*#__PURE__*/React.createElement("dl", {
    className: "cs-grid",
    style: {
      margin: 0,
      rowGap: 48,
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    style: {
      gridColumn: 'span ' + span,
      borderTop: 'var(--border-rule) solid ' + ink,
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, it.value && /*#__PURE__*/React.createElement("dd", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      order: 0,
      fontWeight: 600,
      fontSize: 'var(--type-h1)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-h1)',
      color: ink
    }
  }, it.value), /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--type-h4)',
      lineHeight: 'var(--lh-h4)',
      color: ink
    }
  }, it.title), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: 'var(--type-body-s)',
      lineHeight: 'var(--lh-body-s)',
      color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)',
      maxWidth: '38ch'
    }
  }, it.body))));
}
Object.assign(__ds_scope, { TransparencyList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/impact/TransparencyList.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  tone = 'light',
  onNavigate,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: style
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: it,
      style: {
        display: 'flex',
        gap: 8,
        whiteSpace: 'nowrap',
        color: last ? dark ? 'var(--text-inverse)' : 'var(--text-primary)' : dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page"
    }, it) : /*#__PURE__*/React.createElement("a", {
      onClick: () => onNavigate && onNavigate(it),
      style: {
        cursor: 'pointer',
        color: 'inherit'
      }
    }, it), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style
}) {
  const btn = (on, dis) => ({
    minWidth: 44,
    height: 44,
    padding: '0 12px',
    display: 'grid',
    placeItems: 'center',
    fontFamily: 'var(--font-heading)',
    fontSize: 14,
    borderRadius: 'var(--radius-control)',
    border: 'var(--border-control) solid ' + (on ? 'var(--cs-ink)' : 'var(--border-subtle)'),
    background: on ? 'var(--cs-ink)' : 'transparent',
    color: on ? 'var(--cs-warm-white)' : dis ? 'var(--disabled-text)' : 'var(--cs-ink)',
    cursor: dis ? 'not-allowed' : 'pointer'
  });
  const pages = Array.from({
    length: total
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagination",
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn(false, page === 1),
    disabled: page === 1,
    onClick: () => onChange && onChange(page - 1),
    "aria-label": "Previous page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-left",
    size: 18
  })), pages.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    style: btn(n === page),
    "aria-current": n === page ? 'page' : undefined,
    onClick: () => onChange && onChange(n)
  }, String(n).padStart(2, '0'))), /*#__PURE__*/React.createElement("button", {
    style: btn(false, page === total),
    disabled: page === total,
    onClick: () => onChange && onChange(page + 1),
    "aria-label": "Next page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const GROUPS = [['Explore', ['About', 'What We Do', 'Events', 'Stories']], ['Get involved', ['Find an Event', 'Donate', 'Brand Partnerships', 'Founding Circle', 'Partners', 'Contact']], ['Accountability', ['Transparency', 'Our Trustees', 'Annual Report']]];
const SOCIAL = [['sq-instagram-v2.png', 'Instagram'], ['sq-youtube.png', 'YouTube'], ['sq-linkedin.png', 'LinkedIn'], ['sq-facebook.png', 'Facebook']];
function SiteFooter({
  onNavigate,
  basePath = '',
  rings = true,
  socialLinks = {},
  style
}) {
  const head = {
    fontFamily: 'var(--font-heading)',
    fontWeight: 500,
    fontSize: 'var(--type-nav)',
    lineHeight: 1.25,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: 'var(--cs-orange)',
    margin: '0 0 16px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "cs-dark",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-after-dark)',
      color: 'var(--text-inverse)',
      ...style
    }
  }, rings && /*#__PURE__*/React.createElement(__ds_scope.RingArt, {
    color: "orange",
    size: 720,
    basePath: basePath,
    opacity: .9,
    style: {
      position: 'absolute',
      right: -260,
      bottom: -300
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-container",
    style: {
      position: 'relative',
      paddingBlock: 'var(--space-11) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-grid",
    style: {
      rowGap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 5',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontSize: 'var(--type-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 600
    }
  }, "Get the line-up before anyone else. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900
    }
  }, "Sign up.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontSize: 'var(--type-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 900,
      color: 'var(--cs-orange)'
    }
  }, "Let", '\u2019', "s say no to cancer.")), /*#__PURE__*/React.createElement(__ds_scope.NewsletterInput, {
    tone: "dark"
  })), GROUPS.map(([t, ls], i) => /*#__PURE__*/React.createElement("nav", {
    key: t,
    "aria-label": t,
    style: {
      gridColumn: i === 0 ? '7 / span 2' : 'span 2'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: head
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ls.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate(l),
    style: {
      cursor: 'pointer',
      fontSize: 16,
      textDecoration: 'none',
      color: 'var(--text-inverse)'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-11)',
      paddingTop: 24,
      borderTop: '1px solid var(--border-inverse-subtle)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, SOCIAL.map(([file, l]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    "aria-label": l,
    href: socialLinks[l.toLowerCase()] || undefined,
    target: socialLinks[l.toLowerCase()] ? '_blank' : undefined,
    rel: "noopener noreferrer",
    style: {
      width: 44,
      height: 44,
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      borderRadius: 'var(--radius-control)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: basePath + 'assets/icons/social/' + file,
    alt: "",
    style: {
      width: 32,
      height: 32,
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: '1 1 320px',
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      letterSpacing: '.02em',
      color: 'var(--text-inverse-secondary)'
    }
  }, "\xA9 2026 The Cancer Staged Foundation \xB7 Registered charity in England & Wales No. 1209616"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      fontSize: 14
    }
  }, ['Privacy', 'Accessibility', 'Terms'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate && onNavigate(l),
    style: {
      color: 'var(--text-inverse-secondary)',
      cursor: 'pointer'
    }
  }, l))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useEffect,
  useState
} = React;
const LINKS = ['About', 'What We Do', 'Events', 'Stories', 'Transparency', 'For Brands'];
function SiteHeader({
  links = LINKS,
  active,
  onNavigate,
  onDonate,
  onFindEvent,
  variant = 'solid',
  logoOnPhoto = 'orange',
  minimal = false,
  basePath = '',
  scrollTarget,
  style
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = scrollTarget || window;
    const f = () => setScrolled((t.scrollY ?? t.scrollTop) > 24);
    f();
    t.addEventListener('scroll', f, {
      passive: true
    });
    return () => t.removeEventListener('scroll', f);
  }, [scrollTarget]);
  const overlay = variant === 'overlay' && !scrolled && !open;
  const go = l => {
    setOpen(false);
    onNavigate && onNavigate(l);
  };
  const fg = overlay ? 'var(--cs-warm-white)' : 'var(--cs-ink)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: variant === 'overlay' ? 'fixed' : 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: scrolled ? 'var(--header-h-scrolled)' : 'var(--header-h)',
      background: overlay ? 'transparent' : 'var(--bg-page)',
      borderBottom: '1px solid ' + (scrolled && !overlay ? 'var(--border-subtle)' : 'transparent'),
      transition: 'height var(--dur-base) var(--ease-standard), background var(--dur-base), border-color var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-container",
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('Home'),
    style: {
      cursor: 'pointer'
    },
    "aria-label": "Cancer Staged home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: overlay ? logoOnPhoto : 'orange',
    height: scrolled ? 39 : 45,
    basePath: basePath,
    style: {
      transition: 'height var(--dur-base)'
    }
  })), minimal ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 14
  }), " Secure donation") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "cs-desk",
    "aria-label": "Primary",
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => go(l),
    "aria-current": active === l ? 'page' : undefined,
    style: {
      cursor: 'pointer',
      fontSize: 'var(--type-nav)',
      fontWeight: 500,
      color: fg,
      textDecoration: active === l ? 'underline' : 'none',
      textDecorationThickness: 2,
      textUnderlineOffset: '.45em',
      textDecorationColor: 'var(--cs-orange)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "cs-desk",
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    tone: overlay ? 'dark' : 'light',
    size: "sm",
    onClick: onDonate
  }, "Donate"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    size: "sm",
    onClick: onFindEvent
  }, "Find an Event")), /*#__PURE__*/React.createElement("button", {
    className: "cs-mob",
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    "aria-label": open ? 'Close menu' : 'Open menu',
    style: {
      marginLeft: 'auto',
      width: 44,
      height: 44,
      border: 'none',
      background: 'none',
      color: open ? 'var(--cs-ink)' : fg,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 24
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: "cs-mob",
    style: {
      position: 'fixed',
      inset: 'var(--header-h) 0 0 0',
      background: 'var(--bg-page)',
      zIndex: 49,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-container",
    style: {
      paddingBlock: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => go(l),
    style: {
      fontFamily: 'var(--font-heading)',
      cursor: 'pointer',
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.25,
      padding: '8px 0',
      borderBottom: '1px solid var(--border-subtle)',
      textDecoration: 'none',
      color: active === l ? 'var(--text-accent-on-light)' : 'var(--cs-ink)'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    fullWidth: true,
    arrow: true,
    onClick: () => {
      setOpen(false);
      onFindEvent && onFindEvent();
    }
  }, "Find an Event"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => {
      setOpen(false);
      onDonate && onDonate();
    }
  }, "Donate")))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 32,
      overflowX: 'auto',
      borderBottom: '1px solid ' + (dark ? 'var(--border-inverse-subtle)' : 'var(--border-subtle)'),
      ...style
    }
  }, tabs.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t),
      style: {
        flexShrink: 0,
        minHeight: 44,
        background: 'none',
        border: 'none',
        padding: '0 0 14px',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-heading)',
        fontSize: 16,
        fontWeight: on ? 600 : 500,
        color: on ? dark ? 'var(--text-inverse)' : 'var(--text-primary)' : dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)',
        borderBottom: 'var(--border-rule) solid ' + (on ? 'var(--cs-orange)' : 'transparent'),
        transition: 'color var(--dur-fast)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/partners/PartnerAttribution.jsx
try { (() => {
function PartnerAttribution({
  name,
  logo,
  label = 'Local charity partner',
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 24,
      height: 1,
      background: dark ? 'var(--border-inverse-subtle)' : 'var(--cs-warm-grey-light)'
    }
  }), logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: name,
    style: {
      height: 32
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16,
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, name));
}
Object.assign(__ds_scope, { PartnerAttribution });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partners/PartnerAttribution.jsx", error: String((e && e.message) || e) }); }

// components/partners/PartnerWall.jsx
try { (() => {
function PartnerWall({
  partners = [],
  columns = 4,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  const line = dark ? 'var(--border-inverse-subtle)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, ' + Math.round(1280 / columns - 24) + 'px), 1fr))',
      borderTop: '1px solid ' + line,
      borderLeft: '1px solid ' + line,
      ...style
    }
  }, partners.map(p => {
    const o = typeof p === 'string' ? {
      name: p
    } : p;
    return /*#__PURE__*/React.createElement("li", {
      key: o.name,
      style: {
        aspectRatio: '3/2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 24,
        borderRight: '1px solid ' + line,
        borderBottom: '1px solid ' + line
      }
    }, o.region && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontSize: 11,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)'
      }
    }, o.region), o.logo ? /*#__PURE__*/React.createElement("img", {
      src: o.logo,
      alt: o.name,
      style: {
        maxHeight: 56,
        maxWidth: '80%',
        objectFit: 'contain',
        filter: dark ? 'brightness(0) invert(1)' : 'none'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 'var(--type-h4)',
        lineHeight: 1.15,
        letterSpacing: '-.015em',
        color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
        marginTop: 'auto'
      }
    }, o.name));
  }));
}
Object.assign(__ds_scope, { PartnerWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partners/PartnerWall.jsx", error: String((e && e.message) || e) }); }

// components/people/Person.jsx
try { (() => {
function Person({
  variant = 'team',
  name,
  role,
  bio,
  image,
  ratio = '4/5',
  tone = 'light',
  onClick,
  style
}) {
  const dark = tone === 'dark';
  const ink = dark ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = dark ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)';
  const mono = {
    fontFamily: 'var(--font-heading)',
    fontSize: 12,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: sub
  };
  if (variant === 'trustee') {
    const Tag = onClick ? 'button' : 'div';
    return /*#__PURE__*/React.createElement(Tag, {
      type: onClick ? 'button' : undefined,
      onClick: onClick,
      "aria-haspopup": onClick ? 'dialog' : undefined,
      style: {
        width: '100%',
        font: 'inherit',
        textAlign: 'left',
        background: 'none',
        border: 'none',
        borderTop: '1px solid ' + (dark ? 'var(--border-inverse-subtle)' : 'var(--border-subtle)'),
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 8,
        padding: '18px 0',
        color: ink,
        ...style
      },
      onMouseEnter: onClick ? e => {
        e.currentTarget.firstChild.style.color = 'var(--cs-orange)';
      } : undefined,
      onMouseLeave: onClick ? e => {
        e.currentTarget.firstChild.style.color = ink;
      } : undefined
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontSize: 'var(--type-h4)',
        fontWeight: 600,
        letterSpacing: 'var(--ls-h4)',
        color: ink,
        transition: 'color var(--dur-fast)'
      }
    }, name), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, role, onClick && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: 20,
        lineHeight: 1,
        color: 'var(--cs-orange)'
      }
    }, "+")));
  }
  const founder = variant === 'founder';
  const ph = /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: image ? 'url(' + image + ') center/cover' : dark ? 'var(--surface-on-dark)' : 'var(--bg-bone)',
      display: 'grid',
      placeItems: 'center'
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "Portrait"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: founder ? 20 : 14,
      ...style
    }
  }, ph, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: founder ? 'var(--type-h3)' : 'var(--type-h4)',
      lineHeight: 1.15,
      letterSpacing: 'var(--ls-h3)',
      color: ink
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, role)), bio && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: founder ? 'var(--type-body)' : 'var(--type-body-s)',
      lineHeight: 'var(--lh-body)',
      color: ink,
      maxWidth: '52ch'
    }
  }, bio));
}
Object.assign(__ds_scope, { Person });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/people/Person.jsx", error: String((e && e.message) || e) }); }

// components/sections/CTABand.jsx
try { (() => {
function CTABand({
  title,
  primary = 'Find an Event',
  secondary = 'Make a Donation',
  onPrimary,
  onSecondary,
  rings = true,
  basePath = '',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-orange)',
      color: 'var(--text-on-orange)',
      ...style
    }
  }, rings && /*#__PURE__*/React.createElement(__ds_scope.RingArt, {
    color: "white",
    size: 760,
    basePath: basePath,
    breathe: true,
    style: {
      position: 'absolute',
      right: -280,
      top: '50%',
      marginTop: -380
    },
    className: "cs-hide-sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-container cs-section",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: 0,
      fontWeight: 400,
      fontSize: 'var(--type-display-l)',
      lineHeight: 'var(--lh-display-l)',
      letterSpacing: 'var(--ls-display-l)',
      textTransform: 'uppercase',
      maxWidth: '15ch',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "cs-stack-sm",
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 48
    }
  }, primary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: onPrimary
  }, primary), secondary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "lg",
    arrow: true,
    onClick: onSecondary
  }, secondary))));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/sections/Hero.jsx
try { (() => {
function Hero({
  image,
  mobileImage,
  eyebrow,
  title,
  accent,
  lead,
  primary,
  secondary,
  onPrimary,
  onSecondary,
  meta,
  height = 'full',
  focal = 'center',
  leadMatchTitle = false,
  style
}) {
  const h = height === 'full' ? 'min(100svh, 960px)' : height === 'tall' ? 'min(80svh, 760px)' : 'min(64svh, 600px)';
  return /*#__PURE__*/React.createElement("section", {
    className: "cs-dark",
    style: {
      position: 'relative',
      minHeight: h,
      background: 'var(--bg-ink)',
      color: 'var(--text-inverse)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("picture", null, mobileImage && /*#__PURE__*/React.createElement("source", {
    media: "(max-width:767px)",
    srcSet: mobileImage
  }), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: focal
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-bottom)',
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-container",
    style: {
      position: 'relative',
      paddingTop: 'calc(var(--header-h) + var(--space-9))',
      paddingBottom: 'var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "dark",
    accent: true
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      width: leadMatchTitle ? 'fit-content' : undefined,
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: 0,
      fontWeight: 400,
      fontSize: 'var(--type-display-xl)',
      lineHeight: 'var(--lh-display-xl)',
      letterSpacing: 'var(--ls-display-xl)',
      textTransform: 'uppercase',
      maxWidth: leadMatchTitle ? 'none' : '11ch'
    }
  }, leadMatchTitle ? /*#__PURE__*/React.createElement("span", {
    className: "cs-nowrap"
  }, title) : title, accent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: leadMatchTitle ? 'cs-nowrap' : undefined,
    style: {
      color: 'var(--cs-orange)'
    }
  }, accent))), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      margin: 0,
      fontWeight: 400,
      fontSize: 'var(--type-body-l)',
      lineHeight: 'var(--lh-body-l)',
      letterSpacing: 'var(--ls-body-l)',
      ...(leadMatchTitle ? {
        width: 0,
        minWidth: '100%'
      } : {
        maxWidth: '26ch'
      }),
      textWrap: 'pretty'
    }
  }, lead)), (primary || secondary) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, primary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    size: "lg",
    arrow: true,
    onClick: onPrimary
  }, primary), secondary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    tone: "dark",
    size: "lg",
    onClick: onSecondary
  }, secondary)), meta && meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 24,
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-secondary)'
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: m
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", null, m))))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Hero.jsx", error: String((e && e.message) || e) }); }


















__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.RingArt = __ds_scope.RingArt;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.AmountSelector = __ds_scope.AmountSelector;

__ds_ns.FrequencyToggle = __ds_scope.FrequencyToggle;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StoryCard = __ds_scope.StoryCard;

__ds_ns.DateBlock = __ds_scope.DateBlock;

__ds_ns.EventListing = __ds_scope.EventListing;

__ds_ns.EventMeta = __ds_scope.EventMeta;

__ds_ns.FeaturedEvent = __ds_scope.FeaturedEvent;

__ds_ns.ProgrammeRow = __ds_scope.ProgrammeRow;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.NewsletterInput = __ds_scope.NewsletterInput;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.FiftyFifty = __ds_scope.FiftyFifty;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.TransparencyList = __ds_scope.TransparencyList;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.PartnerAttribution = __ds_scope.PartnerAttribution;

__ds_ns.PartnerWall = __ds_scope.PartnerWall;

__ds_ns.Person = __ds_scope.Person;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.Hero = __ds_scope.Hero;

})();
