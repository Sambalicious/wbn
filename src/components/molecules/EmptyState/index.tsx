import styles from "./EmptyState.module.scss";

export const EmptyState = ({ text }: { text: string }) => {
  return (
    <div className={styles.empty}>
      <p>{text} </p>
    </div>
  );
};
