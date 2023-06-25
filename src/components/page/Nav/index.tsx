import { Container, Link } from "@/components";

export default () => {
  return (
    <Container
      horizontal
      sticky
      outerClassName="bg-marble z-10"
      className="h-16 justify-between items-center text-lg font-semibold"
    >
      <div className="flex gap-8">
        <Link href="/">Início</Link>
        <Link href="/about">Aulas</Link>
        <Link href="/about">Sobre</Link>
      </div>
      <div className="flex">Entrar</div>
    </Container>
  );
};
