import React, { useEffect, useState } from 'react';
import WorkCard from './workCard/WorkCard';
import style from './Work.module.scss';
import revenue from '../../assets/images/revenue.png';
import ucm from '../../assets/images/ucm.png';
import miscBE from '../../assets/images/miscBE.png';
import crKit from '../../assets/images/crKit.jpg';
import te from '../../assets/images/Tungsten-Electric.jpg';
import eclipse from '../../assets/images/eclipse.jpeg';
import ob30 from '../../assets/images/ob30Pro.jpeg';
import or30pro from '../../assets/images/or30pro.webp';
import trimKit from '../../assets/images/trimkit.png';
import cookTop from '../../assets/images/cookTop.avif';
import wireform from '../../assets/images/wireform.jpeg';
import dial from '../../assets/images/dial.jpeg';
import manual from '../../assets/images/manual.png';
import eshop from '../../assets/images/eshop.png';
import duckos from '../../assets/images/duckOS.png';
import employeeCreator from '../../assets/images/employeeCreator.png';
import minishop from '../../assets/images/minishop.png';
import { getWorkCards } from '../../service/portfolio';

const Work = () => {
    const [workCardsListItems, setWorkCards] = useState([]);
    const imageArray = {
        revenue: revenue,
        ucm: ucm,
        miscBE: miscBE,
        crKit: crKit,
        te: te,
        eclipse: eclipse,
        ob30: ob30,
        or30pro: or30pro,
        trimkit: trimKit,
        cookTop: cookTop,
        wireform: wireform,
        dial: dial,
        manual: manual,
        eshop: eshop,
        duckos: duckos,
        employeeCreator: employeeCreator,
        minishop: minishop,
    };

    useEffect(() => {
        (async () => {
            try {
                const workCardList = await getWorkCards();
                setWorkCards(workCardList);
                console.log(workCardList);
            } catch (error) {
                throw new Error(error);
            }
        })();
    }, []);

    return (
        <div className={style.main}>
            <div className={style.main__intro}>
                <h1>My Work</h1>
                <h3>Some of the projects I have worked on 💡</h3>
            </div>
            <div className={style.main__section}>
                {workCardsListItems.map((item) => {
                    return (
                        <WorkCard
                            key={item.id}
                            company={item.company}
                            image={imageArray[item.image]}
                            link={item.link}
                            title={item.title}
                            tools={item.tools}
                            year={item.year}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Work;
