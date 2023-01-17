import { Button } from "@/components/atoms";
import styles from "./CheckoutItem.module.scss";
interface CheckoutItemProps {
  id: number;
  info: string;
  details: string;
  description: string;
  buttonClick?: () => void;
}
export const CheckoutItem = ({
  id,
  info,
  details,
  description,
  buttonClick,
}: CheckoutItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__flex}>
        <div className={styles.item__flex}>
          <p className={styles.item__number}>{id} </p>
          <p className={styles.item__number}> {info}</p>
        </div>
        <div>
          <div className={styles.item__name}>{details} </div>
          <p className={styles.item__address}>{description}</p>
        </div>
      </div>
      <div>
        {buttonClick && (
          <Button onClick={buttonClick} variant="ghost">
            Change
          </Button>
        )}
      </div>
    </div>
  );
};
