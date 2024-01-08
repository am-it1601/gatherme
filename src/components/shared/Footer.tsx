import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer className="border-t">
    <div className="flex-center flex-between wrapper flex flex-col gap-4 p-5 sm:flex-row">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={34}
        />
      </Link>
      <p>2023 Gather Me. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
