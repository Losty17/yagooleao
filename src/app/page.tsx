import { Container, Header, Nav } from "@/components";

export default function Home() {
  return (
    <div>
      <Nav />
      <Container className="h-screen">
        <Header />
      </Container>
    </div>
  );
}
