"use client";

import { useState } from "react";

interface Aluno {
  nome: string;
  presenca?: boolean;
}

export function AlunoPresente() {
  const [alunos, setAlunos] = useState<Aluno[]>([
    { nome: "Pedro", presenca: true },
    { nome: "Thaís", presenca: false },
    { nome: "Mariana", presenca: true },
    { nome: "Lucas", presenca: true },
    { nome: "Gabriel", presenca: false },
  ]);

  return (
    <div className="space-y-3">
      {alunos.map((aluno) => (
        <p key={aluno.nome}>
          {aluno.nome}: {aluno.presenca ? "presente" : "ausente"}
        </p>
      ))}
      <p>{alunos.filter((aluno) => aluno.presenca).length} alunos presentes</p>
    </div>
  );
}
