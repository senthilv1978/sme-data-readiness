"use client";

import { useMemo, useState } from "react";

type Capability = {
  title: string;
  description: string;
  tags: string[];
};

const capabilities: Capability[] = [
  {
    title: "B2B Demand Generation",
    description: "Designs and executes demand generation programs for sustained pipeline growth.",
    tags: ["demand generation", "b2b", "pipeline", "lead generation", "growth"]
  },
  {
    title: "Digital Marketing Strategy",
    description: "Builds high-performance digital campaigns that align with revenue and brand goals.",
    tags: ["digital marketing", "strategy", "campaign planning", "brand", "growth marketing"]
  },
  {
    title: "Google Ads & Performance Marketing",
    description: "Improves paid acquisition efficiency through measurable optimization frameworks.",
    tags: ["google ads", "ppc", "performance marketing", "paid search", "cpc"]
  },
  {
    title: "SEO & Search Visibility",
    description: "Improves rankings and discoverability through technical and content-led SEO.",
    tags: ["seo", "search engine optimization", "keyword research", "on-page seo", "organic traffic"]
  },
  {
    title: "Marketing Analytics",
    description: "Uses analytics and reporting to convert marketing data into action.",
    tags: ["analytics", "reporting", "dashboard", "kpi", "measurement"]
  },
  {
    title: "Team Leadership",
    description: "Leads cross-functional teams with a process-first execution style.",
    tags: ["leadership", "team management", "operations", "mentoring", "execution"]
  }
];

export function CapabilitySearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return capabilities;
    }

    return capabilities.filter((capability) =>
      [capability.title, capability.description, ...capability.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  return (
    <section className="panel" id="services" aria-label="Search services">
      <div className="section-head">
        <p className="eyebrow">Searchable Expertise</p>
        <h2>Find the right marketing capability in seconds</h2>
      </div>

      <label className="search-wrap" htmlFor="capability-search">
        <span className="sr-only">Search marketing capabilities</span>
        <input
          id="capability-search"
          name="capability-search"
          type="search"
          inputMode="search"
          placeholder="Search SEO, demand generation, Google Ads, analytics..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <div className="capability-grid" role="list" aria-live="polite">
        {filtered.length > 0 ? (
          filtered.map((capability) => (
            <article key={capability.title} className="capability-card" role="listitem">
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul>
                {capability.tags.slice(0, 3).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p className="empty-state">
            No exact matches found. Try broader terms like <strong>digital marketing</strong> or <strong>SEO</strong>.
          </p>
        )}
      </div>
    </section>
  );
}
