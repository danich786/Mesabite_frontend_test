import styles from "./cross-sign.module.css";

const CrossSign = ({ onClose }) => {
  return (
    <div
      onClick={() => {
        onClose();
      }}
    >
      <img className={styles.vectorIcon} alt="" src="/menu/vector1@2x.png" />
    </div>
  );
};

export default CrossSign;
