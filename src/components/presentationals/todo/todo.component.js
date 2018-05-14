import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, status, text }) => (
	<article className={`todo todo_${status}`} onClick={onClick} >
		<p className='todo__content'>
			{text}
		</p>
		<ul>
			<li></li>
		</ul>	
	</article>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;