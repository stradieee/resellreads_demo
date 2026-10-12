# Resell Reads setup

## Connect the contact form

The contact form is prepared for Formspree and currently uses this placeholder:

```text
https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID
```

1. Create a form at [formspree.io](https://formspree.io).
2. Verify the email address where messages should arrive.
3. Copy the endpoint Formspree gives you.
4. Open `index.html`.
5. Replace `REPLACE_WITH_YOUR_FORM_ID` in the contact form's `action` attribute with the real ID.
6. Upload the files to your hosting provider.
7. Submit a test message and confirm it arrives.

The form uses a normal `POST` request and redirects to `thanks.html` after a successful submission. The previous local-only JavaScript handler has been removed so it will no longer swallow the submission.

## Current limitations

Reader accounts, rental tracking, owner listings, and the account/listing modal are front-end previews. They need a real backend such as Supabase or Firebase before launch. Do not collect payment details through this static site.
