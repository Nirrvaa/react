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

// TodoList.propTypes = {
// 	todos: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.string.isRequired,
// 			title: PropTypes.string.isRequired,
// 			deadline: PropTypes.bool.isRequired,
// 			year: PropTypes.numb.isRequired,
// 			month: PropTypes.numb.isRequired,
// 			date: PropTypes.numb.isRequired,
// 			status: PropTypes.shape({
// 				active: PropTypes.bool.isRequired,
// 				completed: PropTypes.bool.isRequired,
// 				failed: PropTypes.bool.isRequired,
// 				pending: PropTypes.bool.isRequired
// 			}).isRequired
// 		}).isRequired
// 	).isRequired
// };

export default TodoList;