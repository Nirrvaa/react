import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';

const TodoList = ({ todos }) => (
	<ul className='todo-list'>
		{todos.map(todo => (
			<li className='todo-list__item'>
				<Todo key={todo.id} {...todo} />
			</li>
		))}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			timer: PropTypes.number,
			status: PropTypes.shape({
				active: PropTypes.bool.isRequired,
				completed: PropTypes.bool.isRequired,
				failed: PropTypes.bool.isRequired,
				pending: PropTypes.bool.isRequired
			}).isRequired
		}).isRequired
	).isRequired
};

export default TodoList;