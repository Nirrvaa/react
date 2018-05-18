import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';

const TodoList = ({ todos }) => (
    <ul className='todo-list'>
        {todos.map(todo => (
            <li key={todo.id} className='todo-list__item'>
                <Todo {...todo} />
            </li>
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            deadline: PropTypes.bool.isRequired,
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            date: PropTypes.number.isRequired,
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