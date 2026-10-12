# Resell Reads Website Content & Design Plan

**Document purpose:** A production-ready brief for a warm, mobile-first bookstore and community-library website created by students for student readers.

**Primary promise:** *Read More. Spend Less.*

**Brand line:** *Books by students, for students.*

**Primary conversion:** Start an Instagram DM for a book order, rental, or listing inquiry. The first release deliberately avoids online checkout while keeping the catalog, account, and inventory foundations ready for future commerce.

---

## 1. Product direction

### Audience

- Teenagers and young adults looking for affordable books.
- Students who want to discover a next read without browsing a corporate marketplace.
- Readers who prefer pre-loved books, softcopies, or borrowing before buying.
- Students with books at home who want to make them available to the community.

### Visitor mindset

Visitors are usually browsing on a phone between classes, commuting, or late at night. They need quick reassurance about price, condition, availability, and how ordering works. The experience should feel personal and trustworthy, never like a high-pressure storefront.

### Experience thesis

Resell Reads should feel like opening a well-loved bookshop window: a clear shelf of good choices, handwritten moments of personality, and an easy path to ask a real person for help. The interface refuses the generic grid-first marketplace pattern by using editorial “shelf” groupings, short reading notes, and community context around the catalog.

### Success measures

- A first-time visitor understands the offer and the Instagram-DM ordering model within one viewport.
- A visitor can find a book by title, author, category, condition, or price in under a minute.
- Buying and renting are visually distinct at every step.
- A small student team can update books, availability, reviews, and rental status without developer help.
- No fabricated reviews, fake scarcity, or unnecessary collection of personal information.

---

## 2. Visual direction

### Creative concept: The Annotated Bookshelf

The site uses the visual language of a student’s favorite shelf: book spines, paper slips, bookmarks, quiet botanical marks, and small handwritten annotations. The system is editorial and tactile, but the layout remains crisp enough for fast scanning and accessible mobile use.

**Signature moment:** On the home page, a horizontal “shelf” of featured books sits beneath the hero. Selecting a book lifts its card slightly, reveals its condition and price, and exposes a direct “DM to order” action. The motion should be subtle and optional; the content must remain fully usable without animation.

### Palette

| Role | Color | Use |
|---|---|---|
| Paper | `#F7F1E7` cream | Main page background and reading surfaces |
| Warm beige | `#E9DDCB` | Alternating sections, form surfaces, shelf backdrops |
| Deep navy | `#17263D` | Primary text, navigation, buttons, footer |
| Muted brown | `#735848` | Secondary text, borders, book-spine details |
| Burgundy accent | `#8C3948` | Selected states, key tags, small highlights |
| Soft sage | `#A8B6A0` | Botanical details and gentle library cues |
| Ink white | `#FFFDF8` | Text on navy and burgundy surfaces |

Use navy for high-contrast actions, not burgundy. Burgundy is an accent, not the default button color. Body text must meet a minimum 4.5:1 contrast ratio.

### Typography

- **Display:** a distinctive editorial serif with a slightly literary feel, such as Newsreader or Cormorant Garamond, used for page titles and major statements.
- **Interface/body:** a friendly sans-serif such as DM Sans or Instrument Sans for navigation, metadata, prices, forms, and long copy.
- **Handwritten accent:** one restrained handwritten face for short labels such as “staff pick” or “from our shelf”; never use it for instructions, prices, or essential information.
- Keep body copy at a comfortable reading measure of approximately 65–75 characters on desktop and generous line height on mobile.

### Materials and details

- Very light paper grain on large background fields; never use texture behind dense text.
- Thin shelf rules and book-spine separators rather than heavy card borders.
- Bookmark-shaped tags for “New,” “Pre-loved,” “Student pick,” and “Available.”
- Small botanical line drawings in section corners, with reduced-detail mobile variants.
- Soft, offset shadows that suggest a book lifted from a shelf; avoid floating glass panels.
- Rounded corners should be modest and consistent. Avoid excessive pill-shaped UI.

### Layout principles

- Use a strong editorial rhythm: generous section openings, compact metadata clusters, and clear price/action alignment.
- Use horizontal shelves for discovery and larger responsive grids for catalog work.
- Keep the primary action visible without making every section a sales pitch.
- Use content hierarchy before decoration. A cover, title, condition, price, and availability should win over illustrations.
- Mobile uses a sticky, compact header and horizontally scrollable shelves; desktop uses a centered max-width layout with generous margins.

