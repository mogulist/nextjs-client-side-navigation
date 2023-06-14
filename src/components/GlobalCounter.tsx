"use client";

import { counterState } from "@/stores/counter.recoil";
import { useRecoilState } from "recoil";

export default function GlobalCounter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <div className="flex  justify-between space-x-6">
        <button className={buttonStyle} onClick={() => setCount(count - 1)}>
          -
        </button>
        <p className="text-xl">You clicked {count} times</p>
        <button className={buttonStyle} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

const buttonStyle = "px-3 py-1 border-2 border-gray-300 rounded-lg";
