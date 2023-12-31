"use client";

import { counterState } from "@/stores/counter.recoil";
import { useRecoilState } from "recoil";

export default function GlobalCounter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div className="flex flex-col justify-start">
      <div className="text-lg font-medium">Recoil counter</div>
      <div className="flex justify-between space-x-6">
        <button className={buttonStyle} onClick={() => setCount(count - 1)}>
          -
        </button>
        <p className="text-lg">You clicked {count} times</p>
        <button className={buttonStyle} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

const buttonStyle = "px-3 py-1 border-2 border-gray-300 rounded-lg";
