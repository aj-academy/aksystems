const siteConfig = {
  companyName: "AK SYSTEMS",
  shortTagline: "Computers, Laptops, Accessories, CCTV & IT Support",
  phoneDisplay: "9629743588",
  phoneHref: "tel:+919629743588",
  whatsappDisplay: "9629743588",
  whatsappNumber: "919629743588",
  whatsappHref: "",
  email: "support@aksystems.in",
  emailHref: "mailto:support@aksystems.in",
  address: "Shop 12, Tech Market, Main Road, Your City",
  mapLabel: "Google Map Location",
  mapUrl: "https://share.google/NCQXp6SwvxjKvcsjA",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  copyrightName: "AK SYSTEMS",
};

siteConfig.whatsappHref = createWhatsAppLink(
  "Hello AK SYSTEMS, I need help with computer sales, laptop sales, CCTV, repair, or IT support."
);

const navItems = [
  { key: "home", label: "Home", href: "index.html" },
  { key: "about", label: "About Us", href: "about.html" },
  {
    key: "products",
    label: "Products & Services",
    href: "products-services.html",
  },
  { key: "contact", label: "Contact Us", href: "contact.html" },
];

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderFloatingWhatsApp();
  setActiveNav();
  setupMobileMenu();
  setupWhatsAppLinks();
  setupRevealAnimations();
  setupContactForm();
});

