import { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.scss";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
}

export const Checkbox = (props: ICheckbox) => {
  const { label, checked, ...rest } = props;
  return (
    <div className={styles.checkbox}>
      <label htmlFor="checkbox">
        <input checked={checked} type="checkbox" id="checkbox" {...rest} />
        <span className={styles.checkbox__label}>{label} </span>
      </label>
    </div>
  );
};
