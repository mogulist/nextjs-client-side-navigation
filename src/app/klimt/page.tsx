import Link from "next/link";
import React from "react";
import GlobalCounter from "@/components/GlobalCounter";

const Klimt = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="p-4">
      <h1 className="text-2xl py-6">Klimt Page in /app</h1>
      <div className="flex flex-col space-y-4">
        <div>This page takes 3 seconds for server side fetch data</div>
        <Link href="/second">
          Client-side navigation to the second page {" >"}
        </Link>
        <GlobalCounter />
      </div>
    </main>
  );
};

export default Klimt;
