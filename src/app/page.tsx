import { Container, Header, Heading } from "@/components";

export default () => {
  return (
    <div className="flex flex-col gap-16">
      <Container>
        <Header />
      </Container>
      <Container className="gap-8">
        <Heading level={1}>Sobre as Aulas</Heading>
        <Container horizontal className="gap-16">
          <p className="w-full text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            voluptatem vitae accusantium excepturi deleniti fugiat veniam!
            Quaerat, ad. In atque ipsa architecto sed tenetur voluptate. Quo,
            beatae. Laboriosam, et rerum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aperiam porro ratione numquam
            nesciunt? Molestiae fuga incidunt, ex dignissimos voluptate
            recusandae hic nulla suscipit illum eveniet, enim dolor, qui ipsa
            eligendi! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aliquid similique eos saepe facere nisi incidunt cupiditate,
            laboriosam, animi necessitatibus eius error dicta explicabo
            aspernatur vel voluptatum odit suscipit maxime dolorum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maiores labore quae,
            est illo nobis dolorum magnam quaerat, dicta voluptatem culpa esse
            ut consequatur ab aliquid dolore tempore explicabo minima. Libero.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit aperiam alias fuga et necessitatibus quaerat nisi
            provident molestias, at maxime veritatis illo eaque porro nihil
            libero ducimus voluptatem qui ipsam.
          </p>
          <div className="aspect-video w-full bg-carbon rounded-md" />
        </Container>
      </Container>
      <Container
        horizontal
        outerClassName="bg-carbon p-16 text-marble"
        className="gap-8"
      >
        <Container className="gap-8">
          <Heading level={1}>Sobre mim</Heading>
          <p className="w-full text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            voluptatem vitae accusantium excepturi deleniti fugiat veniam!
            Quaerat, ad. In atque ipsa architecto sed tenetur voluptate. Quo,
            beatae. Laboriosam, et rerum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aperiam porro ratione numquam
            nesciunt? Molestiae fuga incidunt, ex dignissimos voluptate
            recusandae hic nulla suscipit illum eveniet, enim dolor, qui ipsa
            eligendi! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aliquid similique eos saepe facere nisi incidunt cupiditate,
            laboriosam, animi necessitatibus eius error dicta explicabo
            aspernatur vel voluptatum odit suscipit maxime dolorum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maiores labore quae,
            est illo nobis dolorum magnam quaerat, dicta voluptatem culpa esse
            ut consequatur ab aliquid dolore tempore explicabo minima. Libero.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit aperiam alias fuga et necessitatibus quaerat nisi
            provident molestias, at maxime veritatis illo eaque porro nihil
            libero ducimus voluptatem qui ipsam.
          </p>
        </Container>
        <div className="aspect-video w-full bg-marble rounded-md" />
      </Container>
    </div>
  );
}
