export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CodeFlow",
    "url": "https://codeflownation.com",
    "@id": "https://codeflownation.com/#organization",
    "description": "Custom AI automation for enterprise workflows. Human-in-the-loop pipelines that eliminate manual work your team shouldn't be doing.",
    "email": "siddharth@codeflownation.com",
    "founder": {
      "@type": "Person",
      "name": "Siddharth Rodrigues",
      "jobTitle": "Founder & AI Engineer",
      "url": "https://www.linkedin.com/in/siddharth-rodrigues/"
    },
    "sameAs": [
      "https://www.linkedin.com/in/siddharth-rodrigues/",
      "https://github.com/dorddis"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "siddharth@codeflownation.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CodeFlow",
    "url": "https://codeflownation.com",
    "@id": "https://codeflownation.com/#website",
    "description": "Custom AI automation for enterprise workflows",
    "publisher": {
      "@id": "https://codeflownation.com/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema, null, 2) }}
      />
    </>
  );
}
