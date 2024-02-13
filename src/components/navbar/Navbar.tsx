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
            src="https://companieslogo.com/img/orig/MDB-a12554b6.png?t=1648915248"
            alt="MongoDBLogo"
            width={15}
            height={30}
            priority
          />
        </Link>
      </nav>
    </header>
  );
}
