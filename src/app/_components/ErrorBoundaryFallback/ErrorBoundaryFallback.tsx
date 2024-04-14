import styles from "./styles.module.css";

const ErrorBoundaryFallback = () => {
  return (
    <div className={styles.error}>
      Something went wrong in this area. Please reload.
    </div>
  );
};

export default ErrorBoundaryFallback;
