import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ changePage, showListPage }) => {
    return (
        <header className='header'>
            <h1 className='header__caption'>N</h1>
            <button className='header__button' onClick={changePage}>
                {showListPage ? 'add todo' : 'back to list'}
            </button>
        </header>
    );
};

Header.propTypes = {
    changePage: PropTypes.func.isRequired,
    showListPage: PropTypes.bool.isRequired
};

export default Header;