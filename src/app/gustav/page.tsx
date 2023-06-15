import Link from "next/link";
import React from "react";
import GlobalCounter from "@/components/GlobalCounter";

const Klimt = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="p-4">
      <h1 className="text-2xl py-6">Gustav Page in /app</h1>
      <div className="flex flex-col space-y-4">
        <div>This page takes 3 seconds for server side fetch data</div>
        <Link href="/first">Client-side navigation /pages/first {" >"}</Link>
        <Link href="/second">Client-side navigation /pages/second {" >"}</Link>
        <Link href="/klimt">Client-side navigation /app/klimt {" >"}</Link>
        <GlobalCounter />
      </div>
    </main>
  );
};

export default Klimt;
