import './home.scss';
import { useEffect, useState } from 'react';

import LogoTitle from "../../assets/images/logo.svg";
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import { FormattedMessage, useIntl } from 'react-intl'

const Home = () => {
    const intl = useIntl()
    console.log()
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['L', 'K','e', 'y']
    let jobArray;
    if (sessionStorage.getItem("lang")==="ru-RU"){
        jobArray = ['в', 'е', 'б', '-', 'р', 'а', 'з', 'р', 'а', 'б', 'о', 'т', 'к', 'а', ' ',];
    } else {
        jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'm', 'e', 'n', 't', ' ',];
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <span className={`${letterClass} _12`}> </span>
                        <span className={`${letterClass} _14`}>    Studio</span>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2> <FormattedMessage id="slogan"/> </h2>
                    <Link to="/contact" className="flat-button"><FormattedMessage id="contactMe"/> </Link>
                </div>
                <Logo />
            </div>
            <Loader type="line-scale-pulse-out"/>
        </>
    )
}

export default Home