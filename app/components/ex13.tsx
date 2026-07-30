"use client";

import { ChangeEvent, useState } from "react";

export function Alunos() {
  const [alunos, setAlunos] = useState<string[]>([
    "Pedro",
    "Thaís",
    "Mariana",
    "Lucas",
    "Gabriel",
  ]);
  const [novoAluno, setNovoAluno] = useState<string>("");
  const [alunoRemove, setAlunoRemove] = useState<string>("");

  const adicionaAluno = (aluno: string) => {
    if (!aluno.trim()) return;
    setAlunos((prev) => [...prev, aluno]);
    setNovoAluno("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNovoAluno(e.target.value);
  };

  const handleRemoveChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlunoRemove(e.target.value);
  };

  const removeAluno = (aluno: string) => {
    if (!aluno.trim()) return;
    setAlunos(alunos.filter((alunos) => alunos !== aluno));
    setAlunoRemove("");
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Lista de Alunos
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-800">
          Turma atual
        </h2>
      </div>

      <ul className="space-y-2">
        {alunos.map((aluno) => (
          <li
            key={aluno}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2"
          >
            {aluno}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          className="flex-1 rounded-2xl border border-slate-200 px-4 py-2 outline-none focus:border-sky-400"
          type="text"
          placeholder="Nome para adicionar"
          value={novoAluno}
          onChange={handleChange}
        />
        <button
          className="mt-2 sm:mt-0 sm:ml-3 rounded-full bg-sky-600 px-4 py-2 text-white font-semibold"
          onClick={() => adicionaAluno(novoAluno)}
        >
          Adicionar
        </button>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          className="flex-1 rounded-2xl border border-slate-200 px-4 py-2 outline-none focus:border-rose-400"
          type="text"
          placeholder="Nome para remover"
          value={alunoRemove}
          onChange={handleRemoveChange}
        />
        <button
          className="mt-2 sm:mt-0 sm:ml-3 rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700"
          onClick={() => removeAluno(alunoRemove)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}
