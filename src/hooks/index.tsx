import api from "@/utils/api";
import { urls } from "@/utils/urls";
import { useQuery } from "@tanstack/react-query";
import { TProducts } from "store/types";

export const useGetProducts = () => {
  const getProducts = async () => {
    let response = await api.get(urls.assets);

    return response.data;
  };

  const { data, isLoading } = useQuery(["products"], getProducts);

  const products: TProducts[] = data?.data?.giftCardsRLD?.content;

  return { products, isLoading };
};
