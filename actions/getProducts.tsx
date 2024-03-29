import qs from "query-string";

import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const URL = qs.stringifyUrl({
    url: url,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(URL);
  return res.json();
};

export default getProducts;
