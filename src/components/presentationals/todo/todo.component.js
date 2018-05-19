import React from 'react';
import PropTypes from 'prop-types';

import TodoTimer from '../todo-timer';
import TodoStatusResolver from '../../containers/todo-status-resolver';

const Todo = ({ removeTodo, status, title, active, timer, id }) => (
    <article className={`todo todo_${status}`}>
        <header className='todo__header'>
            <h4 className='todo__title'>
                {title}
            </h4>
            {
                active ? (
                    <div className='toto__timer'>
                        {/*<TodoTimer timer={timer} /> */}
                    </div>
                ) : null
            }
        </header>
        <section className="todo__status">
            <TodoStatusResolver id={id} />
        </section>
        <footer className="todo__footer">
            <button className='todo__remove' onClick={removeTodo}>
                remove
            </button>
        </footer>
    </article>
);

Todo.propTypes = {
    title: PropTypes.string.isRequired
};

export default Todo;