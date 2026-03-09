import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | CodeFlow',
  description:
    'Real automation projects with real results. See how I help companies eliminate manual work with custom AI pipelines.',
  alternates: {
    canonical: 'https://codeflownation.com/work',
  },
  openGraph: {
    title: 'Work | CodeFlow',
    description:
      'Real automation projects with real results. See how I help companies eliminate manual work with custom AI pipelines.',
    url: 'https://codeflownation.com/work',
    siteName: 'CodeFlow',
    type: 'website',
  },
};

const featured = [
  {
    slug: 'rfq-email-extraction',
    title: 'AI Email Extraction for Freight Company',
    client: 'Best Roadways Ltd',
    industry: 'Logistics & Freight',
    summary:
      'Built an AI pipeline that reads unstructured RFQ emails and extracts structured shipment data — pickup, drop, weight, vehicle type — with 88.5% accuracy. Response time dropped from 2.8 hours to under 10 minutes.',
    metrics: [
      { value: '88.5%', label: 'Extraction Accuracy' },
      { value: '28x', label: 'Faster Response' },
      { value: '104', label: 'Emails Validated' },
      { value: '99%', label: 'Processing Success' },
    ],
    problem:
      'Hundreds of RFQ emails daily in different formats. 20+ dispatchers manually reading and entering data. 2.8-hour median response time losing deals to faster competitors.',
    solution: [
      'AI reads raw email text and extracts structured fields (Gemini, temp 0.1)',
      'Confidence scoring on every field — HIGH, MEDIUM, or LOW',
      'Human-in-the-loop review before data enters the quoting workflow',
      'Alias table for city name variants pushes accuracy to 95%+',
    ],
    results: [
      'Under-1-hour responses went from 31.5% to 100%',
      'Over-24-hour responses went from 23.2% to 0%',
      'Processing cost: ~$0.01 per email',
      'Handles multi-format emails: tables, conversational, mixed',
    ],
    quote: {
      text: 'Biggest impact will be the one which has 100s of unstructured inquiries. To give it a uniform structure will save a lot of time.',
      author: 'Director, Best Roadways Ltd',
    },
    tags: ['AI Extraction', 'Email Processing', 'Logistics'],
  },
  {
    slug: 'video-qc-automation',
    title: 'Video Subtitle QC Automation',
    client: 'CrazyTok Media',
    industry: 'Media & Content',
    summary:
      'Replaced 60+ minutes of manual subtitle quality checking per video with an AI pipeline that catches spelling errors, timing issues, formatting problems, and brand inconsistencies in under 5 minutes.',
    metrics: [
      { value: '92%', label: 'Time Reduction' },
      { value: '$0.48', label: 'Cost Per Video' },
      { value: '50+ hrs', label: 'Saved Monthly' },
      { value: '<5 min', label: 'Per Video QC' },
    ],
    problem:
      'Content team spending 60+ minutes per video on manual subtitle QC — checking spelling, timing alignment, formatting consistency, and brand voice compliance. At 30+ videos per month, that is an entire person just doing QC.',
    solution: [
      'Multi-layer AI pipeline: scene detection, OCR extraction, and LLM analysis',
      'PySceneDetect for frame segmentation + Tesseract and Cloud Vision for text extraction',
      'Gemini validates spelling, grammar, timing, and brand guidelines in one pass',
      'Structured JSON report with frame-level issue citations for editor handoff',
    ],
    results: [
      'QC time dropped from 60+ minutes to under 5 minutes per video',
      'Cost of $0.48/video vs $15-25/hour for manual QC',
      '50+ hours reclaimed per month for the content team',
      'Catches issues human reviewers consistently miss (timing drift, subtle typos)',
    ],
    tags: ['Computer Vision', 'OCR', 'Video Processing', 'Media'],
  },
  {
    slug: 'enterprise-web-scraping',
    title: 'Distributed Data Collection at Scale',
    client: 'MRUC (Media Research)',
    industry: 'Enterprise Research',
    summary:
      'Built a distributed AWS scraping system that replaced weeks of manual data collection from thousands of websites. 1M+ records processed with a custom ML model achieving 97% CAPTCHA solve rate.',
    metrics: [
      { value: '$136K', label: 'Annual Savings' },
      { value: '1M+', label: 'Records Processed' },
      { value: '87.5%', label: 'Work Reduction' },
      { value: '97%', label: 'CAPTCHA Solve Rate' },
    ],
    problem:
      'Research organization collecting data from thousands of websites manually. Process took weeks, was expensive, and produced inconsistent results with high error rates.',
    solution: [
      'Distributed AWS Lambda architecture for parallel scraping at scale',
      'Custom ML model trained for CAPTCHA solving (97% accuracy)',
      'Selenium-based browser automation handling dynamic JS-rendered content',
      'PostgreSQL pipeline for dedup, validation, and structured storage',
    ],
    results: [
      '$136K annual cost savings vs manual data collection',
      '87.5% reduction in manual work hours',
      '1M+ records extracted, cleaned, and structured',
      'System runs autonomously with minimal oversight',
    ],
    tags: ['Web Scraping', 'AWS', 'Machine Learning', 'ETL'],
  },
  {
    slug: 'iot-fleet-tracking',
    title: 'Real-Time IoT Fleet Tracking',
    client: 'Fortune 500 Automotive Manufacturer',
    industry: 'Manufacturing & IoT',
    summary:
      'Built a real-time integration layer that streams sensor data from factory floor vehicles (forklifts, AGVs) at 10Hz with sub-second dashboard updates. Replaced whiteboard-based tracking with 100% digital fleet visibility.',
    metrics: [
      { value: '10 Hz', label: 'Sensor Streaming' },
      { value: '<1s', label: 'Dashboard Latency' },
      { value: '99.7%', label: 'System Uptime' },
      { value: '100%', label: 'Fleet Visibility' },
    ],
    problem:
      'Factory floor operations tracked manually with whiteboards. No real-time visibility into vehicle locations, utilization, or downtime. Safety incidents from blind spots.',
    solution: [
      'MQTT-based sensor ingestion streaming position data at 10Hz',
      'WebSocket layer for real-time browser dashboard updates',
      'React visualization with live fleet map and utilization heatmaps',
      'Python backend processing sensor fusion and anomaly detection',
    ],
    results: [
      'Complete digital twin of factory floor — every vehicle tracked in real-time',
      'Sub-second latency from sensor event to dashboard update',
      '99.7% uptime across 3+ months of continuous operation',
      'Eliminated manual whiteboard tracking entirely',
    ],
    tags: ['IoT', 'Real-Time', 'MQTT', 'WebSockets', 'Manufacturing'],
  },
];

