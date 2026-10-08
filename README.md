# Wilson Underwater Services Ltd.

A responsive, static website for commercial diving and marine consulting. Built with HTML, CSS and JavaScript, using the supplied logo and the ocean-blue palette of the supplied business card. The SolarPower & Controls site informed the dark layout, split hero, outlined actions and bordered service cards.

## Preview

Open index.html in a browser. No installation or build is required.

For a local HTTP preview, run this from the project folder:

    python -m http.server 4173 --bind 127.0.0.1

Then visit http://localhost:4173. Stop the server with Ctrl+C.

## Files

- index.html — page content, metadata, navigation, service details and contact form.
- styles.css — ocean-blue theme and responsive layouts.
- script.js — mobile navigation, service selection and email-draft preparation.
- assets/ — converted PNG logo and 32px, 180px and 192px logo icons.
- scripts/convert-assets.ps1 — regenerates PNGs from the original logo with Windows System.Drawing.

Both original JPGs remain in the project root. The business card supplied the colour reference; its personal contact details are not displayed. The website uses the company contact details supplied in the brief.

## Contact behaviour

Phone links open the device's calling app. The form validates required fields and prepares a mailto draft addressed to info@wilsonunderwater.co.nz. The visitor must send that draft in their email app. A visible copy fallback is provided after preparing a draft. No form messages are sent to a server or stored by the site.

The capability statement button requests the document by email; no downloadable statement was supplied.

## Deploy

Upload index.html, styles.css, script.js and assets/ to static hosting. No server-side runtime is required. Add canonical URLs and absolute social-image metadata once the final domain is confirmed. For automatic contact-form delivery, connect a form service or backend and update the form behaviour.

## Verification

JavaScript syntax, local asset paths, internal section links, unique IDs, menu interactions and email draft/copy logic were checked. Browser rendering and device-specific email handling still need a visual check in a connected browser.

## Content source

Business capabilities, service descriptions and qualifications are limited to the customer brief supplied in the conversation. The inferred three-step project process and added promotional claims were removed during the content audit. Logo artwork and colours are based on the two supplied JPGs.
