import React from 'react';
import style from './Home.module.scss';
import ma from '../../assets/images/oven.jpeg';

const Home = () => {
    return (
        <div className={style.main}>
            <div className={style.main__top}>
                <h1>Welcome 👋</h1>
                <h4 className={style.main__top__subtext}>
                    I'm Sean. I'm a Software Developer, Mechanical Engineer,
                    Fitness Enthusiast and Bookworm. I have setup this site so
                    people can learn a bit more about me.
                </h4>
            </div>
            <div className={style.main__middle}>
                <img
                    src={ma}
                    alt=""
                />
            </div>
            <div className={style.main__bottom}>
                <h4 className={style.sub}>
                    I'm an engineer who likes to combine multiple skillsets ⚙️
                </h4>
            </div>
        </div>
    );
};

export default Home;
