import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <header>
      <nav className="container">
        <Link href={"/"}>
          <Image
            className=""
            src="/mongoDBLeaf.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
      </nav>
    </header>
  );
}
