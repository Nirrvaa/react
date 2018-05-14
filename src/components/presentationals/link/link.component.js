import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
	if (active) {
		return (
			<button className='button button_active'>
				{children}
			</button>
		);
	}

	return (
		<button className='button' onClick={onClick}>
			{children}
		</button>
	);
};

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Link;