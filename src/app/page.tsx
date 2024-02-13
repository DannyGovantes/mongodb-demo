import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Demo | React to the Next level: Unleashing the Power of Next.js",
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
export default function Home() {
  return (
    <main className="">
      <section className="padding-block-300">
        <div className="container">
          <div className="hero-section">
            <Image
              className=""
              src="/mongoDB.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <h1>Next.js: A Unified Solution for React Applications</h1>
            <p>
              This demo show some of the capabilities of Next.Js; how does it
              helps the SEO and the structure of the app directory to help
              developers in a fullstack framework
            </p>
          </div>
        </div>
      </section>

      <section className="cards-section padding-block-300">
        <div className="container">
          <div className="even-columns">
            <div className="cards">
              <div className="card">
                <Link href="/seo" className="">
                  <h2>
                    The Metadata Object <span>-&gt;</span>
                  </h2>
                  <p>
                    This is an example for the metadata object from Next.js that
                    help us to improve SEO
                  </p>
                </Link>
              </div>
              <div className="card">
                <Link href="/api/todos" className="">
                  <h2>
                    API Routes Handler <span>-&gt;</span>
                  </h2>
                  <p>
                    This is an example for the handler routes. It is an endpoint
                    to:
                    <code className="code">src/app/api/todos/route.js</code>
                  </p>
                </Link>
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <Link href="/dashboard/settings" className="">
                  <h2>
                    Folder Structure to Routes <span>-&gt;</span>
                  </h2>
                  <p>
                    This is an example for how Next.js handles the folder
                    structure. Showcasing the following routes:
                    <code className="code">src/app/dashboard/settings</code>
                    <code className="code">
                      src/app/dashboard/settings/personal
                    </code>
                    <code className="code">
                      src/app/dashboard/settings/account
                    </code>
                  </p>
                </Link>
              </div>
              <div className="card">
                <Link href="/products/1" className="">
                  <h2>
                    Dynamic Route <span>-&gt;</span>
                  </h2>
                  <p>
                    This is an example for dynamic route rendering. to:
                    <code className="code">src/products/[id]</code>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
