import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TODO_LIST, SHOW_ALL, ADD_TODO, DISABLE_DEADLINE } from '../../../assets/json/routes';

const Header = ({ match: { params } }) => {
    const isTodoListOpened = () => params.base === TODO_LIST;
    const baseURL = isTodoListOpened() ? ADD_TODO : TODO_LIST;
    const filterURL = isTodoListOpened() ? DISABLE_DEADLINE : SHOW_ALL;
    return (
        <header className='header'>
            <h1 className='header__caption'>N</h1>
            <Link to={`/${baseURL}/${filterURL}`}>
                <button className='header__button'>
                    {isTodoListOpened() ? 'add todo' : 'back to list'}
                </button>
            </Link>
        </header>
    );
};

export default Header;