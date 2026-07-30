"use client";

import { useState } from "react";

export function Input() {
  const [text, setText] = useState<string>("");

  return (
    <>
      <p>{text}</p>
      <input
        type="text"
        placeholder="Digite o que quiser"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <p>{text.length} caracteres</p>
      <button
        onClick={() => {
          setText("");
        }}
      >
        Limpar
      </button>
    </>
  );
}
