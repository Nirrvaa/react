import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TODO_LIST } from '../../../assets/json/routes'

const Category = ({ active, count, children, filter, onClick }) => {

	const className = `button ${active ? 'button_active' : ''}`;

	return (
		<div>
			<Link to={`/${TODO_LIST}/${filter}`}>
			<button className={className}>
				{children}
			</button>
			</Link>
		<span>
			{count}
		</span>
			
		</div >
	);
};

Category.propTypes = {
	active: PropTypes.bool.isRequired,
	count: PropTypes.number.isRequired,
	filter: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default Category;