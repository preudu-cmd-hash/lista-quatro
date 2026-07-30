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
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Contador
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-800">{n}</h2>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            n % 2 === 0
              ? "bg-slate-100 text-slate-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {n % 2 === 0 ? "Par" : "Ímpar"}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          className="rounded-full bg-sky-600 px-4 py-2 font-semibold text-white transition hover:bg-sky-700"
          onClick={countHandle}
        >
          Adicionar
        </button>
        <button
          className="rounded-full bg-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-300"
          onClick={subHandle}
        >
          Subtrair
        </button>
        <button
          className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
          onClick={zerarHandle}
        >
          Zerar
        </button>
      </div>
    </div>
  );
}
