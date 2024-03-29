import React from 'react';
import style from './About.module.scss';
import profile from '../../assets/images/Portrait-SG.jpg';
import about from '../../assets/images/messenger.png';

const About = () => {
    return (
        <div className={style.main}>
            <div className={style.main__intro}>
                <img
                    src={about}
                    alt=""
                />
                <h1>About</h1>
                <h3>
                    Hey, I'm Sean. A mechanical engineer and software developer.
                </h3>
                <hr className={style.line} />
            </div>

            <div className={style.main__body}>
                <h2>Who Am I</h2>
                <img
                    src={profile}
                    alt=""
                />
                <h2>Facts About Me</h2>
                <ol>
                    <li>
                        🎓 I studied my bachelor of mechanical engineering at
                        the University of Auckland, graduating in 2018 before
                        moving to Dunedin to work at Fisher & Paykel Appliances
                        for 2 years.
                    </li>
                    <li>
                        🇦🇺 I moved to Sydney, Australia in 2021. Shortly after
                        arriving I got a job at Bromic where I worked as the
                        lead engineer on my first patent project. Through this,
                        I gained a better understanding of computational fluid
                        dynamics (CFD).
                    </li>
                    <li>
                        💻 I moved to the software engineering field in 2022
                        with _nology. This jump was made to crave my thirst for
                        learning, and to increase the impact I can make. I also
                        started working for Revenue NSW.
                    </li>
                    <li>
                        💪 On this website you will be able to find information
                        on what I have worked on, how I am taking care of my
                        health and what I have read to make me who I am today.
                    </li>
                </ol>

                <h2>Other Stuff</h2>
                <ol>
                    <li>
                        📈 I have a growing interest in entrepenurial studies. I
                        have started small by making/selling my own workbenches,
                        created a (now silent) youtube channel with 3k+
                        subscribers, built up an investment portfolio and have
                        had many failures which I am proud of. If you would like
                        to collaborate on a project feel free to reach out to me
                        via linkedin.
                    </li>
                    <li>
                        📚 I am currently on the pursuit of my best self,
                        whether it be stoicism, wellbeing, fitness or even small
                        habits. If this is something you're interested in my
                        journey, I will occasionally be posting on this website.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default About;
