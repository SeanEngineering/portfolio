import React, { useState } from 'react';
import style from './Nav.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import NavLinks from '../navLinks/NavLinks';

export default function Nav({ yPos, categ, setCateg }) {
    const [y, setY] = useState(window.scrollY);
    const [navPos, setNavPos] = useState(false);
    const navLinks = ['Home', 'About', 'Work', 'Contact', 'Books'];

    useEffect(() => {
        const handleScroll = (event) => {
            const pos = window.scrollY;
            setY(pos);
        };

        window.addEventListener('scroll', handleScroll);
    }, [y]);

    useEffect(() => {
        if (y > 100) {
            setNavPos(true);
        } else {
            setNavPos(false);
        }
    }, [y]);

    return (
        <>
            <Bubble
                className={[style.menu, !navPos && style.menu__vis].join(' ')}
                onClick={() => setNavPos(false)}
            >
                ...
            </Bubble>

            <div className={[style.nav, navPos && style.nav__float].join(' ')}>
                <div className={style.nav__row}>
                    <ul>
                        <NavLinks links={navLinks} />
                    </ul>
                </div>
            </div>
        </>
    );
}

const textfade = keyframes`
  0% {
    transform: translateY(2px);
    transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)
  };

  50% {
    transform: translateY(0px);
    transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)
  };
  
  100% {
    transform: translateY(2px);
    transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)
  };
`;

const Bubble = styled.div`
    animation-name: ${textfade};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
`;
