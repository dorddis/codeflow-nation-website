import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | CodeFlow',
  description:
    'Production systems with real results. $150K+ in documented savings across logistics, media, manufacturing, and enterprise research.',
  alternates: {
    canonical: 'https://codeflownation.com/work',
  },
  openGraph: {
    title: 'Work | CodeFlow',
    description:
      'Production systems with real results. $150K+ in documented savings across logistics, media, manufacturing, and enterprise research.',
    url: 'https://codeflownation.com/work',
    siteName: 'CodeFlow',
    type: 'website',
  },
};

const featured = [
  {
    slug: 'rfq-email-extraction',
    title: '2.8-Hour Response Time to Under 10 Minutes',
    client: 'Best Roadways Ltd',
    industry: 'Logistics & Freight',
    summary:
      'Built an AI pipeline that reads unstructured RFQ emails and extracts structured shipment data with 88.5% accuracy. 20+ dispatchers stopped manually reading emails. Under-1-hour responses went from 31.5% to 100%.',
    metrics: [
      { value: '28x', label: 'Faster Response' },
      { value: '88.5%', label: 'Extraction Accuracy' },
      { value: '$0.01', label: 'Per Email' },
      { value: '100%', label: 'Under 1hr Response' },
    ],
    problem:
      'Hundreds of RFQ emails daily in different formats — tables, conversational, mixed. 20+ dispatchers manually reading and entering data. 2.8-hour median response time losing deals to faster competitors. 23.2% of requests took over 24 hours.',
    solution: [
      'Gemini-based extraction reads raw email text and returns structured fields (pickup, drop, weight, vehicle type)',
      'Confidence scoring on every field — HIGH, MEDIUM, or LOW — so humans only review what needs it',
      'Alias table for city name variants across India pushes accuracy to 95%+',
      'Human-in-the-loop review before data enters the quoting workflow',
    ],
    results: [
      'Under-1-hour responses went from 31.5% to 100%',
      'Over-24-hour responses went from 23.2% to 0%',
      'Processing cost: ~$0.01 per email',
      'Handles all formats: tables, conversational, multi-item, mixed language',
    ],
    quote: {
      text: 'Biggest impact will be the one which has 100s of unstructured inquiries. To give it a uniform structure will save a lot of time.',
      author: 'Director, Best Roadways Ltd',
    },
    tags: ['AI Extraction', 'Email Processing', 'Logistics'],
  },
  {
    slug: 'video-qc-automation',
    title: '92% Less Time on Video QC at $0.48 Per Video',
    client: 'CrazyTok Media',
    industry: 'Media & Content',
    summary:
      'Replaced 60+ minutes of manual subtitle quality checking per video with a multi-layer AI pipeline that catches errors human reviewers consistently miss. 30+ videos per month, zero additional headcount.',
    metrics: [
      { value: '92%', label: 'Time Reduction' },
      { value: '$0.48', label: 'Per Video' },
      { value: '50+ hrs', label: 'Saved Monthly' },
      { value: '<5 min', label: 'Per Video QC' },
    ],
    problem:
      'Content team spending 60+ minutes per video on manual subtitle QC — spelling, timing alignment, formatting consistency, and brand voice compliance. At 30+ videos per month, that is an entire person doing nothing but QC. Manual reviewers still missed timing drift and subtle typos.',
    solution: [
      'PySceneDetect for frame segmentation, Tesseract and Cloud Vision for text extraction',
      'Gemini validates spelling, grammar, timing, and brand guidelines in a single pass',
      'Structured JSON report with frame-level issue citations for editor handoff',
      'Multi-layer pipeline: scene detection, OCR extraction, LLM analysis',
    ],
    results: [
      'QC time: 60+ minutes down to under 5 minutes per video',
      '$0.48/video vs $15-25/hour for manual QC',
      '50+ hours reclaimed per month for the content team',
      'Catches issues human reviewers consistently miss (timing drift, subtle typos)',
    ],
    tags: ['Computer Vision', 'OCR', 'Video Processing', 'Media'],
  },
  {
    slug: 'enterprise-web-scraping',
    title: '$136K Saved Replacing an 80-Person Manual Process',
    client: 'MRUC (National Readership Survey)',
    industry: 'Enterprise Research',
    summary:
      'An 80-person team spent 4 months manually collecting data from 80+ newspaper websites across 7 languages. Built a distributed AWS system that does it in 2 weeks with 1 person. Custom ML CAPTCHA solver hits 97% accuracy.',
    metrics: [
      { value: '$136K', label: 'Annual Savings' },
      { value: '80 to 1', label: 'People Required' },
      { value: '87.5%', label: 'Time Reduction' },
      { value: '97%', label: 'CAPTCHA Solve Rate' },
    ],
    problem:
      '80-person team — data entry operators, supervisors, managers, QC — working 4 months to collect data from government newspaper websites. Corrupted text in 7 languages, CAPTCHAs blocking automation, and unreliable infrastructure that went down constantly.',
    solution: [
      'Distributed Selenium Grid with 4 worker nodes and 20 concurrent threads processing 4,000 records/hour',
      'Custom ML CAPTCHA solver with pre-filters and consensus mechanism across multiple OCR confidence scores',
      'Multi-language extraction handling corrupted ASPX records across 7 languages',
      'Fault-tolerant architecture with exponential backoff for unreliable government websites',
    ],
    results: [
      '$136K annual savings — team went from 80 people to 1',
      '4 months collapsed to 2 weeks (87.5% reduction)',
      '50x throughput improvement: 4,000 records/hour',
      'AWS costs under $500/month (60% reduction via spot instances)',
    ],
    tags: ['Web Scraping', 'AWS', 'Machine Learning', 'ETL'],
  },
  {
    slug: 'iot-fleet-tracking',
    title: 'Whiteboards to 100% Digital Fleet Visibility',
    client: 'Fortune 500 Automotive Manufacturer',
    industry: 'Manufacturing & IoT',
    summary:
      'Factory floor vehicles tracked on whiteboards. Built a real-time MQTT-to-REST bridge streaming position data at 10Hz with 50-80ms latency and +/-20mm accuracy. Coordinated across 4 organizations. Exceeded every SLA target.',
    metrics: [
      { value: '50-80ms', label: 'Latency' },
      { value: '10 Hz', label: 'Update Rate' },
      { value: '99.7%', label: 'Uptime' },
      { value: '+/-20mm', label: 'Accuracy' },
    ],
    problem:
      'Factory floor operations tracked with whiteboards. No real-time visibility into vehicle locations, utilization, or downtime. Safety incidents from blind spots. Integration required coordinating across 4 organizations with different protocols and systems.',
    solution: [
      'MQTT-to-REST protocol bridge integrating autonomous mobile robots with digital twin software',
      'OAuth 2.0 per-device authentication with token caching for secure communication',
      'Coordinate transformation system mapping robot coordinates to factory floor coordinates',
      'Real-time WebSocket layer for live dashboard updates with sub-second latency',
    ],
    results: [
      'Exceeded latency target: 50-80ms delivered vs <100ms required',
      'Exceeded accuracy target: +/-20mm delivered vs +/-50mm required',
      '99.7% uptime over 3+ months of continuous operation',
      '100% fleet visibility — whiteboard tracking eliminated entirely',
    ],
    tags: ['IoT', 'Real-Time', 'MQTT', 'Digital Twin', 'Manufacturing'],
  },
];

