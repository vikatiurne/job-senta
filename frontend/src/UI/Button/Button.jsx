function Button(props) {
  const { children } = props;
  return <button {...props} children={children}></button>;
}

export default Button;
