import React from 'react';
import PropTypes from 'prop-types';

import TodoTimer from '../todo-timer';
import TodoStatusResolver from '../../containers/todo-status-resolver';
import { ACTIVE } from '../../../assets/json/statuses';

const Todo = ({ removeTodo, status, title, timer, id, deadline }) => (
    <article className={`todo todo_${status.toLowerCase()}`}>
        <header className='todo__header'>
            <h4 className='todo__title'>
                {title}
            </h4>
            <div className="todo__status">
                <TodoStatusResolver id={id} />
            </div>
        </header>
        <footer className="todo__footer">
            {
                status === ACTIVE ? (
                    <div className='todo__timer'>
                        <TodoTimer timer={timer} deadline={deadline} />
                    </div>
                ) : null
            }
            <button className='todo__remove' onClick={removeTodo}>
                ✖
            </button>
        </footer>
    </article>
);

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired,
    timer: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    deadline: PropTypes.bool.isRequired
};

export default Todo;