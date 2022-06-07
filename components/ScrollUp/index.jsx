import React, { useEffect, useState, } from 'react';
// import { useWindowScroll } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styles from './styles.module.scss';

const ScrollUp = () => {
    const [visible, setVisibility] = useState(false)

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setVisibility(true): setVisibility(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
        window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const scrollUp = () => window.scrollTo({ top:0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div className={styles.ScrollUpWrapper} onClick={scrollUp}>
            <FaArrowCircleUp className={styles.SrollUpIcon} />
        </div>
    )
}

export default ScrollUp
