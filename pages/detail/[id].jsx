import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from "next/image";
import { useModalContext } from "../../context/ModalContext/modalContext";
import styles from './index.module.scss'
import Link from 'next/link';

const Detail = () => {

    const { modalStore, addToCart } = useModalContext();
    const activitiesData = modalStore.modalData;

    const handleAddToCart = () => {
        addToCart({
            title: activitiesData.title,
            price: activitiesData.retail_price.formatted_value,
        });
    };

    return (

        <div className={styles.global}>
            <div className={styles.eleniaèscarsaepurecretina}>
                <div className={styles.Modal_Wrapper}>
                    <div className={styles.Actv_Image_Container}>
                        <Image
                            src={activitiesData.cover_image_url.split("?")[0] + "?q=100&fm=jpg&fit=crop&w=1920&h=1080"}
                            alt="welcome to sicily"
                            width={1200}
                            height={720}
                            quality={100}
                            sizes="2048w"
                            layout="responsive"
                            placeholder="empty"
                            className={styles.Actv_Image}
                        />
                    </div>
                    <div className={styles.Info_Container}>
                        <h2 className={styles.Title}>{activitiesData.title}</h2>
                        <p className={styles.Place}><FaMapMarkerAlt />{activitiesData.city.name}</p>
                        <div className={styles.Button_Container}>
                            <button
                                className={styles.Button}
                                onClick={() => {
                                    handleAddToCart();
                                }}
                            >
                                Add to cart
                            </button>
                            <Link href={`/experiences`}>
                                <button
                                    className={styles.Button}
                                >
                                    Go back
                                </button>
                            </Link>
                            <button className={styles.Prices_p} disabled>
                                {activitiesData.retail_price.formatted_value}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.divAbout}>
                        <p className={styles.About}>{activitiesData.about}</p>
                    </div>
                    <div className={styles.highlights}>
                        <ul className={styles.highlights_ul}>
                            {activitiesData.highlights.map((highlight, index) => (
                                <li className={styles.highlights_li} key={index}>{highlight}</li>
                            ))}
                        </ul>
                        <div className={styles.optionsDiv}>
                            <ul className={styles.included_ul}><span className={styles.span_title}>Included with this package:</span>
                                {activitiesData.included.map((feat, index) => (
                                    <li className={styles.included_li} key={index}>{feat}</li>
                                ))}
                            </ul>
                            <div className={styles.lang_Container}>
                                <ul className={styles.lang_ul}><span className={styles.lang_title}>Available Languages:</span>
                                    {activitiesData.languages.map((lang) => (
                                        <li className={styles.lang_li} key={lang.code}>
                                            {lang.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {activitiesData.verticals.slice(0, 2).map((vert) => {
                    <ul>
                        <li key={vert.code}>{vert.name}</li>
                    </ul>;
                })}

            </div>
        </div>

    )
}

export default Detail;