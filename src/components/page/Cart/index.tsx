import { CartSummary, RecommendedProducts } from "@/components/organisms";
import { CartTemplate, PageLayout } from "@/components/template";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppState } from "store/context";
import styles from "./Cart.module.scss";
const CartPage = () => {
  const { state, dispatch } = useAppState();
  const cart = state?.cart;
  const handleCartClear = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <PageLayout subTitle="Here is your cart summary">
      <div className={styles.cart}>
        <>
          {cart?.length > 0 && (
            <button onClick={handleCartClear} className={styles.cart__clear}>
              <p>Clear Cart</p>
              <AiOutlineDelete size={28} />
            </button>
          )}
        </>
        <div className={styles.cart__grid}>
          <CartTemplate cartType="cart" />

          <div>
            <CartSummary />
            <RecommendedProducts />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CartPage;
