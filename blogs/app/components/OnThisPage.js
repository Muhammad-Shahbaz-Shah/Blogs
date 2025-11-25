"use client";

import React, { useMemo } from "react";
import Link from "next/link";

export default function H2List({ html }) {
  const headings = useMemo(() => {
    if (typeof window === "undefined" || !html) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return Array.from(doc.querySelectorAll("h2")).map((h2) => ({
      text: h2.textContent,
      id: h2.id,
    }));
  }, [html]);

  if (headings.length === 0) {
    return (
      <p>
        No <code>h2</code> headings found.
      </p>
    );
  }

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold text-lg mb-2">Topics</h3>
      <ul className="list-inside list-none space-y-1">
        {headings.map((heading, index) => (
       
            <Link onClick={()=>(window.document.body.focus())} href={`#${decodeURIComponent(heading.id)}`}>
          <li key={index}>
              {heading.text}
          </li>
            </Link>
        ))}
      </ul>
    </div>
  );
}
