import styles from "./styles.module.scss";
import { useModalContext } from "../../context/ModalContext/modalContext";
import { useEffect } from "react";

const Cart = () => {
  const { modalStore } = useModalContext();
  //const { cartData } = useState();

  function getRepetitives(array) {
    const itemsDuplicates = {};

    array.forEach((item) => {
      itemsDuplicates[item] = itemsDuplicates.hasOwnProperty(item)
        ? itemsDuplicates[item] + 1
        : 1;
    });

    const repetitives = Object.entries(itemsDuplicates)
      .filter(([k, v]) => v > 1)
      .map(([k]) => k);

    return repetitives;
  }

  const titlearr = modalStore.cart.map((e) => e.title);
  const price = modalStore.cart.filter(
    (e) => e[titlearr] == e.hasOwnProperty(titlearr)
  );
  const itemTitle = getRepetitives(titlearr);
  console.log(getRepetitives(titlearr));

  return (
    <section>
      {modalStore &&
        itemTitle.map((item) => (
          <div>
            <p>{item}</p>
          </div>
        ))}
    </section>
  );
};

export default Cart;
