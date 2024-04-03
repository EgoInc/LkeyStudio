import './card.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { FormattedMessage, useIntl } from 'react-intl'
import Slider from '../slider'

const Card = (props) => {
    const project = props.project

    const imageStyle = {
        backgroundImage: `url(${project.images[0]})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat'
    };
    return (
        <>
            <div className="card cardAdd" style={imageStyle}>
                <a href="#modal" role="button" className="button button__link">
                    <div className="content-wrapper">
                        <div className='card-textContainer'>
                        <p>{project.nameRU}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="modal-wrapper" id="modal">
                <div className="modal-body card">
                    <div className="modal-header">
                        <div className="heading">{project.nameRU}</div>
                        <a href="#!" role="button" className="close" aria-label="close this modal">
                            <svg viewBox="0 0 24 24">
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                            </svg>
                        </a>
                    </div>
                    <div className='modal-content-container'>
<Slider/>
                    </div>
                </div>
                <a href="#!" className="outside-trigger"></a>
            </div>
        </>
    )
}

export default Card