import { Alert } from "./components/ex01";
import { Contador } from "./components/ex02";
import { LigaDesliga } from "./components/ex05";
import { Visivel } from "./components/ex06";
import { TrocaCor } from "./components/ex07";
import { Input } from "./components/ex08";
import { Presenca } from "./components/ex11";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur">
          <p className="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
            Atividades interativas
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Uma página divertida e moderna para explorar cada exercício.
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Cada card abaixo representa um componente com uma experiência visual
            mais limpa e organizada.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <Alert />
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <Contador />
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <LigaDesliga />
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <Visivel />
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <TrocaCor />
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <Input />
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm lg:col-span-2">
            <Presenca />
          </div>
        </section>
      </div>
    </main>
  );
}
