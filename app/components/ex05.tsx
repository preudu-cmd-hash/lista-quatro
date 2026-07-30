"use client";

import { useState } from "react";

export function LigaDesliga() {
  const [ligado, setLigado] = useState<boolean>(false);

  return (
    <>
      <div>
        <p>{ligado ? "🟢 Ligado" : "⚪ Desligado"}</p>
        <button onClick={() => setLigado(!ligado)}>
          {ligado ? "Desligar" : "Ligar"}
        </button>
      </div>
    </>
  );
}
