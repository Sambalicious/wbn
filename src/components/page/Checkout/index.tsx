import { Button } from "@/components/atoms";
import {
  CheckoutItem,
  OrderSummary2,
  OrderSummaryItem,
} from "@/components/molecules";
import { CartTemplate, PageLayout } from "@/components/template";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useAppState } from "store/context";
import styles from "./CheckoutPage.module.scss";
const CheckoutPage = () => {
  const { state, dispatch } = useAppState();
  const router = useRouter();
  const cart = state?.cart;

  const handleCheckout = () => {
    if (cart?.length === 0) return toast.error("Please add an item to cart");

    dispatch({ type: "CLEAR_CART" });
    toast.success("Order has been placed successfully");
    router.push("/");
  };
  return (
    <PageLayout subTitle="Checkout and place your order">
      <div className={styles.checkout}>
        <div className={styles.checkout__grid}>
          <div>
            {" "}
            <CheckoutItem
              id={1}
              info={"Shipping details"}
              details={"Sambalicious"}
              description={"1, WBN street ontario, canada"}
              buttonClick={() => {}}
            />
            <CheckoutItem
              id={2}
              info={"Payment details"}
              details={"Mastercard ending in *******0034"}
              description={"Same address as shipping address"}
              buttonClick={() => {}}
            />
            <div>
              <CartTemplate cartType="checkout" />
            </div>
            <OrderSummary2 cart={cart?.length} buttonClick={handleCheckout} />
          </div>
          <aside className={styles.checkout__aside}>
            <div className="p-1">
              <div className="flex justify-center my-1 ">
                <div className="flex flex-column">
                  <Button onClick={handleCheckout} className="px-1">
                    Place your order and pay{" "}
                  </Button>
                  <div>
                    <p className={styles.checkout__order}>
                      By placing this order. You have agreed to our
                    </p>{" "}
                    <Button variant="ghost">Terms and conditions</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1">
              <OrderSummaryItem
                cart={cart?.length}
                shippingFee={0.0}
                couponDiscount={0.0}
              />
            </div>
            <div className={styles.checkout__shipping}>
              <p>
                {
                  "  Your order will be shipped to your address. Don't worry we know your address."
                }
              </p>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
};

export default CheckoutPage;
