# Codeflow Nation - Deployment & CMS Guide

## Table of Contents
- [Deployment to Hostinger](#deployment-to-hostinger)
- [CMS Integration Options](#cms-integration-options)
- [Implementation Workflow](#implementation-workflow)

---

## Deployment to Hostinger

### Prerequisites
- Hostinger hosting account (codeflownation.com)
- Access to hPanel dashboard
- Production-ready build of the React app

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

---

### Upload Methods

#### Option A: File Manager (Easiest)
1. Log into Hostinger hPanel
2. Go to **Files** → **File Manager**
3. Navigate to `public_html` directory
4. Upload all contents from `dist` folder (NOT the folder itself, just the contents)
5. Delete default index.html if present
6. **Limit:** 100GB upload size

#### Option B: FTP/SFTP (Best for Large Files)
1. In hPanel, go to **Files** → **FTP Accounts**
2. Get your FTP credentials
3. Use FileZilla or any FTP client to connect
4. Upload contents of `dist` folder to `public_html`
5. **Limit:** No size limit

#### Option C: Git Integration (Automated)
1. In hPanel, go to **Hosting** → Select your website → **Manage**
2. Scroll to **Advanced** → Select **Git**
3. Connect your GitHub repository
4. Set up auto-deployment
5. **Benefit:** Automatic deployment on push

---

### React Router Configuration

Create `.htaccess` file in `public_html` for proper routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures React Router works properly with page refreshes.

---

## CMS Integration Options

### What is a Headless CMS?

A headless CMS is a backend-only content management system that provides content via an API (REST or GraphQL). Your React frontend fetches content from the CMS and displays it.

**Architecture Flow:**
```
Content Editors → Headless CMS (Backend) → API → React App → Hostinger (Frontend)
```

---

### CMS Comparison

#### 1. Sanity.io (Recommended for Developers)

**Pros:**
- Built in React - highly customizable
- Developer-centric features
- Generous free tier
- Real-time collaboration
- Create custom Studio interfaces using React components

**Best For:**
- Complex content structures
- Developer-friendly workflows
- Projects with uncertain growth trajectories

**Pricing:**
- Generous free tier
- Gradual scaling as needs evolve

**Integration:**
- REST or GraphQL API
- React SDK available

---

#### 2. Strapi (Best for Full Control)

**Pros:**
- Open-source and highly extensible
- Self-hosted option (most economical)
- Create custom plugins
- Modify core functionality
- No vendor lock-in
- Complete control over data

**Best For:**
- Projects requiring unique features
- Custom integrations
- Developers with technical expertise

**Hosting:**
- Requires separate hosting (Hostinger VPS option available)
- Self-managed infrastructure

**Pricing:**
- Free (self-hosted)
- No usage limits

---

#### 3. Contentful (Enterprise-Friendly)

**Pros:**
- User-friendly interface
- Powerful workflows
- Enterprise-grade support
- Great for non-technical content editors
- Robust governance features

**Best For:**
- Static websites (like blogs)
- Larger organizations
- Multiple teams with complex approval processes
- Non-technical content management

**Cons:**
- More expensive for scaling
- Less customizable than Sanity/Strapi

---

### CMS Implementation Approaches

#### Option A: Dynamic Content (Simpler)
- React app fetches data from CMS when page loads
- No rebuild needed when content changes
- Slightly slower initial load
- Real-time content updates

**Workflow:**
1. Content editor updates CMS
2. Changes appear immediately on website
3. No deployment needed

---

#### Option B: Static Generation (Faster, Better SEO)
- Fetch CMS content at build time
- Rebuild site when content changes
- Faster page loads
- Better SEO optimization

**Workflow:**
1. Content editor updates CMS
2. Trigger rebuild (manual or automated)
3. Deploy new build to Hostinger
4. Can use GitHub Actions for auto-rebuild

---

## Implementation Workflow

### Step-by-Step: Hostinger + CMS Integration

#### Phase 1: Set Up CMS
1. Choose CMS provider (Sanity recommended)
2. Create account and project
3. Set up content schema
4. Configure API access

#### Phase 2: Modify React App
1. Install CMS SDK/client library
```bash
npm install @sanity/client
# or
npm install axios (for REST APIs)
```

2. Create API service to fetch content
3. Update components to display CMS content
4. Test locally with `npm run dev`

#### Phase 3: Build and Deploy
1. Build production version:
```bash
npm run build
```

2. Upload to Hostinger:
   - Use File Manager, FTP, or Git integration
   - Upload contents of `dist` folder to `public_html`

3. Create `.htaccess` file for routing

#### Phase 4: Content Updates
**For Dynamic Approach:**
- Edit content in CMS
- Changes appear immediately

**For Static Approach:**
- Edit content in CMS
- Rebuild: `npm run build`
- Re-upload to Hostinger
- (Or automate with GitHub Actions)

---

## Advanced: Automated Deployment with GitHub Actions

### Benefits
- Automatic rebuild on content changes
- CI/CD pipeline
- No manual uploads needed

### Setup Steps
1. Push code to GitHub repository
2. Create `.github/workflows/deploy.yml`
3. Configure workflow to:
   - Build on push or CMS webhook
   - Deploy to Hostinger via FTP/Git
4. Set up environment variables for API keys

### Example Workflow Triggers
- Git push to main branch
- CMS content change webhook
- Manual workflow dispatch

---

## Quick Reference

### Local Development
```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production (creates dist/)
npm run preview      # Preview production build
```

### Hostinger Upload Locations
- **Website Files:** `public_html/`
- **React Router Config:** `public_html/.htaccess`
- **Build Output:** Contents of `dist/` → `public_html/`

### Common Issues

**Issue: 404 on page refresh**
- **Solution:** Add `.htaccess` file with rewrite rules

**Issue: API keys exposed in frontend**
- **Solution:** Use environment variables, never commit `.env` files

**Issue: Content not updating**
- **Solution:** Clear browser cache, check CMS API connection

---

## Additional Resources

- [Hostinger Support](https://support.hostinger.com)
- [Vite Documentation](https://vitejs.dev/)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Strapi Documentation](https://docs.strapi.io/)
- [Contentful Documentation](https://www.contentful.com/developers/docs/)

---

**Last Updated:** 2025-11-01
