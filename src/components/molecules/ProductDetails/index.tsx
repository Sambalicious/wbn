import { Button, PopOver } from "@/components/atoms";
import { CartButton } from "@/components/molecules";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { formatCurrency } from "@/utils/helpers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppState } from "store/context";
import styles from "./ProductDetails.module.scss";

interface ProductDetailsProps {
  description: string;
  productName: string;
  price: number;
  seller: string;
  deleteItem: () => void;
  saveForLater: () => void;
  decreaseQuantity: () => void;
  addQuantity: () => void;
  image: string;

  setSelectedQuantity: (quantity: number) => void;
  productId: number;
}
export const ProductDetails = ({
  deleteItem,
  decreaseQuantity,
  addQuantity,
  saveForLater,
  image,
  productName,
  productId,
  description,
  seller,
  price,
}: ProductDetailsProps) => {
  const { state, dispatch } = useAppState();
  const cart = state?.cart;

  const isDesktop = useMediaQuery("(min-width:1060px)");

  const cartQuantity = cart.find(c => c.productId === productId)?.quantity ?? 1;

  const [quantity, setQuantity] = useState(cartQuantity ?? 1);
  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, quantity: newQuantity },
    });
  };

  useEffect(() => {
    if (cartQuantity) {
      setQuantity(cartQuantity);
    }
  }, [cartQuantity]);

  return (
    <div className={styles.details}>
      <div className={styles.details__grid}>
        <div className={styles.details__grid__card}>
          <div className="w-full">
            <Image
              src={image}
              alt={productName}
              width={250}
              height={200}
              priority
            />
          </div>
          <div className={styles.details__grid__card__text}>
            {`We hope that you enjoy this ${productName}`}{" "}
          </div>
          <div className={styles.details__grid__card__price}>
            <h3>{formatCurrency(price)} </h3>
            <p className="pt-1">{productName} </p>
          </div>
        </div>
        <div className={styles.details__grid__item}>
          <h4 className={styles.details__grid__item__name}>{productName}</h4>
          <p
            className={styles.details__grid__item__seller}
          >{`By: ${seller}`}</p>
          <div className={styles.details__grid__item__details}>
            <p className={styles.details__grid__item__details__description}>
              {description}
            </p>
            <div className="my-2">
              {isDesktop ? (
                <div className="flex gap-1 align-center">
                  <PopOver
                    options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    selectedQuantity={quantity}
                    setSelectedQuantity={handleChangeQuantity}
                  />

                  <div className={styles.cart__item__buttons__border}>
                    <Button onClick={deleteItem} variant="ghost">
                      Delete
                    </Button>
                  </div>

                  <div className={styles.cart__item__buttons__border}>
                    <Button onClick={saveForLater} variant="ghost">
                      Buy later
                    </Button>
                  </div>

                  {/* <div className={styles.cart__item__buttons__border}>
                  <Button variant="ghost">See more like this</Button>
                </div> */}
                </div>
              ) : (
                <div className="flex gap-1 my-1 align-center ">
                  <CartButton
                    decreaseQuantity={decreaseQuantity}
                    quantity={quantity}
                    addQuantity={addQuantity}
                  />
                  <Button
                    className="px-1"
                    variant="secondary"
                    onClick={deleteItem}
                  >
                    Delete
                  </Button>
                  <Button
                    className={"px-1"}
                    variant="secondary"
                    onClick={saveForLater}
                  >
                    Buy Later{" "}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
