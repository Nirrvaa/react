import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, status, title }) => (
	<article className={`todo todo_${status}`} onClick={onClick} >
		<p className='todo__content'>
			{title}
		</p>
	</article>
);

Todo.propTypes = {
	title: PropTypes.string.isRequired
};

export default Todo;