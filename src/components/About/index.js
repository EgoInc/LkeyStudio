import './about.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';
import { FormattedMessage, useIntl } from 'react-intl';

const About = () => {
    const intl = useIntl();

    let aboutArray;
    if (sessionStorage.getItem('lang')=='ru-RU'){
        aboutArray = ['О', ' ', 'н', 'а', 'с'];
    } else {
        aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'u', 's'];
    }

    let schemeArray;
    if (sessionStorage.getItem('lang')=='ru-RU'){
        schemeArray = ['П', 'р', 'и', 'н', 'ц', 'и', 'п', ' ', 'р', 'а', 'б', 'о', 'т', 'ы'];
    } else {
        schemeArray = ['W', 'a', 'y', ' ', 'o', 'f', ' ', 'w', 'o', 'r', 'k',' i', 'n', 'g'];
    }

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={aboutArray}
                            idx={15}
                        />
                    </h1>
                    <p><FormattedMessage id='about1'/></p>
                    <br/>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={schemeArray}
                            idx={15}
                        />
                    </h1>
                    <p className="stages"><FormattedMessage id='aboutProcess'/></p>
                    <p><FormattedMessage id='stage1'/></p>
                    <p><FormattedMessage id='stage2'/></p>
                    <p><FormattedMessage id='stage3'/></p>
                    <p><FormattedMessage id='stage4'/></p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='DD0031' />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='line-scale-pulse-out' />
        </>
    )
};

export default About;