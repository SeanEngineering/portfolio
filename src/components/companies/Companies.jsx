import React from 'react';
import style from './Companies.module.scss';
import fp from '../../assets/logos/Fisherpaykel-logo.png';
import nsw from '../../assets/logos/revnsw.png';
import bromic from '../../assets/logos/bromic-logo.png';
import nology from '../../assets/logos/nologyLogo.png';

const Companies = () => {
    const imageArray = [nsw, fp, bromic, nology];
    return (
        <div className={style.column}>
            <h2>Companies I have worked at</h2>
            <div className={style.main}>
                {imageArray.map((item) => {
                    return (
                        <img
                            src={item}
                            alt=""
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Companies;
