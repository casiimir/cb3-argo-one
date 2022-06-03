import { useEffect, useState } from "react";
import {BsArrowBarUp} from 'react-icons/bs';

export const ScrollUp = () => {
    const [isVIsible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else { 
            setIsVisible(false);
        }
    };

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll, toggleVisibility');

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
            

    }, []);

    return (
        <div className='fixed bottom-2 right-2'>
            <button type='button' onClick={scrollUp} className={classNames(
                isVisible ? 'opacity-100' : 'opacity-0',
                
            )}>

            <BsArrowBarUp className='h-6 w6' aria-hidden></BsArrowBarUp>
            </button>
        </div>
    )
};
