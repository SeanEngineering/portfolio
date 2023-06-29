import React from 'react';
import style from './BorderContainer.module.scss';

const BorderContainer = ({ children }) => {
    return <div className={style.container}>{children}</div>;
};

export default BorderContainer;
