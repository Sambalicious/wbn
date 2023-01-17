import { Button, PopOver } from "@/components/atoms";
import { formatCurrency } from "@/utils/helpers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppState } from "store/context";
import styles from "./HomeItem.module.scss";
interface HomeProps {
  title: string;
  price: number;
  image: string;
  id: number;
  addToCart: () => void;
  quantity: number;
  setQuantity: (value: number) => void;
  handleView: () => void;
}
export const HomeItem = ({
  title,
  price,
  image,
  addToCart,
  id,
  handleView,
}: HomeProps) => {
  const { state, dispatch } = useAppState();

  const cart = state?.cart;
  const cartQuantity = cart.find(c => c.id === id)?.quantity ?? 1;
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity },
    });
  };

  useEffect(() => {
    if (cartQuantity) {
      setQuantity(cartQuantity);
    }
  }, [cartQuantity]);
  return (
    <div className={styles.item}>
      <div role="button" className="pointer" onClick={handleView}>
        <div className="flex justify-center w-full">
          <Image src={image} alt={title} width={250} height={200} priority />
        </div>
        <div>
          <p className={styles.item__title}>{title}</p>
          <p>{formatCurrency(price)} </p>
        </div>
      </div>
      <div className="flex align-center gap-1 my-1 ">
        <PopOver
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          selectedQuantity={quantity}
          setSelectedQuantity={el => handleChangeQuantity(el)}
        />
        <Button onClick={addToCart} className="px-1" variant="primary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
