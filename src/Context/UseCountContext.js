import { useState } from "react";
import constate from "constate";

export function useCount() {
  const [count, setCount] = useState(0);
  return {
    count,
    setCount,
  };
}

export const [CountProvider, useCountContext] = constate(useCount);