import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TODO_LIST } from '../../../assets/json/routes';

const Category = ({ active, count, children, filter }) => {

    return (
        <div className={`category ${active ? 'category_active' : ''}`}>
            <Link className='category__item link' to={`/${TODO_LIST}/${filter}`}>
                {children}
            </Link>
            <span className='category__item count'>
                {count}
            </span>
        </div>
    );
};

Category.propTypes = {
    active: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Category;