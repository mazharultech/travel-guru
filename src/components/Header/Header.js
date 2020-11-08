import { Container } from '@material-ui/core';
import React from 'react';
import Banner from '../../images/banner.png';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${Banner})` }}>
        <Container>
        <nav>
            <li>
                <img style={{ height: '60px', color: 'white'}}src={Logo} alt="" />
            </li>
            
                <input className="search-input" type="search" name="" placeholder="Search your Destination..."/>
           
            <li>
                <a href="/news">News</a>
            </li>
            <li>
                <a href="/destination">Destination</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </nav>
        </Container>
        <div>

        </div>
    </div>
);
};

export default Header;