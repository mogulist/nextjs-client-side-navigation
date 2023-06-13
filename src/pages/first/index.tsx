import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const First = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/second", undefined, { shallow: true });
  };

  return (
    <main className="p-4">
      <h1>First Page</h1>
      <div>This page takes 3 seconds for server side fetch data</div>
      <Link href="/second">Client-side navigation to the second page</Link>
      <button onClick={handleClick}>Shallow route to the second page</button>
      <div>Shallow routing only works for URL changes in the current page</div>
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
