import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import GlobalCounter from "@/components/GlobalCounter";

const First = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/second", undefined, { shallow: true });
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl py-6">First Page</h1>
      <div className="flex flex-col space-y-4">
        <div>This page takes 3 seconds for server side fetch data</div>
        <Link href="/second">
          Client-side navigation to the second page {" >"}
        </Link>
        <div onClick={handleClick}>
          Shallow route to the second page {" >"}
          <div className="text-sm font-thin">
            Shallow routing only works for URL changes in the current page
          </div>
        </div>
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
