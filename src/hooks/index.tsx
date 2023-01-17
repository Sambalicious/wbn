import api from "@/utils/api";
import { urls } from "@/utils/urls";
import { useQuery } from "@tanstack/react-query";
import { TProducts } from "store/types";

export const useGetProducts = () => {
  const getProducts = async () => {
    let response = await api.get(urls.products);

    return response.data;
  };

  const { data, isLoading } = useQuery(["products"], getProducts);

  const products: TProducts[] = data;

  return { products, isLoading };
};
