import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Demo | Page that show cases a dynamic rendering",
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

export default function page() {
  return (
    <section className="cards-section padding-block-100">
      <div className="container">
        <h1>This is the dynamic products page!</h1>
        <h2>
          The page is dynamicly render. That means that this page is delivered
          at request time
        </h2>
        <p>
          You are currently at:{" "}
          <code className="code">src/app/products/[id]</code>
        </p>
      </div>
    </section>
  );
}
