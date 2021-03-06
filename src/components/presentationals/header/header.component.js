import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TODO_LIST, SHOW_ALL, ADD_TODO, DISABLE_DEADLINE } from '../../../assets/json/routes';

const Header = ({ match: { params } }) => {
    const isTodoListOpened = () => params.base === TODO_LIST;
    const baseURL = isTodoListOpened() ? ADD_TODO : TODO_LIST;
    const filterURL = isTodoListOpened() ? DISABLE_DEADLINE : SHOW_ALL;
    return (
        <header className='header'>
            <h1 className='header__logo'>
                <span className="header__caption">N</span>
            </h1>

            <button className='header__button'>
                <Link to={`/${baseURL}/${filterURL}`}>
                    {isTodoListOpened() ? 'add todo' : 'back to list'}
                </Link>
            </button>
        </header>
    );
};

export default Header;