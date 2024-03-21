import Loader from "react-loaders";
import "./contact.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FormattedMessage } from "react-intl";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    const [from_name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    let startArray;
    if (sessionStorage.getItem('lang')=='ru-RU'){
        startArray = ['П', 'р', 'и', 'с', 'т', 'у', 'п', 'и', 'м', '?'];
    } else {
        startArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.send("service_rnwnb4b","template_jrh51x5", "b7l8bjyJzKz-5Qlu5", {
            from_name: from_name,
            phone: phone,
            message: message,
            });
    }


    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={startArray}
                            idx={15}
                        />
                    </h1>
                    <p><FormattedMessage id='contactNow'/></p>
                    
                    <a href="https://api.whatsapp.com/send/?phone=79940199114" target="_blank">What's App</a>
                    <br/>
                    <a href="https://t.me/+79940199114" target="_blank">Telegram</a>
                
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="from_name" placeholder="ФИО" required onChange={(e) => {setName(e.target.value);}} />
                                </li>
                                <li className="half">
                                    <input type="text" name="phone" placeholder="Номер телефона" required onChange={(e) => {setPhone(e.target.value);}} />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Описание сайта или ссылка на документ" required onChange={(e) => {setMessage(e.target.value);}} ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default Contact;