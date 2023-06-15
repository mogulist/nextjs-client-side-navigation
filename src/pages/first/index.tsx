import Link from "next/link";
import React from "react";
import GlobalCounter from "@/components/GlobalCounter";

const First = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl py-6">First Page</h1>
      <div className="flex flex-col space-y-4">
        <div>This page takes 3 seconds for server side fetch data</div>
        <Link href="/second">
          Client-side navigation to /pages/second {" >"}
        </Link>
        <Link href="/klimt">Client-side navigation to /app/klimt {" >"}</Link>
        <GlobalCounter />
      </div>
    </main>
  );
};

export default First;

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    props: {},
  };
};
