import { Container, Title, TopBar, Filters, ProductCard } from "@/components";
export default function Home() {
  return (
    <>
      <Container className="pb-0">
        <Title text="Все пиццы" size="lg" className="font-bold" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gab-16">
              <Title text="Все продукты" />
              <ProductCard id={0} name="Чизбургер" price={0} imageUrl={""} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
