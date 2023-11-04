import { FC } from "react";
import Link from "next/link";

import getCategory from "@/actions/getCategories";

import Container from "@/components/layouts/Container";
import MainNav from "@/components/layouts/MainNav";
import NavbarActions from "@/components/layouts/NavbarActions";

interface NavbarProps {}

export const revalidate = 0;

const Navbar: FC<NavbarProps> = async ({}) => {
  const categories = await getCategory();
  return (
    <Container>
      <div className="relative px-4 sm:px-6 flex h-16 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl">Rebalance</p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </Container>
  );
};

export default Navbar;
