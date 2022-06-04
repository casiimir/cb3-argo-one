import { useModalContext } from "../../context/ModalContext/modalContext";
import { useDataContext } from "../../context/DataContext/dataContext";

import Image from "next/image";

import styles from "./styles.module.scss";

const Modal = () => {
  const { modalStore, setOpenModal } = useModalContext();
  const {} = useDataContext();

  const activitiesData = modalStore.modalData;

  const handleClickOnBckground = () => {
    setOpenModal("", false);
  };

  return (
    <>
      {modalStore.openModal && (
        <div
          className={styles.Modal_Background}
          onClick={() => handleClickOnBckground()}
        >
          <div className={styles.Modal_Container}>
            <div className={styles.Actv_Image}>
              <Image
                src={activitiesData.cover_image_url}
                alt="welcome to sicily"
                width={1920}
                height={1080}
                layout="responsive"
                placeholder="empty"
              />
            </div>
            <h2>{activitiesData.title}</h2>
            <p>{activitiesData.city.country.name}</p>
            <p>{activitiesData.about}</p>
            <p>{activitiesData.highlights}</p>
            <p>{activitiesData.included}</p>
            {activitiesData.languages.map((lang) => (
              <p>{lang.name}</p>
            ))}
            <p>{activitiesData.retail_price.formatted_value}</p>
            <div>
              <button>Add to cart</button>
              <button>Go back</button>
            </div>
            {activitiesData.verticals.slice(0, 2).map((vert) => {
              vert.name;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
