"use client";

import { useState } from "react";

export function TrocaCor() {
  const [cor, setCor] = useState<string>("#55C8E6");

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Troca de cor
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-800">
          Escolha uma paleta
        </h2>
      </div>

      <div
        className="h-32 w-full max-w-[220px] rounded-[1.5rem] border border-slate-200 shadow-inner"
        style={{ backgroundColor: cor }}
      />

      <div className="flex flex-wrap justify-center gap-3">
        <button
          className="rounded-full bg-lime-500 px-4 py-2 font-semibold text-white transition hover:bg-lime-600"
          onClick={() => setCor("#9FD52F")}
        >
          Lima
        </button>
        <button
          className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600"
          onClick={() => setCor("#FF7158")}
        >
          Coral
        </button>
        <button
          className="rounded-full bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-600"
          onClick={() => setCor("#55C8E6")}
        >
          Ciano
        </button>
      </div>
    </div>
  );
}
