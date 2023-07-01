import React from 'react';
import style from './ServiceCard.module.scss';

const ServiceCard = ({ emoji, title, description }) => {
    return (
        <div className={style.main}>
            <h1>{emoji}</h1>
            <h2>{title}</h2>
            <hr className={style.line} />
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;
