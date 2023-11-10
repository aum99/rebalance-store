import { FC } from "react";
import Link from "next/link";

import getCategories from "@/actions/getCategories";

import Container from "@/components/layouts/Container";
import MainNav from "@/components/layouts/MainNav";
import NavbarActions from "@/components/layouts/NavbarActions";
import { MobileNav } from "./MobileNav";

interface NavbarProps {}

export const revalidate = 0;

const Navbar: FC<NavbarProps> = async ({}) => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 flex h-16 items-center">
          <MobileNav data={categories} />
          <Link href="/" className="ml-4 sm:ml-auto flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Rebalance</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
