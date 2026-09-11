"use client";

import logoLight from "@/components/assets/logo-light.png";
import logoDark from "@/components/assets/logo-dark.png";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative h-12 w-12">
      <Image
        src={logoLight}
        alt="incrementalist logo"
        className="block dark:hidden"
        fill
      />

      <Image
        src={logoDark}
        alt="incrementalist logo"
        className="hidden dark:block"
        fill
      />
    </div>
  );
}