import React from 'react';
import statuses from '../../../assets/json/statuses';
import uniqid from 'uniqid';

const TodoStatus = ({ changeTodoStatus, id }) => (
    <ul>
        {
            Object.keys(statuses).map(key => (
                <li key={uniqid()}>
                    <button onClick={() => changeTodoStatus(id, statuses[key])}>
                        {statuses[key]}
                    </button>
                </li>
            ))
        }
    </ul>
);

export default TodoStatus;