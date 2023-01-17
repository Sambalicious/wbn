import { Button } from "@/components/atoms";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineArrowBack } from "react-icons/md";
import { useAppState } from "store/context";
import styles from "./Header.module.scss";
interface HeaderProps {
  title?: string;
  subTitle?: string;
  cartItems?: number;
}
export const Header = ({ title = "WBN store", subTitle }: HeaderProps) => {
  const {
    state: { cart },
  } = useAppState();
  // const cart = state?.cart;
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="flex  gap-1">
        {!["/"].includes(router.pathname) && (
          <Button onClick={() => router.back()} variant="ghost">
            <MdOutlineArrowBack size={30} />
          </Button>
        )}
        <div>
          <h1 className={styles.header__title}>{title} </h1>
          <p className={styles.header__subtitle}>{subTitle}</p>
        </div>
      </div>
      <div>
        {!["/cart"].includes(router.pathname) && (
          <Link href={"/cart"}>
            <Button variant="ghost">
              <div className={styles.header__cart}>
                <FiShoppingCart size={46} />

                {cart?.length > 0 && (
                  <p className={styles.header__cart__number}>{cart?.length}</p>
                )}
              </div>
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};
