/**
 * ONE-CLICK GOOGLE FORM BUILDER (run in YOUR Google account)
 *
 * HOW TO USE:
 * 1. Open https://script.google.com → New project
 * 2. Delete default code → paste ALL of this file
 * 3. Save project name: "Create Client Website Form"
 * 4. Run function: createClientIntakeForm
 * 5. First time: Review permissions → Allow
 * 6. View → Logs (or Execution log) → copy the Form URL printed there
 * 7. Open that URL in browser → your form is live
 *
 * Optional: edit YOUR_WHATSAPP below before running.
 */
function createClientIntakeForm() {
  var YOUR_WHATSAPP = "91XXXXXXXXXX"; // your business WhatsApp for form description

  var form = FormApp.create("New Project Website — Client Details (₹6,000 Package)");
  form.setDescription(
    "Thank you. This collects everything for your project landing page.\n\n" +
      "• Images: upload to Google Drive (one folder) and paste the share link in Section 6, " +
      "OR use File upload questions if enabled on the form, OR WhatsApp images after submit.\n" +
      "• Location: Google Maps → pin site → Share → Copy link.\n\n" +
      "After submitting, pay 50% advance and WhatsApp payment screenshot to: " +
      YOUR_WHATSAPP
  );
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(false);
  form.setConfirmationMessage(
    "Thank you! We received your details. We will review within 1–2 business days and " +
      "contact you on WhatsApp if anything is missing. Work starts after 50% advance (₹3,000)."
  );

  // --- Section 1 ---
  form.addPageBreakItem().setTitle("1. Project basics");
  addRequiredShort(form, "Full name of person filling this form");
  addRequiredShort(form, "Business / marketing name (privacy policy & footer)");
  addRequiredShort(form, "Project name (website headline)");
  addRequiredShort(form, "Location line (e.g. At Whitefield, East Bengaluru)");
  addRequiredShort(form, "Developer name (e.g. By XYZ Developers)");
  addRequiredShort(form, "BHK summary (e.g. 2, 3 & 4 BHK)");
  addRequiredShort(form, "Starting price text (e.g. ₹ 1.07 Cr* Onwards)");
  addRequiredParagraph(form, "Project overview (one paragraph for About section)");

  // --- Section 2 ---
  form.addPageBreakItem().setTitle("2. Contact & WhatsApp");
  addRequiredShort(
    form,
    "Phone for Call button (with +91)",
    "Example: +91 98765 43210"
  );
  addRequiredShort(
    form,
    "WhatsApp number (91 + 10 digits, no + sign)",
    "Example: 919876543210"
  );
  addRequiredParagraph(
    form,
    "Default WhatsApp enquiry message",
    "Hi, I am interested in [Project]. Please share price and availability."
  );
  addRequiredShort(form, "Email for privacy policy");

  // --- Section 3 ---
  form.addPageBreakItem().setTitle("3. Pricing");
  addRequiredParagraph(
    form,
    "Configuration 1 — BHK name, sq.ft, price (3 lines)",
    "e.g. 3 BHK\\n1540 sq.ft\\n₹ 2.19 Cr*"
  );
  form.addParagraphTextItem().setTitle("Configuration 2 (optional)");
  form.addParagraphTextItem().setTitle("Configuration 3 (optional)");
  form.addParagraphTextItem().setTitle("Configuration 4 (optional)");
  addRequiredShort(
    form,
    "Pricing note under table",
    "*Prices are indicative. Final pricing on WhatsApp."
  );

  // --- Section 4 ---
  form.addPageBreakItem().setTitle("4. Highlights & amenities");
  addRequiredParagraph(form, "Highlights — one benefit per line (5–8 lines)");
  addRequiredParagraph(form, "Amenities — one per line");
  form
    .addParagraphTextItem()
    .setTitle("Hero stats optional (acres, open %, towers)")
    .setHelpText("One per line");

  // --- Section 5 ---
  form
    .addPageBreakItem()
    .setTitle("5. Location & map")
    .setHelpText(
      "Maps: pin exact site → Share → Copy link. Embed: Share → Embed a map → copy https://www.google.com/maps/embed?pb=..."
    );
  addRequiredParagraph(form, "Connectivity — bullets with distances");
  form.addParagraphTextItem().setTitle("Education (optional)");
  form.addParagraphTextItem().setTitle("Healthcare (optional)");
  form.addParagraphTextItem().setTitle("Malls & retail (optional)");
  addRequiredShort(form, "Google Maps SHARE link (full URL)");
  form
    .addTextItem()
    .setTitle("Google Maps EMBED url (optional)")
    .setHelpText("Paste embed URL for website map");
  form.addParagraphTextItem().setTitle("Full address if map unavailable");

  // --- Section 6 --- (Drive links work on all accounts; file upload via script is often blocked)
  form
    .addPageBreakItem()
    .setTitle("6. Project images")
    .setHelpText(
      "Put logo, banner, gallery, master plan & floor plans in one Google Drive folder. " +
        "Share → General access → Anyone with the link → Viewer → Copy link."
    );
  addRequiredShort(
    form,
    "Google Drive folder link (all project images)",
    "Must include: logo, hero banner, gallery photos, master plan, floor plans"
  );
  form
    .addParagraphTextItem()
    .setTitle("Image checklist (what you put in the folder)")
    .setHelpText(
      "Example: logo.png, banner-desktop.jpg, gallery-01.jpg … master-plan.jpg, floor-2bhk.jpg"
    );
  form
    .addMultipleChoiceItem()
    .setTitle("If you cannot use Drive, I will send images on WhatsApp after this form")
    .setChoiceValues(["Yes — I will WhatsApp all images", "No — I used the Drive link above"])
    .setRequired(true);
  addOptionalFileUploads(form);

  // --- Section 7 ---
  form.addPageBreakItem().setTitle("7. FAQ & developer");
  addRequiredShort(form, "FAQ 1 — Question");
  addRequiredParagraph(form, "FAQ 1 — Answer");
  form.addTextItem().setTitle("FAQ 2 — Question");
  form.addParagraphTextItem().setTitle("FAQ 2 — Answer");
  form.addTextItem().setTitle("FAQ 3 — Question");
  form.addParagraphTextItem().setTitle("FAQ 3 — Answer");
  form.addTextItem().setTitle("FAQ 4 — Question");
  form.addParagraphTextItem().setTitle("FAQ 4 — Answer");
  addRequiredParagraph(form, "About the developer (one paragraph)");

  // --- Section 8 ---
  form.addPageBreakItem().setTitle("8. Legal");
  addRequiredParagraph(
    form,
    "RERA registration number(s) — exact from RERA portal"
  );
  form
    .addMultipleChoiceItem()
    .setTitle("I confirm we have rights to use uploaded images for marketing *")
    .setChoiceValues(["Yes, I agree"])
    .setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("I confirm indicative prices are approved for marketing *")
    .setChoiceValues(["Yes, I agree"])
    .setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("Disclaimer *")
    .setChoiceValues([
      "Use your standard disclaimer template",
      "I will send custom disclaimer in next question",
    ])
    .setRequired(true);
  form.addParagraphTextItem().setTitle("Custom disclaimer text (if applicable)");

  // --- Section 9 ---
  form.addPageBreakItem().setTitle("9. Hosting & notes");
  form
    .addTextItem()
    .setTitle("Preferred site name (e.g. lodha-whitefield for lodha-whitefield.netlify.app)");
  form.addDateItem().setTitle("Desired go-live date");
  form.addParagraphTextItem().setTitle("Additional notes");

  // Link responses to a new spreadsheet
  form.setDestination(FormApp.DestinationType.SPREADSHEET, SpreadsheetApp.create("Client Website Responses").getId());

  var formUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log("FORM CREATED (share the published URL with clients):");
  Logger.log(formUrl);
  Logger.log("EDIT YOUR FORM HERE:");
  Logger.log(editUrl);
  Logger.log(
    "TIP: In the form editor, Section 6 → Add question → File upload (add manually if you want direct uploads)."
  );
}

function addRequiredShort(form, title, helpText) {
  var item = form.addTextItem().setTitle(title).setRequired(true);
  if (helpText) {
    item.setHelpText(helpText);
  }
}

function addRequiredParagraph(form, title, helpText) {
  var item = form.addParagraphTextItem().setTitle(title).setRequired(true);
  if (helpText) {
    item.setHelpText(helpText);
  }
}

/**
 * File upload via Apps Script is not available on every Google account.
 * When unavailable, this no-ops so the script still finishes; use Drive link + manual File upload in UI.
 */
function addOptionalFileUploads(form) {
  if (typeof form.addFileUploadItem !== "function") {
    return;
  }

  var folder = DriveApp.createFolder(
    "Website Client Uploads - " + new Date().toISOString().slice(0, 10)
  );

  var titles = [
    "Optional file upload — Logo",
    "Optional file upload — Hero banner",
    "Optional file upload — Gallery ZIP",
  ];

  for (var i = 0; i < titles.length; i++) {
    try {
      var item = form.addFileUploadItem();
      item.setTitle(titles[i]).setRequired(false);
      item.setFolderId(folder.getId());
    } catch (e) {
      Logger.log("File upload skipped: " + titles[i]);
      return;
    }
  }
}