import { Loader } from "@/components/atoms";
import { CartItem, EmptyState } from "@/components/molecules";
import { Cart } from "@/components/organisms";
import { useGetProducts } from "@/hooks/index";
import { useAppState } from "store/context";
import styles from "./Cart.module.scss";
interface CartTemplateProps {
  cartType?: "checkout" | "cart";
}
export const CartTemplate = ({ cartType = "cart" }: CartTemplateProps) => {
  const { products, isLoading } = useGetProducts();
  const { state, dispatch } = useAppState();
  const cart = state?.cart;

  const handleAddQuantity = (id: number, quantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: quantity + 1 },
    });
  };

  const handleDecreaseQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: quantity - 1 },
    });
  };

  const handleDeleteItem = (id: number) => {
    dispatch({ type: "DELETE_FROM_CART", payload: { id } });
  };

  const handleSaveForLater = (id: number) => {
    dispatch({ type: "SAVE_FOR_LATER", payload: { id } });
  };
  let cartItemDetails = cart.map(item => {
    return products?.find(product => product.id === item.id);
  });

  return (
    <div data-variant={cartType} className={styles.cart}>
      <Cart cart={cart}>
        {isLoading ? (
          cart?.map(el => (
            <div key={el.id}>
              <Loader />{" "}
            </div>
          ))
        ) : cartItemDetails?.length > 0 ? (
          cartItemDetails?.map(item => (
            <CartItem
              type={cartType}
              key={item?.id!}
              seller={"WBN"}
              price={item?.price!}
              image={item?.image!}
              isAvailable
              isFreeShipping
              productName={item?.title!}
              addQuantity={el => handleAddQuantity(item?.id!, el)}
              decreaseQuantity={el => handleDecreaseQuantity(item?.id!, el)}
              deleteItem={() => handleDeleteItem(item?.id!)}
              saveForLater={() => handleSaveForLater(item?.id!)}
              id={item?.id!}
            />
          ))
        ) : (
          <EmptyState text="Oops!. Your cart is currently empty" />
        )}
      </Cart>
    </div>
  );
};
