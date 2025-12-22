# Hostinger Deployment Guide - Dental Landing Pages

## ✅ Asset Links Fixed

Both HTML files have been updated with correct relative paths for the Hostinger folder structure.

---

## File Structure on Hostinger

```
public_html/
├── logo.png                          ← RSL logo (already there)
├── favicon.svg                       ← Favicon (already there)
├── siddharth.png                     ← Photo (already there)
├── rahul.png                         ← Photo (already there)
│
├── dental-no-shows/                  ← CREATE THIS FOLDER
│   └── index.html                    ← Upload dental-no-shows.html (RENAME to index.html)
│
└── dental-reviews/                   ← CREATE THIS FOLDER (later)
    └── index.html                    ← Upload dental-reviews.html (RENAME to index.html)
```

---

## Step-by-Step Deployment

### **Step 1: Create Folder**
1. Log into Hostinger File Manager
2. Navigate to `public_html/`
3. Click "New Folder"
4. Name it: `dental-no-shows`

### **Step 2: Upload HTML File**
1. Open the `dental-no-shows/` folder you just created
2. Click "Upload Files"
3. Upload `dental-no-shows.html`
4. **IMPORTANT:** Rename it to `index.html` (right-click → Rename)

### **Step 3: Verify Assets Exist**
Make sure these files are in `public_html/` (root level):
- ✅ `logo.png` (RSL Media Hub logo)
- ✅ `favicon.svg` (browser tab icon)

If missing, you'll need to upload them.

### **Step 4: Test the Page**
Visit: `https://rslmediahub.com/dental-no-shows/`

Should load correctly with:
- ✅ Logo in navigation
- ✅ Favicon in browser tab
- ✅ Calendar widget at bottom
- ✅ All styling/animations working

---

## For dental-reviews Page (Repeat Later)

When ready to deploy the second page:

1. Create folder: `public_html/dental-reviews/`
2. Upload `dental-reviews.html` → rename to `index.html`
3. Visit: `https://rslmediahub.com/dental-reviews/`

---

## Asset Path Explanation

### ❌ Before (wouldn't work):
```html
<link rel="icon" href="favicon.svg">     <!-- looks in dental-no-shows/ folder -->
<img src="logo.png">                     <!-- looks in dental-no-shows/ folder -->
```

### ✅ After (correct):
```html
<link rel="icon" href="../favicon.svg">  <!-- goes up to public_html/ -->
<img src="../logo.png">                  <!-- goes up to public_html/ -->
```

The `../` means "go up one folder level" from `dental-no-shows/` to `public_html/`.

---

## URLs After Deployment

- **No-Shows Page:** https://rslmediahub.com/dental-no-shows/
- **Reviews Page:** https://rslmediahub.com/dental-reviews/ (when deployed)
- **Main Site:** https://rslmediahub.com/

---

## What If Logo/Favicon Don't Show?

### Check 1: File Names Match Exactly
- Logo must be named: `logo.png` (not `Logo.png` or `logo.PNG`)
- Favicon must be: `favicon.svg` (not `favicon.SVG`)

### Check 2: Files Are in Correct Location
- Both must be in `public_html/` (NOT inside dental-no-shows folder)

### Check 3: Browser Cache
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### Fallback (if logo still missing):
The HTML has `onerror="this.style.display='none'"` so logo will just hide gracefully if file is missing. Page will still work.

---

## Mobile Testing Checklist

After deployment, test on mobile:
- [ ] Page loads on phone
- [ ] Navigation works
- [ ] Calendar widget loads
- [ ] All text readable
- [ ] Buttons work
- [ ] Scroll animations smooth

---

## SEO Considerations (Optional)

If you want these pages to rank in Google:

### Add to sitemap.xml
```xml
<url>
  <loc>https://rslmediahub.com/dental-no-shows/</loc>
  <lastmod>2025-01-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Submit to Google Search Console
1. Go to search.google.com/search-console
2. Add property: rslmediahub.com
3. Request indexing for new URLs

---

## Analytics Tracking (Optional)

If you want to track visitors, add to both HTML files before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

Replace `YOUR-GA-ID` with actual Google Analytics ID.

---

## Quick Troubleshooting

### "Page Not Found" Error
- ✅ Check folder name is exactly: `dental-no-shows` (with dash, lowercase)
- ✅ Check file is named: `index.html` (not dental-no-shows.html)

### Logo Doesn't Show
- ✅ Check `logo.png` exists in `public_html/` root
- ✅ Check file path in HTML is: `src="../logo.png"`
- ✅ Hard refresh browser (Ctrl + Shift + R)

### Calendar Doesn't Load
- ✅ Check internet connection
- ✅ Check calendar URL is correct in HTML
- ✅ Wait 5-10 seconds (iframes load slowly)

### Page Looks Broken on Mobile
- ✅ Check you uploaded the correct file
- ✅ Clear phone browser cache
- ✅ Try different mobile browser

---

## Files Ready for Upload

In your local folder `codeflow-nation/`:

1. ✅ `dental-no-shows.html` → Upload to `public_html/dental-no-shows/` → Rename to `index.html`
2. ✅ `dental-reviews.html` → Upload to `public_html/dental-reviews/` → Rename to `index.html`

**Both files have correct relative paths for Hostinger structure.**

---

## Next Steps

1. **Deploy No-Shows page first** (higher ticket offer)
2. **Test thoroughly** on desktop + mobile
3. **Run ads** to that URL
4. **Collect data** for 1-2 weeks
5. **Deploy Reviews page** after
6. **A/B test** which converts better

---

*Last Updated: 2025-01-15*
*Asset Paths: Fixed for Hostinger folder structure*
