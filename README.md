# Cankaj Auto + Property

A split lead-generation website for two Clare businesses operated by Bledar Cankaj:

- Cankaj Super Car Wash, Newmarket-on-Fergus
- BC Stone Mason & Construction Restoration

The entrance lets visitors choose their service, then the full interface transforms between the Auto and Property identities. Direct `/auto` and `/home` routes are configured for campaigns and sharing.

## Local preview

The Vercel build copies the static site to `.vercel-static`:

```sh
mkdir -p .vercel-static
cp index.html .vercel-static/index.html
cp -R public/. .vercel-static/
python3 -m http.server 4174 --directory .vercel-static
```

## Before launch

- Replace the two clearly described Property concept images with real completed-project photography.
- Confirm final car wash packages, prices and exact inclusions.
- Confirm the Property service area and operating hours.
- Connect the enquiry form to the preferred form/email service if a mail client handoff is not sufficient.

The research and content plan are in `docs/cankaj-split-site-strategy.md`.
