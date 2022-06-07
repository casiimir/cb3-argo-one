import { useModalContext } from "../../context/ModalContext/modalContext";
import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./styles.module.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState({ cartItem: [], total: [] });
  const { modalStore } = useModalContext();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

    const filteredItem = storedCartItems.reduce(
      (a, { title, price, imgUrl }) => {
        const obj = a.get(title) || {
          title,
          price,
          imgUrl,
          totalPrice: [],
          packs: [],
        };
        obj.packs.push({ title, price });
        const priceNumValue = obj.packs.map((pack) =>
          parseInt(pack.price.split(" ")[1])
        );

        const total = priceNumValue.reduce((prev, post) => prev + post);

        obj.totalPrice.push(total);

        return a.set(title, obj);
      },
      new Map()
    );

    const groupedItem = [...filteredItem.values()];

    const totals = groupedItem.map((item) =>
      item.totalPrice.slice(-1).reduce((prev, post) => prev + post)
    );

    console.log(groupedItem);
    //if (totals.length >= 1) {
    const total = totals.reduce((prev, post) => prev + post);
    //}
    setCartItems({ cartItem: groupedItem, total: total });
    console.log(cartItems);
  }, []);
  console.log(cartItems);

  return (
    <>
      <div className={styles.Empty}></div>
      <section className={styles.Container}>
        <div className={styles.Container__Cart}>
          <div className={styles.Wrapper_Head}>
            <h2 className={styles.Wrapper_Head__Title}>Cart</h2>
            <hr className={styles.Wrapper_Head__Breaker} />
          </div>
          {cartItems &&
            cartItems.cartItem.map((item) => (
              <div className={styles.Container__Cart__Item}>
                <div className={styles.Bagde}>
                  <div className={styles.ImgContainer}>
                    <Image
                      src={
                        item.imgUrl.split("?")[0] +
                        "?q=100&fm=jpg&fit=crop&w=2048&h=1152"
                      }
                      quality={100}
                      width="2048"
                      layout="fill"
                      objectFit
                      sizes="20w"
                      className={styles.ImgContainer__image}
                    />
                  </div>
                  <div>
                    <p className={styles.Bagde__title}>
                      {item.title.split(" ").slice(0, 5).join(" ") + "..."}
                    </p>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div className={styles.Container_count}>
                  <div className={styles.Wrapper_Counter}>
                    <button>-</button>
                    <input
                      type="text"
                      readOnly
                      value={1}
                      className={styles.Wrapper_Counter__Input}
                    />
                    <button>+</button>
                  </div>
                  <p className={styles.Container_count__p}>
                    $ {item.totalPrice.slice(-1)}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.Wrapper_Total}>
          <p>Total</p>
          <p>$ {cartItems.total}</p>
          <button>Proceed</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
