import { useModalContext } from "../../context/ModalContext/modalContext";

import Image from "next/image";

import styles from "./styles.module.scss";

const Modal = () => {
  const { modalStore, setOpenModal, addToCart } = useModalContext();

  const activitiesData = modalStore.modalData;
  console.log(modalStore.cart);

  const handleClickOnBckground = () => {
    setOpenModal("", false);
  };

  const handleAddToCart = () => {
    addToCart({
      title: activitiesData.title,
      price: activitiesData.retail_price.formatted_value,
    });
  };

  return (
    <>
      {modalStore.openModal && (
        <div className={styles.Modal_Container}>
          <div className={styles.Modal_Wrapper}>
            <div className={styles.Actv_Image_Container}>
              <Image
                src={activitiesData.cover_image_url}
                alt="welcome to sicily"
                width={1200}
                height={720}
                layout="responsive"
                placeholder="empty"
                className={styles.Actv_Image}
              />
              <p className={styles.Prices_p}>
                {activitiesData.retail_price.formatted_value}
              </p>
            </div>
            <div className={styles.Info_Container}>
              <h2 className={styles.Title}>{activitiesData.title}</h2>
              <p className={styles.Place}>{activitiesData.city.name}</p>
            </div>
            <p className={styles.About}>{activitiesData.about}</p>
            <div className={styles.highlights}>
              <ul className={styles.highlights_ul}>
                {activitiesData.highlights.map((highlight) => (
                  <li className={styles.highlights_li} key={activitiesData.id}>
                    {highlight}
                  </li>
                ))}
              </ul>
              <ul className={styles.included_ul}>
                {activitiesData.included.map((feat) => (
                  <li className={styles.included_li} key={activitiesData.id}>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className={styles.lang_Container}>
                <p className={styles.lang_title}>Available Languages</p>
                <ul className={styles.lang_ul}>
                  {activitiesData.languages.map((lang) => (
                    <li className={styles.lang_li} key={lang.code}>
                      {lang.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.Button_Container}>
              <button
                className={styles.Button}
                onClick={() => {
                  handleAddToCart();
                }}
              >
                Add to cart
              </button>
              <button
                className={styles.Button}
                onClick={() => handleClickOnBckground()}
              >
                Go back
              </button>
            </div>
            {activitiesData.verticals.slice(0, 2).map((vert) => {
              <ul>
                <li key={vert.code}>{vert.name}</li>
              </ul>;
            })}
          </div>
          <div
            className={styles.Modal_Background}
            onClick={() => handleClickOnBckground()}
          ></div>
        </div>
      )}
    </>
  );
};

export default Modal;
