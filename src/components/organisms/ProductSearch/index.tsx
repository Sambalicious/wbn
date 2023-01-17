import { InputHTMLAttributes } from "react";
import styles from "./ProductSearch.module.scss";

interface ProductSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const ProductSearch = ({ ...props }: ProductSearchProps) => {
  return (
    <div className={styles.search}>
      <input {...props} />
    </div>
  );
};
