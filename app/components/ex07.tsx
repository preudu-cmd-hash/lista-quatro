"use client";

import { useState } from "react";

export function TrocaCor() {
  const [cor, setCor] = useState<string>("#55C8E6");

  return (
    <>
      <div className="text-center">
        <div
          className="w-32 h-32 rounded-2xl mx-auto mb-3"
          style={{ backgroundColor: cor }}
        ></div>
        <div>
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
            onClick={() => setCor("#9FD52F")}
          >
            Lima
          </button>
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
            onClick={() => setCor("#FF7158")}
          >
            Coral
          </button>
        </div>
      </div>
    </>
  );
}
