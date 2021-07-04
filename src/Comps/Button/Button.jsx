function Button({ name, callback }) {
  return (
    <button type="button" onClick={callback}>
      {name}
    </button>
  );
}
export default Button;
