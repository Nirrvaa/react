import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';
import uniqid from 'uniqid';

const TodoList = ({ todos, removeTodo }) => {
    return todos.length ? (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={uniqid()} className='todo-list__item'>
                    <Todo {...todo} removeTodo={() => removeTodo(todo.id)} />
                </li>
            ))}
        </ul>
    ) : (
        <div className="todo-list_empty">
            add some todos
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            deadline: PropTypes.bool.isRequired,
            status: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    removeTodo: PropTypes.func.isRequired
};

export default TodoList;