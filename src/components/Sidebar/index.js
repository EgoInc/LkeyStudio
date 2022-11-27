import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoL from '../../assets/images/logo.svg';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTelegram,
    faGithub,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={LogoL} alt="logo" />
                    {/* <img className='sub-logo' src={LogoSubtitle} alt="logosub" /> */}
                </Link>

                <nav>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        to="/"
                    // onClick={() => setShowNav(false)}
                    >
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    <NavLink
                        activeclassname="active"
                        className="about-link"
                        to="/about"
                    // onClick={() => setShowNav(false)}
                    >
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>
                    <NavLink
                        activeclassname="active"
                        className="portfolio-link"
                        to="/portfolio"
                    // onClick={() => setShowNav(false)}
                    >
                        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                    </NavLink>
                    <NavLink
                        activeclassname="active"
                        className="contact-link"
                        to="/contact"
                    // onClick={() => setShowNav(false)}
                    >
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>
                    {/* <FontAwesomeIcon
                    // onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' /> */}
                </nav>
                <ul>
                    <li>
                        <a
                            href="https://t.me/lisongcovey"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faTelegram}
                                color="#4d4d4e"
                                className="anchor-icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/LianaAlmazova"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                color="#4d4d4e"
                                className="anchor-icon"
                            />
                        </a>
                    </li>
                
                    <li>
                        <a href="skype:live:liana.1707.la" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon
                                icon={faSkype}
                                color="#4d4d4e"
                                className="anchor-icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar