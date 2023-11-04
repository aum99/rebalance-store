import { FC } from "react";

import getBillboard from "@/actions/getBillboard";

import Container from "@/components/layouts/Container";
import Billboard from "@/components/Billboard";

interface pageProps {}

export const revalidate = 0;

const HomePage: FC<pageProps> = async ({}) => {
  const billboard = await getBillboard("28f900d2-0e6c-434f-8128-e4cecf903125");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
