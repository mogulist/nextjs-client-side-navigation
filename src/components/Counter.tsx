"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-start">
      <div className="text-lg font-medium">Local state counter</div>
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
