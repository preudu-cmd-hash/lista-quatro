"use client";

import { useState } from "react";

export function Painel() {
  type Aluno = { id: number; nome: string; presente: boolean };
  const [turma, setTurma] = useState<Aluno[]>([
    { id: 1, nome: "Ana Carolina", presente: false },
  ]);
  const [nome, setNome] = useState<string>("");
  const add = () => {
    setTurma([...turma, { id: Date.now(), nome, presente: false }]);
    setNome("");
  };
  const remover = (id: number) => setTurma(turma.filter((a) => a.id !== id));
  const alternar = (id: number) =>
    setTurma(
      turma.map((a) => (a.id === id ? { ...a, presente: !a.presente } : a)),
    );
  const presentes = turma.filter((a) => a.presente).length;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-700">Presentes</p>
        <p className="font-bold">
          {presentes}/{turma.length} presentes
        </p>
      </div>

      <div className="flex items-center gap-2">
        <input
          className="flex-1 rounded-2xl border border-slate-200 px-3 py-2 outline-none"
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNome(e.target.value)
          }
        />
        <button
          onClick={add}
          className="rounded-full bg-sky-600 px-4 py-2 text-white font-semibold"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {turma.map((a) => (
          <li
            key={a.id}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-3 py-2"
          >
            <div className="flex items-center gap-3">
              <button className="rounded-full" onClick={() => alternar(a.id)}>
                {a.presente ? "🟢" : "⚪"}
              </button>
              <span>{a.nome}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="rounded-full bg-rose-500 px-3 py-1 text-white"
                onClick={() => remover(a.id)}
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
