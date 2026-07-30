"use client";

import { useState } from "react";

export function DoisContadores() {
  const [conta1, setConta1] = useState<number>(0);
  const [conta2, setConta2] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-600">Front</p>
          <p className="text-xl font-bold text-slate-800">{conta1}</p>
        </div>
        <button
          className="rounded-full bg-sky-600 px-4 py-2 text-white font-semibold"
          onClick={() => setConta1(conta1 + 1)}
        >
          Adicionar
        </button>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-600">Back</p>
          <p className="text-xl font-bold text-slate-800">{conta2}</p>
        </div>
        <button
          className="rounded-full bg-slate-200 px-4 py-2 font-semibold text-slate-700"
          onClick={() => setConta2(conta2 + 1)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
