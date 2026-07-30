import { Alert } from "./components/ex01";
import { Contador } from "./components/ex02";
import { LigaDesliga } from "./components/ex05";
import { Visivel } from "./components/ex06";
import { TrocaCor } from "./components/ex07";
import { Input } from "./components/ex08";
import { Presenca } from "./components/ex11";
import { Curtidas } from "./components/ex12";
import { Alunos } from "./components/ex13";
import { AlunoPresente } from "./components/ex15";
import { DoisContadores } from "./components/ex16";
import { SoPresentes } from "./components/ex17";
import { PresencaInterativa } from "./components/ex18";
import { Matricula } from "./components/ex19";
import { Painel } from "./components/ex20";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-[color:var(--bg)]">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900">Exercícios</h1>
          <p className="mt-2 text-sm text-muted">
            Clique em cada card para ver o exercício.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card overflow-hidden">
            <Alert />
          </div>
          <div className="card overflow-hidden">
            <Contador />
          </div>
          <div className="card overflow-hidden">
            <LigaDesliga />
          </div>
          <div className="card overflow-hidden">
            <Visivel />
          </div>
          <div className="card overflow-hidden">
            <TrocaCor />
          </div>
          <div className="card overflow-hidden">
            <Input />
          </div>
          <div className="card overflow-hidden">
            <Presenca />
          </div>
          <div className="card overflow-hidden">
            <Curtidas />
          </div>
          <div className="card overflow-hidden">
            <Alunos />
          </div>
          <div className="card overflow-hidden">
            <AlunoPresente />
          </div>
          <div className="card overflow-hidden">
            <DoisContadores />
          </div>
          <div className="card overflow-hidden">
            <SoPresentes />
          </div>
          <div className="card overflow-hidden">
            <PresencaInterativa />
          </div>
          <div className="card overflow-hidden">
            <Matricula />
          </div>
          <div className="card overflow-hidden">
            <Painel />
          </div>
        </section>
      </div>
    </main>
  );
}
