import styles from "./CartButton.module.scss";

interface CartButtonProps {
  quantity: number;
  addQuantity: (quantity: number) => void;
  decreaseQuantity: (quantity: number) => void;
}
export const CartButton = ({
  quantity,
  addQuantity,
  decreaseQuantity,
}: CartButtonProps) => {
  return (
    <div className={styles.cart}>
      <button
        onClick={() => decreaseQuantity(quantity)}
        className={styles.cart__left}
      >
        -
      </button>
      <input type="text" maxLength={4} value={quantity} readOnly />
      <button
        onClick={() => addQuantity(quantity)}
        className={styles.cart__right}
      >
        +
      </button>
    </div>
  );
};
