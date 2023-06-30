import React from 'react';
import style from './Contact.module.scss';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import phone from '../../assets/images/hdPhone.jpg';

const Contact = () => {
    return (
        <div className={style.main}>
            <div className={style.main__top}>
                <h1>Get in Touch 📬</h1>
                <h4 className={style.main__top__subtext}>
                    Connect with me via my socials.
                    <span className={style.sub}>
                        <a
                            href="https://www.linkedin.com/in/sean-gan-engineering/"
                            target="_blank"
                        >
                            <img
                                src={linkedin}
                                alt=""
                            />
                        </a>
                        <a
                            href="https://github.com/SeanEngineering"
                            target="_blank"
                        >
                            <img
                                src={github}
                                alt=""
                            />
                        </a>
                    </span>
                </h4>
            </div>
            <div className={style.main__middle}>
                <div className={style.main__middle__frame}>
                    <img
                        src={phone}
                        alt=""
                    />
                </div>
            </div>
            <div className={style.main__bottom}>
                <h2>📍Sydney, NSW</h2>
            </div>
        </div>
    );
};

export default Contact;
