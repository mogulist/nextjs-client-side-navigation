import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type Props = {
  author: string;
};

const Second = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl py-4">Second Page</h1>
      <div className="flex flex-col gap-y-8">
        <div>This page takes 5 seconds for server side fetch data</div>
        <button onClick={handleClick}>{`< Go Back`}</button>
      </div>
    </main>
  );
};

export default Second;

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    props: {
      author: "Herbert",
    },
  };
};
