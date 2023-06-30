import React from 'react';
import style from './WorkCard.module.scss';
import revenueLogo from '../../../assets/images/revenueLogo.png';



const WorkCard = ({company, image, link, title, tools, year}) => {
    return (
        <a href={link} target='_blank'>
            <div className={style.main}>
                <div className={style.main__image}>
                    <img src={image} alt="" />
                </div>
                <div className={style.main__header}>
                    <h2>{title}</h2>
                    <h4>{company} | {year}</h4>
                    <p>{tools}</p>
                </div>
            </div>
        </a>
  
    );
};

export default WorkCard;