### Motion and accessibility

- One authored entrance: the first shelf can settle into place with a short, reduced-motion-safe slide/fade.
- Hover and focus states should lift or underline content, not rely on color alone.
- Respect `prefers-reduced-motion`.
- All covers need meaningful alt text; decorative marks use empty alt text.
- Keyboard users need visible focus rings and logical order.
- Do not place important text inside images.

---

## 3. Information architecture

### Primary navigation

`Home` · `Shop` · `Library` · `Reviews` · `About Us` · `Contact`

Persistent actions:

- `Shop Books` — primary navy action.
- `Browse Library` — secondary outlined action.
- Reader account icon — opens sign in / create account.

On mobile, use a menu drawer with the two primary actions pinned near the top. Keep the account action available without making it compete with ordering.

### Supporting routes

- `/account` — profile, preferences, recommendations, wishlist, rentals, orders, privacy.
- `/owner` — approved book-owner listing tools.
- `/admin` — student-team operations dashboard.
- `/privacy` and `/terms` — plain-language policies.
- `/how-it-works` — optional explainer linked from Shop and Library.

---

## 4. Shared content system

### Reusable book card

Every card should make the decision visible without opening a detail page:

1. Cover image with a stable aspect ratio and descriptive alt text.
2. Condition bookmark: `New`, `Pre-loved`, or `Digital`.
3. Title and author.
4. Price block:
   - MRP, when known.
   - Resell Reads price.
   - Softcopy price, only when available.
5. Availability: `Available`, `Low stock`, `On rental`, `Coming soon`, or `Unavailable`.
6. Contextual action: `DM to order` for sales, `Rent this book` for rentals, or `Join waitlist` when enabled.

Never imply a book is available if the team has not confirmed the status. Avoid artificial countdowns and scarcity language.

### Data labels

Use plain, consistent labels:

- `Condition: New`
- `Condition: Pre-loved`
- `Format: Physical`
- `Format: Softcopy`
- `Rental: ₹45 / week`
- `Late fee: ₹1 / day`

### Instagram action behavior

Each DM button opens the official Instagram profile or deep link with a prefilled message when supported:

> Hi Resell Reads! I’m interested in “[Book title]” by [Author]. Is it still available?

If a deep link is unavailable on a device, show the handle and a one-tap copy action. Never pretend an order has been placed.

---

## 5. Page-by-page content and design

## Home

### Hero

**Resell Reads**  
**Read More. Spend Less.**  
*Books by students, for students.*

Supporting copy:

> A student-run bookstore and reading community making good stories more accessible — through brand-new books, pre-loved finds, affordable softcopies, and community rentals.

Actions:

- `Shop books`
- `Browse the library`

Visual composition: a calm cream opening with an oversized navy headline, a paper bookmark accent, and a shelf of 3–4 featured covers entering the first viewport. Keep the hero copy and first action visible before the shelf on narrow screens.

### Mission strip

> Find a book you’ll love, spend less on it, and pass the story forward when you’re done.

Link to `How the community works`.

### What we offer

Use six compact service blocks with one-line descriptions:

- **Brand-new books** — Fresh copies for gifts, study breaks, and new obsessions.
- **Pre-loved books** — Good stories with a little history and a gentler price.
- **Affordable softcopies** — Digital options when portability matters.
- **Community book rentals** — Borrow from another reader for ₹45 per week.
- **Student-friendly prices** — Clear pricing before you DM.
- **Secure packaging** — Carefully packed so books arrive ready to read.

### Your next read is waiting

Feature 4–6 verified catalog items. Use a shelf composition rather than six identical tiles. Each item includes cover, title, author, condition, Resell Reads price, softcopy price when applicable, and `DM to order`.

### Trust and community cue

Short callout:

> Started by readers, kept going by readers. Every order, rental, and listed book helps a good story find its next person.

Do not use a testimonial here unless it has been collected and permission to publish has been recorded.

### Home states

- Empty featured shelf: explain that the team is refreshing the shelf and link to Shop.
- Cover loading: preserve the aspect-ratio frame and show a neutral paper placeholder.
- Missing cover: show a typographic “cover coming soon” treatment rather than a broken image.

