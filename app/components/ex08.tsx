"use client";

import { useState } from "react";

export function Input() {
  const [text, setText] = useState<string>("");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Campo de texto
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-800">
          Digite algo e acompanhe a contagem
        </h2>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
        <span>Mensagem</span>
        <input
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
          type="text"
          placeholder="Digite o que quiser"
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-sm text-slate-100">
        <span>{text || "Ainda sem texto"}</span>
        <span>{text.length} caracteres</span>
      </div>

      <button
        className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
        onClick={() => setText("")}
      >
        Limpar
      </button>
    </div>
  );
}