const more = [
  {
    slug: 'voice-ai-crm',
    title: '$15K Recovered from Leads Falling Through the Cracks',
    client: 'White Glove Cleaning',
    industry: 'Field Services',
    summary:
      'Cleaning company with 50+ clients ran on 4 fragmented systems. Consolidated everything into GoHighLevel with Voice AI, 50+ automated workflows, and bidirectional Housecall Pro sync. Two admin positions redeployed to field work.',
    metrics: [
      { value: '$15K', label: 'Revenue Recovered' },
      { value: '99%', label: 'Admin Eliminated' },
      { value: '14 to 132', label: 'Google Reviews' },
      { value: '50+', label: 'Workflows Built' },
    ],
    quote: {
      text: 'We went from needing 2 people just to answer phones and schedule jobs to having everything run automatically. The AI chat even books estimates while I am sleeping.',
      author: 'Owner, White Glove Cleaning',
    },
    tags: ['Voice AI', 'CRM', 'Operations'],
  },
  {
    slug: 'llm-content-pipeline',
    title: '500-Line Prompts That Actually Sound Like the Brand',
    client: 'CrazyTok Media',
    industry: 'Media & Content',
    summary:
      'Generic LLM outputs were killing content quality. Built a 4-stage pipeline with 500+ line structured prompts that produces content matching exact brand voice. Multiple AI models for optimal cost-quality balance.',
    metrics: [
      { value: '4-stage', label: 'Pipeline' },
      { value: '500+', label: 'Line Prompts' },
      { value: '70%', label: 'Workload Reduction' },
      { value: 'Consistent', label: 'Brand Voice' },
    ],
    tags: ['LLM', 'Prompt Engineering', 'Content'],
  },
  {
    slug: 'linkedin-enrichment',
    title: '14,260 Businesses Enriched at $0.001 Per Lead',
    client: 'RSL Media Hub',
    industry: 'Sales & Lead Gen',
    summary:
      '3-stage enrichment pipeline: 100 concurrent browsers scraping websites, Gemini extracting structured business data, geographic filtering for US/Canada. 99.98% completion rate at enterprise scale.',
    metrics: [
      { value: '14,260', label: 'Businesses' },
      { value: '<$0.001', label: 'Per Lead' },
      { value: '99.98%', label: 'Completion' },
      { value: '100', label: 'Concurrent Browsers' },
    ],
    tags: ['Data Pipeline', 'Lead Gen', 'Web Scraping'],
  },
  {
    slug: 'seo-content-pipeline',
    title: 'Trigger to Published Blog in 11 Minutes, Zero Humans',
    client: 'Internal — 2 Brands',
    industry: 'Content & SEO',
    summary:
      'Fully autonomous pipeline: keyword research, SERP analysis, competitor gaps, content-type-aware generation, AI cover images, and CMS publishing. 6 content types with type-aware image generation. Runs daily.',
    metrics: [
      { value: '11 min', label: 'End to End' },
      { value: '~$0.40', label: 'Per Article' },
      { value: '6', label: 'Content Types' },
      { value: 'Daily', label: 'Cadence' },
    ],
    tags: ['Content Automation', 'SEO', 'GitHub Actions'],
  },
  {
    slug: 'cold-outreach-infra',
    title: '1,900 Emails Per Day, 230 Mailboxes, Zero Blacklisting',
    client: 'Internal — FasterQuotes',
    industry: 'Sales Automation',
    summary:
      '230 mailboxes across Outlook and Google with automated domain warming, webhook tracking, and real-time Supabase analytics. Full infrastructure from lead scraping (58,850 leads) through campaign execution.',
    metrics: [
      { value: '1,900', label: 'Emails / Day' },
      { value: '230', label: 'Mailboxes' },
      { value: '58,850', label: 'Leads Scraped' },
      { value: '0', label: 'Blacklisted' },
    ],
    tags: ['Email Infrastructure', 'Webhooks', 'Cold Email'],
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-7xl mx-auto py-24 md:py-32 px-[6%] md:px-[5%]">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-5">
          Work
        </h1>
        <p className="text-lg text-steel leading-relaxed">
          I build production systems, not slide decks. Every number below is
          from a real deployment.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-3xl mx-auto text-center">
        <div>
          <div className="text-2xl md:text-3xl font-bold text-accent">9</div>
          <div className="text-sm text-steel mt-1">Production Systems</div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-bold text-accent">
            $150K+
          </div>
          <div className="text-sm text-steel mt-1">Documented Savings</div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-bold text-accent">5</div>
          <div className="text-sm text-steel mt-1">Industries</div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-bold text-accent">
            Fortune 500
          </div>
          <div className="text-sm text-steel mt-1">to 50-Person Shops</div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="space-y-16 mb-24">
        {featured.map((project) => (
          <article
            key={project.slug}
            id={project.slug}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden scroll-mt-24"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {project.title}
              </h2>
              <p className="text-steel mb-1">
                <span className="font-medium text-primary">
                  {project.client}
                </span>{' '}
                &middot; {project.industry}
              </p>

              <p className="text-lg text-steel leading-relaxed mt-4 mb-8">
                {project.summary}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-background rounded-xl border border-gray-100">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {m.value}
                    </div>
                    <div className="text-sm text-steel mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem / Solution / Results */}
            <div className="border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  The Problem
                </h3>
                <p className="text-steel leading-relaxed text-[0.95rem]">
                  {project.problem}
                </p>
              </div>

              <div className="p-8">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  What I Built
                </h3>
                <ul className="space-y-2">
                  {project.solution.map((step, i) => (
                    <li
                      key={i}
                      className="text-steel text-[0.95rem] leading-relaxed flex gap-2"
                    >
                      <span className="text-accent mt-1 flex-shrink-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  Results
                </h3>
                <ul className="space-y-2">
                  {project.results.map((r, i) => (
                    <li
                      key={i}
                      className="text-steel text-[0.95rem] leading-relaxed flex gap-2"
                    >
                      <span className="text-accent mt-1 flex-shrink-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quote */}
            {'quote' in project && project.quote && (
              <div className="border-t border-gray-200 p-8 bg-accent/5">
                <blockquote className="text-lg text-primary italic leading-relaxed">
                  &ldquo;{project.quote.text}&rdquo;
                </blockquote>
                <p className="text-steel mt-3 text-sm">
                  &mdash; {project.quote.author}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* More Projects */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">
          More Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {more.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-accent/40 hover:shadow-md transition-all duration-300 scroll-mt-24 flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-primary mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-steel mb-3">
                <span className="font-medium text-primary">
                  {project.client}
                </span>{' '}
                &middot; {project.industry}
              </p>

              <p className="text-steel text-[0.95rem] leading-relaxed mb-5 flex-1">
                {project.summary}
              </p>

              {/* Quote (compact) */}
              {'quote' in project && project.quote && (
                <div className="mb-5 pl-3 border-l-2 border-accent/30">
                  <p className="text-sm text-steel italic leading-relaxed">
                    &ldquo;{project.quote.text}&rdquo;
                  </p>
                  <p className="text-xs text-steel/70 mt-1">
                    &mdash; {project.quote.author}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 p-4 bg-background rounded-xl border border-gray-100">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-lg font-bold text-accent">
                      {m.value}
                    </div>
                    <div className="text-xs text-steel">{m.label}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center bg-accent/5 border border-accent/10 rounded-2xl p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Have a process that needs automating?
        </h2>
        <p className="text-lg text-steel max-w-xl mx-auto mb-8">
          I&apos;ll scope the highest-impact automation for your team in a free
          30-minute call.
        </p>
        <a
          href="https://api.leadconnectorhq.com/widget/bookings/siddharth-rodrigues-personal-calendar-ihwyx1a3d"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-lg bg-accent text-white text-lg font-semibold hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Book Your Free Call
        </a>
      </section>
    </main>
  );
}
