"use client";

export function Alert() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Alerta interativo
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-800">
          Clique para receber uma mensagem
        </h2>
      </div>
      <button
        className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 font-semibold text-white shadow-md transition hover:scale-[1.02]"
        onClick={() => alert("Olá, turma!")}
      >
        Aperte aqui
      </button>
    </div>
  );
}
