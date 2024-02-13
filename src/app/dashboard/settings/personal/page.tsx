import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Demo | Page for personal settings",
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
    <section className="cards-section padding-block-100">
      <div className="container">
        <h1>This is the personal settings page!</h1>
        <h2>The page is fully static. That means that is a server component</h2>
        <p>
          You are currently at:{" "}
          <code className="code">src/app/dashboard/settings/personal</code>
        </p>
      </div>
    </section>
  );
}
