function buildWhatsAppUrl(number, message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
}

function waLink(extra) {
  const cfg = PROJECT_CONFIG.contact;
  const message = extra ? `${cfg.whatsappMessage} ${extra}` : cfg.whatsappMessage;
  return buildWhatsAppUrl(cfg.whatsapp, message);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value != null) {
    el.textContent = value;
  }
}

function applyMeta() {
  const { meta, brand } = PROJECT_CONFIG;
  document.title = meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute("content", meta.description);
  }
  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme) {
    theme.setAttribute("content", meta.themeColor);
  }
  setText("header-project-name", brand.projectName);
  setText("hero-main-title", brand.projectName);
  setText("hero-tagline", brand.tagline);
  setText("hero-developer", brand.developer);
  setText("top-bar-location", brand.tagline.replace(/^At\s+/i, ""));
  const logo = document.getElementById("site-logo");
  if (logo) {
    logo.src = brand.logo;
    logo.alt = brand.logoAlt;
  }
}

function applyHero() {
  const { hero, contact } = PROJECT_CONFIG;
  setText("hero-bhk", hero.bhkSummary);
  setText("hero-price", hero.startingPrice);
  setText("hero-card-price", hero.startingPrice);

  const offersEl = document.getElementById("hero-offers");
  if (offersEl && hero.offers) {
    offersEl.innerHTML = hero.offers
      .map(
        (o) =>
          `<li><i class="${escapeAttr(o.icon)}" aria-hidden="true"></i>${escapeHtml(o.text)}</li>`
      )
      .join("");
  }

  const usp = document.getElementById("usp-strip");
  if (usp && PROJECT_CONFIG.usp) {
    usp.innerHTML = PROJECT_CONFIG.usp
      .map(
        (u) => `
        <article class="usp-card">
          <i class="${escapeAttr(u.icon)}" aria-hidden="true"></i>
          <h3>${escapeHtml(u.title)}</h3>
          <p>${escapeHtml(u.text)}</p>
        </article>`
      )
      .join("");
  }

  const topPhone = document.getElementById("top-bar-phone");
  if (topPhone) {
    topPhone.href = `tel:${contact.phoneTel}`;
    topPhone.innerHTML = `<i class="ri-phone-line" aria-hidden="true"></i> ${escapeHtml(contact.phoneDisplay)}`;
  }


  const banner = document.getElementById("hero-banner");
  if (banner) {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    banner.src = mobile ? hero.bannerMobile : hero.bannerDesktop;
    banner.alt = `${PROJECT_CONFIG.brand.projectName} banner`;
  }

  const bullets = document.getElementById("hero-bullets");
  if (bullets) {
    bullets.innerHTML = hero.bullets
      .map((b) => `<li>${escapeHtml(b)}</li>`)
      .join("");
  }

  const stats = document.getElementById("hero-stats");
  if (stats) {
    stats.innerHTML = hero.stats
      .map(
        (s) =>
          `<div class="stat-chip"><span class="stat-chip__value">${escapeHtml(s.value)}</span><span class="stat-chip__label">${escapeHtml(s.label)}</span></div>`
      )
      .join("");
  }

  const phoneHeader = document.getElementById("nav-phone");
  if (phoneHeader) {
    phoneHeader.textContent = contact.phoneDisplay;
    phoneHeader.href = `tel:${contact.phoneTel}`;
  }
}

function applyOverview() {
  const o = PROJECT_CONFIG.overview;
  setText("overview-title", o.title);
  setText("overview-text", o.text);
  setText("highlights-title", o.highlightsTitle);
  const list = document.getElementById("highlights-list");
  if (list) {
    list.innerHTML = o.highlights
      .map((h) => `<li><i class="ri-check-line" aria-hidden="true"></i>${escapeHtml(h)}</li>`)
      .join("");
  }
}

