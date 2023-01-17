import { ICart } from "@/types/index";
import { formatCurrency, pluralise, sumCart } from "@/utils/helpers";
import { ReactNode } from "react";
import styles from "./Cart.module.scss";

interface CartProps {
  children: ReactNode;
  cart: ICart[];
  type?: "checkout" | "cart";
}
export const Cart = ({ children, cart }: CartProps) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__heading}>
        <p className={styles.cart__heading__header}>Shopping cart</p>{" "}
        <p className="flex justify-end">Price</p>
      </div>
      <div>{children}</div>

      <div className="flex justify-end py-1 px-1">
        <div className="flex align-center gap-1">
          <p className={styles.cart__subtotal}>{`Subtotal (${pluralise(
            cart?.length,
            "item",
          )}):`}</p>
          <p className={styles.cart__price}>{formatCurrency(sumCart())} </p>
        </div>
      </div>
    </div>
  );
};
