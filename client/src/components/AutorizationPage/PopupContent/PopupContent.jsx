import { useSelector } from "react-redux";
import styles from "./PopupContent.module.css"

const PopupContent = ({msg}) => {
  const error = useSelector((state) => state.error);

  console.log(error)

  return (
    <div className={styles.popup}>
      <h4>{error?.title||msg?.title}</h4>
      <p>{error?.text||msg?.text}</p>
      <p>Thank you for choosing us - we work for you!</p>
      <p>
        Best regards,<span>Jobseeker!</span>
      </p>
    </div>
  );
};

export default PopupContent;