function applyPricing() {
  const p = PROJECT_CONFIG.pricing;
  setText("pricing-title", p.title);
  setText("pricing-note", p.note);
  const grid = document.getElementById("pricing-grid");
  if (grid) {
    grid.innerHTML = p.configurations
      .map(
        (c) => `
        <article class="price-card">
          <span class="price-card__badge">Configuration</span>
          <h3 class="price-card__name">${escapeHtml(c.name)}</h3>
          <p class="price-card__area">${escapeHtml(c.area)}</p>
          <p class="price-card__price">${escapeHtml(c.price)}</p>
          <a class="btn btn--outline btn--block open-enquiry" href="#" data-enquiry-source="pricing-${escapeAttr(c.name)}">Enquire Now</a>
        </article>`
      )
      .join("");
  }
  const costing = document.getElementById("pricing-cta");
  if (costing) {
    costing.textContent = p.ctaLabel;
    costing.href = "#";
    costing.classList.add("open-enquiry");
    costing.setAttribute("data-enquiry-source", "complete-costing");
  }
}

function applyPlans() {
  const pl = PROJECT_CONFIG.plans;
  setText("plans-title", pl.title);
  const master = document.getElementById("master-plan-img");
  if (master) {
    master.src = pl.masterPlanImage;
    master.alt = pl.masterPlanAlt;
  }
  const floorGrid = document.getElementById("floor-plans");
  if (floorGrid) {
    floorGrid.innerHTML = pl.floorPlans
      .map(
        (fp) => `
        <figure class="plan-card">
          <img src="${escapeAttr(fp.image)}" alt="${escapeAttr(fp.alt)}" loading="lazy" width="400" height="300" />
          <figcaption>
            <span>${escapeHtml(fp.name)}</span>
            <a class="btn btn--sm open-enquiry" href="#" data-enquiry-source="floor-${escapeAttr(fp.name)}">Request plan</a>
          </figcaption>
        </figure>`
      )
      .join("");
  }
  const plansCta = document.getElementById("plans-cta");
  if (plansCta) {
    plansCta.textContent = pl.ctaLabel;
    plansCta.href = "#";
    plansCta.classList.add("open-enquiry");
    plansCta.setAttribute("data-enquiry-source", "floor-plans");
  }
}

function applyAmenities() {
  const a = PROJECT_CONFIG.amenities;
  setText("amenities-title", a.title);
  const grid = document.getElementById("amenities-grid");
  if (grid) {
    grid.innerHTML = a.items
      .map(
        (item) => `
        <div class="amenity">
          <i class="${escapeAttr(item.icon)}" aria-hidden="true"></i>
          <span>${escapeHtml(item.name)}</span>
        </div>`
      )
      .join("");
  }
}

function applyGallery() {
  const g = PROJECT_CONFIG.gallery;
  setText("gallery-title", g.title);
  const wrap = document.getElementById("gallery-grid");
  if (wrap) {
    wrap.innerHTML = g.images
      .map(
        (img, i) => `
        <a class="gallery-item glightbox" href="${escapeAttr(img.src)}" data-gallery="project">
          <img src="${escapeAttr(img.src)}" alt="${escapeAttr(img.alt)}" loading="lazy" width="600" height="400" />
        </a>`
      )
      .join("");
  }
}

function applyLocation() {
  const loc = PROJECT_CONFIG.location;
  setText("location-title", loc.title);
  const tabs = document.getElementById("location-tabs");
  const panels = document.getElementById("location-panels");
  if (!tabs || !panels || !loc.tabs.length) {
    return;
  }

  tabs.innerHTML = loc.tabs
    .map(
      (t, i) =>
        `<button type="button" class="loc-tab${i === 0 ? " is-active" : ""}" data-tab="${escapeAttr(t.id)}" role="tab" aria-selected="${i === 0}">${escapeHtml(t.label)}</button>`
    )
    .join("");

  panels.innerHTML = loc.tabs
    .map(
      (t, i) => `
      <div class="loc-panel${i === 0 ? " is-active" : ""}" id="panel-${escapeAttr(t.id)}" role="tabpanel">
        <ul>${t.items.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  tabs.querySelectorAll(".loc-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-tab");
      tabs.querySelectorAll(".loc-tab").forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      panels.querySelectorAll(".loc-panel").forEach((p) => p.classList.remove("is-active"));
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      const panel = document.getElementById(`panel-${id}`);
      if (panel) {
        panel.classList.add("is-active");
      }
    });
  });

  const mapWrap = document.getElementById("map-embed");
  const mapPlaceholder = document.getElementById("map-placeholder");
  if (mapWrap) {
    if (loc.mapEmbedUrl) {
      mapWrap.innerHTML = `<iframe title="Project location map" src="${escapeAttr(loc.mapEmbedUrl)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      mapWrap.hidden = false;
      if (mapPlaceholder) {
        mapPlaceholder.hidden = true;
      }
    } else {
      mapWrap.hidden = true;
      if (mapPlaceholder) {
        mapPlaceholder.hidden = false;
      }
    }
  }
}

