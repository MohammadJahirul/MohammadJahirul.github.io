# Md Jahirul Islam — iOS Engineering Portfolio

A responsive, dependency-free portfolio for Senior and Lead iOS opportunities. The opening screen identifies Jahirul as an iOS engineer and shows a published iPhone app; Daraz and Beeda have featured sections, followed by Expense Packet and Talk Trial case studies, career history, and downloadable two-page resumes.

## Preview

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory, then open `http://127.0.0.1:8765/`.

## Contents

- `index.html`: accessible, semantic content and native case-study dialogs.
- `styles/style.css`: responsive editorial layout, reduced-motion support, and print styles.
- `scripts/script.js`: mobile navigation, dialogs, and email copying.
- `assets/`: locally hosted App Store artwork, favicon, and social preview.
- `resume/`: PDF, editable DOCX, and plain text versions of the resume.
- `robots.txt` and `sitemap.xml`: search discovery.

No build tool, npm install, external font, analytics, or form backend is required. Contact links open the visitor's mail client. GitHub Pages can serve this repository directly from its root.

## Content maintenance

Update experience and project copy in `index.html`. Replace the corresponding files in `resume/` when editing the resume. The contact email is also referenced in `scripts/script.js`. Update the stylesheet and script query version in `index.html` when their contents change.

The App Store screenshots and icons belong to the portfolio owner's apps and were sourced from their public listings. Technical case-study content was checked against the local project source. Professional history and earlier impact figures come from the owner's supplied resume; education was supplied by the owner. No download counts, ratings, or unverified concurrency claims are added.

## Validation

The resume is single-column with selectable text, standard section headings, and body-level contact details. It has no photos, skill-rating graphics, tables, or text boxes. PDF text extraction and two-page layout were checked; this does not imply certification by any particular ATS vendor.

The site was checked in desktop and mobile browser layouts, including internal links, local assets, mobile menu, case-study dialogs, Escape dismissal, focus return, and document downloads. Motion respects `prefers-reduced-motion`.
