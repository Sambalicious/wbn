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

  const handleAddQuantity = (productId: number, quantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, quantity: quantity + 1 },
    });
  };

  const handleDecreaseQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, quantity: quantity - 1 },
    });
  };

  const handleDeleteItem = (productId: number) => {
    dispatch({ type: "DELETE_FROM_CART", payload: { productId } });
  };

  const handleSaveForLater = (productId: number) => {
    dispatch({ type: "SAVE_FOR_LATER", payload: { productId } });
  };
  let cartItemDetails = cart.map(item => {
    return products?.find(product => product.productId === item.productId);
  });

  return (
    <div data-variant={cartType} className={styles.cart}>
      <Cart cart={cart}>
        {isLoading ? (
          cart?.map(el => (
            <div key={el.productId}>
              <Loader />{" "}
            </div>
          ))
        ) : cartItemDetails?.length > 0 ? (
          cartItemDetails?.map(item => (
            <CartItem
              type={cartType}
              key={item?.productId!}
              seller={"WBN"}
              price={item?.senderFee!}
              image={item?.img!}
              isAvailable={item?.available!}
              isFreeShipping
              productName={item?.productName!}
              addQuantity={el => handleAddQuantity(item?.productId!, el)}
              decreaseQuantity={el =>
                handleDecreaseQuantity(item?.productId!, el)
              }
              deleteItem={() => handleDeleteItem(item?.productId!)}
              saveForLater={() => handleSaveForLater(item?.productId!)}
              productId={item?.productId!}
            />
          ))
        ) : (
          <EmptyState text="Oops!. Your cart is currently empty" />
        )}
      </Cart>
    </div>
  );
};
