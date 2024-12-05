import styles from "./PopupContent.module.css"

const PopupContent = ({ msg }) => {
  return (
    <div className={styles.popup}>
      <h4>{msg?.title}</h4>
      <p>{msg?.text}</p>
      <p>Thank you for choosing us - we work for you!</p>
      <p>
        Best regards,<span>Jobseeker!</span>
      </p>
    </div>
  );
};

export default PopupContent;
