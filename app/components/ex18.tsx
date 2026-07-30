"use client";

import { useState } from "react";

export function PresencaInterativa() {
  type Aluno = { id: number; nome: string; presente: boolean };
  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: 1, nome: "Ana Carolina", presente: false },
    { id: 2, nome: "Pedro Henrique Pais", presente: false },
  ]);
  const alternar = (id: number) =>
    setAlunos(
      alunos.map((a) => (a.id === id ? { ...a, presente: !a.presente } : a)),
    );
  const presentes = alunos.filter((a) => a.presente).length;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700">Presentes</p>
        <p className="font-bold">{presentes} presente(s)</p>
      </div>

      <ul className="space-y-2">
        {alunos.map((a) => (
          <li
            key={a.id}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <button
                className="rounded-full border p-2"
                onClick={() => alternar(a.id)}
              >
                {a.presente ? "🟢" : "⚪"}
              </button>
              <span className="text-sm text-slate-800">{a.nome}</span>
            </div>
            <span
              className={`text-sm font-medium ${a.presente ? "text-emerald-700" : "text-slate-500"}`}
            >
              {a.presente ? "Presente" : "Ausente"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
