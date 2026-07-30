import { Alert } from "./components/ex01";
import { Contador } from "./components/ex02";
import { LigaDesliga } from "./components/ex05";
import { Visivel } from "./components/ex06";
import { TrocaCor } from "./components/ex07";
import { Input } from "./components/ex08";

export default function Home() {
  return (
    <>
      <Alert />
      <Contador />
      <LigaDesliga />
      <Visivel />
      <TrocaCor />
      <Input />
    </>
  );
}
