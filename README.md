# The Cancer Staged Foundation - website

Static website plus a Git-based content manager (Decap CMS). There's no database and no server code: content lives in `content/*.json` and editors change it at `/admin`.

## What's in this folder
- `index.html` - the website (all pages)
- `js/` - the compiled page templates (ready to serve). `js/data.js` loads the content files, then the templates.
- `src/` - the editable source of those templates (JSX). Only a developer needs these; see *Changing the templates* below.
- `content/` - **all editable content**: events, stories, people, partners, donation, page headers, footer and settings
- `admin/` - the content manager (`config.yml` defines the editing fields)
- `assets/` - logo, icons, photography. `assets/uploads/` holds images uploaded through the CMS.
- `styles.css`, `tokens/`, `fonts/`, `ds-bundle.js` - the design system
- `netlify.toml` - hosting settings

## Recommended host: Netlify (free tier)
Netlify hosts the site and provides the editor logins (Netlify Identity + Git Gateway). Decap CMS is built for this setup.

### One-time setup (about 20 minutes)
1. **Put this folder on GitHub.** Create a new repository (e.g. `cancer-staged-website`) and upload the contents of this folder to the `main` branch.
2. **Connect it to Netlify.** In Netlify, choose *Add new site → Import from Git*, pick the repository, leave the build command empty and set the publish directory to `.`. Click Deploy.
3. **Turn on editor logins.** In Netlify, go to *Site configuration → Identity → Enable Identity*. Set *Registration* to **Invite only**. Under *Services → Git Gateway*, click **Enable**.
4. **Invite your editors.** Under *Identity → Invite users*, add 2-5 email addresses. Each person gets an email, sets a password, and can then sign in at `https://YOUR-SITE/admin`.
5. **Add your domain.** Under *Domain management*, add `cancerstaged.org` (or your domain) and follow the DNS steps. HTTPS is set up automatically.
6. Update `site_url` / `display_url` in `admin/config.yml` if your domain is different.

## Editing content
Go to `/admin` and sign in. The sections are:
- **Events** - launch night and the programme: dates, venues, partners, status and ticket links
- **Stories** - news cards and story pages: paragraphs, a highlight quote, founder conversations and founder bios
- **Team & trustees** - founders, trustees and advisors: portraits, roles and bios (trustee and advisor names open a bio pop-up)
- **Partners** - charity partners and Friends of the Foundation
- **Donations** - your JustGiving link, preset amounts and impact lines
- **Page headers** - background image, headline and intro for Home, About, What We Do and Events
- **Footer & settings** - contact email, social links and the default ticket link

Changes are saved as drafts first (*editorial workflow*). Click **Publish** to put them live; Netlify redeploys in under a minute.

## Donations and tickets
- All donations go through **JustGiving** (https://www.justgiving.com/charity/thecancerstagedfoundation). The Donate page sends people there and shows a QR code. The site itself takes no payments.
- The QR code is a fixed image at `assets/qr/justgiving-qr.png` (and `.svg` for print). Use the same files in newsletters, socials and email footers.
- Larger gifts: the **Founding Circle** page (footer → Get involved) sets out the £10K-£100K founding packages and links to the contact email.
- When a **Ticket link** is set on an event, the *Get Tickets* button goes straight to it.

## Newsletter sign-ups
The footer and Stories sign-up boxes are not yet connected to a mailing service, so addresses typed there are not stored. Before launch, connect them to Mailchimp (or similar) and set up a welcome email.

## Previewing locally
Opening `index.html` directly from your computer won't load the content, because browsers block local file reads. Instead, run `npx serve` in this folder and open the address it prints. To use the CMS locally, run `npx decap-server` and uncomment `local_backend: true` in `admin/config.yml`.

## Before launch - checklist
- [ ] Privacy, Terms and Accessibility pages reviewed by your legal adviser or trustees (they are templates)
- [ ] Contact email, social links, donate link and ticket links filled in via `/admin`
- [ ] Image licences confirmed (Shutterstock and photographer credits, e.g. James Bridle)
- [ ] Gilroy webfont licence covers web use. Optionally convert the `.otf` files to `.woff2` for speed.
- [ ] Social profile URLs added under *Footer & settings* (the icons stay inactive until then)
- [ ] Newsletter sign-up connected to a mailing service
- [ ] Trustee and advisor bios checked (Samra Turajlic and Jonathan Lim bios should be verified against their official pages); add Alexis and Bernice bios and portraits
- [ ] Change the JustGiving account password if it has been shared by email or chat

## Changing the templates
Content changes never need a developer. If the page layouts themselves change, edit `src/*.jsx` and recompile each file to `js/*.js` with Babel (`npx babel src --out-dir js --presets @babel/preset-react`).
