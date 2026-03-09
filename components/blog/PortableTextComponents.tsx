import Image from 'next/image';
import Link from 'next/link';
import { PortableTextComponents as PortableTextComponentsType } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/sanity.image';
import FAQAccordion from './FAQAccordion';

// Helper function to generate slug from text
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export const PortableTextComponents: PortableTextComponentsType = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value.asset).width(1200).height(675).url()}
            alt={value.alt || 'Blog image'}
            width={1200}
            height={675}
            className="rounded-[12px] w-full"
          />
          {value.caption && (
            <figcaption className="text-center text-[0.9rem] text-steel mt-3 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => {
      return (
        <pre className="bg-slate-900 border border-slate-700 rounded-[12px] p-6 overflow-x-auto my-6 max-w-full">
          {value.filename && (
            <div className="text-[0.85rem] text-amber-400 mb-3 border-b border-slate-700 pb-2">
              {value.filename}
            </div>
          )}
          <code className="text-[0.95rem] text-slate-100 font-mono block">{value.code}</code>
        </pre>
      );
    },
    rawHtml: ({ value }) => {
      if (!value?.html) return null;
      return (
        <div
          className="my-8 overflow-x-auto prose-table"
          dangerouslySetInnerHTML={{ __html: value.html }}
        />
      );
    },
    faqSection: ({ value }) => {
      if (!value?.items || value.items.length === 0) return null;
      return (
        <FAQAccordion
          title={value.title || 'Frequently Asked Questions'}
          items={value.items}
        />
      );
    },
  },
  block: {
    h2: ({ children }) => {
      // Extract text from children (handles strings, arrays, and React nodes)
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (node?.props?.children) return extractText(node.props.children);
        return '';
      };
      const text = extractText(children);
      const id = slugify(text);
      return (
        <h2 id={id} className="text-[2rem] text-primary mt-12 mb-5 font-bold scroll-mt-24">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      // Extract text from children (handles strings, arrays, and React nodes)
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (node?.props?.children) return extractText(node.props.children);
        return '';
      };
      const text = extractText(children);
      const id = slugify(text);
      return (
        <h3 id={id} className="text-[1.5rem] text-primary mt-10 mb-4 font-semibold scroll-mt-24">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (node?.props?.children) return extractText(node.props.children);
        return '';
      };
      const text = extractText(children);
      const id = slugify(text);
      return (
        <h4 id={id} className="text-[1.2rem] text-primary mt-8 mb-3 font-semibold scroll-mt-24">
          {children}
        </h4>
      );
    },
    normal: ({ children }) => (
      <p className="text-[1.1rem] leading-[1.8] text-foreground mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-[1.15rem] text-primary">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-8 mb-6 text-[1.05rem] leading-[1.8] text-foreground space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-8 mb-6 text-[1.05rem] leading-[1.8] text-foreground space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-slate-100 text-accent-hover px-2 py-1 rounded text-[0.95em] font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      return (
        <Link
          href={value?.href || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-medium underline decoration-accent/40 underline-offset-2 hover:text-accent-hover hover:decoration-accent transition-all duration-300"
        >
          {children}
          <svg className="inline-block w-3 h-3 ml-0.5 -mt-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3.5 1.5h7v7M10.5 1.5L1.5 10.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      );
    },
  },
};
