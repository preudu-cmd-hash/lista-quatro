"use client";

export function Alert() {
  return (
    <>
      <button className="w-15" onClick={() => alert("Olá, turma!")}>
        Aperte aqui
      </button>
    </>
  );
}
