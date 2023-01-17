import { Loader } from "@/components/atoms";
import { EmptyState, SaveForLaterItem } from "@/components/molecules";
import { useGetProducts } from "@/hooks/index";
import { useAppState } from "store/context";
import styles from "./RecommendedProducts.module.scss";
export const RecommendedProducts = () => {
  const { state, dispatch } = useAppState();
  const savedItems = state?.saveForLater;
  const { products, isLoading } = useGetProducts();
  let savedItemDetails = savedItems.map(item => {
    return products?.find(product => product.id === item.id);
  });

  const handleAddToCart = (id: number, price: number) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, quantity: 1, price } });
  };

  return (
    <div className={styles.product}>
      <h3 className={styles.product__header}>
        {`You recently removed these items from your cart do you want to add them back to cart now?`}
      </h3>

      <div className={styles.product__item}>
        {isLoading ? (
          savedItems?.map(el => (
            <div key={el.id} style={{ width: "20%" }}>
              <Loader />
            </div>
          ))
        ) : savedItemDetails?.length > 0 ? (
          savedItemDetails?.map(product => (
            <SaveForLaterItem
              key={product?.id!}
              image={product?.image!}
              productName={product?.title!}
              price={product?.price!}
              addToCart={() => handleAddToCart(product?.id!, product?.price!)}
              sellerName={"WBN"}
            />
          ))
        ) : (
          <EmptyState text="Oops! You currently don't have any Buy later product" />
        )}
      </div>
    </div>
  );
};
