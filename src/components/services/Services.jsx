import React from 'react';
import ServiceCard from './serviceCard/ServiceCard';
import style from './Services.module.scss';

const Services = () => {
    const skills = [
        [
            '🚀',
            'Software Development',
            'Fullstack application development. Open to collaboration.',
        ],
        [
            '🎧',
            'Product Development',
            'Delivering products from concept to mass production.',
        ],
        [
            '🗓️',
            'Project Management',
            'Converting complex scenarios into achievable goals.',
        ],
    ];

    return (
        <div className={style.column}>
            <h2>Looking for some help?</h2>
            <div className={style.main}>
                {skills.map((item) => {
                    return (
                        <ServiceCard
                            emoji={item[0]}
                            title={item[1]}
                            description={item[2]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
