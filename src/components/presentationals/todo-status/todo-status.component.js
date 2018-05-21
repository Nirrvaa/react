import React from 'react';
import PropTypes from 'prop-types';

import uniqid from 'uniqid';

import statuses from '../../../assets/json/statuses';

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

TodoStatus.propTypes = {
    changeTodoStatus: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default TodoStatus;