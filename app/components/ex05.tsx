"use client";

import { useState } from "react";

export function LigaDesliga() {
  const [ligado, setLigado] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Interruptor
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-800">
            Status do componente
          </h2>
        </div>
        <div
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium ${
            ligado
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          <span
            className={`mr-2 h-2.5 w-2.5 rounded-full ${
              ligado ? "bg-emerald-500" : "bg-slate-400"
            }`}
          />
          {ligado ? "Ligado" : "Desligado"}
        </div>
      </div>

      <button
        className={`rounded-full px-5 py-2.5 font-semibold text-white transition hover:scale-[1.02] ${
          ligado
            ? "bg-slate-700 hover:bg-slate-800"
            : "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
        }`}
        onClick={() => setLigado(!ligado)}
      >
        {ligado ? "Desligar" : "Ligar"}
      </button>
    </div>
  );
}
