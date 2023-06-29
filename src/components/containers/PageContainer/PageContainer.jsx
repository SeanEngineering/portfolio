import React from 'react';
import style from './PageContainer.module.scss';

const PageContainer = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default PageContainer;