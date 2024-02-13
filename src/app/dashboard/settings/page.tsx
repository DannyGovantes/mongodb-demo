import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "Demo | Page for general settings",
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

function Settings() {
  return (
    <section className="cards-section padding-block-100">
      <div className="container">
        <h1>This is the settings page!</h1>
        <h2>The page is fully static. That means that is a server component</h2>
        <ul>
          <li>
            {" "}
            <Link href={"/dashboard/settings/personal"}>
              Go to the personal settings
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/settings/account"}>
              Go to the account settings
            </Link>
          </li>
        </ul>
        <p>
          You are currently at:{" "}
          <code className="code">src/app/dashboard/settings</code>
        </p>
      </div>
    </section>
  );
}

export default Settings;
