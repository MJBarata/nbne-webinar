# No Barriers, No Excuses — webinar site

Landing and registration page for **Stories from Triathlon Leadership**
(14 October), run by the Europe Triathlon Women's Committee.

Built with [Astro](https://astro.build) (static, no server) and edited through
[Decap CMS](https://decapcms.org) at `/admin`. Hosted free on Netlify.

## Editing the content

Once the site is deployed, go to `https://<your-site>.netlify.app/admin` and log
in. You can change:

| Section | What you can edit |
| --- | --- |
| The event | Title, date, times, the Google Form link, button labels |
| The event → About | The "no excuses is privilege talking" copy and the quote |
| The event → Roundtable | The 21 October follow-up block |
| Speakers | Add/remove speakers, headshots, bios, order |
| Agenda | The run of day |
| FAQ | Questions and answers |

Every save commits to this repo and Netlify rebuilds the site in about a minute.

## Setting up the registration form

1. Create the Google Form and open **Send → `<>` (embed)**.
2. Copy the `src="..."` URL — it ends in `?embedded=true`.
3. In the CMS, open **The event → Event details** and paste it into
   *Google Form embed link*. Paste the plain form link into *Google Form link*.

Until that's done the page shows a "form is being set up" message instead of a
broken frame.

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
src/data/          One-off page content (event, about, roundtable)
src/content/       Collections (speakers, agenda, faq)
src/components/    One file per page section
src/styles/        Brand tokens and shared styles
public/admin/      The CMS
public/uploads/    Images uploaded through the CMS
```