## Shop

### Intro

**Find your next favorite.**  
Browse brand-new books, pre-loved treasures, and student picks. Orders are confirmed through Instagram DM — no complicated checkout.

### Search and filters

- Search by title, author, or keyword.
- Category filters: `New Books`, `Pre-loved Books`, `Classics`, `Thrillers`, `Mystery`, `YA`, `Fantasy`, `Student Picks`.
- Optional filters: price range, condition, format, availability.
- Sort: `Featured`, `Price: low to high`, `Newest added`, `Title`.
- On mobile, use a sticky search bar and a filter sheet; retain a visible count of results.

### Catalog card content

Show cover, title, author, condition, MRP, Resell Reads price, softcopy price when available, availability, and `DM to order`.

### Catalog guidance

Use a short “How ordering works” panel above the first results:

1. Find a book.
2. Tap `DM to order`.
3. We confirm availability, price, and delivery details with you.

Product detail drawers/pages can be added later for longer descriptions, edition information, related books, and waitlists. The first release should not force a visitor into a detail page for basic decision-making.

## Library

### Intro

**The Resell Reads Library**  
*Borrow a book. Read it. Return it. Let someone else discover it.*

Copy:

> Our community library lets readers rent books owned by other members of the Resell Reads community. We coordinate the request, handover, return, and owner share so more stories can keep moving.

Pricing panel:

- **₹45 / week**
- **₹1 / additional day after the due date**
- Confirm pickup, handover, and return details with the team before a rental begins.

### Rental catalog

Each card includes cover, title, author, condition, availability, rental price, due-date guidance, and `Rent this book`.

Use a distinctly sage or beige rental treatment so buying and borrowing never look interchangeable.

### List your book

**Your bookshelf could be someone else’s next adventure.**

Copy:

> Have a book sitting on your shelf? List it with Resell Reads and let another reader enjoy it. We review each listing, confirm the details with you, and coordinate the rental before it goes live.

Required submission fields:

- Account username or contact email.
- Book title and author.
- Edition and publication year, if known.
- Condition and notes about markings or damage.
- Photos: cover, spine, pages with annotations, and any damage.
- Availability window.
- Preferred handover area or method.
- Owner’s rental-share preference, if supported by the team.

Process explanation:

1. Submit the book details and photos.
2. Resell Reads reviews the listing and asks follow-up questions.
3. Once approved, the book appears in the library.
4. We coordinate each rental and record the due date.
5. The owner receives their agreed share after the rental is completed.

Show a clear notice that approval is required and that listings can be declined for safety, condition, copyright, or operational reasons.

## Reviews

**What our readers say**

Use elegant quote cards only for genuine reviews. Store permission status and the requested display name with every review.

Empty-state copy:

> We’re collecting notes from real readers. Check back soon — or share your experience with us on Instagram.

Footer note:

> Reviews are shared with permission from our readers. Names and handles are shown only when the reader has agreed.

Never fill the page with invented testimonials, anonymous “five-star” claims, or stock quotes.

## About Us

**Built by readers.**

Suggested copy:

> Resell Reads is a student-run bookstore and reading community created to make reading more accessible and affordable. We sell brand-new and pre-loved books, offer affordable softcopies, and are building a community library where books can move from one reader to another.
>
> We started small, with a simple belief: discovering a great book should not require spending a fortune. We care about clear prices, honest condition notes, thoughtful packaging, and making room for more readers.
>
> **Student-run. Reader-driven.**

Add a compact values row:

- Access over markup.
- Honest condition notes.
- Community before complexity.
- Privacy by default.

## Contact

**Let’s talk books.**

Opening copy:

> Need a recommendation, want to rent a book, or have a shelf to share? Send us a message and we’ll help you find the next step.

Prominent Instagram: **@resell.reads_67**

Actions:

- `DM to order`
- `Ask about a rental`
- `List a book`

Simple form:

- Name or preferred name (optional).
- Instagram username (optional).
- Message (required).
- Consent checkbox for being contacted about this request.

Explain that the form is an alternative to Instagram DM and that no payment details should be submitted through it.

## Footer

**Resell Reads**  
*Read More. Spend Less.*

