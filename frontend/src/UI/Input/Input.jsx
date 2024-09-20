import styles from "./Input.module.css";

const Input = (props) => {
  const { src, alt, type, onChange, placeholder, value, inputClass, wrapperClass } = props;
  return (
    <div className={wrapperClass}>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={inputClass}
        autoComplete="on"
      />
      <img src={src} alt={alt} />
    </div>
  );
};

export default Input;
