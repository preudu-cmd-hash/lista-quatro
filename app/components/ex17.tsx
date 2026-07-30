"use client";

import { useState } from "react";

export function SoPresentes() {
  type Aluno = { id: number; nome: string; presente: boolean };

  const [so, setSo] = useState<boolean>(false);
  const [alunos] = useState<Aluno[]>([
    { id: 1, nome: "João Eduardo", presente: true },
    { id: 2, nome: "Luis Felipe", presente: false },
  ]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Filtrar
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-800">
            Exibir apenas presentes
          </h2>
        </div>
        <button
          className="rounded-full bg-sky-600 px-4 py-2 text-white font-semibold"
          onClick={() => setSo(!so)}
        >
          {so ? "Mostrar todos" : "Só presentes"}
        </button>
      </div>

      <ul className="space-y-2">
        {alunos.map(
          (a) =>
            (!so || a.presente) && (
              <li
                key={a.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2"
              >
                {a.nome}
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