function applyFaq() {
  const f = PROJECT_CONFIG.faq;
  setText("faq-title", f.title);
  const list = document.getElementById("faq-list");
  if (list) {
    list.innerHTML = f.items
      .map(
        (item, i) => `
        <details class="faq-item"${i === 0 ? " open" : ""}>
          <summary>${escapeHtml(item.q)}</summary>
          <p>${escapeHtml(item.a)}</p>
        </details>`
      )
      .join("");
  }
}

function applyDeveloper() {
  const d = PROJECT_CONFIG.developer;
  setText("developer-title", d.title);
  setText("developer-text", d.text);
}

function applyLegal() {
  const l = PROJECT_CONFIG.legal;
  const rera = document.getElementById("rera-list");
  if (rera) {
    rera.innerHTML = l.rera.map((r) => `<li>${escapeHtml(r)}</li>`).join("");
  }
  setText("footer-disclaimer", l.disclaimer);
  setText("footer-project", PROJECT_CONFIG.brand.projectName);
  const privacy = document.getElementById("footer-privacy");
  if (privacy) {
    privacy.href = l.privacyPath;
  }
}

function wireWhatsAppLinks() {
  const url = waLink();
  document.querySelectorAll(".wa-cta-global").forEach((el) => {
    if (el.tagName === "A") {
      el.href = url;
    }
  });
  const barCall = document.getElementById("mobile-call");
  if (barCall) {
    barCall.href = `tel:${PROJECT_CONFIG.contact.phoneTel}`;
  }
}

function initNav() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }
  });

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, "&#39;");
}

function initGalleryLightbox() {
  if (typeof GLightbox === "function") {
    GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true });
  }
}

let enquirySource = "popup";

function applyEnquiryCopy() {
  const e = PROJECT_CONFIG.enquiry;
  if (!e) {
    return;
  }
  setText("enquiry-title", e.title);
  setText("enquiry-subtitle", e.subtitle);
  setText("enquiry-consent-label", e.consentLabel);
  const submit = document.getElementById("enquiry-submit");
  if (submit && e.submitLabel) {
    submit.innerHTML = `<i class="ri-whatsapp-line" aria-hidden="true"></i> ${escapeHtml(e.submitLabel)}`;
  }
}

function setEnquiryOpen(open) {
  const modal = document.getElementById("enquiry-modal");
  const backdrop = document.getElementById("enquiry-backdrop");
  if (!modal) {
    return;
  }
  modal.hidden = !open;
  modal.classList.toggle("is-open", open);
  modal.setAttribute("aria-hidden", open ? "false" : "true");
  document.body.classList.toggle("modal-open", open);
  if (open) {
    const first = document.getElementById("enquiry-name");
    if (first) {
      first.focus();
    }
  } else if (backdrop) {
    backdrop.blur();
  }
}

function openEnquiryModal(source) {
  enquirySource = source || "unknown";
  const field = document.getElementById("enquiry-source");
  if (field) {
    field.value = enquirySource;
  }
  setEnquiryOpen(true);
}

function normalizePhone(phone) {
  return String(phone).replace(/\D/g, "").slice(-10);
}

function buildLeadWhatsAppMessage(name, email, phone) {
  const brand = PROJECT_CONFIG.brand.projectName;
  const base = PROJECT_CONFIG.contact.whatsappMessage;
  return `${base}

Name: ${name}
Email: ${email}
Mobile: +91${phone}
Enquiry from: ${enquirySource}
Project: ${brand}`;
}

