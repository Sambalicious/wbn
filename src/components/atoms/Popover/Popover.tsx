import { Popover } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import styles from "./Popover.module.scss";

interface TPopover {
  options: number[];
  selectedQuantity: number;
  setSelectedQuantity(value: number): void;
}
export const PopOver = ({
  options,
  selectedQuantity,
  setSelectedQuantity,
}: TPopover) => {
  const handleClick = (close: () => void, el: number) => {
    setSelectedQuantity(el);
    close();
  };
  return (
    <Popover className={styles.popover}>
      <Popover.Button className={styles.popover__button}>
        <div className="flex gap-1 align-center">
          <p>Qty: {selectedQuantity} </p>
          <FiChevronDown size={25} />
        </div>
      </Popover.Button>

      <Popover.Panel className={styles.popover__options}>
        {({ close }) => (
          <div>
            {options?.map(el => (
              <p
                className={styles.popover__options__option}
                onClick={() => handleClick(close, el)}
                key={el}
              >
                {el}{" "}
              </p>
            ))}
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
};