Links: Shop Books · Library · Reviews · About Us · Contact · Privacy

Instagram: **@resell.reads_67**

Closing line:

> Great stories. Better prices. Happy readers.

---

## 6. Reader account system

### Privacy-first signup

Accounts are optional for browsing and initial DM orders. Ask only for:

- Username or display name — real name not required.
- Email address — for account recovery and important updates.
- Password.
- Optional Instagram username.
- Avatar selected from a themed collection of illustrated books, plants, bookmarks, and reading objects.

Do not require phone number, school name, date of birth, contacts, or social login in the first release.

Signup safeguards:

- Verify email before enabling sensitive account actions.
- Use a password manager-friendly password field and clear password requirements.
- Provide account deletion and export request paths.
- Explain what each field is used for at the point of collection.
- Never expose email or Instagram username publicly by default.

### Reading preferences

Let readers select:

- Genres: YA, fantasy, mystery, thriller, romance, classics, literary, non-fiction, study/support.
- Price ranges: under ₹200, ₹200–₹500, ₹500–₹800, flexible.
- Formats: new physical, pre-loved physical, softcopy, rental.
- Optional reading mood or pace tags.

Preferences should be editable, skippable, and used for recommendations without becoming a public profile.

### Reader dashboard

Sections:

- **Recommended for you** — preference-based items first; activity-based improvements only with clear consent.
- **Wishlist** — save books, show current availability, remove or move to “read later.”
- **My rentals** — active rentals, due date, return status, late-fee reminder, and contact action.
- **Order history** — inquiry/order status and date; do not imply payment completion if the order was handled in DM.
- **Profile and privacy** — preferences, avatar, email, Instagram visibility, data export, delete account.

Recommendation rules:

- Label recommendations as “Based on your preferences” or “Because you saved…”.
- Do not infer sensitive traits.
- Provide `Not for me` and `Why am I seeing this?`.
- If there is too little activity, show a useful preference-based empty state rather than a fake personalized feed.

---

## 7. Book-owner accounts and listing approval

Book owners can use a reader account and opt into owner tools, or register as an owner from the Library page.

Owner capabilities:

- Create and save a draft listing.
- Upload cover/spine/condition photos.
- Edit condition notes and availability.
- View approval status: `Draft`, `Under review`, `Changes requested`, `Approved`, `Paused`, `Archived`.
- See active rentals and expected return dates for their approved books.
- Pause or withdraw a listing.

Approval checklist for the student team:

- Photos are clear and match the described edition.
- Condition and markings are accurately disclosed.
- Rental terms and handover location are feasible.
- Listing does not create copyright or safety concerns.
- Owner has accepted the rental coordination and share terms.

Owner contact details stay private to the operations team. Public listings show only the information needed to rent the book.

---

## 8. Admin dashboard

Design for a small team that may manage the site from a phone.

### Home overview

Show only actionable summary:

- Books needing approval.
- Rentals due soon or overdue.
- New order/DM inquiries to follow up.
- Low-stock or unavailable books that still appear in the catalog.
- Unpublished reviews awaiting permission confirmation.

### Books

- Add/edit title, author, cover, categories, condition, MRP, sale price, softcopy price, availability, format, and notes.
- Bulk status updates.
- Draft and publish workflow.
- Duplicate-book warning to reduce catalog clutter.

### Rentals

- Approve/decline rental requests.
- Assign renter and owner without exposing private contact details.
- Record handover date, due date, return date, late days, and fee.
- Send templated reminders through the team’s chosen channel.
- Flag disputes for manual review.

### Orders and inquiries

- Track `New`, `Waiting for reply`, `Availability confirmed`, `Packed`, `Completed`, `Cancelled`.
- Store the Instagram conversation link instead of copying unnecessary personal chat content.
- Keep payment status separate and disabled until payment is introduced.

### Users

- Search by username/email.
- View account status, consent history, rentals, and reports.
- Reset access without viewing passwords.
- Suspend or delete accounts with an audit reason.

### Reviews

- Store exact review text, source, permission status, display name, date, and publication state.
- Do not publish until permission is explicitly recorded.

### Basic analytics

Keep analytics lightweight and privacy-aware:

- Catalog views and search terms.
- DM button clicks by book/category.
- Rental requests and completion rate.
- Wishlist saves.
- Top categories and out-of-stock demand.

