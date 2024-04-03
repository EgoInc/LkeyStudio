import './portfolio.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { FormattedMessage, useIntl } from 'react-intl'
import Card from './card';
import projectsArr from './basa.json'

const Portfolio = () => {
    console.log('projectsArr',projectsArr.projectsArr[0].images[0])
    return (
        <>
            <div className="container portfolio-page">
                <div className='portfolio-cards-container'>
                <Card project={projectsArr.projectsArr[0]}/>

                </div>
            </div>
            <Loader type="line-scale-pulse-out"/>
        </>
    )
}

export default Portfolio