async function postFormspree(payload) {
  const url = PROJECT_CONFIG.enquiry?.formspreeUrl;
  if (!url) {
    return true;
  }
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.ok;
}

function initEnquiryModal() {
  const cfg = PROJECT_CONFIG.enquiry;
  if (!cfg) {
    return;
  }

  applyEnquiryCopy();

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".open-enquiry, .wa-cta");
    if (!trigger) {
      return;
    }
    event.preventDefault();
    const source =
      trigger.getAttribute("data-enquiry-source") ||
      trigger.id ||
      "cta";
    openEnquiryModal(source);
  });

  const closeBtn = document.getElementById("enquiry-close");
  const backdrop = document.getElementById("enquiry-backdrop");
  closeBtn?.addEventListener("click", () => setEnquiryOpen(false));
  backdrop?.addEventListener("click", () => setEnquiryOpen(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setEnquiryOpen(false);
    }
  });

  const form = document.getElementById("enquiry-form");
  const errorEl = document.getElementById("enquiry-error");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (errorEl) {
      errorEl.hidden = true;
    }

    const name = document.getElementById("enquiry-name")?.value.trim() || "";
    const email = document.getElementById("enquiry-email")?.value.trim() || "";
    const phone = normalizePhone(
      document.getElementById("enquiry-phone")?.value || ""
    );
    const consent = document.getElementById("enquiry-consent")?.checked;

    if (!name || !email || !phone || phone.length !== 10 || !consent) {
      if (errorEl) {
        errorEl.textContent =
          "Please enter name, valid email, 10-digit mobile, and accept consent.";
        errorEl.hidden = false;
      }
      return;
    }

    const payload = {
      name,
      email,
      phone: `+91${phone}`,
      source: enquirySource,
      project: PROJECT_CONFIG.brand.projectName,
    };

    const mode = cfg.afterSubmit || "whatsapp";

    try {
      if (mode === "formspree" || mode === "both") {
        if (!cfg.formspreeUrl) {
          if (errorEl) {
            errorEl.textContent =
              "Formspree URL missing in config. Set enquiry.formspreeUrl or use afterSubmit: \"whatsapp\".";
            errorEl.hidden = false;
          }
          return;
        }
        const ok = await postFormspree(payload);
        if (!ok) {
          if (errorEl) {
            errorEl.textContent = "Could not send form. Try again or use WhatsApp.";
            errorEl.hidden = false;
          }
          return;
        }
      }

      if (mode === "whatsapp" || mode === "both") {
        const msg = buildLeadWhatsAppMessage(name, email, phone);
        const to = PROJECT_CONFIG.contact.whatsapp;
        window.open(buildWhatsAppUrl(to, msg), "_blank", "noopener,noreferrer");
      }

      setEnquiryOpen(false);
      form.reset();
      sessionStorage.setItem("enquirySubmitted", "1");
    } catch {
      if (errorEl) {
        errorEl.textContent = "Something went wrong. Please try again.";
        errorEl.hidden = false;
      }
    }
  });

  if (cfg.showPopupOnLoad) {
    const already =
      cfg.popupOncePerSession && sessionStorage.getItem("enquiryPopupSeen");
    if (!already) {
      setTimeout(() => {
        openEnquiryModal("auto-popup");
        if (cfg.popupOncePerSession) {
          sessionStorage.setItem("enquiryPopupSeen", "1");
        }
      }, cfg.popupDelayMs || 2000);
    }
  }

}

document.addEventListener("DOMContentLoaded", () => {
  applyMeta();
  applyHero();
  applyOverview();
  applyPricing();
  applyPlans();
  applyAmenities();
  applyGallery();
  applyLocation();
  applyFaq();
  applyDeveloper();
  applyLegal();
  wireWhatsAppLinks();
  initNav();
  initGalleryLightbox();
  initEnquiryModal();
});

window.addEventListener("resize", () => {
  applyHero();
});