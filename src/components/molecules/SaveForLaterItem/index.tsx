import { Button } from "@/components/atoms";
import Image from "next/image";
import styles from "./SaveForLaterItem.module.scss";

interface SaveForLaterProp {
  addToCart: () => void;
  image: string;
  price: number;
  productName: string;
  sellerName: string;
}
export const SaveForLaterItem = ({
  addToCart,
  image,
  productName,
  sellerName,
}: SaveForLaterProp) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <Image
          src={image}
          alt={productName}
          width={180}
          height={180}
          priority
        />
      </div>
      <div>
        <p className={styles.item__title}>{productName}</p>
        <p className={styles.item__seller}>{sellerName} </p>
        <Button
          onClick={addToCart}
          className={styles.item__button}
          variant="primary"
        >
          {" "}
          Add to cart
        </Button>
      </div>
    </div>
  );
};
