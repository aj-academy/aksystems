# AK SYSTEMS Business Website

Modern static multi-page frontend for `AK SYSTEMS`, built for product enquiries, repair bookings, WhatsApp leads, phone calls, and walk-in trust.

## Folder Structure

```text
ak soft/
├─ index.html
├─ about.html
├─ products-services.html
├─ contact.html
├─ README.md
└─ assets/
   ├─ css/
   │  └─ styles.css
   └─ js/
      └─ site.js
```

## Main Components Used

- Sticky responsive navbar with mobile menu
- Shared footer with quick links and contact block
- Floating WhatsApp CTA
- Reusable button styles
- Reusable card layouts for products, services, testimonials, benefits, and contact items
- Shared page hero/banner layout
- CTA banner sections
- FAQ accordion
- Contact form with frontend validation
- Scroll reveal animations

## Setup Instructions

1. Open `index.html` directly in a browser for a quick preview.
2. For the best local preview, run a simple local server from this folder.
3. If you later connect the contact form to a backend, update the submit logic in `assets/js/site.js`.

## SEO Suggestions

- Replace placeholder business address and service area with the real local address in all pages and schema markup.
- Add real business social links in `assets/js/site.js`.
- Add a real domain and update canonical/OG tags if deploying publicly.
- Replace decorative visual blocks with optimized real photos of the store, service team, products, and CCTV installations.
- Create and submit a sitemap and connect the site to Google Search Console after deployment.
- Add a Google Business Profile and keep NAP details consistent with the site.
- If the business serves a specific city, naturally include that city name in page copy, titles, and meta descriptions.

## Easy Edit Locations For Business Owner

- `assets/js/site.js`
  - Company name
  - Phone number
  - WhatsApp number/link
  - Email
  - Address
  - Business hours
  - Footer company text
- `index.html`
  - Homepage hero copy
  - Featured product and service content
  - Testimonials
- `about.html`
  - Company story, mission, vision, trust points, and service promise
- `products-services.html`
  - Product categories, service list, FAQs
- `contact.html`
  - Contact form heading, quick contact text, map placeholder, business hours

## Backend Integration Notes

- The contact form is frontend-ready and validated in `assets/js/site.js`.
- Replace the current simulated submit behavior with:
  - form submission to your backend API
  - email service integration
  - CRM/lead capture integration

## Suggested Real Content To Add Later

- Store photos
- Product brand logos
- Real testimonials
- Google Maps iframe
- Real CCTV project images
- Office support case studies
