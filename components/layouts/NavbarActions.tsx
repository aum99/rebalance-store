"use client";

import { FC, useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import useCart from "@/hooks/useCart";

import Button from "@/components/Button";

interface NavbarActionsProps {}

const NavbarActions: FC<NavbarActionsProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
