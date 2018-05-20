import React from 'react';
import statuses from '../../../assets/json/statuses';
import uniqid from 'uniqid';

const TodoStatus = ({ changeTodoStatus, id }) => (
    <ul className='status-list'>
        {
            Object.keys(statuses).map(key => (
                <li key={uniqid()} className='status-list__item'>
                    <button className='status-list__button' onClick={() => changeTodoStatus(id, statuses[key])}>
                        {statuses[key]}
                    </button>
                </li>
            ))
        }
    </ul>
);

export default TodoStatus;