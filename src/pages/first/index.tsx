import Link from "next/link";
import React from "react";

const First = () => {
  return (
    <main className="p-4">
      <h1>First Page</h1>
      <div>This page takes 3 seconds for server side fetch data</div>
      <Link href="/second">Client-side navigation to Second page</Link>
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
