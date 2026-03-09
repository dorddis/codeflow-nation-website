import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/sanity.client';
import { recentBlogPostsQuery } from '@/sanity/lib/sanity.queries';
import { urlFor } from '@/sanity/lib/sanity.image';

interface RecentPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  featuredImage?: {
    asset: { _ref: string; _type: string };
    alt: string;
  };
}

const services = [
  {
    title: 'Email & Document Processing',
    description: 'AI reads your inbound emails, extracts structured data, and routes it to the right system. No copy-pasting, no missed details.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Workflow Orchestration',
    description: 'Connect the tools your team already uses. I build pipelines that move data between CRMs, ERPs, spreadsheets, and databases automatically.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Reporting & Intelligence',
    description: 'Turn scattered operational data into dashboards and alerts. Know what is happening across your business without chasing spreadsheets.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Content & Distribution',
    description: 'Automated content pipelines that research, write, and publish. SEO-optimized blogs, social posts, and reports on autopilot.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'I map out where your team loses hours to repetitive work. We identify the highest-impact processes to automate first.',
  },
  {
    number: '02',
    title: 'Build & Validate',
    description: 'I build the pipeline, test it against your real data, and iterate until accuracy is bulletproof. You stay in the loop at every step.',
  },
  {
    number: '03',
    title: 'Deploy & Monitor',
    description: 'Your automation goes live. I handle monitoring, edge cases, and tuning. Your team gets time back from day one.',
  },
];

export default async function HomePage() {
  let posts: RecentPost[] = [];
  try {
    posts = await client.fetch(recentBlogPostsQuery);
  } catch {
    // Fail silently
  }

  return (
    <main>
      {/* Hero */}
      <section className="max-w-5xl mx-auto py-32 md:py-44 px-[6%] md:px-[5%] text-center">
        <div className="inline-block border border-accent/30 bg-accent/5 text-accent px-4 py-1.5 rounded-full text-[0.8rem] font-semibold uppercase tracking-[1.5px] mb-8">
          Enterprise Automation
        </div>

        <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.15] font-bold text-primary mb-6">
          I build AI automation that eliminates the manual work your team shouldn&apos;t be doing
        </h1>

        <p className="text-lg md:text-xl text-steel max-w-2xl mx-auto mb-10 leading-relaxed">
          Custom pipelines for enterprise workflows. Human-in-the-loop. Production-grade.
          Your employees do the thinking &mdash; my automation does the rest.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/siddharth-rodrigues-personal-calendar-ihwyx1a3d"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book a Call
          </a>
          <Link
            href="/blog"
            className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:border-accent hover:text-accent transition-all duration-300"
          >
            Read the Blog
          </Link>
        </div>
      </section>

      {/* What I Build */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto py-24 px-[6%] md:px-[5%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What I Build
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto">
              Every business has processes that eat up hours but follow predictable patterns. Those are the ones I automate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border border-gray-200 hover:border-accent/40 hover:shadow-md transition-all duration-300 bg-background"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-steel leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto py-24 px-[6%] md:px-[5%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            No bloated SOWs. No six-month timelines. I scope tight, build fast, and deliver working automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-6xl font-bold text-accent/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-steel leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto py-24 px-[6%] md:px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for teams that move fast but are stuck doing things slowly
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                If your team is manually copying data between systems, chasing approvals over email, or building reports in spreadsheets every week &mdash; you&apos;re leaving hours on the table. I fix that.
              </p>
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/siddharth-rodrigues-personal-calendar-ihwyx1a3d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-all duration-300 shadow-md"
              >
                Let&apos;s Talk
              </a>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Operations Directors', desc: 'Drowning in manual processes that should have been automated years ago.' },
                { label: 'IT Leaders', desc: 'Need custom solutions that integrate with existing systems, not another SaaS subscription.' },
                { label: 'Founders & CEOs', desc: 'Want to scale output without scaling headcount.' },
              ].map((persona) => (
                <div key={persona.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{persona.label}</h3>
                    <p className="text-gray-400">{persona.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto py-20 px-[6%] md:px-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '98%+', label: 'Data Extraction Accuracy' },
              { value: '5 min', label: 'Avg. Processing Time' },
              { value: '40+', label: 'Hours Saved Per Week' },
              { value: '0', label: 'New Tools To Learn' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-steel">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section className="max-w-7xl mx-auto py-24 px-[6%] md:px-[5%]">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Latest Posts</h2>
            <Link
              href="/blog"
              className="text-accent font-medium hover:text-accent-hover transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {post.featuredImage?.asset && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={urlFor(post.featuredImage.asset).width(600).height(338).url()}
                      alt={post.featuredImage.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-steel">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-accent/5 border-t border-accent/10">
        <div className="max-w-4xl mx-auto py-24 px-[6%] md:px-[5%] text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
            Ready to stop paying people to do what machines should?
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto mb-10">
            Book a 30-minute call. I&apos;ll map out the 2&ndash;3 automations that would save your team the most time &mdash; whether we work together or not.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/siddharth-rodrigues-personal-calendar-ihwyx1a3d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-lg bg-accent text-white text-lg font-semibold hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Free Call
          </a>
        </div>
      </section>
    </main>
  );
}
