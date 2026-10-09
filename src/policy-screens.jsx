const PoDS = window.CancerStagedDesignSystem_cc2fc3;

function PolicyPage({ go, eyebrow, title, updated, intro, sections }) {
  const { SectionHeading, Breadcrumb, TextLink } = PoDS;
  return (
    <div>
      <Section bg="white" innerStyle={{ paddingTop: 'calc(var(--header-h) + var(--space-9))', paddingBottom: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Breadcrumb items={['Home', title]} onNavigate={() => go('Home')} />
          <SectionHeading eyebrow={eyebrow} title={title} size="h1" as="h1" />
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 13, letterSpacing: 'var(--ls-meta)', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Last updated {updated}</div>
          <Body size="body-l" style={{ maxWidth: '40ch' }}>{intro}</Body>
        </div>
      </Section>
      <Section bg="white" innerStyle={{ paddingTop: 0 }}>
        <div className="cs-grid cs-collapse-md">
          <nav aria-label="On this page" className="cs-desk" style={{ gridColumn: '1 / span 3', position: 'sticky', top: 'calc(var(--header-h) + 32px)', alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {sections.map(([h], i) => <a key={h} href={'#s' + i} style={{ fontSize: 15, textDecoration: 'none', color: 'var(--text-secondary)' }}>{h}</a>)}
          </nav>
          <div style={{ gridColumn: '5 / span 8', display: 'flex', flexDirection: 'column', gap: 48 }}>
            {sections.map(([h, paras], i) => (
              <section key={h} id={'s' + i} style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 16, scrollMarginTop: 'calc(var(--header-h) + 24px)' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', margin: 0, fontWeight: 600, fontSize: 'var(--type-h4)', lineHeight: 'var(--lh-h4)' }}>{h}</h2>
                {paras.map((p, j) => Array.isArray(p)
                  ? <ul key={j} style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>{p.map((li) => <li key={li} style={{ fontSize: 'var(--type-body)', lineHeight: 'var(--lh-body)' }}>{li}</li>)}</ul>
                  : <Body key={j}>{p}</Body>)}
              </section>
            ))}
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[['Privacy', 'Privacy policy'], ['Terms', 'Terms of use'], ['Accessibility', 'Accessibility statement']].filter(([, t]) => t !== title).map(([k, t]) => <TextLink key={k} onClick={() => go(k)}>{t}</TextLink>)}
              <TextLink onClick={() => go('Contact')}>Contact us</TextLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

const CONTACT = window.CS_DATA.contactEmail;

function PrivacyScreen({ go }) {
  return <PolicyPage go={go} eyebrow="Your data" title="Privacy policy" updated="05 Oct 2026"
    intro="We only collect what we need to run our events, take donations and keep you updated - and we never sell your data."
    sections={[
      ['Who we are', [
        'The Cancer Staged Foundation is a registered charity in England & Wales (No. 1209616). We are the data controller for personal information collected through this website, our events and our fundraising.',
        'If you have any questions about this policy or how we use your information, email ' + CONTACT + '.',
      ]],
      ['What we collect', [
        ['Your name, email address and postal address when you donate, register for an event or contact us.',
          'Gift Aid declarations, including confirmation that you are a UK taxpayer.',
          'Donation details such as amount, frequency and date. Card payments are handled by our payment provider - we never see or store your full card number.',
          'Your marketing preferences and how you interact with our emails.',
          'Basic technical information such as device type and pages visited, collected through essential and (with your consent) analytics cookies.'],
      ]],
      ['How we use it', [
        ['To process donations, issue receipts and claim Gift Aid from HMRC.',
          'To manage event tickets, registrations and access on the night.',
          'To reply to your messages and requests.',
          'To send you news about events and our work, only if you have opted in.',
          'To meet our legal, financial and regulatory obligations as a charity.',
          'To improve this website and understand which content is useful.'],
      ]],
      ['Our legal basis', [
        'Under UK GDPR we rely on: your consent (for marketing emails and non-essential cookies); contract (to deliver tickets and services you ask for); legal obligation (Gift Aid and financial records); and legitimate interests (running and improving our charity, where this does not override your rights).',
      ]],
      ['Who we share it with', [
        'We share data only with trusted service providers who help us operate - such as our payment processor, ticketing partner, email platform and website host - under contracts that require them to protect it. We share Gift Aid information with HMRC.',
        'We will tell our local charity partners about the total raised at each show, but we will not pass on your personal details without your permission. We never sell or swap your data.',
      ]],
      ['How long we keep it', [
        'Donation and Gift Aid records are kept for six years after the end of the financial year they relate to, as required by HMRC. Marketing data is kept until you unsubscribe. Event registrations are deleted within 24 months of the event unless you are an ongoing supporter.',
      ]],
      ['Your rights', [
        'You can ask to access, correct, delete or restrict the use of your personal information, object to how we use it, or ask us to transfer it. You can withdraw consent or unsubscribe at any time using the link in any email.',
        'To make a request, email ' + CONTACT + '. If you are unhappy with how we have handled your data, you can complain to the Information Commissioner\u2019s Office (ico.org.uk).',
      ]],
      ['Cookies', [
        'We use essential cookies to make the site work and, with your consent, analytics cookies to understand how it is used. You can change your choice at any time in your browser settings.',
      ]],
      ['Changes to this policy', [
        'We may update this policy from time to time. The date at the top shows when it was last changed.',
      ]],
    ]} />;
}

function TermsScreen({ go }) {
  return <PolicyPage go={go} eyebrow="The small print" title="Terms of use" updated="05 Oct 2026"
    intro="The terms that apply when you use this website, donate or book a ticket to one of our shows."
    sections={[
      ['About these terms', [
        'This website is run by The Cancer Staged Foundation, a registered charity in England & Wales (No. 1209616). By using the site you agree to these terms. If you do not agree, please do not use the site.',
      ]],
      ['Using this website', [
        'You may view, download and share content from this site for personal, non-commercial use. Please do not copy, alter or reuse our logo, photography or other content for any other purpose without our written permission.',
        'We work to keep information accurate and up to date, but event details such as line-ups, times and venues can change. We will always confirm final details to ticket holders.',
      ]],
      ['Donations', [
        ['Donations are voluntary gifts to The Cancer Staged Foundation and are used to further our charitable purposes.',
          'Monthly donations can be cancelled at any time by contacting us or through your bank.',
          'If you make a donation in error, contact us within 14 days and we will refund it.',
          'If you add Gift Aid, you confirm you are a UK taxpayer and understand that if you pay less Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all your donations in that tax year, it is your responsibility to pay any difference.'],
      ]],
      ['Tickets and events', [
        ['Tickets are sold through our ticketing partner and are subject to their terms as well as these.',
          'Tickets are non-refundable unless an event is cancelled or significantly changed, in which case we will offer a refund or transfer.',
          'Venues may set age restrictions and entry conditions, which will be shown at the time of booking.',
          'Photography and filming may take place at our events and may be used to promote our work.'],
      ]],
      ['Our liability', [
        'We provide this website as it is and cannot guarantee it will always be available or free from errors. Nothing in these terms limits liability that cannot be limited by law, including for death or personal injury caused by negligence.',
      ]],
      ['Links to other sites', [
        'Where we link to other websites, such as our charity partners or ticketing provider, we are not responsible for their content or how they use your information.',
      ]],
      ['Changes and governing law', [
        'We may update these terms from time to time; the date at the top shows when they last changed. These terms are governed by the laws of England & Wales.',
        'Questions? Email ' + CONTACT + '.',
      ]],
    ]} />;
}
function AccessibilityScreen({ go }) {
  return <PolicyPage go={go} eyebrow="For everyone" title="Accessibility statement" updated="05 Oct 2026"
    intro="Live music is for everyone. We want this website - and our events - to be as easy to use and enjoy as possible."
    sections={[
      ['Our commitment', [
        'The Cancer Staged Foundation is committed to making this website accessible to as many people as possible, including people living with cancer, disabilities, or the effects of treatment such as fatigue, sight changes or reduced dexterity.',
        'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.',
      ]],
      ['What you can do on this site', [
        ['Zoom up to 400% without text spilling off the screen.',
          'Navigate the whole site using a keyboard alone, with a clearly visible focus outline.',
          'Use a screen reader such as VoiceOver, NVDA or JAWS - pages use proper headings, labels and landmarks.',
          'Read text with strong colour contrast; all body text meets at least a 4.5:1 contrast ratio.',
          'Turn off animation - the site respects your device’s “reduce motion” setting.',
          'Complete donation and contact forms with clear labels, plain-language error messages and no time limits.'],
      ]],
      ['How accessible this website is', [
        'We know some parts of the site may not yet be fully accessible:',
        ['Some photography may not yet have full text descriptions.',
          'Partner logos are being added and may initially lack descriptive alt text.',
          'Some PDF documents, such as annual reports, may not be fully accessible when first published.'],
        'We are working to fix these issues and will update this statement as we do.',
      ]],
      ['Accessibility at our events', [
        'We work with each venue to make our shows as accessible as possible. Venue access information - including step-free access, accessible toilets, seating and assistance-dog policies - is shown on each event page, or available on request.',
        'If you need a free companion ticket, seating, or any other adjustment, contact us before the show and we will do our best to help.',
      ]],
      ['Feedback and contact', [
        'If you find something on this website that is difficult to use, or you need information in a different format such as large print, easy read or audio, email ' + CONTACT + '. We aim to reply within 5 working days.',
      ]],
      ['Enforcement', [
        'If you are not happy with how we respond to your complaint, you can contact the Equality Advisory and Support Service (EASS).',
      ]],
      ['How we test this website', [
        'This website is tested regularly using automated tools, keyboard-only navigation and screen readers. This statement was prepared on 05 Oct 2026 and will be reviewed at least once a year.',
      ]],
    ]} />;
}
Object.assign(window, { PrivacyScreen, TermsScreen, AccessibilityScreen });
