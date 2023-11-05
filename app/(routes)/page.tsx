import { FC } from "react";

import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";

import Container from "@/components/layouts/Container";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";

interface pageProps {}

export const revalidate = 0;

const HomePage: FC<pageProps> = async ({}) => {
  const billboard = await getBillboard("28f900d2-0e6c-434f-8128-e4cecf903125");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
