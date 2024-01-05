import * as React from 'react';
import './PortfolioContainer.css'
import LandingPage from './LandingPage';
import Resume from './Resume';

const PortfolioContainer = () => {
    return (
        <div className='portfolio_container'>
            <LandingPage />
            <Resume />
        </div>
    )
}

export default PortfolioContainer;