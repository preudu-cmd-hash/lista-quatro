"use client";

import { useState } from "react";

export function Visivel() {
  const [visivel, setVisivel] = useState<boolean>(false);

  return (
    <>
      <div>
        {visivel && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptatem alias! Cum nam sint magni ea optio, consequuntur odit
            neque maiores provident aliquid aliquam hic recusandae suscipit,
            exercitationem quam quaerat.
          </p>
        )}
        <button onClick={() => setVisivel(!visivel)}>
          {visivel ? "Esconder" : "Mostrar"}
        </button>
      </div>
    </>
  );
}
