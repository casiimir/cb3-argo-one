
import style from "./styles.module.scss"
export default function Contact() {
    return (
            
        <div className={style.wrapper}>
            <div className={style.wrapper__title}>
                <h1> Send us a message </h1>
            </div>

            <form className={style.wrapper__form}>
                <label  htmlFor="Name"></label>
                <input className={style.wrapper__input} type="text" id="name" placeholder="Your name..."></input>
                <label htmlFor="Email"  ></label>
                <input className={style.wrapper__input}  type="text" id="email" placeholder="Your email..." ></input> <br />
                <br />
                <label htmlFor="Message"></label>
                <textarea   type="text" id="message" placeholder="Your message..."></textarea> <br />
                <div className={style.wrapper__button}>
                <button  >Send</button>
                </div>
            </form>

        </div>
    )
}