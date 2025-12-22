# Automated Blog Creation Pipeline

## 💰 Sanity API Pricing (FREE tier is plenty!)

**Free Plan includes:**
- ✅ 200,000 API requests/month
- ✅ 1M CDN requests
- ✅ 20GB bandwidth
- ✅ 20 admin seats
- ✅ **More than enough for daily blogging!**

**Free Trial Boost (automatic):**
- 1M API requests
- 500GB bandwidth
- 500GB assets

**Verdict:** You won't pay anything for Sanity with daily blogging! 🎉

---

## 🔄 Complete Automated Blog Pipeline

### Step 1: Trending Topic Discovery 🔍

**Tools:**
- **Feedly API** (free tier) - Monitor industry RSS feeds
- **Google Trends API** - Discover trending searches
- **BuzzSumo API** - Find viral content in your niche
- **AnswerThePublic** - Find questions people ask

**What it does:**
- Monitors 50+ marketing/AI automation blogs
- Pulls trending topics from Google Trends
- Analyzes what's viral in your industry
- Generates 20-30 topic ideas daily

---

### Step 2: Topic Curation Dashboard 📋

**Build a simple UI (Next.js page):**
```
/admin/topic-queue
- Shows 30 trending topics
- Each with: Title, Source, Trend Score
- Buttons: "Approve" | "Skip" | "Edit Topic"
- Approved topics → Queue for AI generation
```

**Tools needed:**
- Simple Next.js page
- Store approved topics in Sanity as "Topic Queue" schema

---

### Step 3: AI Content Generation ✍️

**When you click "Generate" on a topic:**

**3A. Generate Blog Content**
- **Claude API / ChatGPT API** generates:
  - SEO-optimized title
  - Meta description
  - 1000-1500 word article
  - Proper headings structure
  - Code examples if needed

**3B. Generate Featured Image**
- **DALL-E 3 API** or **Stability AI** creates image
- Based on blog title/topic
- Auto-uploads to Sanity CDN

**3C. Create Draft in Sanity**
- API calls Sanity to create blog post
- Status: "Draft" (not published)
- Assigns author (Rahul/Siddharth)
- Auto-categorizes based on topic

---

### Step 4: Review & Edit ✏️

**In Sanity Studio:**
- See all AI-generated drafts
- Edit content visually
- Tweak images
- Click "Publish" when ready

---

### Step 5: Auto-Publish 🚀

**Optional automation:**
- Schedule publish time
- Auto-publish to social media (Buffer API)
- Send email notification
- Index in Google (Search Console API)

---

## 🛠️ Recommended Tool Stack

| Purpose | Tool | Cost | Why |
|---------|------|------|-----|
| **Topic Discovery** | Feedly Pro | $6/mo | Best RSS aggregator + Leo AI |
| **Trending Analysis** | Google Trends | Free | Real-time trend data |
| **Content Generation** | Claude API | ~$3/mo | Best quality blog content |
| **Image Generation** | DALL-E 3 | ~$0.04/image | High quality featured images |
| **Blog Storage** | Sanity CMS | Free | What we built! |
| **Workflow Automation** | Make.com | Free tier | Connect everything |

**Total cost: ~$10/month for unlimited automated blog creation**

---

## 📊 Complete Workflow Diagram

```
┌─────────────────────────────────────────────────────┐
│  STEP 1: Topic Discovery (Automated - Daily 6 AM)  │
└─────────────────────────────────────────────────────┘
                        ↓
        Feedly + Google Trends + BuzzSumo
                        ↓
                30 trending topics
                        ↓
┌─────────────────────────────────────────────────────┐
│    STEP 2: Topic Queue Dashboard (Manual Review)    │
└─────────────────────────────────────────────────────┘
                        ↓
            You pick 3-5 topics to approve
                        ↓
┌─────────────────────────────────────────────────────┐
│  STEP 3: AI Generation (Click "Generate" button)   │
└─────────────────────────────────────────────────────┘
                        ↓
        ┌───────────────┴───────────────┐
        ↓                               ↓
   Claude API                      DALL-E API
   (Blog Content)                  (Featured Image)
        │                               │
        └───────────────┬───────────────┘
                        ↓
            Sanity API creates draft
                        ↓
┌─────────────────────────────────────────────────────┐
│      STEP 4: Review in Sanity Studio (Manual)       │
└─────────────────────────────────────────────────────┘
                        ↓
              Edit & click "Publish"
                        ↓
┌─────────────────────────────────────────────────────┐
│          STEP 5: Live on /blog (Automatic)          │
└─────────────────────────────────────────────────────┘
```

---

## 🚀 Implementation Phases

### Phase 1: Topic Queue System (2-3 hours)
- RSS feed integration
- Topic discovery dashboard at `/admin/topics`
- Approve/Skip/Edit interface
- Store in Sanity

**Deliverables:**
- `/admin/topics` page showing trending topics
- Ability to approve/reject topics
- Queue stored in Sanity

### Phase 2: AI Generation (3-4 hours)
- API route that calls Claude + DALL-E
- Formats output to Sanity schema
- Creates draft post automatically
- "Generate Blog" button in dashboard

**Deliverables:**
- One-click blog generation
- AI-written content in Sanity drafts
- Auto-generated featured images

### Phase 3: Polish & Automation (2-3 hours)
- Schedule topic discovery (daily cron)
- Auto-categorization
- Publishing workflow
- Social media integration (optional)

**Deliverables:**
- Fully automated daily topic discovery
- Scheduled publishing
- Social media auto-posting

---

## 📋 Required API Keys

To implement this system, you'll need:

1. **Sanity** (already have)
   - Project ID: 36wenybq
   - API Token: (already configured)

2. **Claude API** (for content generation)
   - Get from: https://console.anthropic.com
   - Cost: ~$3/month for daily blogging

3. **OpenAI API** (for DALL-E images)
   - Get from: https://platform.openai.com
   - Cost: ~$0.04 per image

4. **Feedly API** (optional - for RSS aggregation)
   - Free tier available
   - Or use simple RSS parser library

5. **Make.com** (optional - for workflow automation)
   - Free tier: 1000 operations/month
   - Connects all services together

---

## 🎯 Recommended Starting Point

**Start with Phase 1:**
1. Build topic queue dashboard
2. Manually add topics to test workflow
3. Then add AI generation in Phase 2

This gives you immediate value while building incrementally.

---

## 📝 Next Steps

1. Review this plan
2. Decide which phase to start with
3. Gather necessary API keys
4. Begin implementation

---

*Last Updated: 2025-01-15*
*Project: RSL Media Hub Blog Automation*