function createWhatsAppLink(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderHeader() {
  const mount = document.querySelector("[data-site-header]");
  if (!mount) return;

  mount.innerHTML = `
    <header class="site-header">
      <div class="container nav-shell">
        <a class="brand" href="index.html" aria-label="${siteConfig.companyName} home">
          <span class="brand-mark">AK</span>
          <span class="brand-copy">
            <strong>${siteConfig.companyName}</strong>
            <span>Sales, Service, CCTV & Support</span>
          </span>
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="primary-navigation" class="nav-links" aria-label="Primary">
          ${navItems
            .map(
              (item) =>
                `<a class="nav-link" data-nav-key="${item.key}" href="${item.href}">${item.label}</a>`
            )
            .join("")}
          <a class="btn btn-primary nav-cta" href="${createWhatsAppLink(
            "Hello AK SYSTEMS, I would like to get a quote for your products or services."
          )}" target="_blank" rel="noopener noreferrer">Get a Quote</a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-card">
            <a class="brand" href="index.html" aria-label="${siteConfig.companyName} home">
              <span class="brand-mark">AK</span>
              <span class="brand-copy">
                <strong>${siteConfig.companyName}</strong>
                <span style="color: rgba(226, 232, 240, 0.74);">Reliable local technology partner</span>
              </span>
            </a>
            <p>
              Computer sales, laptop sales, laptop accessories, computer accessories, repair services,
              CCTV installation, and business IT support for homes, students, offices, and growing teams.
            </p>
            <div class="social-row" aria-label="Social media links">
              <a class="social-pill" href="#" aria-label="Facebook">Fb</a>
              <a class="social-pill" href="#" aria-label="Instagram">Ig</a>
              <a class="social-pill" href="#" aria-label="LinkedIn">In</a>
            </div>
          </div>

          <div class="footer-card">
            <h3>Quick Links</h3>
            <div class="footer-links">
              <a href="index.html">Home</a>
              <a href="about.html">About Us</a>
              <a href="products-services.html">Products & Services</a>
              <a href="contact.html">Contact Us</a>
            </div>
          </div>

          <div class="footer-card">
            <h3>Solutions</h3>
            <div class="footer-links">
              <a href="products-services.html">Laptop & Computer Sales</a>
              <a href="products-services.html">Accessories & Upgrades</a>
              <a href="products-services.html">Repair & Maintenance</a>
              <a href="products-services.html">CCTV Sales & Installation</a>
              <a href="products-services.html">IT Support Services</a>
            </div>
          </div>

          <div class="footer-card">
            <h3>Contact</h3>
            <div class="footer-links">
              <a href="${siteConfig.phoneHref}">${siteConfig.phoneDisplay}</a>
              <a href="${siteConfig.whatsappHref}" target="_blank" rel="noopener noreferrer">WhatsApp: ${siteConfig.whatsappDisplay}</a>
              <a href="${siteConfig.emailHref}">${siteConfig.email}</a>
              <a href="${siteConfig.mapUrl}" target="_blank" rel="noopener noreferrer">${siteConfig.mapLabel}</a>
              <span>${siteConfig.hours}</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>&copy; <span data-current-year></span> ${siteConfig.copyrightName}. All rights reserved.</span>
          <span>Built for enquiries, repairs, sales, and trusted local support.</span>
        </div>
      </div>
    </footer>
  `;

  const yearNode = mount.querySelector("[data-current-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear().toString();
  }
}

function renderFloatingWhatsApp() {
  const mount = document.querySelector("[data-whatsapp-button]");
  if (!mount) return;

  mount.innerHTML = `
    <div class="floating-whatsapp">
      <a href="${siteConfig.whatsappHref}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.46 0 .08 5.39.08 12c0 2.12.56 4.2 1.62 6.03L0 24l6.14-1.6A11.93 11.93 0 0 0 12.08 24c6.61 0 12-5.39 12-12 0-3.2-1.25-6.21-3.56-8.52ZM12.08 21.98c-1.8 0-3.57-.49-5.12-1.43l-.37-.22-3.64.95.97-3.54-.24-.36A9.92 9.92 0 0 1 2.1 12C2.1 6.5 6.58 2.02 12.08 2.02c2.65 0 5.15 1.03 7.03 2.91A9.87 9.87 0 0 1 22.02 12c0 5.5-4.48 9.98-9.94 9.98Zm5.47-7.47c-.3-.15-1.8-.89-2.08-.99-.28-.1-.49-.15-.69.15-.2.3-.79.99-.97 1.19-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.37-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.45 1.07 2.86 1.22 3.06.15.2 2.07 3.15 5.02 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.85.12.56-.08 1.8-.73 2.06-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z"/>
        </svg>
        <span>WhatsApp Us</span>
      </a>
    </div>
  `;
}

function setActiveNav() {
  const page = document.body.dataset.page;
  if (!page) return;

  document.querySelectorAll("[data-nav-key]").forEach((link) => {
    if (link.getAttribute("data-nav-key") === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupWhatsAppLinks() {
  document.querySelectorAll("[data-wa-message]").forEach((link) => {
    const message = link.getAttribute("data-wa-message") || "";
    link.setAttribute("href", createWhatsAppLink(message));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

function setupRevealAnimations() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const messageBox = form.querySelector("[data-form-message]");
  const validators = {
    name: (value) => value.trim().length >= 2 || "Please enter your full name.",
    phone: (value) =>
      /^[0-9+\-\s]{7,15}$/.test(value.trim()) || "Please enter a valid phone number.",
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || "Please enter a valid email address.",
    subject: (value) => value.trim().length >= 3 || "Please enter a short subject.",
    message: (value) => value.trim().length >= 10 || "Please add a brief message.",
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;
    Object.entries(validators).forEach(([fieldName, validate]) => {
      const field = form.querySelector(`[name="${fieldName}"]`);
      const wrapper = field.closest(".field");
      const errorNode = wrapper.querySelector(".error-text");
      const result = validate(field.value);

      if (result !== true) {
        hasError = true;
        wrapper.classList.add("has-error");
        errorNode.textContent = result;
      } else {
        wrapper.classList.remove("has-error");
        errorNode.textContent = "";
      }
    });

    if (!messageBox) return;

    if (hasError) {
      messageBox.className = "form-message error";
      messageBox.textContent =
        "Please correct the highlighted fields and try again.";
      return;
    }

    messageBox.className = "form-message success";
    messageBox.textContent = "Redirecting you to WhatsApp with your enquiry...";

    const formData = new FormData(form);
    const whatsappMessage = [
      "Hello AK SYSTEMS, I would like to make an enquiry.",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email")}`,
      `Subject: ${formData.get("subject")}`,
      `Message: ${formData.get("message")}`,
    ].join("\n");

    window.open(createWhatsAppLink(whatsappMessage), "_blank", "noopener");
    form.reset();
  });
}
