import style from "./styles.module.scss";

function CartModal({ setCheckout }) {
  const handleOnClick = () => {
    setCheckout(false);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__modal}>
        <p className={style.wrapper__x} onClick={handleOnClick}>
          X
        </p>
        <h4 className={style.wrapper__message}>
          Thank you for your preference
        </h4>
        <p className={style.wrapper__par}>
          We hope to see you soon in the future
        </p>
      </div>
    </div>
  );
}

export default CartModal;
