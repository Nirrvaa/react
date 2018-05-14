import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ active, count, children, onClick }) => {
	if (active) {
		return (
			<div>
				<button className='button button_active'>
					{ children }
				</button>
				<span>
					{ count }
				</span>
			</div>
		);
	}

	return (
		<button className='button' onClick={ onClick }>
			{ children }
		</button>
	);
};

Category.propTypes = {
	active: PropTypes.bool.isRequired,
	count: PropTypes.numb.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Category;