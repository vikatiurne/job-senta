import styles from './AdvantageItem.module.css'

const AdvantageItem = ({image,title,text, className}) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt="AdvantageIcon"
        className={styles.img}
      />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default AdvantageItem;
