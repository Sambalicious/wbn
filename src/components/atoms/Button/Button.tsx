import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import styles from "./Button.module.scss";
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "primary" | "secondary" | "ghost";
  children?: ReactNode;
  width?: string;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (props: PropsWithChildren<IButton>, ref) => {
    const { text, variant = "primary", children, className, ...rest } = props;
    return (
      <button
        data-variant={variant}
        className={clsx(styles.button, className)}
        ref={ref}
        {...rest}
      >
        {text || children}
      </button>
    );
  },
);

Button.displayName = "Button";
