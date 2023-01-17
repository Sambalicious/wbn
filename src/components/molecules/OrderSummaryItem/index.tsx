import { formatCurrency } from "@/utils/helpers";
import styles from "./OrderSummaryItem.module.scss";

interface OrderSummaryProps {
  cart: number;
  shippingFee: number;
  couponDiscount: number;
}
export const OrderSummaryItem = ({
  cart,
  shippingFee,
  couponDiscount,
}: OrderSummaryProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__summary}>
        <h4 className={styles.item__summary__header}>Order Summary</h4>
        <table className="mt-2">
          <tbody>
            <tr className={styles.item__details}>
              <td>{`items(${cart}) :`} </td>
              <td>{formatCurrency(91.75)} </td>
            </tr>
            <tr className={styles.item__details}>
              <td>Shipping Cost </td>
              <td>{shippingFee} </td>
            </tr>
            <tr className={styles.item__details}>
              <td>Coupon Discount </td>
              <td>{couponDiscount} </td>
            </tr>
            <tr className={styles.item__total}>
              <td>Total Order</td>
              <td>{formatCurrency(91.75)} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
