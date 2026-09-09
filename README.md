# Cankaj Auto + Property

A split lead-generation website for two Clare businesses operated by Bledar Cankaj:

- Cankaj Super Car Wash, Newmarket-on-Fergus
- BC Stone Mason & Construction Restoration

The entrance lets visitors choose their service, then the full interface transforms between the Auto and Property identities. Direct `/auto`, `/home` and `/review` routes are configured for campaigns and sharing. Focused local-search pages cover car washing, valeting, stone masonry and house painting.

## Local preview

The Vercel build copies the static site to `.vercel-static`:

```sh
mkdir -p .vercel-static
cp index.html review.html privacy.html car-wash-newmarket-on-fergus.html car-valeting-clare.html stone-mason-clare.html house-painting-clare.html .vercel-static/
cp -R public/. .vercel-static/
python3 -m http.server 4174 --directory .vercel-static
```

## Before launch

- Replace the clearly labelled Auto and Property concept images with real completed-project photography.
- Confirm final car wash packages, prices and exact inclusions.
- Confirm the Property service area and operating hours.
- Connect a form/email provider later if WhatsApp-led enquiries are not sufficient.
- Replace the temporary Vercel URL in canonical and sitemap entries when a permanent domain is connected.

The research and content plan are in `docs/cankaj-split-site-strategy.md`.
