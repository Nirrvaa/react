import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ active, count, children, onClick }) => {
	return (
		<div>
			<button className={` button ${ active ? 'button_active' : '' }`}>
				{ children }
			</button>
			<span>
				{ count }
			</span>
		</div>
	);
};

Category.propTypes = {
	active: PropTypes.bool.isRequired,
	count: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Category;