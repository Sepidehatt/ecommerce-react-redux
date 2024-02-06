import React from 'react';
import './styles.scss';
import logo from './../../assets/logo-2.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <NavLink to={'/'}>
                        <img src={logo} alt="Fancy logo" />
                    </NavLink>
                </div>
                <div className="call-to-actions">
                    <ul>
                        <li>
                            <NavLink to={'/registration'}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'}>Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
