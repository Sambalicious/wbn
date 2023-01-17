import { Button } from "@/components/atoms";
import { pluralise } from "@/utils/helpers";
import styles from "./OrderSummary2.module.scss";

interface OrderSummaryProps {
  cart: number;
  buttonClick: () => void;
}
export const OrderSummary2 = ({ cart, buttonClick }: OrderSummaryProps) => {
  return (
    <div className={styles.item}>
      <div>
        <Button onClick={buttonClick} className="px-1">
          {"Place your order and go "}
        </Button>
        <p className={styles.item__details}>{"You are good to go :)"}</p>
      </div>
      <div>
        <div className="flex">
          <h3 className={styles.item__total}>
            Order total: <span>{pluralise(cart, "item")} </span>
          </h3>
        </div>
        <div>
          <p className={styles.item__order}>
            By placing this order. You have agreed to our
          </p>{" "}
          <Button variant="ghost" className={styles.item__terms}>
            Terms and conditions
          </Button>
        </div>
        <p className={styles.item__order}>
          You have also confirm the items in your cart
        </p>
      </div>
    </div>
  );
};
