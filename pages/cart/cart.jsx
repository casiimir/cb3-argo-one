import { useModalContext } from "../../context/ModalContext/modalContext";
import { useState, useEffect } from "react";

import styles from "./styles.module.scss";

const Cart = () => {
  const [items, setItems] = useState((item) => [
    { actualItem: item, storedItem: item },
  ]);
  const [total, setTotal] = useState((value) => [
    { tot: value, storedTotal: value },
  ]);
  const { modalStore } = useModalContext();

  useEffect(() => {
    const filteredItem = modalStore.cart.reduce((a, { title, price }) => {
      const obj = a.get(title) || { title, price, totalPrice: [], packs: [] };
      obj.packs.push({ title, price });
      const sumPrice = obj.packs.map((pack) => pack.price.split(" "));
      const sumValue = sumPrice.map((e) => parseInt(e[1]));
      const total = sumValue.reduce((prev, post) => prev + post);

      obj.totalPrice.push(total);

      return a.set(title, obj);
    }, new Map());

    const groupedItem = [...filteredItem.values()];

    //setItems({ actualItem: groupedItem });

    const totals = groupedItem.map((item) =>
      item.totalPrice.slice(-1).reduce((prev, post) => prev + post)
    );
    if (totals.length >= 1) {
      const total = totals.reduce((prev, post) => prev + post);

      setTotal((prev) => [{ tot: total, storedItem: prev.storedItem }]);
    }

    //console.log(itemStorage);

    setItems((prev) => [
      { actualItem: groupedItem, storedItem: prev.storedItem },
    ]);
    /*setTotal((prev) => [
      { tot: prev.tot, storedTotal: localStorage.getItem("total") },
    ]);*/
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items[0].actualItem));
    localStorage.setItem("total", JSON.stringify(total.tot));
    const itemStorage = localStorage.getItem("items");
    setItems((prev) => [
      { actualItem: prev.actualItem, storedItem: itemStorage },
    ]);
    setTotal((prev) => [
      { tot: prev.tot, storedTotal: localStorage.getItem("total") },
    ]);
  }, [items]);
  console.log(items, total);
  return (
    <>
      <div className={styles.Empty}></div>
      <section className={styles.Container_Cart}>
        <div className={styles.Container_Cart__Wrapper}>
          {items[0].actualItem
            ? items[0].actualItem.map((item) => (
                <div
                  className={styles.Container_Cart__Wrapper__Badge}
                  key={item.price}
                >
                  <div className={styles.Wrapper_Badge__Item}>
                    <p>{item.title.split(" ").slice(0, 4).join(" ") + "..."}</p>
                    <p>{item.price}</p>
                  </div>
                  <p>${item.totalPrice.slice(-1)}</p>
                </div>
              ))
            : items[0].storedItem &&
              items.storedItem.map((item) => (
                <div
                  className={styles.Container_Cart__Wrapper__Badge}
                  key={item.price}
                >
                  <div className={styles.Wrapper_Badge__Item}>
                    <p>{item.title.split(" ").slice(0, 4).join(" ") + "..."}</p>
                    <p>{item.price}</p>
                  </div>
                  <p>${item.totalPrice.slice(-1)}</p>
                </div>
              ))}
        </div>
        <div className={styles.Container_Cart__Wrapper_Total}>
          <p>Total</p>
          <p>${total.tot}</p>
        </div>
      </section>
    </>
  );
};

export default Cart;
