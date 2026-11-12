# No Barriers, No Excuses

The movement's site, run by the Europe Triathlon Women's Committee.

- `/` — the movement itself: what it's about, one featured event, and how to
  get involved.
- `/webinar` — the secondary page for the single event currently running,
  **Stories from Triathlon Leadership** (17 November).

Built with [Astro](https://astro.build) (static, no server) and edited through
[Decap CMS](https://decapcms.org) at `/admin`. Hosted free on Netlify.

## Editing the content

Once the site is deployed, go to `https://<your-site>.netlify.app/admin` and log
in. You can change:

| Section | What you can edit |
| --- | --- |
| Home page → Hero | The homepage headline, tagline, button links |
| Home page → The movement | The "privilege talking" / "Pale, Male and Stale" copy |
| Home page → Get involved | Body copy, button label and the sign-up Google Form link |
| Home FAQ | Questions and answers shown on the homepage |
| The webinar | Title, date, times, the Google Form link, button labels |
| The webinar → Roundtable | The 24 November follow-up block |
| Webinar speakers | Add/remove speakers, headshots, bios, order |
| Webinar agenda | The run of day |
| Webinar FAQ | Questions and answers shown on `/webinar` |

The homepage's "Featured event" card pulls its title/date/blurb straight from
**The webinar** entry, so it never needs updating separately.

Every save commits to this repo and Netlify rebuilds the site in about a minute.

## The registration form

The form is wired up already. **It currently requires a Google sign-in**, so the
embed shows a login screen instead of the questions. To fix it, open the form in
Google Forms → **Settings** → turn off *Restrict to users in your organisation*
and *Collect email addresses → Verified*. Anyone should be able to respond
without signing in.

If you swap the form later: open **Send → `<>` (embed)**, copy the `src="..."`
URL (it ends in `?embedded=true`), and paste it into *Google Form embed link*
under **The webinar → Event details** in the CMS.

## The Get involved form

The homepage's "Get involved" section links to the sign-up Google Form
(currently https://forms.gle/1ep5VmoibrijNn5e6). If the link is ever left as a
`REPLACE_WITH...` placeholder, the page shows "the sign-up form link is being
set up" instead of a button. To swap it, paste the form's share link into
**Home page → Get involved → Google Form link** in
the CMS (`src/data/ambassador.json` if editing by hand).

## First-time deploy

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
   Build command and publish directory come from `netlify.toml`.
3. Enable **Identity** and **Git Gateway** in the site settings, then invite
   yourself as a user. That's what the `/admin` login uses.

If Identity isn't available on the Netlify plan, switch `public/admin/config.yml`
to the GitHub backend instead:

```yaml
backend:
  name: github
  repo: MJBarata/nbne-webinar
  branch: main
```

That needs a GitHub OAuth app wired up to an auth endpoint.

## Running it locally

```bash
npm install
npm run dev
```

To edit content locally through the CMS UI, run this in a second terminal and
open http://localhost:4321/admin/index.html:

```bash
npm run cms
```

## Where things live

```
src/pages/         index.astro (home) and webinar.astro (the event page)
src/data/          One-off page content (hero, movement, ambassador, event, roundtable)
src/content/       Collections (speakers, agenda, home-faq, faq)
src/components/    One file per page section — Home* for the homepage
src/styles/        Brand tokens and shared styles
public/admin/      The CMS
public/uploads/    Images uploaded through the CMS
```
