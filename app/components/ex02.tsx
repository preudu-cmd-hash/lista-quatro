"use client";

import { useState } from "react";

export function Contador() {
  const [n, setN] = useState<number>(0);

  const countHandle = () => {
    setN(n + 1);
  };

  const subHandle = () => {
    setN(n - 1);
  };

  const zerarHandle = () => {
    setN(0);
  };

  return (
    <>
      <div className="flex flex-col w-20 bg-blue-400 gap-3">
        <p>{n % 2 === 0 ? "Par" : "Ímpar"}</p>
        <p>{n}</p>
        <button
          className="bg-amber-500"
          onClick={() => {
            countHandle();
          }}
        >
          Adicionar no contador
        </button>
        <button
          className="bg-amber-500"
          onClick={() => {
            subHandle();
          }}
        >
          Subtrair no contador
        </button>
        <button
          className="bg-amber-500"
          onClick={() => {
            zerarHandle();
          }}
        >
          Zerar o contador
        </button>
      </div>
    </>
  );
}
