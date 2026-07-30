"use client";

import { useState } from "react";

export function Presenca() {
  const [presenca, setPresenca] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Presença
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-800">
          Ana Carolina: {presenca ? "Presente" : "Ausente"}
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          {presenca
            ? "A participação está marcada."
            : "Clique para alterar o status."}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium ${
            presenca
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          <span
            className={`mr-2 h-2.5 w-2.5 rounded-full ${
              presenca ? "bg-emerald-500" : "bg-slate-400"
            }`}
          />
          {presenca ? "Presente" : "Ausente"}
        </div>

        <button
          className="rounded-full bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-800"
          onClick={() => setPresenca(!presenca)}
        >
          Alterar presença
        </button>
      </div>
    </div>
  );
}