const more = [
  {
    slug: 'voice-ai-crm',
    title: 'Voice AI + CRM Automation',
    client: 'RSL Media Hub',
    industry: 'Sales Automation',
    summary:
      'Automated call logging, CRM updates, and follow-up scheduling. Eliminated 99% of sales admin overhead and recovered $15K in revenue from leads that would have fallen through the cracks.',
    metrics: [
      { value: '$15K', label: 'Revenue Recovered' },
      { value: '99%', label: 'Admin Eliminated' },
      { value: '14,000+', label: 'Leads Enriched' },
      { value: 'Real-time', label: 'CRM Sync' },
    ],
    tags: ['Voice AI', 'CRM', 'Sales'],
  },
  {
    slug: 'llm-content-pipeline',
    title: 'Brand Voice Content Pipeline',
    client: 'CrazyTok Media',
    industry: 'Media & Content',
    summary:
      'Built a 4-stage LLM pipeline with 500+ line structured prompts that produces content matching specific brand voice. Solved the "LLM outputs sound generic" problem at production scale.',
    metrics: [
      { value: '4-stage', label: 'Pipeline' },
      { value: '500+', label: 'Line Prompts' },
      { value: 'Production', label: 'Quality' },
      { value: 'Consistent', label: 'Brand Voice' },
    ],
    tags: ['LLM', 'Prompt Engineering', 'Content'],
  },
  {
    slug: 'linkedin-enrichment',
    title: 'LinkedIn Lead Enrichment at Scale',
    client: 'RSL Media Hub',
    industry: 'Sales & Lead Gen',
    summary:
      'High-throughput enrichment pipeline processing 14,260 businesses. 100 concurrent browsers, 99.98% completion rate, at less than $0.001 per lead. Turned raw name+company lists into actionable intelligence.',
    metrics: [
      { value: '14,260', label: 'Businesses Processed' },
      { value: '<$0.001', label: 'Cost Per Lead' },
      { value: '99.98%', label: 'Completion Rate' },
      { value: '100', label: 'Concurrent Browsers' },
    ],
    tags: ['Data Pipeline', 'Lead Gen', 'Web Scraping'],
  },
  {
    slug: 'seo-content-pipeline',
    title: 'Autonomous SEO Blog Pipeline',
    client: 'Internal — 2 Brands',
    industry: 'Content & Marketing',
    summary:
      'End-to-end content automation: keyword research, SERP analysis, competitor gap analysis, article generation, cover images, and CMS publishing. Zero human intervention from trigger to live blog post in 11 minutes.',
    metrics: [
      { value: '11 min', label: 'Trigger to Published' },
      { value: '100%', label: 'Autonomous' },
      { value: '~$0.40', label: 'Per Article' },
      { value: 'Daily', label: 'Publishing Cadence' },
    ],
    tags: ['Content Automation', 'SEO', 'GitHub Actions'],
  },
  {
    slug: 'cold-outreach-infra',
    title: 'Multi-Channel Outreach Infrastructure',
    client: 'Internal — FasterQuotes',
    industry: 'Sales Automation',
    summary:
      'Designed and deployed 230 mailboxes across Outlook and Google with automated domain warming, webhook tracking, and real-time analytics. 1,900 emails per day capacity with zero domain blacklisting.',
    metrics: [
      { value: '1,900', label: 'Emails / Day' },
      { value: '230', label: 'Mailboxes' },
      { value: '0', label: 'Domains Blacklisted' },
      { value: 'Real-time', label: 'Event Tracking' },
    ],
    tags: ['Email Infrastructure', 'Webhooks', 'Cold Email'],
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-7xl mx-auto py-24 md:py-32 px-[6%] md:px-[5%]">
      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-5">
          Work
        </h1>
        <p className="text-lg text-steel leading-relaxed">
          Real projects. Real data. Every system below is running in production or was validated against real-world inputs. No hypotheticals.
        </p>
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
                <span className="font-medium text-primary">{project.client}</span>
                {' '}&middot;{' '}{project.industry}
              </p>

              <p className="text-lg text-steel leading-relaxed mt-4 mb-8">
                {project.summary}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-background rounded-xl border border-gray-100">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">{m.value}</div>
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
                    <li key={i} className="text-steel text-[0.95rem] leading-relaxed flex gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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
                    <li key={i} className="text-steel text-[0.95rem] leading-relaxed flex gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quote */}
            {project.quote && (
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
                <span className="font-medium text-primary">{project.client}</span>
                {' '}&middot;{' '}{project.industry}
              </p>

              <p className="text-steel text-[0.95rem] leading-relaxed mb-5 flex-1">
                {project.summary}
              </p>

              <div className="grid grid-cols-2 gap-3 p-4 bg-background rounded-xl border border-gray-100">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-lg font-bold text-accent">{m.value}</div>
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
          I&apos;ll scope out the highest-impact automation for your team in a free 30-minute call.
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
