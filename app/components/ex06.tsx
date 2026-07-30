"use client";

import { useState } from "react";

export function Visivel() {
  const [visivel, setVisivel] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
        {visivel ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptatem alias! Cum nam sint magni ea optio, consequuntur odit
            neque maiores provident aliquid aliquam hic recusandae suscipit,
            exercitationem quam quaerat.
          </p>
        ) : (
          <p className="text-slate-500">
            Clique para revelar uma mensagem escondida.
          </p>
        )}
      </div>

      <button
        className="rounded-full bg-slate-900 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800"
        onClick={() => setVisivel(!visivel)}
      >
        {visivel ? "Esconder" : "Mostrar"}
      </button>
    </div>
  );
}
