import React from 'react';

import './styles.css';

const TitleBar = ({ title, subtitle }) => {
    return (
        <div className='title-bar'>
            <div className='wrapper'>
                <h1 className='title-bar__title'>{title}</h1>
                <h2 className='title-bar__subtitle'>{subtitle}</h2>
            </div>
        </div>
    );
};

export default TitleBar;