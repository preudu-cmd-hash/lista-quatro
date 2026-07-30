"use client";

import { useState } from "react";

export function Matricula() {
  const [nome, setNome] = useState<string>("");
  const [turma, setTurma] = useState<string[]>([]);
  const adicionar = () => {
    setTurma([...turma, nome]);
    setNome("");
  };
  return (
    <div className="text-center">
      <div className="flex flex-col gap-3 items-center sm:flex-row sm:justify-center">
        <input
          className="rounded-2xl border border-slate-200 px-4 py-2 w-full max-w-md outline-none focus:border-sky-400"
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNome(e.target.value)
          }
        />
        <button
          className="rounded-full bg-sky-600 px-4 py-2 text-white font-semibold"
          onClick={adicionar}
        >
          Matricular
        </button>
      </div>

      <ul className="mt-3 space-y-2 max-w-md mx-auto">
        {turma.map((n, i) => (
          <li
            key={i}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2"
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
