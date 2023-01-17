import { Button, Checkbox, PopOver } from "@/components/atoms";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { formatCurrency } from "@/utils/helpers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppState } from "store/context";
import { CartButton } from "../CartButton/CartButton";
import styles from "./CartItem.module.scss";

interface TCartItem {
  seller: string;
  isFreeShipping?: boolean;
  price: number;
  productName: string;

  isAvailable?: boolean;
  addQuantity: (value: number) => void;
  decreaseQuantity: (value: number) => void;
  deleteItem: () => void;
  saveForLater: () => void;
  image: string;
  type?: "checkout" | "cart";
  id: number;
}

export const CartItem = ({
  seller,
  productName,
  price,
  id,

  isAvailable,
  isFreeShipping,

  addQuantity,
  decreaseQuantity,
  deleteItem,
  saveForLater,
  image,
  type,
}: TCartItem) => {
  const isDesktop = useMediaQuery("(min-width:1060px)");
  const [quantity, setQuantity] = useState(1);
  const { state, dispatch } = useAppState();
  const cart = state?.cart;
  const cartQuantity = cart.find(c => c.id === id)?.quantity ?? 1;

  useEffect(() => {
    if (cartQuantity) {
      setQuantity(cartQuantity);
    }
  }, [cartQuantity, setQuantity]);

  const handleQuantitySelect = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (newQuantity === 0) {
      return dispatch({
        type: "DELETE_FROM_CART",
        payload: { id },
      });
    }
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity, price },
    });
  };

  return (
    <>
      <section data-type={type} className={styles.cart__grid}>
        <div className="image-wrapper">
          <Image
            src={image}
            alt={productName}
            width={180}
            height={280}
            priority
            className="image"
          />
        </div>
        <div>
          <div className={styles.cart__item}>
            <div className={styles.cart__item__flex}>
              <p className={styles.cart__item__name}>{productName}</p>

              <p className={styles.cart__item__price}>
                {formatCurrency(price)}
              </p>
            </div>
            <p className={styles.cart__item__seller}>{seller} </p>
            {isAvailable && (
              <p className={styles.cart__item__availability}>In Stock</p>
            )}
            {isFreeShipping && (
              <p className={styles.cart__item__shipping}>
                Eligible for FREE shiping
              </p>
            )}
            <div className="responsive-flex">
              <Checkbox label="This will be a gift" />
              <Button variant="ghost">Learn More</Button>
            </div>
            {isDesktop && (
              <div className={styles.cart__item__buttons}>
                <PopOver
                  options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  selectedQuantity={quantity}
                  setSelectedQuantity={el => handleQuantitySelect(el)}
                />

                {type === "cart" && (
                  <div className={styles.cart__item__buttons__border}>
                    <Button onClick={deleteItem} variant="ghost">
                      Delete
                    </Button>
                  </div>
                )}
                {type === "cart" && (
                  <div className={styles.cart__item__buttons__border}>
                    <Button onClick={saveForLater} variant="ghost">
                      Buy Later
                    </Button>
                  </div>
                )}
                {/* <div className={styles.cart__item__buttons__border}>
                  <Button variant="ghost">See more like this</Button>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </section>
      {!isDesktop && (
        <div className="flex gap-1 my-1 align-center px-1 ">
          <CartButton
            decreaseQuantity={decreaseQuantity}
            quantity={quantity}
            addQuantity={addQuantity}
          />
          {type === "cart" && (
            <Button
              className={styles.cart__item__mobile__button}
              variant="secondary"
              onClick={deleteItem}
            >
              Delete
            </Button>
          )}

          {type === "cart" && (
            <Button
              className={styles.cart__item__mobile__button}
              variant="secondary"
              onClick={saveForLater}
            >
              Buy Later
            </Button>
          )}
        </div>
      )}
    </>
  );
};
