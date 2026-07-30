"use client";

import { useState } from "react";

export function Curtidas() {
  const [curtidas, setCurtidas] = useState<number>(0);

  const adicionaCurtida = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Curtidas
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-800">
          Daniel Guimarães
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="rounded-full bg-pink-500 px-4 py-2 text-white shadow hover:scale-[1.03]"
          onClick={adicionaCurtida}
        >
          ❤️
        </button>
        <span className="text-sm font-medium text-slate-700">
          {curtidas} curtida(s)
        </span>
      </div>
    </div>
  );
}
