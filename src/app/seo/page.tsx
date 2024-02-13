import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "MongoDB Demo | Show casing the usage of metadata object",
  generator: "Next.js",
  applicationName: "mongodb-demo.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "Mongo"],
  authors: [{ name: "Daniel" }],
  creator: "Alejandro Daniel Valdés Govantes",
  publisher: "Alejandro Daniel Valdés Govantes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function PersonalSettings() {
  return (
    <>
      <section className="cards-section padding-block-100">
        <div className="container">
          <h1>This is the SEO page!</h1>
          <h2>
            The page is fully static. That means that is a server component
          </h2>
          <p>
            You are currently at: <code className="code">src/app/seo</code>
          </p>
        </div>
      </section>
      <section className="padding-block-100">
        <div className="container">
          <div className="even-columns">
            <div>
              <h3>This is the metadata object used for this page:</h3>
              <code className="code">{`
              export const metadata: Metadata = {
                title: "MongoDB Demo | Show casing the usage of metadata object",
                generator: "Next.js",
                applicationName: "mongodb-demo.js",
                referrer: "origin-when-cross-origin",
                keywords: ["Next.js", "React", "JavaScript", "Mongo"],
                authors: [{ name: "Daniel" }],
                creator: "Alejandro Daniel Valdés Govantes",
                publisher: "Alejandro Daniel Valdés Govantes",
                formatDetection: {
                  email: false,
                  address: false,
                  telephone: false,
                },};`}</code>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