Avoid ad trackers and invasive cross-site profiles. Provide aggregated counts rather than individual behavior where possible.

---

## 9. Privacy, security, and trust requirements

- Collect the minimum data needed for the stated task.
- Hash passwords with a modern password-hashing algorithm; never store plaintext passwords.
- Use secure, HTTP-only session cookies or an equivalent vetted auth mechanism.
- Rate-limit signup, login, password reset, forms, and DM-link generation.
- Verify uploads by type and size; strip unsafe metadata where practical.
- Restrict admin and owner actions by role.
- Log sensitive changes such as listing approval, rental status, account deletion, and price edits.
- Use plain-language consent and privacy copy.
- Provide account deletion, data export, and contact routes.
- Avoid publishing a reader’s real name, email, Instagram username, rental history, or wishlist without explicit consent.
- Back up catalog and rental data, and define a short retention policy for abandoned inquiries.
- Treat the site as a catalog and coordination tool until payment, delivery, and legal processes are deliberately added.

---

## 10. Mobile, performance, and accessibility

- Mobile-first layouts with comfortable tap targets and no hover-only information.
- Responsive image sizes and modern formats; lazy-load below-the-fold covers.
- Reserve image space to prevent layout shift.
- Keep decorative textures lightweight and optional.
- Prefer static content and simple client-side filtering before adding a heavy commerce framework.
- Use semantic headings, landmarks, labels, and live results counts.
- Ensure dialogs, filter sheets, menus, and carousels are keyboard and screen-reader usable.
- Make `DM to order` and rental actions understandable without color.
- Test at narrow phone widths, tablet widths, and a large desktop viewport.
- Test slow network behavior with a usable text-first loading state.

---

## 11. MVP and future-ready roadmap

### Phase 1: trustworthy catalog

- Home, Shop, Library, Reviews, About, Contact.
- Search/filter catalog.
- Availability and condition labels.
- Instagram DM actions.
- List-a-book form.
- Content-managed reviews with permission status.
- Privacy and accessibility baseline.

### Phase 2: community accounts

- Privacy-first reader signup.
- Preferences, themed avatars, wishlist.
- Preference-based recommendations.
- Rental request tracking and due-date reminders.
- Owner listing drafts and approval workflow.

### Phase 3: operations

- Admin dashboard for catalog, rentals, inquiries, users, and analytics.
- Audit log, role permissions, exports, and backups.
- Better inventory status and owner-share tracking.

### Phase 4: optional commerce

- Payment provider integration with clear order confirmation.
- Receipts and delivery tracking.
- Automated stock updates and rental deposits if needed.
- Keep Instagram and human support available even after payments launch.

The data model should keep books, formats, prices, listings, rentals, inquiries, users, consents, and reviews separate so Phase 4 does not require rebuilding the catalog.

---

## 12. Content governance

- Maintain one source of truth for every book’s title, author, edition, condition, price, and availability.
- Require a last-verified date for inventory and rental status.
- Mark synthetic placeholder covers and copy internally; replace before launch.
- Never publish a review without permission metadata.
- Review pricing and late-fee copy whenever the rental policy changes.
- Use a friendly, direct voice: specific, warm, and never overpromising.

### Voice examples

Prefer:

> This copy has light pencil notes on two pages. Still a lovely read, and priced accordingly.

Avoid:

> Hurry!!! Last chance to grab this amazing deal!!!

---

## 13. Launch acceptance checklist

- The first viewport communicates who Resell Reads is, what it offers, and how to act.
- Shop and Library paths are distinguishable without explanation.
- Every live book has a verified availability state and price.
- Reviews are real or the page uses the honest empty state.
- Instagram handle and all DM actions are correct.
- Listing submissions clearly explain review and coordination.
- Signup does not require a real name or unnecessary personal data.
- Reader can edit preferences, manage wishlist, and request account deletion.
- Owner listings cannot appear publicly before approval.
- Admin can update catalog and rental state from a small-screen workflow.
- Forms have error, success, empty, and loading states.
- Keyboard navigation, contrast, reduced motion, and screen-reader labels have been tested.
- No fake checkout, fake payment confirmation, fabricated social proof, or artificial scarcity is present.

