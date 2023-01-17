import { Button, Checkbox } from "@/components/atoms";
import { formatCurrency, pluralise } from "@/utils/helpers";
import Link from "next/link";
import { useAppState } from "store/context";
import styles from "./CartSummary.module.scss";

export const CartSummary = () => {
  const { state } = useAppState();
  const cart = state?.cart;

  return (
    <section className={styles.cart}>
      {cart?.length > 0 ? (
        <>
          <div className="flex align-center gap-1">
            <p className={styles.cart__subtotal}>{`Subtotal (${pluralise(
              cart?.length,
              "item",
            )}):`}</p>
            <p className={styles.cart__price}>{formatCurrency(91.37)} </p>
          </div>
          <Checkbox label="This order contains a gift" />
          <Link href={"/checkout"}>
            <Button className={styles.cart__button}>
              Proceed to checkout{" "}
            </Button>
          </Link>
        </>
      ) : (
        <>
          <p className="text-center my-1">Lets add some items to cart</p>
          <Link href={"/"}>
            <Button className={styles.cart__button}>Start Shopping</Button>
          </Link>
        </>
      )}
    </section>
  );
};
