import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavLinks = ({ links }) => {
    const navigate = useNavigate();

    const changeNavigate = (e) => {
        e.preventDefault();
        if (e.target.innerText.toLowerCase() == 'home') {
            navigate(`/`);
        } else {
            navigate(`/${e.target.innerText.toLowerCase()}`);
        }
    };
    return links.map((link) => (
        <li
            key={link}
            className="cat"
            onClick={(e) => changeNavigate(e)}
        >
            {link}
        </li>
    ));
};

export default NavLinks;
