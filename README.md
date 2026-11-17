# Md Jahirul Islam — iOS Engineering Portfolio (v2)

A dependency-free, single-page portfolio for senior and lead iOS roles. Live at https://mohammadjahirul.github.io/.

## Design

- **Direction:** a dark stage lit by one beam of light that falls on three real iPhone apps. The accent is Swift orange (`#F05138`), the colour of the language the work is written in.
- **Signature:** each independent app runs a small coded demo of its real core idea, built with CSS animation:
  - PDF Boss: scan → OCR text layer → redact a copy
  - Talk Trial: word-synced transcript that flags filler words
  - Expense Packet: receipts settle into per-currency totals
- **Type:** Familjen Grotesk (display), Geist (text), Geist Mono (code and labels), loaded from Google Fonts.
- **Motion:** the hero phones rise into the light once on load, and each demo plays once when scrolled into view. With reduced motion, or without JavaScript, every demo shows its finished state.

## Previous design

The earlier editorial design is kept in git as the `classic-design-v1` tag (and the `add-pdf-boss` branch). To see it locally: `git checkout classic-design-v1`.

## Preview

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory, then open `http://127.0.0.1:8765/`.

## Contents

- `index.html`: all page content and semantic structure.
- `styles/style.css`: design tokens, layout, demos and responsive rules.
- `scripts/script.js`: demo triggers (IntersectionObserver plus a scroll fallback) and email copying.
- `assets/`: App Store artwork (Daraz, Beeda, Beeda Merchant, Robi MySports and IQRA images come from their public App Store listings), raw app screenshots (`screen-*.jpg`), icons, favicon and the social preview.
- `resume/`: PDF, editable DOCX and plain-text résumé.
- `robots.txt` and `sitemap.xml`: search discovery.

## Content rules

Every claim comes from the owner's résumé, the public App Store listings, or the apps' own source. The code sample is taken from `pdfboss/Services/AppShortcuts.swift`. Demo data (receipts, transcript) is illustrative and mirrors the apps' own sample content. No download counts, ratings or unverified figures are shown. Robi MySports and IQRA are described only as apps Jahirul worked on as part of their iOS teams.

When content changes, update the stylesheet and script query version in `index.html`.
