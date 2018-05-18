import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TODO_LIST, SHOW_ALL, ADD_TODO } from '../../../assets/json/routes';

const Header = ({ match: { params } }) => {
    const isTodoListOpened = () => params.base === TODO_LIST;
    return (
        <header className='header'>
            <h1 className='header__caption'>N</h1>
            <Link to={`/${isTodoListOpened() ? ADD_TODO : TODO_LIST}`}>
                <button className='header__button'>
                    {isTodoListOpened() ? 'add todo' : 'back to list'}
                </button>
            </Link>
        </header>
    );
};

export default Header;