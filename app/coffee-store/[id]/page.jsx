"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const CoffeeStore = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return (
    <div>
      CoffeeStore
      <Link href='/'>Back to home</Link>
    </div>
  );
};

export default CoffeeStore;
